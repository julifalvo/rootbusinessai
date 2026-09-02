"use client";

import { useEffect, useRef, useState } from "react";
import { BellRing, CalendarCheck, CheckCheck, ClipboardCheck, Inbox, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  { icon: Inbox, label: "Recibe solicitud" },
  { icon: CalendarCheck, label: "Verifica agenda" },
  { icon: ClipboardCheck, label: "Confirma turno" },
  { icon: BellRing, label: "Envía recordatorio" },
];

const STEP_MS = 650;

/** Pipeline de un agente autónomo que el usuario dispara con un click, paso a paso. */
export default function AgentDemoVisual() {
  const [active, setActive] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const simulate = () => {
    if (playing) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setDone(false);
    setPlaying(true);
    setActive(-1);

    STEPS.forEach((_, i) => {
      timers.current.push(setTimeout(() => setActive(i), (i + 1) * STEP_MS));
    });
    timers.current.push(
      setTimeout(() => {
        setPlaying(false);
        setDone(true);
      }, (STEPS.length + 1) * STEP_MS)
    );
  };

  const progress = (Math.max(active, 0) / (STEPS.length - 1)) * 100;

  return (
    <div className="flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
      <div className="relative h-44 rounded-xl border border-white/10 bg-black/40 p-5">
        <div className="absolute left-9 top-9 bottom-9 w-px bg-white/10">
          <div
            className="w-full bg-primary-glow transition-[height] duration-500 ease-out"
            style={{ height: active >= 0 ? `${progress}%` : "0%" }}
          />
        </div>

        <ul className="relative flex h-full flex-col justify-between">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isActive = active >= i;
            return (
              <li key={step.label} className="flex items-center gap-3">
                <span
                  className={cn(
                    "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background transition-colors duration-500",
                    isActive
                      ? "border-primary-glow text-primary-glow"
                      : "border-white/15 text-white/30"
                  )}
                >
                  <Icon size={14} strokeWidth={2} />
                </span>
                <span
                  className={cn(
                    "text-xs transition-colors duration-500",
                    isActive ? "text-white" : "text-white/30"
                  )}
                >
                  {step.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          simulate();
        }}
        disabled={playing}
        className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium text-white/70 transition-colors hover:border-primary-glow/40 hover:text-primary-glow disabled:cursor-not-allowed disabled:opacity-50"
      >
        {done ? (
          <CheckCheck size={12} className="text-primary-glow" />
        ) : (
          <Play size={12} className={playing ? "animate-pulse" : undefined} />
        )}
        {done ? "Turno confirmado — repetir" : playing ? "Simulando..." : "Simular solicitud de turno"}
      </button>
    </div>
  );
}
