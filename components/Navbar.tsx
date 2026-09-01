"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de Éxito", href: "#casos-de-exito" },
  { label: "Demos", href: "#demos" },
  { label: "Soluciones", href: "#arquitectura-agentica" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-5xl">
      <nav
        className={cn(
          "flex w-full items-center justify-between gap-6 rounded-2xl border px-5 py-3 backdrop-blur-xl transition-colors duration-300",
          scrolled
            ? "border-white/10 bg-surface/70 shadow-[0_0_30px_-10px_rgba(0,240,255,0.25)]"
            : "border-white/5 bg-white/5"
        )}
      >
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 text-primary-glow ring-1 ring-primary-glow/30">
            <Bot size={18} strokeWidth={1.75} />
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">
            rootbusiness<span className="text-primary-glow">ai</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-primary-glow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="group relative hidden shrink-0 overflow-hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-background md:inline-flex"
        >
          <span className="relative z-10">Agendar Consultoría IA</span>
          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary-glow via-white to-secondary-glow opacity-0 blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-40"
            aria-hidden
          />
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full mt-2 md:hidden"
          >
            <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-surface/95 p-4 backdrop-blur-xl">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-white/5 hover:text-primary-glow"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-background"
              >
                Agendar Consultoría IA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
