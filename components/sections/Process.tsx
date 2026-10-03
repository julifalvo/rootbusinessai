import { CalendarCheck, Rocket, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";

const STEPS = [
  {
    icon: CalendarCheck,
    when: "Día 1 · 15 min",
    title: "Diagnóstico sin costo",
    description:
      "Nos contás cómo trabaja tu equipo hoy. Te devolvemos qué proceso conviene automatizar primero y cuánto te ahorra por mes.",
  },
  {
    icon: Rocket,
    when: "Semanas 2 a 6",
    title: "Un piloto acotado, con precio cerrado",
    description:
      "Automatizamos un solo proceso, conectado a tus sistemas actuales. Tu operación no se frena y ves resultados reales, no una presentación.",
  },
  {
    icon: TrendingUp,
    when: "Desde el mes 2",
    title: "Escalás lo que funciona",
    description:
      "Con números en la mano decidís si sumar más procesos. Documentamos todo para que no dependas de nosotros.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="scroll-anchor relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Cómo trabajamos
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Empezás chico, ves el resultado y recién ahí escalás
            </h2>
            <p className="mt-4 text-base text-muted">
              Nada de proyectos de un año ni contratos a ciegas. Un proceso, un
              precio cerrado y una métrica que tiene que moverse.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute top-11 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-primary-glow/0 via-primary-glow/30 to-secondary-glow/0 md:block"
          />
          {STEPS.map(({ icon: Icon, when, title, description }, index) => (
            <RevealItem key={title} className="h-full">
              <div className="relative flex h-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 p-6 text-center backdrop-blur-xl">
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 text-primary-glow ring-1 ring-primary-glow/20">
                  <Icon size={20} strokeWidth={1.75} />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-background">
                    {index + 1}
                  </span>
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                  {when}
                </span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-background transition-shadow hover:shadow-[0_0_30px_-6px_rgba(0,240,255,0.6)]"
          >
            Quiero mi diagnóstico de 15 minutos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
