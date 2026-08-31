import type { ReactNode } from "react";
import { ArrowRight, Flame, Quote as QuoteIcon } from "lucide-react";
import type { Quote, Stat } from "@/lib/data";
import { cn } from "@/lib/utils";

export function DrawerSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-8 first:mt-0">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">{title}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function DrawerStats({ stats, accent = "primary" }: { stats: Stat[]; accent?: "primary" | "secondary" }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-4 text-center"
        >
          <p
            className={cn(
              "text-lg font-bold sm:text-xl",
              accent === "primary" ? "text-primary-glow" : "text-secondary-glow"
            )}
          >
            {stat.value}
          </p>
          <p className="mt-1 text-[11px] leading-tight text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function DrawerSteps({ items, accent = "primary" }: { items: string[]; accent?: "primary" | "secondary" }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
              accent === "primary"
                ? "bg-primary-glow/15 text-primary-glow"
                : "bg-secondary-glow/15 text-secondary-glow"
            )}
          >
            {index + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function DrawerQuote({ quote }: { quote: Quote }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <QuoteIcon size={18} className="text-white/20" strokeWidth={1.5} />
      <p className="mt-2 text-sm italic leading-relaxed text-white/90">&ldquo;{quote.text}&rdquo;</p>
      <p className="mt-3 text-xs font-medium text-white/60">
        {quote.author} — <span className="text-white/40">{quote.role}</span>
      </p>
    </div>
  );
}

export function DrawerFomo({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-secondary-glow/25 bg-secondary-glow/[0.06] p-5">
      <Flame size={18} className="mt-0.5 shrink-0 text-secondary-glow" strokeWidth={1.75} />
      <p className="text-sm leading-relaxed text-white/85">{children}</p>
    </div>
  );
}

export function DrawerCta({ onNavigate }: { onNavigate: () => void }) {
  return (
    <a
      href="#contacto"
      onClick={onNavigate}
      className="group mt-8 flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
    >
      Quiero esto para mi negocio
      <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
    </a>
  );
}
