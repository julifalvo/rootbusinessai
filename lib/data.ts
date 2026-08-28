import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Code2, MessageSquareText, Workflow } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Agentes de IA Autónomos",
    description:
      "Automatización de flujos de trabajo complejos multi-paso, con toma de decisiones propia dentro de reglas de negocio definidas.",
    impact: "Hasta 80% menos intervención manual en procesos operativos.",
    icon: BrainCircuit,
  },
  {
    title: "Chatbots Conversacionales Avanzados",
    description:
      "Integrados con RAG (Retrieval-Augmented Generation) y bases de datos corporativas para respuestas precisas y contextuales.",
    impact: "Reducción del 70% en tiempos de atención al cliente.",
    icon: MessageSquareText,
  },
  {
    title: "Desarrollo Web Fullstack & Apps a Medida",
    description:
      "Plataformas web de alto rendimiento conectadas a modelos de lenguaje, diseñadas para escalar con tu operación.",
    impact: "Lanzamiento de productos digitales hasta 3x más rápido.",
    icon: Code2,
  },
  {
    title: "Automatización de Procesos (RPA + IA)",
    description:
      "Conexión de sistemas legacy con APIs de IA para eliminar tareas repetitivas sin reescribir tu infraestructura actual.",
    impact: "+40 horas semanales liberadas de tareas repetitivas.",
    icon: Workflow,
  },
];

export const CONTACT_SERVICE_OPTIONS = [
  { value: "chatbots", label: "Chatbots" },
  { value: "agentes-ia", label: "Agentes IA" },
  { value: "desarrollo-web", label: "Desarrollo Web" },
  { value: "otro", label: "Otro" },
] as const;

export type Project = {
  title: string;
  sector: string;
  description: string;
  stack: string[];
  metricValue: string;
  metricLabel: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Soporte al Cliente 24/7",
    sector: "E-commerce & Retail",
    description:
      "Agente conversacional con RAG sobre catálogo y políticas de la tienda, escalando a humano solo en casos de excepción.",
    stack: ["Next.js", "LangChain", "OpenAI API", "PostgreSQL"],
    metricValue: "-65%",
    metricLabel: "tiempo de primera respuesta",
  },
  {
    title: "Agente de Cobranza Inteligente",
    sector: "Fintech B2B",
    description:
      "Automatización multi-paso de recordatorios, negociación de planes de pago y escalamiento por WhatsApp y email.",
    stack: ["Python", "RAG", "Twilio", "Supabase"],
    metricValue: "+38%",
    metricLabel: "recupero de cartera",
  },
  {
    title: "Plataforma de Turnos con IA",
    sector: "Salud Digital",
    description:
      "Reserva y confirmación de turnos con recordatorios proactivos y reprogramación automática vía agente conversacional.",
    stack: ["Next.js", "React Three Fiber", "Stripe", "Vercel"],
    metricValue: "-70%",
    metricLabel: "ausentismo a citas",
  },
  {
    title: "RPA + IA para Logística",
    sector: "Logística Industrial",
    description:
      "Conexión de un ERP legacy con APIs de IA generativa para clasificar, validar y despachar órdenes sin intervención manual.",
    stack: ["n8n", "Python", "APIs ERP", "IA Generativa"],
    metricValue: "+40 hs",
    metricLabel: "semanales liberadas",
  },
];
