import Image from "next/image";

const pillars = [
  {
    title: "Confianza",
    body: "Sin letra pequeña. Una tarifa clara y un espacio que se siente hogar.",
  },
  {
    title: "Pausa",
    body: "A las 11:30 paramos. Café a la fresca: ideas, personas, perspectiva.",
  },
  {
    title: "Intercambio",
    body: "Más de 10 años tejiendo redes desde Galicia hacia el mundo.",
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
          Entrar en Arroelo es formar parte de una comunidad curiosa, con
          ganas de aprender.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
            <Image
              src="/photos/salon-overview.jpg"
              alt="Vista del salón de Arroelo con mesa compartida y luz natural"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4] md:mt-10">
            <Image
              src="/photos/conversacion.jpg"
              alt="Conversación alrededor de la mesa en Café a la fresca"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
            <Image
              src="/photos/encuentro.jpg"
              alt="Encuentro comunitario en el salón"
              fill
              className="object-cover"
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
