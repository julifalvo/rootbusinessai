import type { ReactNode } from "react";
import TiltCard from "@/components/TiltCard";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  impact: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  impact,
}: ServiceCardProps) {
  return (
    <TiltCard className="p-6 hover:border-primary-glow/30">
      <div className="flex h-full flex-col gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 text-primary-glow ring-1 ring-primary-glow/20 transition-shadow duration-300 group-hover:shadow-[0_0_20px_-2px_rgba(0,240,255,0.5)]">
          {icon}
        </span>

        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <p className="mt-auto border-t border-white/5 pt-3 text-sm font-medium text-primary-glow">
          {impact}
        </p>
      </div>
    </TiltCard>
  );
}
