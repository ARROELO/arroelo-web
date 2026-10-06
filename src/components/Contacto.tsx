import Image from "next/image";
import { withBase } from "@/lib/path";

const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/arroelo/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/EspacioArroelo/",
    icon: FacebookIcon,
  },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14.2 8.5V6.8c0-.7.5-1.1 1.2-1.1h1.3V3h-2.3C11.8 3 11 5 11 6.6v1.9H9v2.7h2V21h3.2v-9.8h2.2l.4-2.7h-2.6z" />
    </svg>
  );
}

export function Contacto() {
  return (
    <section id="contacto" className="bg-mist px-6 py-120 md:px-10">
      <div className="mx-auto grid max-w-[1100px] gap-16 md:grid-cols-2">
        <div>
          <p className="text-caption text-graphite/70">Ven a conocernos</p>
          <h2 className="mt-5 text-heading-lg text-ink">
            Empieza cualquier lunes en Arroelo
          </h2>
          <p className="mt-8 text-body-lg text-ink/70">
            Primera semana sin coste. Escríbenos y reserva tu mesa — o pregunta
            por la sala exclusiva.
          </p>
          <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-none bg-fog">
            <Image
              src={withBase("/photos/pontevedra-alameda.jpg")}
              alt="Trabajo al aire libre en la Alameda de Pontevedra, a unos minutos del salón"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="mt-3 text-caption text-ink/45">
            Pontevedra a pie de calle — a tres minutos del salón.
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-caption text-graphite/60">Dónde</p>
            <p className="mt-2 text-subheading text-ink">
              Cobián Roffignac 6
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
            <p className="text-caption text-graphite/60">Redes</p>
            <ul className="mt-4 flex items-center gap-3">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-terracotta hover:text-terracotta"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8 bg-fog px-6 py-8 md:px-10">
      <p className="mx-auto max-w-[1100px] text-caption text-ink/40">
        © {new Date().getFullYear()} Espacio Arroelo
      </p>
    </footer>
  );
}
