"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = { from: "user" | "bot"; text: string };
type Preset = { question: string; answer: string };

const PRESETS: Preset[] = [
  {
    question: "¿Tienen pastillas de freno para Hilux?",
    answer: "Sí, 6 unidades en stock a $24.900. ¿Te reservo el pedido?",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer: "Sí, por Andreani. Llega en 24-48hs a CABA/GBA, resto del país 72hs.",
  },
  {
    question: "¿A qué hora atienden?",
    answer: "El local de 9 a 18hs. Yo respondo acá las 24hs, todos los días.",
  },
];

const TYPING_DELAY = 900;

/** Simulador de chat real: el usuario clickea una pregunta y ve la respuesta con tipeo simulado. */
export default function ChatbotDemoVisual() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hola 👋 Soy el asistente de Andes Repuestos. Probá una pregunta:",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  useEffect(() => {
    return () => setPending(false);
  }, []);

  const ask = (preset: Preset) => {
    if (pending) return;
    setPending(true);
    setMessages((prev) => [...prev, { from: "user", text: preset.question }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: preset.answer }]);
      setPending(false);
    }, TYPING_DELAY);
  };

  return (
    <div className="flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
      <div
        ref={scrollRef}
        className="flex h-36 flex-col gap-2 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-4"
      >
        <AnimatePresence initial={false}>
          {messages.map((message, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed",
                message.from === "user"
                  ? "self-end bg-white/10 text-white"
                  : "self-start bg-primary-glow/15 text-primary-glow"
              )}
            >
              {message.text}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1 self-start rounded-2xl bg-primary-glow/15 px-3 py-2.5"
            >
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary-glow [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary-glow [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary-glow" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {PRESETS.map((preset) => (
          <button
            key={preset.question}
            type="button"
            disabled={pending}
            onClick={(e) => {
              e.stopPropagation();
              ask(preset);
            }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/70 transition-colors hover:border-primary-glow/40 hover:text-primary-glow disabled:cursor-not-allowed disabled:opacity-40"
          >
            {preset.question}
          </button>
        ))}
      </div>
    </div>
  );
}
