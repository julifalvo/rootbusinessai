import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  impact: string;
  onOpen: () => void;
};

export default function ServiceCard({
  icon,
  title,
  description,
  impact,
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

        <p className="mt-auto border-t border-white/5 pt-3 text-sm font-medium text-primary-glow">
          {impact}
        </p>
      </div>
    </TiltCard>
  );
}
