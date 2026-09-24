const includes = [
  "Jornada completa, sin permanencia",
  "Fibra óptica 1 Giga",
  "Acceso 24 horas",
  "Salas de reunión con pantalla 4K",
  "Todos los gastos incluidos",
];

export function Tarifa() {
  return (
    <section id="tarifa" className="bg-paper px-6 py-120 md:px-10">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="text-caption text-graphite/70">Sin letra pequeña</p>
        <h2 className="mt-4 text-heading-lg text-ink">
          Una tarifa. Todo incluido.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-body-lg text-ink/65">
          Más de 10 años de coworking en Pontevedra. La misma claridad de
          siempre.
        </p>

        <div className="mt-14 rounded-3xl-2 bg-fog px-8 py-12 md:px-16">
          <p className="text-display text-ink">
            200€
            <span className="ml-2 text-heading-sm font-normal text-ink/50">
              + IVA / mes
            </span>
          </p>
          <ul className="mx-auto mt-10 max-w-md space-y-3 text-left">
            {includes.map((line) => (
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
            className="mt-10 inline-flex rounded-full bg-ink px-8 py-3.5 text-body font-medium text-paper transition-transform hover:scale-[1.02]"
          >
            Reservar semana de prueba
          </a>
        </div>
      </div>
    </section>
  );
}
