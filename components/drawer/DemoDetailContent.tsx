import { Sparkles } from "lucide-react";
import type { Demo } from "@/lib/data";
import { DrawerCta, DrawerFomo, DrawerQuote, DrawerSection, DrawerStats } from "./DrawerBits";

export default function DemoDetailContent({
  demo,
  onNavigate,
}: {
  demo: Demo;
  onNavigate: () => void;
}) {
  const Visual = demo.visual;

  return (
    <div>
      <Visual />

      <DrawerSection title="Impacto medido">
        <DrawerStats stats={demo.stats} />
      </DrawerSection>

      <DrawerSection title="Qué hace por dentro">
        <ul className="space-y-2.5">
          {demo.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <Sparkles size={16} className="mt-0.5 shrink-0 text-primary-glow" strokeWidth={1.75} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </DrawerSection>

      <DrawerSection title="En palabras del cliente">
        <DrawerQuote quote={demo.quote} />
      </DrawerSection>

      <DrawerSection title="Lo que pasa si esperás">
        <DrawerFomo>{demo.fomo}</DrawerFomo>
      </DrawerSection>

      <DrawerCta onNavigate={onNavigate} />
    </div>
  );
}
