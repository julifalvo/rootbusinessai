import type { Service } from "@/lib/data";
import { DrawerCta, DrawerFomo, DrawerQuote, DrawerSection, DrawerStats, DrawerSteps } from "./DrawerBits";

export default function ServiceDetailContent({
  service,
  onNavigate,
}: {
  service: Service;
  onNavigate: () => void;
}) {
  return (
    <div>
      <p className="text-sm leading-relaxed text-muted">{service.description}</p>

      <DrawerSection title="Resultados típicos">
        <DrawerStats stats={service.stats} />
      </DrawerSection>

      <DrawerSection title="Cómo lo implementamos">
        <DrawerSteps items={service.howItWorks} />
      </DrawerSection>

      <DrawerSection title="Lo que dicen quienes ya lo usan">
        <DrawerQuote quote={service.quote} />
      </DrawerSection>

      <DrawerSection title="Por qué no conviene esperar">
        <DrawerFomo>{service.fomo}</DrawerFomo>
      </DrawerSection>

      <DrawerCta onNavigate={onNavigate} />
    </div>
  );
}
