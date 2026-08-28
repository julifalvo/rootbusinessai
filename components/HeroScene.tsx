"use client";

import { Canvas } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import { RobotHead } from "@/components/RobotHead";

export default function HeroScene({
  scrollProgress,
}: {
  scrollProgress?: MotionValue<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.25, 4.4], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[-3, 3, 4]} intensity={1.4} color="#00f0ff" />
      <directionalLight position={[3, -1, -3]} intensity={0.8} color="#7000ff" />
      <pointLight position={[0, 0.2, 2.4]} intensity={0.5} color="#ffffff" distance={4} />
      <RobotHead scrollProgress={scrollProgress} />
    </Canvas>
  );
}
