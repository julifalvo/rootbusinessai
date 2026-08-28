"use client";

import { Canvas } from "@react-three/fiber";
import { RobotHead } from "@/components/RobotHead";

export default function ContactScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 4.0], fov: 36 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[-3, 3, 3]} intensity={1.2} color="#00f0ff" />
      <directionalLight position={[3, -1, -2]} intensity={0.7} color="#7000ff" />
      <pointLight position={[0, 0.2, 2]} intensity={0.4} color="#ffffff" distance={4} />
      <RobotHead scale={0.85} />
    </Canvas>
  );
}
