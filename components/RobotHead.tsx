"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

const BLINK_CYCLE = 4.5;
const BLINK_DURATION = 0.15;

// Extensión del robot en unidades locales (escala 1): punta de la antena
// arriba, base de la cabeza abajo y halos a los costados. Se usan para
// encajarlo dentro del canvas sin recortes.
const ROBOT_TOP = 1.2;
const ROBOT_BOTTOM = 0.75;
const ROBOT_WIDTH = 2.15;
const FIT_MARGIN = 0.88;
// Aire mínimo (fracción del alto visible) entre el robot y el borde inferior.
const SAFE_BOTTOM = 0.06;

/**
 * Cabeza de robot construida enteramente con primitivas (sin assets
 * externos). Sigue el puntero (mouse o touch, R3F los unifica) con la
 * cabeza y la mirada, con parpadeo y halos orbitando de fondo. Si recibe
 * `scrollProgress` (0→1, leído imperativamente para no re-renderizar en
 * cada frame de scroll), gira y se achica como si la "cámara" orbitara
 * al alejarse.
 */
export function RobotHead({
  scale = 1,
  scrollProgress,
  canvasOffsetY,
}: {
  scale?: number;
  scrollProgress?: MotionValue<number>;
  /** Traslación vertical (px) que el contenedor del canvas recibe por parallax. */
  canvasOffsetY?: MotionValue<number>;
}) {
  const bodyRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const gazeRef = useRef<THREE.Group>(null);
  const antennaTipRef = useRef<THREE.Mesh>(null);
  const haloARef = useRef<THREE.Mesh>(null);
  const haloBRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const { x: pointerX, y: pointerY } = state.pointer;
    const t = state.clock.elapsedTime;
    const scroll = scrollProgress?.get() ?? 0;

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.damp(
        headRef.current.rotation.y,
        pointerX * 0.45 + scroll * 1.1,
        4,
        delta
      );
      headRef.current.rotation.x = THREE.MathUtils.damp(
        headRef.current.rotation.x,
        -pointerY * 0.25 + scroll * 0.35,
        4,
        delta
      );
    }

    if (gazeRef.current) {
      gazeRef.current.position.x = THREE.MathUtils.damp(
        gazeRef.current.position.x,
        pointerX * 0.06,
        6,
        delta
      );
      gazeRef.current.position.y = THREE.MathUtils.damp(
        gazeRef.current.position.y,
        0.05 + pointerY * 0.035,
        6,
        delta
      );

      const blinkT = t % BLINK_CYCLE;
      gazeRef.current.scale.y =
        blinkT < BLINK_DURATION
          ? Math.max(0.08, 1 - Math.sin((blinkT / BLINK_DURATION) * Math.PI))
          : 1;
    }

    if (antennaTipRef.current) {
      const material = antennaTipRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.5 + (0.5 + Math.sin(t * 2.2) * 0.5) * 0.5;
    }

    if (bodyRef.current) {
      // `viewport` da el alto/ancho visibles en unidades del mundo a la
      // distancia de la cámara, así que podemos encajar el robot dentro
      // del canvas sea cual sea el aspect ratio.
      const { width: viewW, height: viewH } = state.viewport;
      const aspect = viewW / viewH;
      const float = Math.sin(t * 0.7) * 0.08;

      // Primero achicamos lo necesario para que quepa entero (alto y
      // ancho) y recién después lo bajamos: en mobile el robot es más
      // ancho que el viewport y se cortaba por los costados.
      const fitScale = Math.min(
        1,
        (viewH * FIT_MARGIN) / (ROBOT_TOP + ROBOT_BOTTOM),
        (viewW * FIT_MARGIN) / ROBOT_WIDTH
      );
      const targetScale = scale * fitScale * (1 - scroll * 0.32);

      // El parallax del Hero baja el <div> del canvas mientras se scrollea y
      // la sección recorta lo que sobresale: ese desplazamiento (en px) se
      // descuenta del espacio realmente disponible abajo.
      const clipped =
        Math.max(0, canvasOffsetY?.get() ?? 0) * (viewH / state.size.height);

      // En viewports verticales el bloque de texto del Hero tapa el centro:
      // bajamos el robot para que asome debajo, pero dejando aire hasta el
      // borde inferior — pegado al borde, la sección siguiente lo corta.
      const wantedDrop = (aspect < 1 ? (1 - aspect) * 2.05 : 0) + scroll * 0.4;
      const maxDrop = Math.max(
        0,
        viewH * (0.5 - SAFE_BOTTOM) -
          ROBOT_BOTTOM * targetScale -
          Math.abs(float) -
          clipped
      );

      bodyRef.current.position.y = float - Math.min(wantedDrop, maxDrop);
      bodyRef.current.scale.setScalar(
        THREE.MathUtils.damp(bodyRef.current.scale.x, targetScale, 4, delta)
      );
    }

    if (haloARef.current) haloARef.current.rotation.z += delta * 0.25;
    if (haloBRef.current) haloBRef.current.rotation.z -= delta * 0.18;
  });

  return (
    <group ref={bodyRef} scale={scale}>
      <group ref={headRef}>
        <RoundedBox args={[1.5, 1.3, 1.3]} radius={0.28} smoothness={4}>
          <meshStandardMaterial color="#121214" roughness={0.35} metalness={0.4} />
        </RoundedBox>

        <RoundedBox
          args={[1.02, 0.5, 0.06]}
          radius={0.1}
          smoothness={4}
          position={[0, 0.05, 0.67]}
        >
          <meshBasicMaterial color="#050b0d" />
        </RoundedBox>

        <group ref={gazeRef} position={[0, 0.05, 0.72]}>
          <mesh position={[-0.24, 0, 0]}>
            <sphereGeometry args={[0.085, 16, 16]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>
          <mesh position={[0.24, 0, 0]}>
            <sphereGeometry args={[0.085, 16, 16]} />
            <meshBasicMaterial color="#00f0ff" />
          </mesh>
        </group>

        <mesh position={[0, 0.87, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.45, 8]} />
          <meshStandardMaterial color="#2a2a2e" />
        </mesh>
        <mesh ref={antennaTipRef} position={[0, 1.12, 0]}>
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshBasicMaterial color="#7000ff" transparent opacity={0.8} />
        </mesh>

        <mesh position={[-0.82, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.14, 0.14, 0.08, 20]} />
          <meshStandardMaterial color="#1a1a1d" roughness={0.4} metalness={0.5} />
        </mesh>
        <mesh position={[0.82, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.14, 0.14, 0.08, 20]} />
          <meshStandardMaterial color="#1a1a1d" roughness={0.4} metalness={0.5} />
        </mesh>
      </group>

      <mesh ref={haloARef} rotation={[Math.PI / 2.4, 0.5, 0]}>
        <torusGeometry args={[1.05, 0.008, 8, 64]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} />
      </mesh>
      <mesh ref={haloBRef} rotation={[Math.PI / 2.9, -0.6, 0]} scale={0.85}>
        <torusGeometry args={[1.05, 0.008, 8, 64]} />
        <meshBasicMaterial color="#7000ff" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
