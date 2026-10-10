import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { plans } from "@/data/tarifas";
import { withBase } from "@/lib/path";
import { jsonLdHtml, ORGANIZATION_ID, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tarifas — Coworking en Pontevedra | Arroelo",
  description:
    "Jornada completa, sala exclusiva, media jornada y bonos de días sueltos. Tarifas claras de coworking en el centro de Pontevedra.",
  path: "/tarifas",
  ogDescription:
    "Jornada completa, sala exclusiva, media jornada y bonos de días sueltos. Sin letra pequeña.",
});

const linkClass =
  "underline decoration-terracotta/55 underline-offset-[0.18em] decoration-1 transition-colors hover:text-terracotta hover:decoration-terracotta";


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

const offersJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Tarifas de coworking — Espacio Arroelo",
  url: absoluteUrl("/tarifas"),
  provider: { "@id": ORGANIZATION_ID },
  itemListElement: plans.flatMap((plan) =>
    plan.prices.map((price) => ({
      "@type": "Offer",
      name:
        plan.prices.length > 1 ? `${plan.title} — ${price.label}` : plan.title,
      description: plan.tagline,
      url: absoluteUrl(`/tarifas#${plan.id}`),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: Number.parseFloat(price.amount),
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
        ...(price.note.includes("mes") ? { unitText: "mes" } : {}),
      },
      seller: { "@id": ORGANIZATION_ID },
    })),
  ),
};

export default function TarifasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(offersJsonLd) }}
      />
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
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-y-16 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
            <div className="min-w-0 reveal reveal-delay-1">
              <h2
                id="incluido-todas"
                className="text-espacio-intro-title text-ink"
              >
                Incluido en todas las tarifas
              </h2>
              <p className="mt-2 max-w-[36ch] text-espacio-intro-body text-ink/70">
                Lo que comparten las cuatro formas de estar en Arroelo.
              </p>
              <ul className="tarifa-feature-list mt-12 max-w-[42ch] md:mt-16">
                {includedAll.map((item) => (
                  <li key={item.id} className="tarifa-feature-item">
                    <span className="text-body text-ink">{item.content}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 reveal reveal-delay-2 md:pt-1">
              <div className="relative mb-10 aspect-[3/2] overflow-hidden rounded-none bg-mist">
                <Image
                  src={withBase("/photos/tarifas-prueba-anceu.jpg")}
                  alt="Coworker con portátil junto a la piscina turquesa de Anceu, en una casa de piedra rural"
                  fill
                  className="object-cover object-[center_45%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-label text-graphite/70">Pruébalo</p>
              <h2 className="mt-5 text-espacio-intro-title text-ink">
                Primera semana sin coste
              </h2>
              <p className="mt-2 max-w-[36ch] text-espacio-intro-body text-ink/70">
                Sin compromiso. Escribe y te contamos qué tarifa encaja.
              </p>
              <Link href="/#contacto" className="btn btn-ink mt-10">
                Contactar
              </Link>
              <p className="mt-6 text-body text-ink/60">
                ¿Dudas sobre horarios, salas o mascotas?{" "}
                <Link href="/faq" className={linkClass}>
                  Preguntas frecuentes
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
