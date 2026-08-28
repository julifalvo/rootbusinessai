"use client";

import { useEffect, useState } from "react";

const STATS = [
  { label: "Obras activas", target: 18, suffix: "" },
  { label: "Avance promedio", target: 72, suffix: "%" },
];

const BARS = [40, 75, 55, 90, 65];

const DURATION_MS = 1800;
const HOLD_MS = 1500;
const RESET_MS = 600;

/** Mini-dashboard tipo browser que cuenta y crece en loop. */
export default function WebDemoVisual() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let start: number | null = null;
    let cancelled = false;

    function tick(ts: number) {
      if (cancelled) return;
      if (start === null) start = ts;
      const elapsed = ts - start;

      if (elapsed < DURATION_MS) {
        setProgress(Math.min(1, elapsed / DURATION_MS));
        raf = requestAnimationFrame(tick);
        return;
      }

      setProgress(1);
      timeout = setTimeout(() => {
        if (cancelled) return;
        setProgress(0);
        start = null;
        timeout = setTimeout(() => {
          if (!cancelled) raf = requestAnimationFrame(tick);
        }, RESET_MS);
      }, HOLD_MS);
    }

    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex h-56 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-2 rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/40">
          construred.com/obras
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-4 p-4">
        <div className="grid grid-cols-2 gap-3">
          {STATS.map((stat) => (
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

        <div className="flex h-16 items-end gap-2">
          {BARS.map((height, i) => (
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
