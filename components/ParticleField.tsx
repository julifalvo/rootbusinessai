"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * Nubes de partículas en tres profundidades (parallax por escala/velocidad)
 * que orbitan lentamente y se inclinan sutilmente hacia el puntero. Vive en
 * un Canvas fijo full-page con pointer-events-none, por lo que escucha al
 * puntero vía `eventSource=document.body` en vez del propio canvas.
 */
function DriftingSparkles() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      x * 0.12,
      1.5,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -y * 0.06,
      1.5,
      delta
    );
    group.current.rotation.z += delta * 0.01;
  });

  return (
    <group ref={group}>
      <Sparkles
        count={70}
        scale={[16, 10, 4]}
        size={2.5}
        speed={0.2}
        opacity={0.55}
        color="#00f0ff"
        noise={1}
      />
      <Sparkles
        count={55}
        scale={[18, 11, 6]}
        size={4}
        speed={0.12}
        opacity={0.4}
        color="#7000ff"
        noise={1.4}
      />
      <Sparkles
        count={40}
        scale={[20, 12, 9]}
        size={1.5}
        speed={0.08}
        opacity={0.3}
        color="#f5f5f7"
        noise={0.6}
      />
    </group>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.4]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
    >
      <DriftingSparkles />
    </Canvas>
  );
}
