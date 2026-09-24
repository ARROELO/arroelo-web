import Link from "next/link";

const nav = [
  { href: "/espacio", label: "Espacio" },
  { href: "/#cafe", label: "Café a la fresca" },
  { href: "/coworkers", label: "Coworkers" },
  { href: "/#nosotras", label: "Nosotras" },
  { href: "/#tarifa", label: "Tarifa" },
  { href: "/#contacto", label: "Contacto" },
];

type Props = {
  variant?: "hero" | "solid";
};

export function SiteHeader({ variant = "hero" }: Props) {
  const isSolid = variant === "solid";

  return (
    <header
      className={
        isSolid
          ? "sticky top-0 z-30 border-b border-ink/8 bg-fog/90 backdrop-blur-md"
          : "absolute inset-x-0 top-0 z-30"
      }
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Link
          href="/"
          className={
            isSolid
              ? "text-caption tracking-[0.18em] text-ink transition-opacity hover:opacity-70"
              : "text-caption tracking-[0.18em] text-paper/90 transition-opacity hover:opacity-80"
          }
        >
          Arroelo
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isSolid
                  ? "text-caption text-ink/55 transition-colors hover:text-ink"
                  : "text-caption text-paper/70 transition-colors hover:text-paper"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contacto"
          className={
            isSolid
              ? "rounded-full bg-ink px-5 py-2.5 text-caption text-paper transition-transform hover:scale-[1.02]"
              : "rounded-full bg-paper/95 px-5 py-2.5 text-caption text-ink transition-transform hover:scale-[1.02]"
          }
        >
          Reservar semana
        </Link>
      </div>
    </header>
  );
}
