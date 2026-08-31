"use client";

import { type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const ROTATE_RANGE = 10;

/**
 * Tarjeta con tilt 3D + spotlight que sigue el cursor. Estructura (borde,
 * fondo, radio) fija; el contenido y el color del hover/spotlight los
 * define quien la usa.
 */
export default function TiltCard({
  children,
  className,
  spotlightColor = "0,240,255",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  /** Si se pasa, la tarjeta entera se vuelve interactiva (click + teclado). */
  onClick?: () => void;
}) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [ROTATE_RANGE, -ROTATE_RANGE]),
    { stiffness: 200, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-ROTATE_RANGE, ROTATE_RANGE]),
    { stiffness: 200, damping: 20 }
  );

  const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`);
  const background = useMotionTemplate`radial-gradient(240px circle at ${spotlightX} ${spotlightY}, rgba(${spotlightColor},0.12), transparent 70%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl transition-colors duration-300",
        onClick && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow/50",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
