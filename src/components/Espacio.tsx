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
  },
  {
    title: "Con ideas y perspectivas",
    cta: "Ven a Café a la fresca",
    href: "#cafe",
  },
  {
    title: "De Galicia para el mundo",
    cta: "Descubre ECHN",
    href: "https://creativehubs.net/",
  },
  {
    title: "Con arte y tecnología",
    cta: "Conoce Rural Hackers",
    href: "https://www.ruralhackers.com/",
  },
];

export function Espacio() {
  return (
    <section id="espacio" className="bg-fog px-6 py-120 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-caption text-graphite/70">El salón</p>
        <h2 className="mt-4 max-w-[18ch] text-heading-lg text-ink">
          Un tercer tiempo entre casa y oficina
        </h2>
        <p className="mt-6 max-w-2xl text-body-lg text-ink/70">
          En el centro de Pontevedra — Rúa Cobián Roffignac, tercer piso —
          las mañanas huelen a café y a lluvia fina contra los cristales.
          Ni el caos de la cocina, ni el frío de un cubículo: un entorno
          cozy y productivo para perfiles +35 — con una mesa donde se cruzan
          generaciones.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
            <Image
              src={withBase("/photos/community.jpg")}
              alt="Grupo de coworkers de distintas edades en la mesa de Arroelo"
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4] md:mt-10">
            <Image
              src={withBase("/photos/companeras.jpg")}
              alt="Dos coworkers en conversación durante la pausa del café"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
            <Image
              src={withBase("/photos/coworker-enfoque.jpg")}
              alt="Coworker trabajando con luz natural en Arroelo"
              fill
              className="object-cover object-[center_20%]"
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

        <div className="mt-16 grid gap-6 border-t border-ink/10 pt-12 sm:grid-cols-2">
          {bridges.map((item) => (
            <a
              key={item.title}
              href={item.href}
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group rounded-3xl bg-paper px-6 py-8 transition-colors hover:bg-mist"
            >
              <h3 className="text-heading-sm text-ink">{item.title}</h3>
              <p className="mt-3 text-body text-terracotta group-hover:underline">
                {item.cta}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
