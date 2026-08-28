import { TrendingUp } from "lucide-react";
import type { Project } from "@/lib/data";
import TiltCard from "@/components/TiltCard";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="p-6 hover:border-secondary-glow/30" spotlightColor="112,0,255">
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
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary-glow/30 bg-primary-glow/10 px-3 py-1 text-xs font-semibold text-primary-glow">
            <TrendingUp size={12} strokeWidth={2} />
            {project.metricValue}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

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
