const ALLIES = ["Andes Repuestos", "Vitalia Salud", "Construred"];

/** Barra de marcas reales con casos en producción, en escala de grises para no competir con el resto de la sección. */
export default function LogoStrip() {
  return (
    <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4">
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
        Ya confían en estos sistemas
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {ALLIES.map((name) => (
          <span
            key={name}
            className="text-sm font-semibold uppercase tracking-wide text-white/35 grayscale transition-colors duration-300 hover:text-white/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
