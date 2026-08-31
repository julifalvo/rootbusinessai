"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ParticleFieldCanvas from "@/components/ParticleFieldCanvas";

/**
 * Capa decorativa fija detrás de todo el sitio, con parallax real ligado
 * al scroll de la página. Cada blob es dos divs anidados a propósito: el
 * externo lleva el `transform` de scroll (Framer Motion) y el interno la
 * animación idle por CSS — si compartieran el mismo elemento, la animación
 * CSS de `transform` ganaría la cascada y pisaría el parallax en JS.
 *
 * `ParticleFieldCanvas` se apila encima de los blobs (mismo z detrás del
 * contenido): en hardware sin WebGL o con "reduce motion" simplemente no
 * renderiza nada y los blobs CSS quedan como única ambientación.
 */
export default function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <motion.div style={{ y: yDown }} className="absolute -top-32 left-1/4">
        <div className="h-96 w-96 animate-drift rounded-full bg-primary-glow/10 blur-[120px]" />
      </motion.div>
      <motion.div style={{ y: yUp }} className="absolute top-1/2 right-0">
        <div className="h-[28rem] w-[28rem] animate-drift-slow rounded-full bg-secondary-glow/10 blur-[130px]" />
      </motion.div>
      <motion.div style={{ y: yDown }} className="absolute bottom-0 left-0">
        <div className="h-72 w-72 animate-drift rounded-full bg-primary-glow/5 blur-[100px]" />
      </motion.div>
      <div className="absolute inset-0">
        <ParticleFieldCanvas />
      </div>
    </div>
  );
}
