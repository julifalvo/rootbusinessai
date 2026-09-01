import { ArrowUpRight, TrendingUp } from "lucide-react";
import type { Project } from "@/lib/data";
import TiltCard from "@/components/TiltCard";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <TiltCard className="p-6 hover:border-secondary-glow/30" spotlightColor="112,0,255" onClick={onOpen}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-secondary-glow">
              {project.sector}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {project.title}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-primary-glow/30 bg-primary-glow/10 px-3 py-1 text-xs font-semibold text-primary-glow">
              <TrendingUp size={12} strokeWidth={2} />
              {project.metricValue}
            </span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="text-white/20 transition-colors duration-300 group-hover:text-secondary-glow"
            />
          </div>
        </div>

        <dl className="space-y-2.5 text-sm leading-relaxed">
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-white/40">Antes:</dt>
            <dd className="text-muted">{project.painPoint}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-white/40">Hicimos:</dt>
            <dd className="text-muted">{project.solutionShort}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-primary-glow">Resultado:</dt>
            <dd className="font-medium text-white">{project.resultMetric}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-white/5 pt-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-xs text-subtle">{project.metricLabel}</p>
      </div>
    </TiltCard>
  );
}
