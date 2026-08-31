"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Panel deslizable genérico (portal a `document.body`) usado por las
 * tarjetas de Servicios, Casos de Éxito y Demos para mostrar el detalle
 * ampliado de cada una. Controlado desde afuera: la sección dueña de los
 * datos decide qué item está abierto y le pasa el contenido ya armado.
 */
export default function DetailDrawer({
  open,
  onClose,
  eyebrow,
  title,
  accent = "primary",
  children,
}: {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  accent?: "primary" | "secondary";
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-y-0 right-0 z-[100] flex w-full max-w-lg flex-col border-l border-white/10 bg-surface/95 shadow-[-30px_0_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
              <div>
                <span
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wider",
                    accent === "primary" ? "text-primary-glow" : "text-secondary-glow"
                  )}
                >
                  {eyebrow}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">{title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="shrink-0 rounded-full border border-white/10 p-2 text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
