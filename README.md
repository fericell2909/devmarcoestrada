# devmarcoestrada.com

Portfolio profesional de **Marco Estrada López** — Desarrollador Full Stack Senior con +15 años de experiencia.

[![CI/CD](https://github.com/fericell2909/devmarcoestrada/actions/workflows/deploy.yml/badge.svg)](https://github.com/fericell2909/devmarcoestrada/actions/workflows/deploy.yml)

> **[devmarcoestrada.com](https://devmarcoestrada.com)**

---

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Framework | React 19 + TypeScript |
| Bundler | Vite 8 |
| Routing | React Router v7 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Estilos | Vanilla CSS con BEM |
| Hosting | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |

## Inicio rápido

```bash
# Clonar el repositorio
git clone https://github.com/fericell2909/devmarcoestrada.git
cd devmarcoestrada

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (puerto 3000)
npm run dev
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR en `localhost:3000` |
| `npm run build` | Type-check con `tsc` + build de producción con Vite |
| `npm run lint` | Ejecutar ESLint |
| `npm run preview` | Preview del build de producción |

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `VITE_API_URL` | URL base de la API (con trailing slash) |

**Archivos de entorno:**

| Archivo | Uso |
|---------|-----|
| `.env` | Desarrollo local |
| `.env.staging` | Build para staging (`vite build --mode staging`) |
| `.env.production` | Build para producción |

## Arquitectura

```
src/
├── components/       # Componentes de sección (Hero, About, Resume, Portfolio, Contact, etc.)
├── pages/            # Páginas de ruta (Home, NotFound)
├── hooks/            # Custom hooks (useInView)
├── data/             # Datos estáticos (skills, experiencia, proyectos, contacto)
├── types/            # Interfaces TypeScript
├── index.css         # Design system completo (CSS custom properties + BEM)
├── App.tsx           # Router principal
└── main.tsx          # Entry point
```

## CI/CD & Ambientes

### Producción
- **Rama:** `main`
- **Workflow:** `.github/workflows/deploy.yml`
- **URL:** [devmarcoestrada.com](https://devmarcoestrada.com)
- **API:** `https://api.devmarcoestrada.com/`

### Staging
- **Rama:** `staging`
- **Workflow:** `.github/workflows/deploy-staging.yml`
- **API:** `https://api-staging.devmarcoestrada.com/`
- **robots.txt:** `Disallow: /` (no indexable por buscadores)

### GitHub Secrets requeridos

| Secret | Ambiente |
|--------|----------|
| `AWS_ACCESS_KEY_ID` | Ambos |
| `AWS_SECRET_ACCESS_KEY` | Ambos |
| `S3_BUCKET` | Producción |
| `CLOUDFRONT_DISTRIBUTION_ID` | Producción |
| `S3_BUCKET_STAGING` | Staging |
| `CLOUDFRONT_DISTRIBUTION_ID_STAGING` | Staging |

## Licencia

Todos los derechos reservados © 2026 Marco Estrada López
