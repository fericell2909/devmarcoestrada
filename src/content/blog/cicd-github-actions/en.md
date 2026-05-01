---
title: "CI/CD with GitHub Actions and AWS: Complete Pipeline from Scratch"
description: "Learn how to build a professional continuous integration and deployment pipeline using GitHub Actions, Docker, and AWS ECS. Includes test, build, and deploy stages."
date: "2026-04-10"
cover: "/blog/cicd-github-actions.png"
tags: ["CI/CD", "GitHub Actions", "AWS", "Docker"]
readTime: 10
---

## Why Do You Need a CI/CD Pipeline?

In my 15 years as a developer, one of the most impactful changes I've experienced is the shift from manual deployments to automated pipelines. The time wasted on "it works on my machine" or Friday night 11pm deploys is time we can reclaim with a proper CI/CD setup.

A well-configured pipeline gives you:
- **Confidence**: every merge passes tests before reaching production
- **Speed**: deploys in minutes, not hours
- **Traceability**: you know exactly which commit caused a bug in production

## Pipeline Architecture

We'll build a three-stage pipeline:

```
push → [test] → [build & push image] → [deploy to ECS]
```

### 1. Project Structure

```
.github/
  workflows/
    deploy.yml
Dockerfile
docker-compose.yml
```

### 2. The Dockerfile

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

The multi-stage build keeps the final image lean — runtime only, no dev dependencies.

### 3. The GitHub Actions Workflow

```yaml
name: Deploy to AWS ECS

on:
  push:
    branches: [main]

env:
  AWS_REGION: us-east-1
  ECR_REPOSITORY: my-app
  ECS_SERVICE: my-app-service
  ECS_CLUSTER: production

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test -- --coverage
      - run: npm run lint

  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ env.AWS_REGION }}

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build, tag, and push image
        id: build-image
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          IMAGE_TAG: ${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
          echo "image=$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG" >> $GITHUB_OUTPUT

      - name: Update ECS service
        run: |
          aws ecs update-service \
            --cluster ${{ env.ECS_CLUSTER }} \
            --service ${{ env.ECS_SERVICE }} \
            --force-new-deployment
```

## Configuring GitHub Secrets

In your repository go to **Settings → Secrets and variables → Actions** and add:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Never hardcode credentials in code. Ever.

## Optimization Tips

**Dependency caching:** The `cache: 'npm'` option in `setup-node` caches `node_modules` between runs. On large projects this saves 2-3 minutes per execution.

**Commit SHA as image tag:** Using `github.sha` as the tag lets you know exactly which version is running in production with a simple `docker ps`.

**Branch protection rules:** Configure GitHub to require the workflow to pass before allowing merges to `main`. This prevents broken code from reaching production.

## Conclusion

A pipeline like this pays for itself in the first week. The time spent setting it up is far less than the time saved on manual deployments, "it works on my machine" debugging, and post-mortem meetings.

Have questions about the implementation? Reach out — I'm happy to help you configure the pipeline for your specific project.
