# Contexto del Proyecto: rootbusinessai - Portfolio 3D Premium

## Descripción General
Plataforma web comercial y portfolio interactivo para `rootbusinessai`, agencia especializada en desarrollo de soluciones de IA agéntica, chatbots avanzados, automatización empresarial y desarrollo web fullstack para PyMEs y grandes empresas.

## Stack Tecnológico Obligatorio
- Next.js (App Router) + TypeScript + Tailwind CSS.
- Three.js / React Three Fiber (R3F) para elementos 3D interactivos y optimizados.
- Framer Motion para micro-interacciones y transiciones de página.
- Lucide React para iconografía minimalista.

## Directrices de Diseño UI/UX (Estilo 3D Premium)
- **Tema:** Dark Mode nativo de alta gama (estética futurista corporativa tipo "Cyber-Enterprise").
- **Efectos visuales:** Uso sutil de partículas flotantes en el fondo, geometría 3D interactiva que responde al movimiento del cursor, tarjetas con efectos de brillo dinámico (Glassmorphism + Bordes con gradiente sutil).
- **Rendimiento:** Carga diferida (Lazy loading) para lienzos 3D, asegurando 60 FPS estables y optimización estricta para dispositivos móviles (fallback a elementos 2D abstractos si el hardware lo requiere).

## Comandos Útiles
- `npm run dev`: Inicia el servidor de desarrollo local.
- `npm run build`: Genera la compilación de producción optimizada.
- `npm run lint`: Ejecuta el linter de código.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
