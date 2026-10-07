import Image from "next/image";
import { withBase } from "@/lib/path";

const coworking = [
  "Mesa en espacio compartido",
  "Jornada completa, sin permanencia",
  "Fibra óptica 1 Giga",
  "Acceso 24 horas",
  "3 salas de reunión con pantalla 4K",
  "Todos los gastos incluidos",
];

const sala = [
  "Espacio privado para tu equipo",
  "Fibra 1 Giga",
  "Acceso 24 horas",
  "3 salas de reunión con pantalla 4K",
  "Todos los gastos incluidos",
];

const plans = [
  {
    title: "Coworking",
    price: "200€",
    priceNote: "+ IVA / mes",
    tagline: "Mesa en espacio compartido, jornada completa.",
    image: "/photos/coworker-ventana-verde.jpg",
    alt: "Coworker en su puesto junto a la ventana, con luz natural",
    objectPosition: "object-[center_30%]",
    features: coworking,
    cta: { label: "Reservar semana de prueba", className: "btn btn-ink" },
  },
  {
    title: "Sala exclusiva",
    price: "400€",
    priceNote: "+ IVA / mes",
    tagline: "Tu propia sala dentro de Arroelo.",
    image: "/photos/entrada-puerta-abierta.jpg",
    alt: "Puerta abierta a una sala de trabajo con luz en Espacio Arroelo",
    objectPosition: "object-[center_45%]",
    features: sala,
    cta: { label: "Consultar disponibilidad", className: "btn btn-primary" },
  },
] as const;

export function Tarifa() {
  return (
    <section id="tarifa" className="bg-paper py-120">
      {/* Editorial intro — Arc /process left-aligned, not centered cards */}
      <div className="px-4 md:px-6">
        <div className="max-w-[42ch] md:max-w-[50%]">
          <p className="text-label text-graphite/70">Sin letra pequeña</p>
          <h2 className="mt-4 text-espacio-intro-title text-ink">
            Dos formas de estar en Arroelo
          </h2>
          <p className="mt-2 text-espacio-intro-body text-ink/70">
            Más de 10 años de coworking en Pontevedra.
          </p>
        </div>
      </div>

      {/* Arc features_wrap: two wide columns, title → image → price + copy → list */}
      <div className="mt-16 px-4 sm:mt-20 md:mt-24 md:px-6">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 lg:gap-y-20">
          {plans.map((plan) => (
            <article key={plan.title} className="min-w-0">
              <h3 className="text-heading text-ink">{plan.title}</h3>

              <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-none bg-mist">
                <Image
                  src={withBase(plan.image)}
                  alt={plan.alt}
                  fill
                  className={`object-cover ${plan.objectPosition}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="mt-6 max-w-[30ch]">
                <p className="text-heading-sm text-ink">
                  {plan.price}
                  <span className="ml-2 text-body-lg font-normal text-ink/55">
                    {plan.priceNote}
                  </span>
                </p>
                <p className="mt-3 text-body-lg text-ink/65">{plan.tagline}</p>
              </div>

              <ul className="tarifa-feature-list mt-10 max-w-[36ch]">
                {plan.features.map((line) => (
                  <li key={line} className="tarifa-feature-item">
                    <span className="text-body text-ink">{line}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className={`${plan.cta.className} mt-10`}>
                {plan.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
