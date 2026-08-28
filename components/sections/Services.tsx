import { SERVICES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";

export default function Services() {
  return (
    <section id="servicios" className="scroll-anchor relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            id="arquitectura-agentica"
            className="scroll-anchor mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Arquitectura Agéntica
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Soluciones de IA que se adaptan a tu operación
            </h2>
            <p className="mt-4 text-base text-muted">
              Diseñamos cada agente como parte de un sistema mayor: percibe tu
              operación, decide dentro de reglas de negocio definidas y actúa
              sobre las herramientas que ya usás.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description, impact, icon: Icon }) => (
            <RevealItem key={title} className="h-full">
              <ServiceCard
                title={title}
                description={description}
                impact={impact}
                icon={<Icon size={22} strokeWidth={1.75} />}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
