import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description: "Términos y condiciones de uso del sitio y los servicios de rootbusinessai.",
};

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-40">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
        Legal
      </span>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Términos de Servicio
      </h1>
      <p className="mt-3 text-sm text-subtle">
        Última actualización: 28 de agosto de 2026
      </p>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            1. Aceptación de estos términos
          </h2>
          <p>
            Al acceder o utilizar este sitio (rootbusinessai.vercel.app),
            aceptás estos Términos de Servicio. Si no estás de acuerdo, te
            pedimos que no utilices el sitio.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            2. Sobre rootbusinessai
          </h2>
          <p>
            rootbusinessai es una agencia que desarrolla soluciones de IA
            agéntica, chatbots conversacionales, automatización de procesos
            (RPA + IA) y desarrollo web fullstack a medida para PyMEs y
            empresas. Este sitio tiene fines informativos y comerciales: dar
            a conocer nuestros servicios y facilitar el contacto con
            potenciales clientes.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            3. Contenido del sitio
          </h2>
          <p>
            Las secciones de Servicios, Casos de Éxito y Demos describen
            nuestra oferta y capacidades técnicas. Los Casos de Éxito
            resumen proyectos reales sin identificar clientes específicos
            (por confidencialidad); la sección de Demos muestra
            demostraciones ilustrativas de funcionalidad, no resultados
            verificados de un cliente en particular. Nada en este sitio
            constituye una garantía de resultados específicos para tu
            negocio: cada proyecto se cotiza y define en una consultoría
            inicial.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            4. Formulario de contacto
          </h2>
          <p>
            Al completar el formulario de contacto, nos autorizás a
            utilizar los datos provistos (nombre, empresa, correo
            electrónico, servicio de interés y mensaje) exclusivamente para
            responder tu consulta y, si corresponde, avanzar en una
            propuesta comercial. Ver el detalle en nuestra{" "}
            <a
              href="/privacidad"
              className="text-primary-glow underline underline-offset-2 hover:text-white"
            >
              Política de Privacidad
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            5. Propiedad intelectual
          </h2>
          <p>
            El diseño, la marca rootbusinessai y el contenido original de
            este sitio son propiedad de rootbusinessai. No está permitida su
            reproducción sin autorización previa.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            6. Cambios en estos términos
          </h2>
          <p>
            Podemos actualizar estos términos ocasionalmente. La fecha de
            &quot;última actualización&quot; arriba refleja la versión
            vigente.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            7. Contacto
          </h2>
          <p>
            Ante cualquier consulta sobre estos términos, escribinos a{" "}
            <a
              href="mailto:julianfalvo@gmail.com"
              className="text-primary-glow underline underline-offset-2 hover:text-white"
            >
              julianfalvo@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
