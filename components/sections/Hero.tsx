"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import HeroCanvas from "@/components/HeroCanvas";

const DESKTOP_QUERY = "(min-width: 768px)";

function subscribeDesktop(callback: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export default function Hero() {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => true
  );
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-glow-gradient" />
      {/* Desktop: el robot es el fondo del Hero, con una máscara fija (no se
          mueve con el parallax) para que el glow se desvanezca antes del borde.
          Mobile: detrás del texto quedaba tapado por los botones, así que va
          en su propio bloque debajo del CTA, sin parallax. */}
      <div className="relative order-first -mb-2 h-44 w-full md:absolute md:inset-0 md:-z-10 md:order-none md:mt-0 md:h-auto md:[mask-image:linear-gradient(to_bottom,black_88%,transparent)]">
        <motion.div style={isDesktop ? { y: canvasY } : undefined} className="absolute inset-0">
          <HeroCanvas
            scrollProgress={scrollYProgress}
            canvasOffsetY={isDesktop ? canvasY : undefined}
            scale={isDesktop ? 0.65 : 0.5}
          />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <div
          aria-hidden
          className="absolute -inset-x-12 -inset-y-12 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.6)_45%,transparent_75%)] blur-2xl"
        />

        <span className="inline-flex items-center gap-2 rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-glow">
          <Sparkles size={14} strokeWidth={1.75} />
          Empleados digitales que trabajan 24/7 sin errores humanos
        </span>

        <h1 className="max-w-2xl bg-gradient-to-r from-white via-primary-glow to-secondary-glow bg-clip-text text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_4px_28px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl">
          Recuperá las horas y las ventas que perdés por procesos manuales
        </h1>

        <p className="max-w-xl text-balance text-base text-muted drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-lg">
          Construimos los sistemas que hacen el trabajo repetitivo por vos:
          atienden clientes, cobran, agendan y despachan pedidos — mientras tu
          equipo se dedica a lo que factura de verdad.
        </p>

        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <MagneticButton
            href="#contacto"
            className="group relative overflow-hidden bg-white text-background"
          >
            <span className="relative z-10">Agendar Consultoría IA</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary-glow via-white to-secondary-glow opacity-0 blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-40"
            />
          </MagneticButton>

          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:border-primary-glow/40 hover:text-primary-glow"
          >
            Explorar Soluciones
          </a>
        </div>

        <p className="text-xs text-white/50 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          ☕ 15 minutos por Google Meet. Sin compromiso técnico. Te llevamos un
          diagnóstico de automatización listo.
        </p>
      </motion.div>
    </section>
  );
}
