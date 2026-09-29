/**
 * Copy grounded in «El hilo de Aroelo» (África Rodríguez) — Drive.
 */
export function Filosofia() {
  return (
    <section id="filosofia" className="relative overflow-hidden bg-deep-teal px-6 py-120 text-paper md:px-10">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,132,90,0.18),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-[900px] text-center">
        <p className="text-caption text-cream/70">Cómo se vive</p>
        <blockquote className="mt-8 text-heading-lg text-balance">
          «Aquí no alquilamos sillas. Tejemos redes.»
        </blockquote>
        <p className="mx-auto mt-8 max-w-2xl text-body-lg text-paper/75">
          Cuando alguien nuevo empuja la puerta, no preguntamos qué hace ni
          cuánto factura. Preguntamos:{" "}
          <em className="text-cream not-italic">«¿Qué te apetece aprender?»</em>{" "}
          — así nace la #arroeloverfamily, con constancia y café recién hecho.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-body text-paper/55">
          Del cuento «El hilo de Aroelo», por África Rodríguez.
        </p>
      </div>
    </section>
  );
}
