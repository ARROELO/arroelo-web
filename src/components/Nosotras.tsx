import Image from "next/image";
import { withBase } from "@/lib/path";

const founders = [
  {
    name: "África Rodríguez",
    role: "Cofundadora · Cultura colaborativa",
    linkedin: "https://www.linkedin.com/in/rodriguezafricaruralhacker",
    bio: "Activista de la cultura colaborativa. Impulsa redes, comunidades y proyectos europeos desde Galicia — Anceu Coliving y Rural Hackers.",
  },
  {
    name: "María Pierres",
    role: "Cofundadora · Arquitecta",
    linkedin: "https://www.linkedin.com/in/mariapierres",
    bio: "Arquitecta y gestora de Espacio Arroelo. Trabaja el espacio como lugar de encuentro, con mirada técnica y humana sobre cómo compartimos el trabajo.",
  },
];

export function Nosotras() {
  return (
    <section id="nosotras" className="bg-fog px-6 py-120 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-caption text-graphite/70">Sobre nosotras</p>
        <h2 className="mt-4 max-w-[20ch] text-heading-lg text-ink">
          Equipo fundador
        </h2>
        <p className="mt-6 max-w-2xl text-body-lg text-ink/70">
          Arroelo nace cuando las vidas de María Pierres y África Rodríguez se
          cruzaron en LinkedIn en 2012. En menos de seis meses se aventuraron a
          crear un coworking en Pontevedra con una convicción sencilla: trabajar
          no debería sentirse como estar de visita en la vida de uno.
        </p>

        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-3xl-2">
          <Image
            src={withBase("/photos/community.jpg")}
            alt="Comunidad intergeneracional de Arroelo reunida en el salón"
            fill
            className="object-cover object-[center_40%]"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
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
