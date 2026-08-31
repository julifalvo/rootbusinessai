import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/data";
import { DrawerCta, DrawerFomo, DrawerQuote, DrawerSection } from "./DrawerBits";

export default function ProjectDetailContent({
  project,
  onNavigate,
}: {
  project: Project;
  onNavigate: () => void;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>

      <DrawerSection title="El problema">
        <p className="text-sm leading-relaxed text-muted">{project.challenge}</p>
      </DrawerSection>

      <DrawerSection title="Lo que construimos">
        <p className="text-sm leading-relaxed text-muted">{project.solution}</p>
      </DrawerSection>

      <DrawerSection title="Resultados">
        <ul className="space-y-2.5">
          {project.results.map((result) => (
            <li key={result} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-secondary-glow" strokeWidth={1.75} />
              <span>{result}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-subtle">{project.timeline}</p>
      </DrawerSection>

      <DrawerSection title="En palabras del cliente">
        <DrawerQuote quote={project.quote} />
      </DrawerSection>

      <DrawerSection title="Lo que le cuesta a quien espera">
        <DrawerFomo>{project.fomo}</DrawerFomo>
      </DrawerSection>

      <DrawerCta onNavigate={onNavigate} />
    </div>
  );
}
