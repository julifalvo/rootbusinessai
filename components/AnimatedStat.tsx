"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

const STAT_PATTERN = /^([+-]?)(\d+(?:[.,]\d+)?)(.*)$/;

function initialDisplay(value: string) {
  const match = value.match(STAT_PATTERN);
  if (!match) return value;
  const [, sign, , suffix] = match;
  return `${sign}0${suffix}`;
}

/** Cuenta desde 0 hasta el numero de `value` (ej. "80%", "-65%", "24/7") al entrar en viewport. */
export default function AnimatedStat({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(() => initialDisplay(value));

  useEffect(() => {
    if (!inView) return;
    const match = value.match(STAT_PATTERN);
    if (!match) return;
    const [, sign, numberPart, suffix] = match;
    const decimals = numberPart.includes(".") || numberPart.includes(",") ? 1 : 0;
    const target = parseFloat(numberPart.replace(",", "."));
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(`${sign}${latest.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
    </span>
  );
}
