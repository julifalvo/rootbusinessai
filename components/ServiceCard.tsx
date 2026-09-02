import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Stat } from "@/lib/data";
import TiltCard from "@/components/TiltCard";
import AnimatedStat from "@/components/AnimatedStat";

const FLOW_STEPS = ["Percibe", "Decide", "Actúa"];

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  primaryStat: Stat;
  onOpen: () => void;
};

export default function ServiceCard({
  icon,
  title,
  description,
  primaryStat,
  onOpen,
}: ServiceCardProps) {
  return (
    <TiltCard className="p-6 hover:border-primary-glow/30" onClick={onOpen}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 text-primary-glow ring-1 ring-primary-glow/20 transition-shadow duration-300 group-hover:shadow-[0_0_20px_-2px_rgba(0,240,255,0.5)]">
            {icon}
          </span>
          <ArrowUpRight
            size={16}
            strokeWidth={1.75}
            className="mt-1 shrink-0 text-white/20 transition-colors duration-300 group-hover:text-primary-glow"
          />
        </div>

        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <div className="flex items-center gap-1.5" aria-hidden>
          {FLOW_STEPS.map((step, i) => (
            <div key={step} className="flex items-center gap-1.5">
              <span
                className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium text-white/50 transition-colors duration-500 group-hover:bg-primary-glow/10 group-hover:text-primary-glow"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {step}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <span
                  className="h-px w-4 bg-white/10 transition-colors duration-500 group-hover:bg-primary-glow/50"
                  style={{ transitionDelay: `${i * 120 + 60}ms` }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-baseline gap-2.5 border-t border-white/5 pt-4">
          <AnimatedStat
            value={primaryStat.value}
            className="text-2xl font-bold text-primary-glow"
          />
          <span className="text-xs leading-tight text-muted">{primaryStat.label}</span>
        </div>
      </div>
    </TiltCard>
  );
}
