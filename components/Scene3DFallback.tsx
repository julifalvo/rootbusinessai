import { cn } from "@/lib/utils";

/**
 * Sustituto 2D estático cuando WebGL no está disponible, el viewport es
 * mobile, o el usuario prefiere menos movimiento. Sin JS ni costo de GPU.
 */
export default function Scene3DFallback({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="absolute h-64 w-64 rounded-full bg-primary-glow/20 blur-[90px]" />
      <div className="absolute h-56 w-56 translate-x-16 translate-y-10 rounded-full bg-secondary-glow/20 blur-[90px]" />
      <div className="relative h-32 w-32 rotate-45 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="absolute inset-4 border border-primary-glow/20" />
        <div className="absolute inset-9 border border-secondary-glow/20" />
      </div>
    </div>
  );
}
