---
title: "CI/CD con GitHub Actions y AWS: Pipeline completo desde cero"
description: "Aprende a construir un pipeline de integración y despliegue continuo profesional usando GitHub Actions, Docker y AWS ECS. Incluye stages de test, build y deploy."
date: "2026-04-10"
cover: "/blog/cicd-github-actions.png"
tags: ["CI/CD", "GitHub Actions", "AWS", "Docker"]
readTime: 10
---

## ¿Por qué necesitas un pipeline de CI/CD?

En mis 15 años como desarrollador, uno de los cambios más impactantes que he vivido es el paso de deploys manuales a pipelines automatizados. El tiempo que se pierde en "funciona en mi máquina" o en deploys a las 11pm del viernes es tiempo que podemos recuperar con un buen CI/CD.

Un pipeline bien configurado te da:
- **Confianza**: cada merge pasa por tests antes de llegar a producción
- **Velocidad**: deploys en minutos, no horas
- **Trazabilidad**: sabes exactamente qué commit causó un bug en producción

## Arquitectura del pipeline

Vamos a construir un pipeline con tres stages:

```
push → [test] → [build & push imagen] → [deploy en ECS]
```

### 1. Estructura del proyecto

```
.github/
  workflows/
    deploy.yml
Dockerfile
docker-compose.yml
```

### 2. El Dockerfile

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

El multi-stage build mantiene la imagen final liviana — solo el runtime, sin las dev dependencies.

### 3. El workflow de GitHub Actions

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

## Configurando los secrets en GitHub

En el repositorio ve a **Settings → Secrets and variables → Actions** y agrega:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Nunca hardcodees credenciales en el código. Jamás.

## Tips de optimización

**Cache de dependencias:** El `cache: 'npm'` en `setup-node` guarda `node_modules` entre runs. En proyectos grandes esto ahorra 2-3 minutos por ejecución.

**Imagen tag con el SHA del commit:** Usar `github.sha` como tag te permite saber exactamente qué versión está corriendo en producción con un simple `docker ps`.

**Branch protection rules:** Configura en GitHub que `main` requiera que el workflow pase antes de permitir merge. Esto previene que código roto llegue a producción.

## Conclusión

Un pipeline como este se amortiza en la primera semana. El tiempo invertido en configurarlo es mucho menor que el tiempo que ahorras en deploys manuales, debugging de "funciona en mi máquina" y reuniones de post-mortem.

¿Tienes preguntas sobre la implementación? Escríbeme, con gusto te ayudo a configurar el pipeline para tu proyecto específico.
