import Image from "next/image";

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

const press = [
  {
    outlet: "El País",
    year: "2013",
    title: "El coworking se instala en Galicia",
    href: "https://elpais.com/ccaa/2013/04/17/galicia/1366220334_717953.html",
  },
  {
    outlet: "Faro de Vigo",
    year: "2015",
    title: "Crisis o no, aquí no se escucha esa palabra",
    href: "https://www.farodevigo.es/pontevedra/2015/02/03/africa-rodriguez-maria-pierres-crisis-17004549.html",
  },
  {
    outlet: "Coworking Spain Conference",
    year: "2016–2020",
    title: "África Rodríguez, speaker",
    href: "https://coworkingspainconference.es/en/speakers/africa-rodriguez-garcia",
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
          Arroelo nace cuando las vidas de dos mujeres — María Pierres y África
          Rodríguez — se cruzaron en LinkedIn en 2012. En menos de seis meses
          se aventuraron juntas a crear un coworking en Pontevedra. Más de una
          década después — pandemia, cambios de sede, redes europeas —
          siguen construyendo el salón donde se celebra la curiosidad y la
          economía social.
        </p>

        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-3xl-2">
          <Image
            src="/photos/nosotras.jpg"
            alt="Facilitación y comunidad en Espacio Arroelo"
            fill
            className="object-cover object-[center_25%]"
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

        <div className="mt-16 border-t border-ink/10 pt-12">
          <p className="text-caption text-graphite/60">En los medios</p>
          <ul className="mt-6 space-y-5">
            {press.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6"
                >
                  <span className="shrink-0 text-caption text-ink/40">
                    {item.outlet} · {item.year}
                  </span>
                  <span className="text-body text-ink transition-colors group-hover:text-terracotta">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
