import Image from "next/image";
import Link from "next/link";
import { contacto, titular } from "@/data/contacto";
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.2a9.7 9.7 0 0 0-8.3 14.8L2.4 21.6l4.7-1.2A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" />
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
              src={withBase("/photos/pontevedra-escritorio-pasarela.jpg")}
              alt="Coworker trabajando en un escritorio sobre la pasarela de Pontevedra"
              fill
              className="object-cover object-[center_45%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="mt-3 text-caption text-ink/65">
            Pontevedra a pie: el salón está en Cobián Roffignac 6, planta 3 —
            ven cualquier lunes.
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-caption text-graphite/75">Dónde</p>
            <p className="mt-2 text-subheading text-ink">
              {contacto.street}
              <br />
              {contacto.postalCode} {contacto.city}
            </p>
            <a
              href={contacto.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-body text-ink/65 underline underline-offset-4 hover:text-terracotta"
            >
              Ver en el mapa
            </a>
          </div>
          <div>
            <p className="text-caption text-graphite/75">Teléfono y WhatsApp</p>
            <a
              href={contacto.phoneHref}
              className="mt-2 block text-subheading text-ink hover:text-terracotta"
            >
              {contacto.phone}
            </a>
            <a
              href={contacto.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink mt-4 inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="size-5" />
              Escríbenos por WhatsApp
            </a>
          </div>
          <div>
            <p className="text-caption text-graphite/75">Email</p>
            <a
              href={`mailto:${contacto.email}`}
              className="mt-2 block text-subheading text-ink hover:text-terracotta"
            >
              {contacto.email}
            </a>
          </div>
          <div>
            <p className="text-caption text-graphite/75">Redes</p>
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

/** Franja final "Primera semana sin coste": en todas las páginas salvo la home, que ya cierra con Contacto. */
function TrialCta() {
  return (
    <section
      aria-labelledby="trial-cta-title"
      className="bg-mist px-6 py-80 md:px-10 md:py-128"
    >
      <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-label text-graphite/70">Pruébalo</p>
          <h2
            id="trial-cta-title"
            className="mt-4 text-heading-lg text-ink"
          >
            Primera semana sin coste
          </h2>
          <p className="mt-4 max-w-[44ch] text-body-lg text-ink/70">
            Ven a trabajar unos días al salón, sin compromiso. Te contamos qué
            tarifa encaja contigo.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={contacto.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink inline-flex items-center gap-2"
          >
            <WhatsAppIcon className="size-5" />
            Escríbenos por WhatsApp
          </a>
          <Link href="/tarifas" className="btn btn-outline">
            Ver tarifas
          </Link>
        </div>
      </div>
    </section>
  );
}

const footerLinks = [
  { href: "/espacio", label: "Espacio" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/coworkers", label: "Coworkers" },
  { href: "/blog", label: "Blog" },
  { href: "/#contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
];

const footerSocial = [
  ...social,
  { label: "WhatsApp", href: contacto.whatsappHref, icon: WhatsAppIcon },
];

/** py-2: objetivos táctiles de al menos 24 px de alto con separación (WCAG 2.2). */
const footerLinkClass =
  "inline-block py-2 transition-colors hover:text-terracotta";

export function SiteFooter({ cta = true }: { cta?: boolean }) {
  return (
    <>
      {cta ? <TrialCta /> : null}
      <footer className="bg-deep-teal px-6 pt-80 pb-40 text-caption text-fog/65 md:px-10">
        <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-subheading text-fog">Espacio Arroelo</p>
            <p className="mt-4">
              {contacto.street}
              <br />
              {contacto.postalCode} {contacto.city}
            </p>
            <ul className="mt-2">
              <li>
                <a href={contacto.phoneHref} className={footerLinkClass}>
                  {contacto.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacto.email}`} className={footerLinkClass}>
                  {contacto.email}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex items-center gap-3">
              {footerSocial.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-fog/20 text-fog transition-colors hover:border-terracotta hover:text-terracotta"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <nav aria-label="Pie de página">
            <p className="text-label text-fog/60">Arroelo</p>
            <ul className="mt-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-label text-fog/60">Legal</p>
            <ul className="mt-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-56 max-w-[1100px] border-t border-fog/10 pt-24 text-fog/60">
          © {new Date().getFullYear()} {titular.name}
        </p>
      </footer>
    </>
  );
}
