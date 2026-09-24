const links = [
  {
    name: "Anceu Coliving",
    href: "https://anceu.com",
    note: "De la ciudad a la aldea",
  },
  {
    name: "Rural Hackers",
    href: "https://ruralhackers.com",
    note: "Arte y tecnología desde Galicia",
  },
  {
    name: "European Creative Hubs",
    href: "https://creativehubs.net",
    note: "Puentes internacionales",
  },
];

export function Redes() {
  return (
    <section className="bg-deep-teal px-6 py-120 text-paper md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-caption text-cream/70">Ecosistema</p>
        <h2 className="mt-4 max-w-[16ch] text-heading-lg">
          De Galicia para el mundo
        </h2>
        <p className="mt-6 max-w-2xl text-body-lg text-paper/70">
          Creemos en la fuerza del «co». Tejemos redes con proyectos que
          confían en la inspiración colectiva.
        </p>
        <ul className="mt-16 divide-y divide-paper/15 border-y border-paper/15">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-8 transition-colors md:flex-row md:items-baseline md:justify-between md:gap-8"
              >
                <span className="text-heading-sm group-hover:text-terracotta">
                  {link.name}
                </span>
                <span className="text-body text-paper/55">{link.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
