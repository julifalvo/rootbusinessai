"use client";

import { useSyncExternalStore } from "react";

type WebglSupport = "supported" | "unsupported";

let cachedWebglProbe: boolean | null = null;

function probeWebgl(): boolean {
  if (cachedWebglProbe !== null) return cachedWebglProbe;
  try {
    const canvas = document.createElement("canvas");
    cachedWebglProbe = !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    cachedWebglProbe = false;
  }
  return cachedWebglProbe;
}

function subscribe(callback: () => void) {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionQuery.addEventListener("change", callback);
  return () => {
    motionQuery.removeEventListener("change", callback);
  };
}

function getSnapshot(): WebglSupport {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Sin gate por viewport: el robot se apoya en pointer events, que R3F
  // unifica para mouse y touch, así que interactúa igual en mobile.
  return !prefersReducedMotion && probeWebgl() ? "supported" : "unsupported";
}

function getServerSnapshot(): WebglSupport {
  return "unsupported";
}

/**
 * Sincroniza con el soporte real del navegador vía useSyncExternalStore:
 * evita mismatches de hidratación (el server siempre asume "unsupported")
 * y reacciona a cambios en la preferencia de movimiento.
 */
export function useWebglSupport(): WebglSupport {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
