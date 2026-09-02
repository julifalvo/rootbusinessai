"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import type { Project } from "@/lib/data";
import TiltCard from "@/components/TiltCard";
import AnimatedStat from "@/components/AnimatedStat";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const [view, setView] = useState<"antes" | "ahora">("antes");

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
              <AnimatedStat value={project.metricValue} />
            </span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="text-white/20 transition-colors duration-300 group-hover:text-secondary-glow"
            />
          </div>
        </div>

        <div
          className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.02] p-0.5 text-xs"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setView("antes");
            }}
            className={cn(
              "rounded-full px-3 py-1 font-medium transition-colors",
              view === "antes" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"
            )}
          >
            Antes
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setView("ahora");
            }}
            className={cn(
              "rounded-full px-3 py-1 font-medium transition-colors",
              view === "ahora"
                ? "bg-primary-glow/20 text-primary-glow"
                : "text-white/40 hover:text-white/70"
            )}
          >
            Ahora
          </button>
        </div>

        <div className="relative min-h-[60px]">
          <AnimatePresence mode="wait" initial={false}>
            {view === "antes" ? (
              <motion.p
                key="antes"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.25 }}
                className="text-sm leading-relaxed text-muted"
              >
                {project.painPoint}
              </motion.p>
            ) : (
              <motion.p
                key="ahora"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className="text-sm font-medium leading-relaxed text-white"
              >
                {project.resultMetric}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <p className="border-t border-white/5 pt-3 text-xs leading-relaxed text-subtle">
          <span className="font-semibold text-white/50">Cómo: </span>
          {project.solutionShort}
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
