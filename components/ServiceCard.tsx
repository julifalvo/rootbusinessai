"use client";

import { type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ROTATE_RANGE = 10;

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  impact: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  impact,
}: ServiceCardProps) {
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
  const background = useMotionTemplate`radial-gradient(240px circle at ${spotlightX} ${spotlightY}, rgba(0,240,255,0.12), transparent 70%)`;

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
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-primary-glow/30"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background }}
      />

      <div className="relative z-10 flex h-full flex-col gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 text-primary-glow ring-1 ring-primary-glow/20 transition-shadow duration-300 group-hover:shadow-[0_0_20px_-2px_rgba(0,240,255,0.5)]">
          {icon}
        </span>

        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <p className="mt-auto border-t border-white/5 pt-3 text-sm font-medium text-primary-glow">
          {impact}
        </p>
      </div>
    </motion.div>
  );
}
