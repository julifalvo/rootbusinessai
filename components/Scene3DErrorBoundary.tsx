"use client";

import { Component, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback: ReactNode;
};

type State = {
  hasError: boolean;
};

/**
 * Contexto WebGL puede fallar en runtime (drivers, GPU bloqueada, contexto
 * perdido) incluso si la detección inicial dio soporte. React exige un
 * class component para capturar errores de render de los hijos.
 */
export default class Scene3DErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("[Scene3D] Fallo al renderizar la escena WebGL:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
