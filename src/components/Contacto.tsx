export function Contacto() {
  return (
    <section id="contacto" className="bg-mist px-6 py-120 md:px-10">
      <div className="mx-auto grid max-w-[1100px] gap-16 md:grid-cols-2">
        <div>
          <p className="text-caption text-graphite/70">Ven a conocernos</p>
          <h2 className="mt-4 text-heading-lg text-ink">
            Empieza septiembre — o cualquier lunes — en Arroelo
          </h2>
          <p className="mt-6 text-body-lg text-ink/70">
            Primera semana sin coste. Escríbenos y reserva tu mesa en el salón.
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
            <p className="text-caption text-graphite/60">Instagram</p>
            <a
              href="https://www.instagram.com/arroelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-subheading text-ink hover:text-terracotta"
            >
              @arroelo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-fog px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-caption text-ink/50">
          © {new Date().getFullYear()} Espacio Arroelo · Pontevedra
        </p>
        <p className="text-caption text-ink/40">#arroeloverfamily</p>
      </div>
    </footer>
  );
}
