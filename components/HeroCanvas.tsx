"use client";

import dynamic from "next/dynamic";
import type { MotionValue } from "framer-motion";
import { useWebglSupport } from "@/lib/useWebglSupport";
import Scene3DErrorBoundary from "./Scene3DErrorBoundary";
import Scene3DFallback from "./Scene3DFallback";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <Scene3DFallback className="h-full w-full" />,
});

/**
 * Decide en runtime si vale la pena pagar el costo de three.js: en mobile,
 * sin soporte WebGL, o con "reduce motion" se sirve un fallback 2D estático.
 */
export default function HeroCanvas({
  scrollProgress,
}: {
  scrollProgress?: MotionValue<number>;
}) {
  const support = useWebglSupport();

  if (support === "unsupported") {
    return <Scene3DFallback className="h-full w-full" />;
  }

  return (
    <Scene3DErrorBoundary fallback={<Scene3DFallback className="h-full w-full" />}>
      <HeroScene scrollProgress={scrollProgress} />
    </Scene3DErrorBoundary>
  );
}
