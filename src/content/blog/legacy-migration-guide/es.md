---
title: "Cómo migrar un sistema legacy sin que el negocio lo note"
description: "Estrategia práctica para modernizar plataformas tecnológicas antiguas usando el patrón Strangler Fig, migraciones incrementales y zero-downtime deployment."
date: "2026-02-15"
cover: "/blog/legacy-migration-guide.png"
tags: ["Arquitectura", "Migración", "Backend", "DevOps"]
readTime: 12
---

## El problema real con los sistemas legacy

He participado en varias migraciones de sistemas heredados a lo largo de mi carrera, y el mayor error que veo repetirse es el "big bang rewrite": parar todo, reescribir desde cero, lanzar en una fecha fija. El resultado casi siempre es el mismo: retrasos, bugs inesperados, y un equipo exhausto.

La alternativa que funciona es la migración incremental. Más aburrida de vender al management, pero infinitamente más segura.

## El patrón Strangler Fig

El nombre viene de un árbol tropical (Ficus aurea) que crece alrededor del árbol huésped, gradualmente reemplazándolo. Es la metáfora perfecta para migraciones de sistemas:

```
[Proxy / API Gateway]
      ↓          ↓
[Sistema viejo]  [Sistema nuevo]
```

El proxy enruta cada request al sistema correspondiente. A medida que migras funcionalidades, más tráfico va al sistema nuevo. Cuando terminas, el sistema viejo queda en stand-by hasta que lo apagas.

## Fase 1: Auditoría y mapeo

Antes de tocar código, necesitas entender qué estás migrando:

**Mapea los módulos del sistema viejo:**
```
Sistema legacy
├── Módulo de autenticación (crítico, usado en todos lados)
├── Gestión de usuarios (crítico)
├── Reportes (importante, usado por 20% de usuarios)
├── Notificaciones por email (bajo riesgo)
└── Módulo de pagos (crítico, externo)
```

**Clasifica por:**
- Riesgo: ¿qué tan crítico es si falla?
- Complejidad: ¿cuánto tiempo lleva migrar?
- Dependencias: ¿qué otros módulos dependen de este?

La estrategia es empezar por módulos de **bajo riesgo y baja complejidad**. Te da victorias rápidas y tiempo para estabilizar la infraestructura antes de tocar lo crítico.

## Fase 2: Infraestructura base

Antes de migrar el primer módulo, monta la infraestructura:

### API Gateway como proxy

```nginx
# nginx.conf - Proxy basado en rutas
location /api/v2/ {
    proxy_pass http://sistema-nuevo:3000;
}

location /api/ {
    proxy_pass http://sistema-viejo:8080;
}
```

O con AWS API Gateway:

```yaml
# serverless.yml simplificado
functions:
  proxy:
    handler: handler.proxy
    events:
      - http:
          path: '{proxy+}'
          method: any
```

### Base de datos compartida (transitorio)

Durante la migración, ambos sistemas pueden necesitar acceder a los mismos datos. Opciones:

1. **Base de datos compartida**: más fácil de implementar, crea acoplamiento
2. **Sync bidireccional**: más complejo, pero te permite separar los datos
3. **Read replica**: el sistema nuevo lee del viejo, escribe en su propia DB

Recomiendo empezar con base de datos compartida y planificar la separación de datos como una fase independiente.

## Fase 3: Migración incremental

### Orden de migración recomendado

```
1. Notificaciones por email    ← bajo riesgo, cualquier bug no es crítico
2. Reportes                   ← mediano riesgo, se puede comparar output
3. Gestión de usuarios         ← crítico, pero bien entendido
4. Autenticación               ← crítico, migrar al final
5. Módulo de pagos             ← delegado a proveedor externo
```

### Feature flags para la transición

```typescript
// feature-flags.ts
export const flags = {
  useNewUserModule: process.env.NEW_USER_MODULE === 'true',
  useNewReports: process.env.NEW_REPORTS === 'true',
};

// En el proxy/router
if (flags.useNewUserModule && request.path.startsWith('/users')) {
  return forwardToNewSystem(request);
}
return forwardToLegacySystem(request);
```

Esto te permite hacer rollback instantáneo cambiando una variable de entorno, sin re-deployar.

### Canary releases

Antes de migrar todo el tráfico, haz un canary:

```
10% → sistema nuevo
90% → sistema viejo
```

Monitorea métricas de error, latencia y comportamiento de negocio durante 48-72 horas. Si todo bien, sube al 50%. Si algo falla, rollback inmediato.

## Fase 4: Zero-downtime cutover

Cuando el módulo está listo para el corte final:

1. **Congelar escrituras** en el módulo viejo (modo read-only temporal)
2. **Sincronizar datos** pendientes al sistema nuevo
3. **Redirigir tráfico** al 100% al sistema nuevo
4. **Monitorear** activamente por 24 horas
5. **Mantener** el sistema viejo en stand-by por 2 semanas antes de apagar

## Métricas de éxito

Define antes de empezar cómo mides el éxito:

- Error rate < 0.1% (igual o mejor que el sistema viejo)
- P95 latency < 500ms
- Zero data loss durante la migración
- Business metrics sin degradación (conversiones, retención)

## Conclusión

La migración de sistemas legacy es un maratón, no un sprint. La clave es resistir la tentación del big bang rewrite y comprometerte con la migración incremental. Es más lenta, pero permite que el negocio siga funcionando y que el equipo aprenda del sistema nuevo antes de depender completamente de él.

¿Tienes un sistema legacy que te está costando mantener? Con gusto hablo contigo sobre las opciones.
