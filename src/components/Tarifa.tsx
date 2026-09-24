const coworking = [
  "Jornada completa, sin permanencia",
  "Fibra óptica 1 Giga",
  "Acceso 24 horas",
  "Salas de reunión con pantalla 4K",
  "Todos los gastos incluidos",
];

const sala = [
  "Espacio privado para tu equipo",
  "IVA incluido en el precio",
  "Fibra 1 Giga y gastos incluidos",
  "Acceso 24 horas",
  "Uso de zonas comunes y Café a la fresca",
];

export function Tarifa() {
  return (
    <section id="tarifa" className="bg-paper px-6 py-120 md:px-10">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="text-caption text-graphite/70">Sin letra pequeña</p>
        <h2 className="mt-4 text-heading-lg text-ink">
          Dos formas de estar en Arroelo
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-body-lg text-ink/65">
          Más de 10 años de coworking en Pontevedra. La misma claridad de
          siempre.
        </p>

        <div className="mt-14 grid gap-6 text-left md:grid-cols-2">
          <article className="rounded-3xl-2 bg-fog px-8 py-12 md:px-10">
            <p className="text-caption text-graphite/60">Coworking</p>
            <p className="mt-4 text-display text-ink">
              200€
              <span className="ml-2 text-heading-sm font-normal text-ink/50">
                + IVA / mes
              </span>
            </p>
            <p className="mt-3 text-body text-ink/60">
              Mesa en el salón, jornada completa.
            </p>
            <ul className="mt-8 space-y-3">
              {coworking.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-body text-ink/75"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                  />
                  {line}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="mt-10 inline-flex rounded-full bg-ink px-7 py-3.5 text-body font-medium text-paper transition-transform hover:scale-[1.02]"
            >
              Reservar semana de prueba
            </a>
          </article>

          <article className="rounded-3xl-2 bg-deep-teal px-8 py-12 text-paper md:px-10">
            <p className="text-caption text-cream/70">Sala exclusiva</p>
            <p className="mt-4 text-display">
              500€
              <span className="ml-2 text-heading-sm font-normal text-paper/55">
                / mes · IVA incluido
              </span>
            </p>
            <p className="mt-3 text-body text-paper/65">
              Tu propia sala dentro de Arroelo.
            </p>
            <ul className="mt-8 space-y-3">
              {sala.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-body text-paper/80"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                  />
                  {line}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="mt-10 inline-flex rounded-full bg-terracotta px-7 py-3.5 text-body font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              Consultar disponibilidad
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
