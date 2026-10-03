"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-anchor relative px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary-glow">
              Preguntas frecuentes
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Lo que todo dueño nos pregunta antes de arrancar
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-col gap-3">
          {FAQS.map(({ question, answer }, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div
                key={question}
                className={cn(
                  "rounded-2xl border bg-surface/60 backdrop-blur-xl transition-colors",
                  open ? "border-secondary-glow/30" : "border-white/10"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-white"
                >
                  {question}
                  <Plus
                    size={18}
                    strokeWidth={1.75}
                    className={cn(
                      "shrink-0 text-white/40 transition-transform duration-300",
                      open && "rotate-45 text-secondary-glow"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
