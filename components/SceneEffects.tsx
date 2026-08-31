"use client";

import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

/**
 * Post-procesado compartido por las escenas del robot (Hero y Contacto):
 * bloom que hace brillar los materiales emissive-like (ojos, antena,
 * halos) sin lavar el resto, más una viñeta sutil para foco central.
 * Sin `Environment`/PMREM a propósito: en GPUs sin soporte float-texture
 * completo (chequeado en software rendering) el generador de PMREM de
 * drei produce un blowout blanco que tapa toda la escena.
 */
export default function SceneEffects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        mipmapBlur
        luminanceThreshold={0.65}
        luminanceSmoothing={0.3}
        intensity={0.9}
        radius={0.6}
      />
      <Vignette eskil={false} offset={0.25} darkness={0.6} />
    </EffectComposer>
  );
}
