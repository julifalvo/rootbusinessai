"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import HeroCanvas from "@/components/HeroCanvas";

export default function Hero() {
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
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="absolute inset-0 -z-20 bg-glow-gradient" />
      <motion.div style={{ y: canvasY }} className="absolute inset-0 -z-10">
        <HeroCanvas scrollProgress={scrollYProgress} canvasOffsetY={canvasY} />
      </motion.div>

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
          Sistemas Agénticos &amp; Automatización de Próxima Generación
        </span>

        <h1 className="max-w-2xl bg-gradient-to-r from-white via-primary-glow to-secondary-glow bg-clip-text text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_4px_28px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl">
          Escalamos tu negocio con Inteligencia Artificial Autónoma
        </h1>

        <p className="max-w-xl text-balance text-base text-muted drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-lg">
          Diseñamos agentes de IA, chatbots corporativos y desarrollos web a
          medida que automatizan tu operación, desde PyMEs hasta grandes
          empresas.
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
      </motion.div>
    </section>
  );
}
