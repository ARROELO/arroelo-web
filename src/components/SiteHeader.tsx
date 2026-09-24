import Link from "next/link";

const nav = [
  { href: "#espacio", label: "Espacio" },
  { href: "#cafe", label: "Café a la fresca" },
  { href: "#nosotras", label: "Nosotras" },
  { href: "#tarifa", label: "Tarifa" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link
          href="/"
          className="text-caption tracking-[0.18em] text-paper/90 transition-opacity hover:opacity-80"
        >
          Arroelo
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-caption text-paper/70 transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-paper/95 px-5 py-2.5 text-caption text-ink transition-transform hover:scale-[1.02]"
        >
          Reservar semana
        </a>
      </div>
    </header>
  );
}
