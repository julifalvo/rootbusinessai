"use client";

import dynamic from "next/dynamic";
import { useWebglSupport } from "@/lib/useWebglSupport";
import Scene3DErrorBoundary from "./Scene3DErrorBoundary";
import Scene3DFallback from "./Scene3DFallback";

const ContactScene = dynamic(() => import("./ContactScene"), {
  ssr: false,
  loading: () => <Scene3DFallback className="h-full w-full" />,
});

export default function ContactCanvas() {
  const support = useWebglSupport();

  if (support === "unsupported") {
    return <Scene3DFallback className="h-full w-full" />;
  }

  return (
    <Scene3DErrorBoundary fallback={<Scene3DFallback className="h-full w-full" />}>
      <ContactScene />
    </Scene3DErrorBoundary>
  );
}
