import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { withBase } from "@/lib/path";

export const metadata: Metadata = {
  title: "Tarifas — Coworking en Pontevedra | Arroelo",
  description:
    "Jornada completa, sala exclusiva, media jornada y bonos de días sueltos. Tarifas claras de coworking en el centro de Pontevedra.",
  alternates: {
    canonical: "/tarifas",
  },
  openGraph: {
    title: "Tarifas — Coworking en Pontevedra | Arroelo",
    description:
      "Jornada completa, sala exclusiva, media jornada y bonos de días sueltos. Sin letra pequeña.",
    type: "website",
    locale: "es_ES",
    url: "/tarifas",
  },
};

const linkClass =
  "underline decoration-terracotta/55 underline-offset-[0.18em] decoration-1 transition-colors hover:text-terracotta hover:decoration-terracotta";

const plans = [
  {
    id: "jornada-completa",
    title: "Jornada completa",
    tagline:
      "Mesa exclusiva en espacio compartido, en jornada completa con acceso 24/7.",
    notes: ["Horario ilimitado de reserva de salas de reunión."] as const,
    image: "/photos/sala-puestos.jpg",
    alt: "Coworker concentrado en su puesto de trabajo con luz natural",
    objectPosition: "object-[center_40%]",
    prices: [
      {
        label: "Coworking",
        amount: "200 €",
        note: "+ IVA / mes",
      },
    ],
    features: [] as const,
    cta: { label: "Reservar semana de prueba", className: "btn btn-ink" },
  },
  {
    id: "sala-exclusiva",
    title: "Sala exclusiva",
    tagline:
      "Tu propia sala dentro de Arroelo. Un espacio privado para tu equipo con acceso 24 horas.",
    notes: ["Horario ilimitado de reserva de salas de reunión."] as const,
    image: "/photos/tarifa-sala-exclusiva.jpg",
    alt: "Sala exclusiva con cuatro puestos enfrentados, sillas de oficina, ventana con cortinas y estantería blanca",
    objectPosition: "object-[center_40%]",
    prices: [
      {
        label: "Sala privada",
        amount: "400 €",
        note: "+ IVA / mes",
      },
    ],
    features: [] as const,
    cta: { label: "Consultar disponibilidad", className: "btn btn-primary" },
  },
  {
    id: "media-jornada",
    title: "Media jornada",
    tagline:
      "Si trabajas en casa por la mañana y por la tarde te apetece cambiar de aire —o a la inversa—, aquí tienes sitio.",
    notes: [
      "8 horas de reserva de sala de reunión semanal.",
      "No se pueden dejar cosas en la mesa: el puesto no es permanente.",
    ] as const,
    image: "/photos/ig-puestos-luz.jpg",
    alt: "Puestos de trabajo junto a la ventana con luz natural",
    objectPosition: "object-[center_40%]",
    prices: [
      {
        label: "Mañanas · 8:00–15:00",
        amount: "110 €",
        note: "+ IVA / mes",
      },
      {
        label: "Tardes · 15:00–22:00",
        amount: "90 €",
        note: "+ IVA / mes",
      },
    ],
    features: [] as const,
    cta: { label: "Consultar media jornada", className: "btn btn-ink" },
  },
  {
    id: "bono-salon",
    title: "Bonos días sueltos",
    tagline:
      "Para quien teletrabaja dos o tres días a la semana o pasa una temporada en Pontevedra y quiere salir de casa y desconectar. Podrás trabajar desde nuestro salón.",
    notes: [
      "No hay derecho a reserva de salas de reunión.",
      "No se pueden dejar cosas en la mesa: el puesto no es permanente.",
    ] as const,
    image: "/photos/salon-dos-coworkers.jpg",
    alt: "Dos coworkers trabajando con portátil en la mesa del salón",
    objectPosition: "object-[center_45%]",
    prices: [
      {
        label: "Bono 10 días",
        amount: "100 €",
        note: "+ IVA",
      },
      {
        label: "Bono 20 días",
        amount: "180 €",
        note: "+ IVA",
      },
    ],
    features: [] as const,
    cta: { label: "Pedir un bono", className: "btn btn-primary" },
  },
] as const;

const includedAll: { id: string; content: ReactNode }[] = [
  { id: "permanencia", content: "Sin permanencia" },
  { id: "fibra", content: "Fibra óptica 1 Giga" },
  { id: "gastos", content: "Todos los gastos incluidos" },
  {
    id: "anceu",
    content: (
      <>
        Acceso gratuito al coworking de{" "}
        <a
          href="https://anceu.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Anceu Coliving
        </a>
      </>
    ),
  },
  {
    id: "cafe",
    content:
      "Ser parte de las actividades privadas (Café a la fresca) y del WhatsApp de la comunidad",
  },
  {
    id: "echn",
    content: (
      <>
        Ser parte de las redes de Arroelo como{" "}
        <Link
          href="/blog/coworking-pontevedra-echn-arroelo"
          className={linkClass}
        >
          ECHN
        </Link>
      </>
    ),
  },
];

export default function TarifasPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <header className="bg-fog px-4 pt-8 pb-16 md:px-6 md:pt-10 md:pb-20">
          <div className="max-w-[42ch] md:max-w-[50%]">
            <p className="reveal text-label text-graphite/70">Sin letra pequeña</p>
            <h1 className="reveal reveal-delay-1 mt-4 text-espacio-intro-title text-ink">
              Tarifas
            </h1>
            <p className="reveal reveal-delay-2 mt-2 text-espacio-intro-body text-ink/70">
              Cuatro formas de estar en Arroelo. Más de 10 años de coworking en
              Pontevedra.
            </p>
          </div>
        </header>

        <section
          className="bg-paper px-4 py-120 md:px-6"
          aria-label="Planes de tarifas"
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-[64px] md:grid-cols-2 md:gap-x-12 md:gap-y-120 lg:gap-x-16">
            {plans.map((plan, index) => (
              <article
                key={plan.id}
                id={plan.id}
                className={
                  index % 2 === 0
                    ? "min-w-0 reveal reveal-delay-1"
                    : "min-w-0 reveal reveal-delay-2"
                }
              >
                <h2 className="text-heading !font-bold text-ink">{plan.title}</h2>

                <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-none bg-mist">
                  <Image
                    src={withBase(plan.image)}
                    alt={plan.alt}
                    fill
                    className={`object-cover ${plan.objectPosition}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </div>

                <div
                  className={
                    plan.prices.length > 1
                      ? "mt-6 max-w-[48ch]"
                      : "mt-6 max-w-[34ch]"
                  }
                >
                  <div
                    className={
                      plan.prices.length > 1
                        ? "flex flex-nowrap items-start gap-x-6 sm:gap-x-8"
                        : undefined
                    }
                  >
                    {plan.prices.map((price) => (
                      <div
                        key={price.label}
                        className={
                          plan.prices.length > 1
                            ? "min-w-0 flex-1"
                            : undefined
                        }
                      >
                        <p className="text-label text-graphite/70">
                          {price.label}
                        </p>
                        <p className="mt-1 text-heading-sm text-ink">
                          {price.amount}
                          <span className="ml-2 text-body-lg font-normal text-ink/55">
                            {price.note}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-body-lg text-ink/65">{plan.tagline}</p>
                  {plan.notes.map((line) => (
                    <p key={line} className="mt-3 text-body text-ink/55">
                      {line}
                    </p>
                  ))}
                </div>

                {plan.features.length > 0 ? (
                  <ul className="tarifa-feature-list mt-10 max-w-[36ch]">
                    {plan.features.map((line) => (
                      <li key={line} className="tarifa-feature-item">
                        <span className="text-body text-ink">{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <Link href="/#contacto" className={`${plan.cta.className} mt-10`}>
                  {plan.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          className="bg-fog px-4 py-120 md:px-6"
          aria-labelledby="incluido-todas"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-[42ch] md:max-w-[50%]">
              <h2
                id="incluido-todas"
                className="text-espacio-intro-title text-ink"
              >
                Incluido en todas las tarifas
              </h2>
              <p className="mt-2 text-espacio-intro-body text-ink/70">
                Lo que comparten las cuatro formas de estar en Arroelo.
              </p>
            </div>
            <ul className="tarifa-feature-list mt-12 max-w-[42ch] md:mt-16">
              {includedAll.map((item) => (
                <li key={item.id} className="tarifa-feature-item">
                  <span className="text-body text-ink">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-paper px-4 py-120 md:px-6">
          <div className="max-w-[42ch] md:max-w-[50%]">
            <p className="text-label text-graphite/70">Pruébalo</p>
            <h2 className="mt-4 text-espacio-intro-title text-ink">
              Primera semana sin coste
            </h2>
            <p className="mt-2 text-espacio-intro-body text-ink/70">
              Sin compromiso. Escribe y te contamos qué tarifa encaja.
            </p>
            <Link href="/#contacto" className="btn btn-ink mt-10">
              Contactar
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
