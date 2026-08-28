import DemoCard from "@/components/DemoCard";
import Reveal from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";
import ChatbotDemoVisual from "@/components/demos/ChatbotDemoVisual";
import AgentDemoVisual from "@/components/demos/AgentDemoVisual";
import WebDemoVisual from "@/components/demos/WebDemoVisual";

export default function Demos() {
  return (
    <section id="demos" className="scroll-anchor relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Demos
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Así se ven nuestras soluciones en acción
            </h2>
            <p className="mt-4 text-base text-muted">
              Demostraciones interactivas de agentes de IA, chatbots y
              plataformas web — pensadas para mostrarte el tipo de
              experiencia que podemos construir para tu negocio.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          <RevealItem className="h-full">
            <DemoCard
              category="Chatbot Conversacional"
              name="Andes Repuestos"
              description="Atención al cliente 24/7 con respuesta instantánea de stock y precios."
            >
              <ChatbotDemoVisual />
            </DemoCard>
          </RevealItem>

          <RevealItem className="h-full">
            <DemoCard
              category="Agente de IA Autónomo"
              name="Vitalia Salud"
              description="Gestiona turnos, confirma disponibilidad y envía recordatorios sin intervención humana."
            >
              <AgentDemoVisual />
            </DemoCard>
          </RevealItem>

          <RevealItem className="h-full">
            <DemoCard
              category="Desarrollo Web Dinámico"
              name="Construred"
              description="Panel de gestión de obras en tiempo real conectado a la operación."
            >
              <WebDemoVisual />
            </DemoCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
