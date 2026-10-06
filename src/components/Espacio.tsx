import Image from "next/image";
import { withBase } from "@/lib/path";

const pillars = [
  {
    title: "Enfoque",
    body: "No vendemos m²: vendemos luz natural, ergonomía y silencio productivo.",
  },
  {
    title: "Pausa",
    body: "A las 11:30, Café a la fresca. Las mejores sinergias ocurren en la mesa.",
  },
  {
    title: "Hogar intacto",
    body: "Devuélvele a tu casa su función de descanso. Ven a Arroelo a ser profesional.",
  },
];

const bridges = [
  {
    title: "De la ciudad a la aldea",
    cta: "Trabaja desde Anceu",
    href: "https://anceu.com/",
    image: "/photos/mural-anceu.jpg",
    alt: "Mural y comunidad en Anceu, puente entre ciudad y aldea",
    objectPosition: "object-[center_40%]",
  },
  {
    title: "Con ideas y perspectivas",
    cta: "Ven a Café a la fresca",
    href: "#cafe",
    image: "/photos/cafe-comunidad.jpg",
    alt: "Comunidad de Arroelo alrededor de la mesa del Café a la fresca",
    objectPosition: "object-[center_45%]",
  },
  {
    title: "De Galicia para el mundo",
    cta: "Descubre ECHN",
    href: "https://creativehubs.net/",
    image: "/photos/comunidad-aldea.jpg",
    alt: "Grupo de la red gallega sonriendo frente a una casa de piedra",
    objectPosition: "object-[center_40%]",
  },
  {
    title: "Con arte y tecnología",
    cta: "Conoce Rural Hackers",
    href: "https://www.ruralhackers.com/",
    image: "/photos/rural-hackers.jpg",
    alt: "Rural Hackers junto a un mural en el bosque",
    objectPosition: "object-[center_45%]",
  },
];

export function Espacio() {
  return (
    <section id="espacio" className="bg-fog px-6 py-120 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-caption text-graphite/70">El salón</p>
        <h2 className="mt-5 max-w-[16ch] text-heading-lg text-ink">
          Un tercer tiempo entre casa y oficina
        </h2>
        <p className="mt-8 max-w-2xl text-body-lg text-ink/70">
          En el centro de Pontevedra — Rúa Cobián Roffignac, tercer piso —
          las mañanas huelen a café y a lluvia fina contra los cristales.
          Ni el caos de la cocina, ni el frío de un cubículo: un entorno
          cozy y productivo para perfiles +35 — con una mesa donde se cruzan
          generaciones.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
            <Image
              src={withBase("/photos/salon-ventana.jpg")}
              alt="Salón de Arroelo con luz natural, mesa de madera y vista a la ciudad"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4] md:mt-10">
            <Image
              src={withBase("/photos/desayuno.jpg")}
              alt="Desayuno compartido: fruta, café y conversación en la mesa"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
            <Image
              src={withBase("/photos/salon-trabajo.jpg")}
              alt="Dos personas trabajando en el salón, con la piedra de Pontevedra al fondo"
              fill
              className="object-cover object-[center_45%]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-ink/10 pt-12 md:grid-cols-3 md:gap-10">
          {pillars.map((item) => (
            <div key={item.title}>
              <h3 className="text-heading-sm text-ink">{item.title}</h3>
              <p className="mt-3 text-body text-ink/65">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 border-t border-ink/10 pt-12 sm:grid-cols-2">
          {bridges.map((item) => (
            <a
              key={item.title}
              href={item.href}
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Image
                src={withBase(item.image)}
                alt={item.alt}
                fill
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${item.objectPosition}`}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3 className="text-heading-sm text-paper">{item.title}</h3>
                <p className="mt-2 text-body text-cream/90 transition-colors group-hover:text-terracotta">
                  {item.cta}
                  <span
                    aria-hidden
                    className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
