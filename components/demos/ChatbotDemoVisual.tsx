"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = { from: "user" | "bot"; text: string };

const SCRIPT: Message[] = [
  { from: "user", text: "¿Tienen filtro de aceite para Corolla 2018?" },
  { from: "bot", text: "Sí, tenemos 3 en stock desde $8.500. ¿Te armo el pedido?" },
  { from: "user", text: "Dale, gracias!" },
  { from: "bot", text: "Listo ✅ Pedido #4821 confirmado" },
];

const USER_DELAY = 1400;
const TYPING_DELAY = 1100;
const BOT_DELAY = 1800;
const RESET_DELAY = 2200;

/** Conversación de chatbot que se reproduce sola en loop, sin input real. */
export default function ChatbotDemoVisual() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, delay: number) => {
      timers.push(
        setTimeout(() => {
          if (!cancelled) fn();
        }, delay)
      );
    };

    function playFrom(index: number, elapsed: number) {
      if (index >= SCRIPT.length) {
        schedule(() => {
          setVisible(0);
          setTyping(false);
          playFrom(0, 0);
        }, elapsed + RESET_DELAY);
        return;
      }
      const message = SCRIPT[index];
      if (message.from === "bot") {
        schedule(() => setTyping(true), elapsed);
        schedule(() => {
          setTyping(false);
          setVisible(index + 1);
        }, elapsed + TYPING_DELAY);
        playFrom(index + 1, elapsed + TYPING_DELAY + BOT_DELAY);
      } else {
        schedule(() => setVisible(index + 1), elapsed);
        playFrom(index + 1, elapsed + USER_DELAY);
      }
    }

    playFrom(0, 400);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const messages = SCRIPT.slice(0, visible);

  return (
    <div className="flex h-56 flex-col gap-2 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4">
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
  );
}
