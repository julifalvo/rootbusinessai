import type { ReactNode } from "react";

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
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-primary-glow/30">
      <div>
        <span className="text-xs font-medium uppercase tracking-wider text-primary-glow">
          {category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-white">{name}</h3>
        <p className="mt-1 text-sm text-muted">{description}</p>
      </div>
      {children}
    </div>
  );
}
