import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup";

export default function Portfolio() {
  return (
    <section
      id="casos-de-exito"
      className="scroll-anchor relative px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary-glow">
              Casos de Éxito
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Resultados medibles, no promesas
            </h2>
            <p className="mt-4 text-base text-muted">
              Una muestra de proyectos de agentes de IA, chatbots y
              automatización operando en producción.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <RevealItem key={project.title} className="h-full">
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
