import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function DemoCard({
  category,
  name,
  description,
  onOpen,
  children,
}: {
  category: string;
  name: string;
  description: string;
  onOpen: () => void;
  children: ReactNode;
}) {
  return (
    <TiltCard className="p-6 hover:border-primary-glow/30" onClick={onOpen}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary-glow">
              {category}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-white">{name}</h3>
            <p className="mt-1 text-sm text-muted">{description}</p>
          </div>
          <ArrowUpRight
            size={16}
            strokeWidth={1.75}
            className="mt-1 shrink-0 text-white/20 transition-colors duration-300 group-hover:text-primary-glow"
          />
        </div>
        {children}
      </div>
    </TiltCard>
  );
}
