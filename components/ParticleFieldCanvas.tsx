"use client";

import dynamic from "next/dynamic";
import { useWebglSupport } from "@/lib/useWebglSupport";
import Scene3DErrorBoundary from "./Scene3DErrorBoundary";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
});

/**
 * Capa de partículas 3D global. Sin fallback propio: los blobs CSS de
 * `AmbientBackground` ya cubren la ambientación cuando WebGL no está
 * disponible o el usuario prefiere menos movimiento.
 */
export default function ParticleFieldCanvas() {
  const support = useWebglSupport();

  if (support === "unsupported") return null;

  return (
    <Scene3DErrorBoundary fallback={null}>
      <ParticleField />
    </Scene3DErrorBoundary>
  );
}
