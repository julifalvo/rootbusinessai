"use client";

import { useEffect, useState } from "react";
import { BellRing, CalendarCheck, ClipboardCheck, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  { icon: Inbox, label: "Recibe solicitud" },
  { icon: CalendarCheck, label: "Verifica agenda" },
  { icon: ClipboardCheck, label: "Confirma turno" },
  { icon: BellRing, label: "Envía recordatorio" },
];

const TIMELINE = [0, 1, 2, 3, 3, 3, -1, -1];
const TICK_MS = 700;

/** Pipeline de un agente autónomo, cada paso se activa solo en loop. */
export default function AgentDemoVisual() {
  const [active, setActive] = useState(() => TIMELINE[0]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % TIMELINE.length;
      setActive(TIMELINE[i]);
    }, TICK_MS);
    return () => clearInterval(id);
  }, []);

  const progress = (Math.max(active, 0) / (STEPS.length - 1)) * 100;

  return (
    <div className="relative h-56 rounded-xl border border-white/10 bg-black/40 p-5">
      <div className="absolute left-9 top-9 bottom-9 w-px bg-white/10">
        <div
          className="w-full bg-primary-glow transition-[height] duration-500 ease-out"
          style={{ height: `${progress}%` }}
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
  );
}
