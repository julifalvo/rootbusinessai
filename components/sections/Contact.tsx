import type { SVGProps } from "react";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactCanvas from "@/components/ContactCanvas";
import Reveal from "@/components/Reveal";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.89L2 22l5.24-1.24A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.18c-1.63 0-3.24-.44-4.63-1.27l-.33-.2-3.07.8.82-2.98-.22-.34A8.15 8.15 0 0 1 3.82 12c0-4.52 3.66-8.18 8.18-8.18 4.52 0 8.18 3.66 8.18 8.18 0 4.52-3.66 8.18-8.18 8.18Z" />
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.19.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z" />
    </svg>
  );
}

const QUICK_CONTACTS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5491133415481",
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:julianfalvo@gmail.com",
    icon: Mail,
    external: false,
  },
];

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

          <div className="mt-6 flex flex-wrap gap-3">
            {QUICK_CONTACTS.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-xl transition-colors hover:border-primary-glow/40 hover:text-primary-glow"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-6 text-sm text-subtle">
              O completá el formulario y te respondemos por correo:
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
