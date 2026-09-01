import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Code2, MessageSquareText, Workflow } from "lucide-react";
import ChatbotDemoVisual from "@/components/demos/ChatbotDemoVisual";
import AgentDemoVisual from "@/components/demos/AgentDemoVisual";
import WebDemoVisual from "@/components/demos/WebDemoVisual";

export type Quote = {
  text: string;
  author: string;
  role: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
  howItWorks: string[];
  stats: Stat[];
  quote: Quote;
  fomo: string;
};

export const SERVICES: Service[] = [
  {
    title: "Agentes de IA Autónomos",
    description:
      "Automatización de flujos de trabajo complejos multi-paso, con toma de decisiones propia dentro de reglas de negocio definidas.",
    impact: "Hasta 80% menos intervención manual en procesos operativos.",
    icon: BrainCircuit,
    howItWorks: [
      "Mapeamos tu flujo operativo actual y detectamos los cuellos de botella donde una decisión repetitiva frena a tu equipo.",
      "Diseñamos el agente con reglas de negocio explícitas: qué puede decidir solo y cuándo debe escalar a un humano.",
      "Lo conectamos a tus herramientas reales (CRM, ERP, planillas, APIs) para que actúe, no solo que recomiende.",
      "Monitoreo continuo con logs de cada decisión, para que audites y ajustes el criterio del agente en producción.",
    ],
    stats: [
      { value: "80%", label: "menos intervención manual" },
      { value: "6 semanas", label: "de implementación a producción" },
      { value: "24/7", label: "disponibilidad del agente" },
    ],
    quote: {
      text: "En 6 semanas el agente ya tomaba el 80% de las decisiones que antes hacía mi equipo de operaciones a mano.",
      author: "Directora de Operaciones",
      role: "Empresa de logística B2B",
    },
    fomo: "Cada mes que un proceso sigue siendo manual, tu competencia que ya automatizó atiende más clientes con el mismo equipo. La brecha operativa entre empresas con agentes de IA y las que no los tienen se duplica año a año — y achicarla después cuesta mucho más que abrirla a tiempo.",
  },
  {
    title: "Chatbots Conversacionales Avanzados",
    description:
      "Integrados con RAG (Retrieval-Augmented Generation) y bases de datos corporativas para respuestas precisas y contextuales.",
    impact: "Reducción del 70% en tiempos de atención al cliente.",
    icon: MessageSquareText,
    howItWorks: [
      "Indexamos tu catálogo, base de conocimiento y políticas internas en una capa de RAG propia.",
      "Entrenamos el tono de marca para que el bot hable como tu empresa, no como un bot genérico.",
      "Integramos WhatsApp, web y redes en una sola conversación, sin que el cliente note el cambio de canal.",
      "Definimos los puntos exactos de escalamiento a un humano, para no perder ventas por falta de contexto.",
    ],
    stats: [
      { value: "70%", label: "menos tiempo de atención" },
      { value: "12 seg", label: "tiempo de primera respuesta" },
      { value: "+35%", label: "conversión en horario nocturno" },
    ],
    quote: {
      text: "Bajamos el tiempo de primera respuesta de 4 horas a 12 segundos. Los clientes ni notan que hablan con un agente de IA.",
      author: "Gerente de Atención al Cliente",
      role: "Retail online",
    },
    fomo: "El 73% de los compradores abandona una consulta si no recibe respuesta en menos de 5 minutos. Mientras tu equipo duerme, un chatbot bien entrenado sigue cerrando conversaciones — y tus competidores que ya lo tienen no están perdiendo esas ventas.",
  },
  {
    title: "Desarrollo Web Fullstack & Apps a Medida",
    description:
      "Plataformas web de alto rendimiento conectadas a modelos de lenguaje, diseñadas para escalar con tu operación.",
    impact: "Lanzamiento de productos digitales hasta 3x más rápido.",
    icon: Code2,
    howItWorks: [
      "Relevamos el objetivo de negocio antes de tocar una línea de código: qué métrica tiene que moverse.",
      "Prototipamos en días, no en meses, con stack moderno (Next.js, bases de datos escalables, IA integrada de fábrica).",
      "Conectamos el producto a modelos de lenguaje donde agregan valor real: búsqueda, generación de contenido, soporte.",
      "Entregamos con infraestructura lista para escalar (Vercel, monitoreo, CI/CD) desde el día uno.",
    ],
    stats: [
      { value: "3x", label: "más rápido a producción" },
      { value: "99.9%", label: "uptime en infraestructura" },
      { value: "0", label: "deuda técnica heredada" },
    ],
    quote: {
      text: "Pasamos de una idea en una reunión a un producto en producción en menos de dos meses.",
      author: "Fundador",
      role: "Startup de salud digital",
    },
    fomo: "Un producto digital que tarda 6 meses en salir ya nació viejo: la competencia que lanza en 6 semanas está iterando con datos reales mientras vos seguís en planos. La velocidad de lanzamiento hoy es la ventaja competitiva, no un detalle técnico.",
  },
  {
    title: "Automatización de Procesos (RPA + IA)",
    description:
      "Conexión de sistemas legacy con APIs de IA para eliminar tareas repetitivas sin reescribir tu infraestructura actual.",
    impact: "+40 horas semanales liberadas de tareas repetitivas.",
    icon: Workflow,
    howItWorks: [
      "Auditamos tus sistemas legacy sin pedirte que los reemplaces — nos conectamos por API, RPA o ambos.",
      "Clasificamos y priorizamos qué procesos liberan más horas por menor esfuerzo de integración.",
      "Sumamos IA generativa donde el proceso requiere criterio, no solo repetición (clasificar, validar, redactar).",
      "Documentamos cada automatización para que tu equipo la entienda y la audite, sin caja negra.",
    ],
    stats: [
      { value: "+40 hs", label: "semanales liberadas" },
      { value: "0", label: "reemplazo de sistemas existentes" },
      { value: "48 hs", label: "para el primer proceso automatizado" },
    ],
    quote: {
      text: "Liberamos 40 horas semanales del equipo de administración sin tocar el ERP que ya usábamos hace 10 años.",
      author: "Gerente de Administración",
      role: "Industria logística",
    },
    fomo: "Las tareas repetitivas no escalan con vos: cada nuevo cliente o pedido pide más horas del mismo tipo. Las empresas que automatizan ahora liberan ese tiempo para crecer; las que no, contratan más gente para hacer lo mismo — y ese costo se acumula mes a mes.",
  },
];

export const CONTACT_SERVICE_OPTIONS = [
  { value: "chatbots", label: "Chatbots" },
  { value: "agentes-ia", label: "Agentes IA" },
  { value: "desarrollo-web", label: "Desarrollo Web" },
  { value: "otro", label: "Otro" },
] as const;

export type ContactFieldErrors = Partial<
  Record<"name" | "company" | "email" | "service" | "message", string>
>;

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string;
  fieldErrors?: ContactFieldErrors;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};

export type Project = {
  title: string;
  sector: string;
  painPoint: string;
  solutionShort: string;
  resultMetric: string;
  stack: string[];
  metricValue: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  quote: Quote;
  fomo: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Soporte al Cliente 24/7",
    sector: "E-commerce & Retail",
    painPoint:
      "El equipo respondía cada consulta de stock y envíos a mano, con esperas de hasta 4 horas en fechas pico.",
    solutionShort:
      "Agente conversacional con RAG conectado al catálogo real, escalando a humano solo en casos de excepción.",
    resultMetric:
      "Pasaron de 4 horas a 12 segundos en la primera respuesta al cliente.",
    stack: ["Next.js", "LangChain", "OpenAI API", "PostgreSQL"],
    metricValue: "-65%",
    metricLabel: "tiempo de primera respuesta",
    challenge:
      "El equipo de atención al cliente respondía manualmente cada consulta de stock, envío y devoluciones, con picos de espera de hasta 4 horas en fechas de alta demanda.",
    solution:
      "Implementamos un agente conversacional con RAG conectado en tiempo real al catálogo y las políticas de la tienda, escalando a un humano solo en casos de excepción o reclamos sensibles.",
    results: [
      "Primera respuesta en segundos, las 24 horas, los 7 días",
      "El equipo humano se enfocó solo en casos complejos",
      "Cero consultas de stock perdidas por falta de disponibilidad del equipo",
    ],
    timeline: "En producción hace 8 meses, con más de 50.000 conversaciones resueltas.",
    quote: {
      text: "Dejamos de perder ventas los fines de semana. El bot vende mientras dormimos.",
      author: "Head of E-commerce",
      role: "Retail online",
    },
    fomo: "Cada consulta sin responder en horario pico es una venta que se va al competidor que sí contesta rápido. Este cliente lo resolvió antes de la temporada alta — el que espera a que le pase, la pierde una vez y ya es tarde.",
  },
  {
    title: "Agente de Cobranza Inteligente",
    sector: "Fintech B2B",
    painPoint:
      "La cartera vencida crecía porque el equipo no llegaba a contactar a tiempo a todos los clientes morosos.",
    solutionShort:
      "Agente que negocia planes de pago y escala por WhatsApp y email según el historial de cada cliente.",
    resultMetric:
      "Pasaron de dar por perdida esa cartera a recuperar un 38% más, sin sumar una sola persona.",
    stack: ["Python", "RAG", "Twilio", "Supabase"],
    metricValue: "+38%",
    metricLabel: "recupero de cartera",
    challenge:
      "La cartera vencida crecía porque el equipo de cobranzas no llegaba a contactar a tiempo a todos los clientes morosos, y el seguimiento manual era inconsistente.",
    solution:
      "Automatizamos recordatorios, negociación de planes de pago y escalamiento por WhatsApp y email con un agente que decide el tono y el canal según el historial de cada cliente.",
    results: [
      "Contacto automático dentro de las primeras 24 horas de mora",
      "Planes de pago negociados sin intervención humana en el 60% de los casos",
      "Escalamiento automático a un asesor humano en cuentas de alto riesgo",
    ],
    timeline: "En producción hace 5 meses, procesando más de 3.000 cuentas por mes.",
    quote: {
      text: "Recuperamos cartera que ya dábamos por perdida, sin sumar una sola persona al equipo.",
      author: "CFO",
      role: "Fintech B2B",
    },
    fomo: "Cada día de mora sin gestionar reduce la probabilidad de cobro. Mientras vos programás la próxima reunión para revisar el proceso de cobranza, esta empresa ya automatizó el primer contacto — y esa ventana de 24 horas no vuelve.",
  },
  {
    title: "Plataforma de Turnos con IA",
    sector: "Salud Digital",
    painPoint:
      "3 de cada 10 turnos se perdían por ausentismo, con recordatorios manuales por teléfono.",
    solutionShort:
      "Reserva con confirmación proactiva y reprogramación automática vía agente conversacional.",
    resultMetric:
      "Pasaron de 30% de ausentismo a solo un 9%, recuperando esa facturación todos los meses.",
    stack: ["Next.js", "React Three Fiber", "Stripe", "Vercel"],
    metricValue: "-70%",
    metricLabel: "ausentismo a citas",
    challenge:
      "El ausentismo a citas médicas superaba el 30%, con recordatorios manuales por teléfono que consumían horas del personal administrativo.",
    solution:
      "Construimos una plataforma de reserva con confirmación proactiva y reprogramación automática vía agente conversacional, integrada al calendario de cada profesional.",
    results: [
      "Recordatorios automáticos por WhatsApp 48 y 2 horas antes del turno",
      "Reprogramación sin llamar al consultorio",
      "Panel en tiempo real para el equipo administrativo",
    ],
    timeline: "En producción hace 10 meses, en 4 sedes.",
    quote: {
      text: "Los turnos vacíos por olvido casi desaparecieron. Eso es facturación que antes se perdía todos los días.",
      author: "Directora Médica",
      role: "Red de clínicas",
    },
    fomo: "Cada turno vacío por ausentismo es un costo fijo que ya pagaste (profesional, sala, tiempo) sin ingreso a cambio. Las clínicas que siguen recordando turnos por teléfono están financiando ese hueco todos los meses sin darse cuenta.",
  },
  {
    title: "RPA + IA para Logística",
    sector: "Logística Industrial",
    painPoint:
      "Cada orden de compra se clasificaba y cargaba a mano en un ERP de más de 15 años, con errores constantes.",
    solutionShort:
      "Conectamos el ERP legacy con IA generativa para clasificar, validar y despachar sin reemplazar nada.",
    resultMetric:
      "Pasaron de cargar órdenes a mano a liberar más de 40 horas semanales del equipo administrativo.",
    stack: ["n8n", "Python", "APIs ERP", "IA Generativa"],
    metricValue: "+40 hs",
    metricLabel: "semanales liberadas",
    challenge:
      "Cada orden de compra se clasificaba y cargaba a mano desde un ERP de más de 15 años, generando errores y demoras en el despacho.",
    solution:
      "Conectamos el ERP legacy con APIs de IA generativa para clasificar, validar y despachar órdenes automáticamente, sin reemplazar el sistema existente.",
    results: [
      "Clasificación automática de órdenes con validación de datos en tiempo real",
      "Reducción drástica de errores de carga manual",
      "Equipo administrativo redirigido a excepciones, no a carga de datos",
    ],
    timeline: "En producción hace 7 meses, procesando cientos de órdenes por semana.",
    quote: {
      text: "Nadie quería tocar ese ERP. La IA lo conectó por afuera sin romper nada.",
      author: "Gerente de Sistemas",
      role: "Logística industrial",
    },
    fomo: "Los sistemas legacy no son la excusa para no automatizar — son la razón por la que la mayoría no lo intenta. Las empresas que siguen esperando 'el proyecto grande de migración' pierden años; esta automatizó por afuera del ERP en semanas.",
  },
];

export type Demo = {
  category: string;
  name: string;
  description: string;
  visual: ComponentType;
  features: string[];
  stats: Stat[];
  quote: Quote;
  fomo: string;
};

export const DEMOS: Demo[] = [
  {
    category: "Chatbot Conversacional",
    name: "Andes Repuestos",
    description: "Atención al cliente 24/7 con respuesta instantánea de stock y precios.",
    visual: ChatbotDemoVisual,
    features: [
      "Consulta de stock y precios en tiempo real contra el sistema de inventario",
      "Toma de pedidos completa dentro del chat, sin salir a otra pantalla",
      "Escalamiento automático a un vendedor humano ante reclamos o pedidos especiales",
      "Funciona en WhatsApp y en el chat web con la misma memoria de conversación",
    ],
    stats: [
      { value: "24/7", label: "atención sin pausas" },
      { value: "3 seg", label: "promedio de respuesta" },
      { value: "+120", label: "pedidos cerrados por chat al mes" },
    ],
    quote: {
      text: "Antes perdíamos ventas después de las 18hs. Ahora el bot factura mientras el local está cerrado.",
      author: "Dueño",
      role: "Andes Repuestos",
    },
    fomo: "Un cliente que pregunta por un repuesto a las 22hs no espera hasta mañana: le pregunta a otro proveedor. Cada hora sin atención automatizada es una venta que se está yendo ahora mismo a la competencia que sí responde.",
  },
  {
    category: "Agente de IA Autónomo",
    name: "Vitalia Salud",
    description: "Gestiona turnos, confirma disponibilidad y envía recordatorios sin intervención humana.",
    visual: AgentDemoVisual,
    features: [
      "Recibe la solicitud de turno por WhatsApp y verifica disponibilidad en tiempo real",
      "Confirma el turno y bloquea el horario en el calendario del profesional",
      "Envía recordatorios automáticos para reducir el ausentismo",
      "Reprograma o cancela sin que nadie de recepción intervenga",
    ],
    stats: [
      { value: "-70%", label: "ausentismo a turnos" },
      { value: "0", label: "llamados manuales de confirmación" },
      { value: "4", label: "sedes operando con el mismo agente" },
    ],
    quote: {
      text: "Recepción dejó de perder la mañana confirmando turnos por teléfono. El agente lo hace solo.",
      author: "Directora Médica",
      role: "Vitalia Salud",
    },
    fomo: "Cada turno que se cae por olvido es un espacio de agenda que ya no se recupera ese día. Las clínicas que automatizan la confirmación llenan esos huecos antes de que existan; las que no, los descubren cuando el paciente no llega.",
  },
  {
    category: "Desarrollo Web Dinámico",
    name: "Construred",
    description: "Panel de gestión de obras en tiempo real conectado a la operación.",
    visual: WebDemoVisual,
    features: [
      "Dashboard en tiempo real con el estado de cada obra activa",
      "Métricas de avance conectadas directamente a los partes diarios de campo",
      "Alertas automáticas cuando una obra se desvía del cronograma",
      "Accesible desde el celular para los jefes de obra en terreno",
    ],
    stats: [
      { value: "18", label: "obras monitoreadas en simultáneo" },
      { value: "72%", label: "avance promedio visible en vivo" },
      { value: "-50%", label: "reportes manuales en Excel" },
    ],
    quote: {
      text: "Antes nos enterábamos de un atraso dos semanas tarde. Ahora lo vemos el mismo día.",
      author: "Gerente de Proyectos",
      role: "Construred",
    },
    fomo: "Una obra que se atrasa y nadie lo nota a tiempo cuesta multiplicado: horas extra, materiales parados, plazos incumplidos. Las constructoras que ya visualizan su operación en tiempo real corrigen el rumbo en días; las que siguen con Excel, lo descubren cuando ya es tarde y caro.",
  },
];
