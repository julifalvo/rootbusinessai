"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import DetailDrawer from "@/components/DetailDrawer";
import ServiceDetailContent from "@/components/drawer/ServiceDetailContent";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openService = openIndex !== null ? SERVICES[openIndex] : null;

  return (
    <section id="servicios" className="scroll-anchor relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            id="arquitectura-agentica"
            className="scroll-anchor mx-auto max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Lo que resolvemos
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Cuatro formas de dejar de perder tiempo y plata en tareas manuales
            </h2>
            <p className="mt-4 text-base text-muted">
              Cada sistema que construimos reemplaza una tarea repetitiva
              concreta de tu operación — no una demo, un empleado digital que
              ya está haciendo el trabajo en producción.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description, stats, icon: Icon }, index) => (
            <RevealItem key={title} className="h-full">
              <ServiceCard
                title={title}
                description={description}
                primaryStat={stats[0]}
                icon={<Icon size={22} strokeWidth={1.75} />}
                onOpen={() => setOpenIndex(index)}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <DetailDrawer
        open={openService !== null}
        onClose={() => setOpenIndex(null)}
        eyebrow="Lo que resolvemos"
        title={openService?.title ?? ""}
      >
        {openService && (
          <ServiceDetailContent service={openService} onNavigate={() => setOpenIndex(null)} />
        )}
      </DetailDrawer>
    </section>
  );
}
