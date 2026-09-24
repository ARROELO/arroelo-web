import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";

export const metadata: Metadata = {
  title: "El espacio — Coworking en Pontevedra | Arroelo",
  description:
    "Conoce el salón de Espacio Arroelo: mesas de madera, luz natural, salas de reunión 4K, acceso 24h y Café a la fresca en el centro de Pontevedra.",
};

const amenities = [
  {
    title: "Acceso 24 horas",
    body: "Tu hogar desde la mañana a la noche, disponible en cualquier momento.",
  },
  {
    title: "Salas de reunión",
    body: "Para equipos o videollamadas, con pantalla 4K.",
  },
  {
    title: "Fibra 1 Giga",
    body: "Conexión estable y todos los gastos incluidos en la tarifa.",
  },
  {
    title: "Café a la fresca",
    body: "Cada día a las 11:30 paramos. Ideas, visitas y perspectiva.",
  },
  {
    title: "Pet friendly",
    body: "Bienvenidas las mascotas que saben convivir en el salón.",
  },
  {
    title: "Comunidad +35",
    body: "Más de una década tejiendo redes en Pontevedra.",
  },
];

const gallery = [
  {
    src: "/photos/puesto.jpg",
    alt: "Mesa de trabajo con mantel y planta",
    wide: true,
  },
  {
    src: "/photos/salon-mesa.jpg",
    alt: "Mesa redonda del salón",
  },
  { src: "/photos/cafe.jpg", alt: "Cocina comunitaria con luz natural" },
  { src: "/photos/encuentro.jpg", alt: "Café a la fresca en comunidad" },
  {
    src: "/photos/community.jpg",
    alt: "Conversación alrededor de la mesa",
  },
  {
    src: "/photos/salon-luz.jpg",
    alt: "Rincón del espacio con luz",
  },
  {
    src: "/photos/cafe-tabla.jpg",
    alt: "Mesa compartida con fruta y café",
  },
  {
    src: "/photos/pet.jpg",
    alt: "Pet friendly — mascota en el salón",
  },
];

export default function EspacioPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <section className="relative min-h-[70svh] overflow-hidden bg-deep-teal text-paper">
          <Image
            src="/photos/hero.jpg"
            alt="Interior y comunidad de Espacio Arroelo"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,20,0.45)_0%,rgba(26,24,20,0.72)_100%)]"
          />
          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1100px] flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
            <p className="reveal text-caption text-cream/80">El espacio</p>
            <h1 className="reveal reveal-delay-1 mt-4 max-w-[14ch] text-display">
              El salón
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-lg text-body-lg text-paper/85">
              Un coworking en el centro de Pontevedra: madera, luz natural y
              la mesa donde ocurren las ideas.
            </p>
          </div>
        </section>

        <section className="bg-fog px-6 py-120 md:px-10">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-caption text-graphite/70">Qué encontrarás</p>
            <h2 className="mt-4 max-w-[18ch] text-heading-lg text-ink">
              Un tercer tiempo entre casa y oficina
            </h2>
            <p className="mt-6 max-w-2xl text-body-lg text-ink/70">
              Entrar en Espacio Arroelo es formar parte de una comunidad de
              personas curiosas, comprometidas y con ganas de aprender. Desde
              el salón donde damos forma al mundo que queremos.
            </p>

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((item) => (
                <div key={item.title}>
                  <h3 className="text-heading-sm text-ink">{item.title}</h3>
                  <p className="mt-3 text-body text-ink/65">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper px-6 py-120 md:px-10">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-caption text-graphite/70">Galería</p>
            <h2 className="mt-4 text-heading-lg text-ink">Así se vive</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {gallery.map((shot) => (
                <div
                  key={shot.src}
                  className={`relative overflow-hidden rounded-3xl ${
                    shot.wide
                      ? "aspect-[16/10] md:col-span-2"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes={
                      shot.wide
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream px-6 py-120 md:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-caption text-graphite/70">Pruébalo</p>
            <h2 className="mt-4 text-heading-lg text-ink">
              Primera semana sin coste
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-ink/70">
              Mesa en el salón o sala exclusiva. Sin permanencia. Ven a
              conocernos en Cobián Roffignac 6, 3º — Pontevedra.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contacto"
                className="inline-flex rounded-full bg-ink px-8 py-3.5 text-body font-medium text-paper transition-transform hover:scale-[1.02]"
              >
                Reservar semana
              </a>
              <Link
                href="/coworkers"
                className="inline-flex rounded-full border border-ink/20 px-8 py-3.5 text-body text-ink transition-colors hover:border-ink/40"
              >
                Conocer a la familia
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
