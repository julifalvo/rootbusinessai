# rootbusinessai

Landing page comercial de **rootbusinessai**, agencia de agentes de IA, chatbots avanzados, automatización de procesos (RPA + IA) y desarrollo web fullstack para PyMEs y grandes empresas.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) — escena 3D interactiva del Hero (robot que sigue el mouse/touch y reacciona al scroll)
- [Framer Motion](https://www.framer.com/motion/) — scroll parallax, reveals 3D y micro-interacciones
- [Lucide React](https://lucide.dev) — iconografía

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Linter |

## Estructura

```
app/                  Rutas (App Router), layout raíz y metadata SEO
components/           Componentes de UI y escenas 3D
components/sections/  Secciones de la landing (Hero, Services, Portfolio, Contact)
lib/                  Datos estáticos, Server Actions y utilidades
```

## Deploy

Pensado para desplegar en [Vercel](https://vercel.com) sin configuración adicional (soporta App Router y Server Actions de forma nativa).
