const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/arroelo/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/EspacioArroelo/",
  },
  {
    label: "Blog",
    href: "https://espacioarroelo.es/projects/",
  },
  {
    label: "Familia coworker",
    href: "https://espacioarroelo.es/familia-coworker/",
  },
];

export function Contacto() {
  return (
    <section id="contacto" className="bg-mist px-6 py-120 md:px-10">
      <div className="mx-auto grid max-w-[1100px] gap-16 md:grid-cols-2">
        <div>
          <p className="text-caption text-graphite/70">Ven a conocernos</p>
          <h2 className="mt-4 text-heading-lg text-ink">
            Empieza cualquier lunes en Arroelo
          </h2>
          <p className="mt-6 text-body-lg text-ink/70">
            Primera semana sin coste. Escríbenos y reserva tu mesa — o pregunta
            por la sala exclusiva.
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-caption text-graphite/60">Dónde</p>
            <p className="mt-2 text-subheading text-ink">
              Cobián Roffignac 6, 3º
              <br />
              36002 Pontevedra
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cobi%C3%A1n+Roffignac+6+Pontevedra"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-body text-ink/50 underline underline-offset-4 hover:text-terracotta"
            >
              Ver en el mapa
            </a>
          </div>
          <div>
            <p className="text-caption text-graphite/60">Teléfono</p>
            <a
              href="tel:+34610602012"
              className="mt-2 block text-subheading text-ink hover:text-terracotta"
            >
              610 602 012
            </a>
          </div>
          <div>
            <p className="text-caption text-graphite/60">Email</p>
            <a
              href="mailto:info@espacioarroelo.com"
              className="mt-2 block text-subheading text-ink hover:text-terracotta"
            >
              info@espacioarroelo.com
            </a>
          </div>
          <div>
            <p className="text-caption text-graphite/60">Redes y más</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-ink underline decoration-ink/15 underline-offset-4 hover:text-terracotta"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const footerLinks = [
  { label: "Espacio", href: "#espacio" },
  { label: "Café a la fresca", href: "#cafe" },
  { label: "Nosotras", href: "#nosotras" },
  { label: "Tarifa", href: "#tarifa" },
  { label: "Ecosistema", href: "#redes" },
  { label: "Blog", href: "https://espacioarroelo.es/projects/" },
  {
    label: "Familia coworker",
    href: "https://espacioarroelo.es/familia-coworker/",
  },
  {
    label: "Privacidad",
    href: "https://espacioarroelo.es/privacy-policy-2/",
  },
  { label: "Instagram", href: "https://www.instagram.com/arroelo/" },
  { label: "Facebook", href: "https://www.facebook.com/EspacioArroelo/" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-fog px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-caption text-ink/50 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-ink/50">
            © {new Date().getFullYear()} Espacio Arroelo · Pontevedra
          </p>
          <p className="text-caption text-ink/40">#arroeloverfamily</p>
        </div>
      </div>
    </footer>
  );
}
