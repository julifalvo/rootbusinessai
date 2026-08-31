"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Parallax de cámara: la posición base (pasada por prop, la misma que
 * `camera.position` del Canvas) se desplaza un poco según el puntero y la
 * cámara siempre mira al centro. Sutil a propósito — es profundidad, no
 * un efecto de "cámara libre".
 */
export function CameraRig({ basePosition }: { basePosition: [number, number, number] }) {
  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    const [bx, by, bz] = basePosition;
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, bx + x * 0.25, 4, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, by + y * 0.15, 4, delta);
    state.camera.position.z = bz;
    state.camera.lookAt(0, by, 0);
  });

  return null;
}
