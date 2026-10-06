import Image from "next/image";
import { withBase } from "@/lib/path";

const pillars = [
  {
    title: "Enfoque",
    body: "El foco no es encerrarse. Es un tiempo propio: mesa, luz y silencio cuando lo necesitas — sin el ruido de casa ni el protocolo de una oficina.",
  },
  {
    title: "Pausa",
    body: "A las 11:30, Café a la fresca. Lo que vale suele pasar entre tareas: una charla, una visita, una perspectiva que no estaba en el calendario.",
  },
  {
    title: "Libertad",
    body: "Tejemos redes sin networking forzado. Quien entra no tiene que venderse: hay mesa, hay tiempo, y libertad para que ocurran cosas.",
  },
];

const bridges = [
  {
    title: "De la ciudad a la aldea",
    cta: "También el coworking de Anceu",
    href: "https://anceu.com/",
    image: "/photos/anceu-coworking.jpg",
    alt: "Personas trabajando en el coworking de Anceu Coliving, en la aldea",
    objectPosition: "object-[center_45%]",
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
    image: "/photos/echn-otro-espacio.jpg",
    alt: "Arroelo en otro hub: trabajo compartido en un espacio de la red creativa europea",
    objectPosition: "object-[center_40%]",
  },
  {
    title: "Con Rural Hackers",
    cta: "Tecnología y aldea, la misma red",
    href: "https://www.ruralhackers.com/",
    image: "/photos/rural-hackers-tech.jpg",
    alt: "Taller de Rural Hackers: reparar y hackear tecnología al aire libre en la aldea",
    objectPosition: "object-[center_40%]",
  },
];

export function Espacio() {
  return (
    <section
      id="espacio"
      className="relative z-10 bg-fog px-6 py-120 md:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="text-caption text-graphite/70">El salón</p>
        <h2 className="mt-5 max-w-[16ch] text-heading-lg text-ink">
          Un espacio abierto donde inspirarte con otras personas.
        </h2>
        <p className="mt-8 max-w-2xl text-body-lg text-ink/70">
          Nosotras abrimos el salón cada mañana en el centro de Pontevedra.
          Ni casa, ni oficina: foco cuando hace falta, pausa cuando el día lo
          pide, y libertad para que ocurran visitas, ideas y redes.
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
              src={withBase("/photos/croissants-charla.jpg")}
              alt="Pausa a las 11:30: tazas de café, croissants y charla en la mesa"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
            <Image
              src={withBase("/photos/ig-grupo-pie.jpg")}
              alt="Comunidad de Arroelo: un grupo de coworkers juntas en el salón"
              fill
              className="object-cover object-[center_35%]"
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
