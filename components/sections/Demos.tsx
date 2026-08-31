"use client";

import { useState } from "react";
import { DEMOS } from "@/lib/data";
import DemoCard from "@/components/DemoCard";
import Reveal from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import DetailDrawer from "@/components/DetailDrawer";
import DemoDetailContent from "@/components/drawer/DemoDetailContent";

export default function Demos() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openDemo = openIndex !== null ? DEMOS[openIndex] : null;

  return (
    <section id="demos" className="scroll-anchor relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Demos
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Así se ven nuestras soluciones en acción
            </h2>
            <p className="mt-4 text-base text-muted">
              Demostraciones interactivas de agentes de IA, chatbots y
              plataformas web — pensadas para mostrarte el tipo de
              experiencia que podemos construir para tu negocio.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {DEMOS.map((demo, index) => {
            const Visual = demo.visual;
            return (
              <RevealItem key={demo.name} className="h-full">
                <DemoCard
                  category={demo.category}
                  name={demo.name}
                  description={demo.description}
                  onOpen={() => setOpenIndex(index)}
                >
                  <Visual />
                </DemoCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      <DetailDrawer
        open={openDemo !== null}
        onClose={() => setOpenIndex(null)}
        eyebrow={openDemo?.category ?? "Demos"}
        title={openDemo?.name ?? ""}
      >
        {openDemo && <DemoDetailContent demo={openDemo} onNavigate={() => setOpenIndex(null)} />}
      </DetailDrawer>
    </section>
  );
}
