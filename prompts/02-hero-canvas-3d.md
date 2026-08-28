# Prompt: Desarrollo de Hero Section con Escena 3D Interactiva

Diseña e implementa la sección `Hero` principal de la página de inicio para `rootbusinessai`. Debe transmitir sofisticación tecnológica e innovación en IA agéntica.

## Requerimientos Técnicos y de Diseño:
1. **Lienzo 3D (React Three Fiber):**
   - Crear un componente `HeroCanvas.tsx` que renderice un objeto geométrico abstracto y elegante en 3D (ej. un dodecaedro flotante o una malla toroidal con shader de wireframe y puntos nodales interconectados que simulen una red de agentes de IA).
   - El objeto debe rotar lentamente de forma orgánica y reaccionar suavemente a las coordenadas del cursor del usuario (`mouse move parallax`).
   - Implementar iluminación volumétrica con luces direccionales en tonos cian y violeta.
2. **Contenido UI superpuesto:**
   - **Badge superior:** "Sistemas Agénticos & Automatización de Próxima Generación".
   - **Título principal (H1):** Tipografía bold con degradado de texto: "Escalamos tu negocio con Inteligencia Artificial Autónoma".
   - **Subtítulo:** Enfoque claro en bots, chatbots corporativos y desarrollos a medida para PyMEs y empresas.
   - **Botones de acción (CTAs):** 
     - Botón principal: "Agendar Consultoría IA" (con efecto magnético al hover).
     - Botón secundario: "Explorar Soluciones" (estilo borde translúcido).
3. **Optimización:** Asegurar que el canvas 3D no bloquee el hilo principal y cuente con manejo de errores de WebGL con fallback estático.