import type { ReactNode } from "react";
import TiltCard from "@/components/TiltCard";

export default function DemoCard({
  category,
  name,
  description,
  children,
}: {
  category: string;
  name: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <TiltCard className="p-6 hover:border-primary-glow/30">
      <div className="flex h-full flex-col gap-4">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-primary-glow">
            {category}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
        {children}
      </div>
    </TiltCard>
  );
}
