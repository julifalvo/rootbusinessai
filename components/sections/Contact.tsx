import ContactForm from "@/components/ContactForm";
import ContactCanvas from "@/components/ContactCanvas";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="scroll-anchor relative px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-glow-gradient-violet" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal className="relative order-2 flex flex-col gap-8 lg:order-1">
          <div className="h-64 w-full lg:h-96">
            <ContactCanvas />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Hablemos de tu próximo agente de IA
          </h2>
          <p className="mt-4 max-w-md text-base text-muted">
            Contanos sobre tu operación y te proponemos una arquitectura de
            agentes o chatbot a medida en una consultoría inicial sin costo.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
