import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo rootbusinessai recopila, usa y protege tus datos.",
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-40">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
        Legal
      </span>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Política de Privacidad
      </h1>
      <p className="mt-3 text-sm text-subtle">
        Última actualización: 28 de agosto de 2026
      </p>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            1. Qué datos recopilamos
          </h2>
          <p>
            Este sitio no usa cookies de seguimiento ni herramientas de
            analítica de terceros. El único dato personal que recopilamos es
            el que ingresás voluntariamente en el{" "}
            <strong className="text-white">formulario de contacto</strong>:
            nombre, empresa, correo electrónico, servicio de interés y el
            mensaje que escribís.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            2. Para qué los usamos
          </h2>
          <p>
            Usamos esos datos únicamente para responder tu consulta,
            coordinar una consultoría inicial y, si avanzamos, elaborar una
            propuesta comercial. No los vendemos, alquilamos ni compartimos
            con terceros para fines de marketing.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            3. Dónde se almacenan
          </h2>
          <p>
            Las solicitudes del formulario se procesan de forma segura y se
            registran en una herramienta de gestión de datos de Google
            (Google Sheets) para que podamos hacerles seguimiento. El acceso
            a esa planilla está restringido a rootbusinessai.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            4. Tus derechos
          </h2>
          <p>
            Podés pedirnos en cualquier momento que te contemos qué datos
            tuyos tenemos registrados, que los corrijamos o que los
            eliminemos por completo. Alcanza con escribirnos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            5. Cambios en esta política
          </h2>
          <p>
            Si cambiamos cómo tratamos tus datos, vamos a actualizar esta
            página y la fecha de &quot;última actualización&quot; arriba.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-white">
            6. Contacto
          </h2>
          <p>
            Para cualquier consulta sobre tus datos o esta política,
            escribinos a{" "}
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
