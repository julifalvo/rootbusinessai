"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SITES = [
  {
    name: "Torre Norte",
    url: "construred.com/obras/torre-norte",
    stats: [
      { label: "Avance de obra", target: 72, suffix: "%" },
      { label: "Alertas abiertas", target: 1, suffix: "" },
    ],
    bars: [40, 75, 55, 90, 65],
  },
  {
    name: "Barrio Sur",
    url: "construred.com/obras/barrio-sur",
    stats: [
      { label: "Avance de obra", target: 45, suffix: "%" },
      { label: "Alertas abiertas", target: 3, suffix: "" },
    ],
    bars: [20, 35, 50, 40, 55],
  },
  {
    name: "Planta Oeste",
    url: "construred.com/obras/planta-oeste",
    stats: [
      { label: "Avance de obra", target: 91, suffix: "%" },
      { label: "Alertas abiertas", target: 0, suffix: "" },
    ],
    bars: [70, 85, 80, 95, 92],
  },
];

const DURATION_MS = 900;

/** Mini-dashboard tipo browser: el usuario elige una obra y los datos se animan al valor real. */
export default function WebDemoVisual() {
  const [selected, setSelected] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    let cancelled = false;

    function tick(ts: number) {
      if (cancelled) return;
      if (start === null) start = ts;
      const elapsed = ts - start;
      const p = Math.min(1, elapsed / DURATION_MS);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [selected]);

  const site = SITES[selected];

  return (
    <div
      className="flex h-56 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 truncate rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/40">
          {site.url}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {SITES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(i);
              }}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors",
                i === selected
                  ? "border-primary-glow/40 bg-primary-glow/10 text-primary-glow"
                  : "border-white/10 text-white/40 hover:text-white/70"
              )}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/[0.02] p-3"
            >
              <p className="text-lg font-semibold text-primary-glow">
                {Math.round(stat.target * progress)}
                {stat.suffix}
              </p>
              <p className="text-[10px] text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex h-14 items-end gap-2">
          {site.bars.map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-secondary-glow/40 to-primary-glow/60 transition-[height] duration-300 ease-out"
              style={{ height: `${height * progress}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
