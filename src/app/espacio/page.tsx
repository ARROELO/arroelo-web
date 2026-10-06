import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { withBase } from "@/lib/path";

export const metadata: Metadata = {
  title: "El espacio — Coworking en Pontevedra | Arroelo",
  description:
    "Un espacio abierto donde suceden cosas: mesas de madera, luz natural, salas de reunión 4K, acceso 24h y Café a la fresca en el centro de Pontevedra.",
};

const amenities = [
  {
    title: "Acceso 24 horas",
    body: "El salón está cuando lo necesitas: de la mañana a la noche.",
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
    title: "Redes, no agenda",
    body: "Más de una década tejiendo redes en Pontevedra — sin networking forzado.",
  },
];

const gallery = [
  {
    src: "/photos/ig-mesa-comunidad.jpg",
    alt: "Mesa larga con gente en el salón de Arroelo",
    wide: true,
  },
  {
    src: "/photos/encuentro-mesa.jpg",
    alt: "Encuentro alrededor de la mesa del salón, con luz de la ventana",
    wide: true,
  },
  {
    src: "/photos/sala-puestos.jpg",
    alt: "Sala de puestos con fibra, monitores y luz de la calle",
  },
  {
    src: "/photos/ig-puestos-ventana.jpg",
    alt: "Puestos de trabajo junto a la ventana con luz natural",
  },
  {
    src: "/photos/comunidad-sonrisas.jpg",
    alt: "Sonrisas alrededor de la mesa del salón",
  },
  {
    src: "/photos/ig-salon-vivo.jpg",
    alt: "Salón vivo: trabajo y taller en las mesas de Arroelo",
    wide: true,
  },
];

export default function EspacioPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <section className="relative min-h-[70svh] overflow-hidden bg-deep-teal text-paper">
          <Image
            src={withBase("/photos/salon-overview.jpg")}
            alt="Interior del salón de Espacio Arroelo con luz natural"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,20,0.45)_0%,rgba(26,24,20,0.72)_100%)]"
          />
          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1100px] flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-24">
            <p className="reveal text-caption text-cream/80">El espacio</p>
            <h1 className="reveal reveal-delay-1 mt-5 max-w-[10ch] text-display">
              El salón
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-lg text-body-lg text-paper/85">
              Un espacio abierto donde suceden cosas. Madera, luz natural y la
              mesa del tercer tiempo — ni casa, ni oficina.
            </p>
          </div>
        </section>

        <section className="bg-fog px-6 py-120 md:px-10">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-caption text-graphite/70">Qué encontrarás</p>
            <h2 className="mt-5 max-w-[16ch] text-heading-lg text-ink">
              Un tercer tiempo entre casa y oficina
            </h2>
            <p className="mt-8 max-w-2xl text-body-lg text-ink/70">
              Nosotras dejamos la luz encendida para quien quiera tejer algo
              más grande. Entrar es sumarse a un salón de personas curiosas —
              foco, pausa y libertad, sin vender metros cuadrados.
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
            <h2 className="mt-5 text-heading-lg text-ink">Así se vive</h2>
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
                    src={withBase(shot.src)}
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
            <h2 className="mt-5 text-heading-lg text-ink">
              Primera semana sin coste
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-body-lg text-ink/70">
              Mesa en el salón o sala exclusiva. Sin permanencia. Ven a
              conocernos en el centro de Pontevedra.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Link href="/#contacto" className="btn btn-ink">
                Contacta
              </Link>
              <Link href="/coworkers" className="btn btn-outline">
                Conocer a quienes están
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
