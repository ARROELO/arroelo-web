import Image from "next/image";
import { withBase } from "@/lib/path";

const founders = [
  {
    name: "África Rodríguez",
    role: "Cofundadora · Cultura colaborativa",
    linkedin: "https://www.linkedin.com/in/rodriguezafricaruralhacker",
    bio: "Activista de la cultura colaborativa. Impulso redes, comunidades y proyectos europeos desde Galicia — Anceu Coliving y Rural Hackers.",
  },
  {
    name: "María Pierres",
    role: "Cofundadora · Arquitecta",
    linkedin: "https://www.linkedin.com/in/mariapierres",
    bio: "Arquitecta y gestora de Espacio Arroelo. Trabajo el espacio como lugar de encuentro, con mirada técnica y humana sobre cómo compartimos el trabajo.",
  },
];

export function Nosotras() {
  return (
    <section id="nosotras" className="bg-fog py-120">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <p className="text-caption text-graphite/70">Sobre nosotras</p>
        <h2 className="mt-5 max-w-[20ch] text-heading-lg text-ink">
          Así empezamos
        </h2>
        <p className="mt-8 max-w-2xl text-body-lg text-ink/70">
          Arroelo nace cuando nos cruzamos en LinkedIn en 2012. En menos de
          seis meses nos aventuramos a crear un coworking en Pontevedra con
          una convicción sencilla: trabajar no debería sentirse como estar de
          visita en la vida de una.
        </p>
      </div>

      <div className="mt-12 grid gap-px md:mt-16 md:h-[min(85vh,780px)] md:grid-cols-12">
        <div className="relative aspect-[2/3] overflow-hidden rounded-none bg-mist md:col-span-5 md:aspect-auto md:h-full">
          <Image
            src={withBase("/photos/nosotras-prensa.jpg")}
            alt="María Pierres y África Rodríguez, cofundadoras de Arroelo, en el espacio en 2013"
            fill
            className="object-cover object-[center_20%]"
            sizes="(max-width: 768px) 100vw, 42vw"
            priority
          />
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-none bg-mist md:col-span-7 md:aspect-auto md:h-full">
          <Image
            src={withBase("/photos/pontevedra-calle.jpg")}
            alt="Portátil en una mesa en la Praza da Ferrería, con una mujer trabajando y otra al fondo"
            fill
            className="object-cover object-[center_45%]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      </div>

      <div className="mx-auto mt-3 grid max-w-[1100px] gap-3 px-6 md:grid-cols-12 md:gap-6 md:px-10">
        <p className="text-caption text-ink/40 md:col-span-5">
          María Pierres (izq.) y África Rodríguez (dcha.) · El País, 2013 ·
          Antonio Ron
        </p>
        <p className="max-w-[42ch] text-caption text-ink/40 md:col-span-7">
          El trabajo en medio de la vida — Praza da Ferrería, a tres minutos
          del salón.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-[1100px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          {founders.map((person) => (
            <article
              key={person.name}
              className="border-t border-ink/10 pt-8"
            >
              <h3 className="text-heading-sm text-ink">{person.name}</h3>
              <p className="mt-2 text-caption text-terracotta">{person.role}</p>
              <p className="mt-4 text-body text-ink/65">{person.bio}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-body text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:text-terracotta hover:decoration-terracotta/40"
              >
                LinkedIn
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
