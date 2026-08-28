# Prompt: Inicialización de Arquitectura y Layout Base

Actúa como un Desarrollador Fullstack Senior y Diseñador UI/UX experto. Tu tarea es inicializar la estructura base del proyecto Next.js para `rootbusinessai`, dejando cimientos sobre los que se apoyarán los prompts 02 (Hero 3D), 03 (Servicios/Portfolio) y 04 (Contacto).

## 0. Precondiciones del entorno

- El directorio raíz **no está vacío**: contiene `CLAUDE.md` y `prompts/`. `create-next-app` aborta si detecta conflictos, así que anda a un subdirectorio temporal y luego movés el contenido a la raíz, o usás `--force`. **No borres ni sobrescribas `CLAUDE.md` ni `prompts/`.**
- Si `create-next-app` genera su propio `CLAUDE.md`/`AGENTS.md`, descartalos: el `CLAUDE.md` del proyecto manda.
- Si inicializa un repo git anidado, eliminá ese `.git` para no dejar un submódulo accidental.
- Verificá el nombre en `package.json`: debe ser `rootbusinessai`, no el del directorio temporal.

## 1. Scaffolding y dependencias

Inicializá con: App Router, TypeScript, Tailwind, ESLint, sin `src/`, alias de importación `@/*`.

Instalá además: `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `lucide-react` y `@types/three` (dev). Se instalan ahora aunque recién se usen en los prompts 02–04, para que el árbol de dependencias quede resuelto de una sola vez.

**Advertencias de versiones (verificalas, no las asumas):**
- **Tailwind v4** no usa `tailwind.config.js` por defecto: la configuración es CSS-first vía `@theme` en `globals.css`, y el plugin de PostCSS es `@tailwindcss/postcss`. Si querés mantener el archivo JS de config (ver tarea 2), tenés que enlazarlo explícitamente con `@config "../tailwind.config.js";` en `globals.css`.
- **`lucide-react` v1 eliminó los íconos de marca** (`Github`, `Linkedin`, `Twitter`, etc.). No los importes: para redes sociales usá SVG inline propios. Antes de importar cualquier ícono, confirmá que el export existe en la versión instalada.
- **Next.js 16** introduce cambios de API respecto a versiones anteriores. Consultá `node_modules/next/dist/docs/` ante cualquier duda en vez de asumir la firma de una API.

## 2. Sistema de diseño (Tailwind)

Definí la paleta de marca de forma que sea consumible como utilidades (`bg-background`, `text-primary-glow`, …):

| Token | Valor | Uso |
|---|---|---|
| `background` | `#050505` | Fondo global de la página |
| `surface` | `#121214` | Tarjetas, navbar, superficies elevadas |
| `primary-glow` | `#00F0FF` | Acento cian: CTAs, hovers, destellos |
| `secondary-glow` | `#7000FF` | Acento violeta: gradientes, luces 3D |

Complementá con tokens semánticos para texto (`foreground` claro y un `muted` para texto secundario) de modo que las secciones siguientes no tengan que inventar grises sueltos. En `globals.css`: fijá `background-color` y color de texto en `body` (no dependas de `prefers-color-scheme` — el dark mode es **nativo y único**, no un toggle), activá `scroll-behavior: smooth` para la navegación por anclas, y definí un `::selection` con el acento cian.

## 3. Componente `Navbar` (`components/Navbar.tsx`)

- Flotante y fijo (`fixed`, separado del borde superior), centrado, con ancho máximo contenido.
- **Glassmorphism:** `backdrop-blur` + fondo translúcido + borde sutil de baja opacidad.
- **Estado según scroll:** al desplazarse debe intensificar el fondo/borde y sumar un `box-shadow` con tinte cian. Usá listener `passive` y limpialo en el `cleanup` del efecto.
- **Enlaces por ancla:** Servicios (`#servicios`), Casos de Éxito (`#casos-de-exito`), Arquitectura Agéntica (`#arquitectura-agentica`), Contacto (`#contacto`). **Estos IDs son un contrato**: los prompts 03 y 04 deben usar exactamente estos anclajes en sus secciones.
- **CTA "Agendar Consultoría IA"** con animación de brillo al hover (barrido de gradiente cian→violeta), apuntando a `#contacto`.
- **Responsive obligatorio:** menú hamburguesa en mobile con panel desplegable animado con Framer Motion (`AnimatePresence`), que se cierre al elegir un enlace. El panel debe posicionarse respecto al contenedor de la nav, no salirse del flujo.
- **Accesibilidad:** `aria-label` y `aria-expanded` en el botón del menú, `aria-hidden` en elementos puramente decorativos.

## 4. Componente `Footer` (`components/Footer.tsx`)

- Minimalista, borde superior sutil, sobre fondo `background`.
- Columna de marca con descripción breve del negocio (IA agéntica, chatbots, automatización).
- Enlaces legales (Términos de Servicio, Política de Privacidad) y redes sociales como botones circulares con borde translúcido y hover cian.
- Año de copyright **calculado dinámicamente**, no hardcodeado: `© {año} rootbusinessai. Todos los derechos reservados.`
- Server Component (sin `"use client"`): no tiene interactividad.

## 5. Layout raíz (`app/layout.tsx`)

- `<html lang="es">` — el sitio es en español; no dejes el `lang="en"` del scaffold.
- Fuentes `Geist` y `Geist_Mono` vía `next/font/google`, expuestas como variables CSS y enlazadas a `--font-sans` / `--font-mono`.
- Composición: `<Navbar />` + `<main>` con los `children` + `<Footer />`, con `flex-col` y `flex-1` en el main para que el footer quede abajo aunque el contenido sea corto. Poné `id="top"` en el main para el enlace del logo.
- **Metadatos SEO B2B orientados a conversión:**
  - `metadataBase` con la URL canónica del sitio.
  - `title` con `default` + `template` (`"%s | rootbusinessai"`).
  - `description` centrada en la propuesta de valor y el público objetivo (PyMEs y grandes empresas).
  - `keywords`, `authors`, `robots` (index/follow).
  - `openGraph` completo (`type`, `locale: "es_ES"`, `url`, `siteName`, `title`, `description`) y `twitter` con `card: "summary_large_image"`.

## 6. Home placeholder (`app/page.tsx`)

Reemplazá el contenido del scaffold por un placeholder mínimo **coherente con el tema oscuro** (nada de `bg-zinc-50`, logos de Next/Vercel ni enlaces a la documentación). Debe verse intencional, no como un template a medio borrar. Las secciones reales llegan en los prompts 02–04.

## 7. Utilidades (`lib/utils.ts`)

Helper `cn(...)` para componer clases condicionales, usado por los componentes con estados visuales variables.

## Contrato de archivos resultante

Los prompts siguientes asumen exactamente esta estructura:

```
app/{layout.tsx, page.tsx, globals.css}
components/{Navbar.tsx, Footer.tsx}
lib/utils.ts
tailwind.config.js
```

## Criterios de aceptación

Antes de dar la tarea por terminada, verificá **ejecutando**, no por inspección visual:

1. `npm run lint` → sin errores ni warnings.
2. `npm run build` → compila, pasa TypeScript y prerenderiza sin errores.
3. `npm run dev` → `http://localhost:3000` responde `200` y el HTML sale con `lang="es"`. Cerrá el server al terminar.
4. La paleta custom resuelve de verdad (p. ej. `text-primary-glow` pinta cian, no queda como clase inexistente).

Si el build falla, corregí la causa raíz y volvé a correrlo; no reportes éxito con el build en rojo.
