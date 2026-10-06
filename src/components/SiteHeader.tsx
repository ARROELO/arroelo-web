import Link from "next/link";

const nav = [
  { href: "/espacio", label: "Espacio" },
  { href: "/#cafe", label: "Café a la fresca" },
  { href: "/coworkers", label: "Coworkers" },
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <Link
          href="/"
          className={
            isSolid
              ? "text-[15px] font-medium tracking-[-0.02em] text-ink transition-opacity hover:opacity-70"
              : "text-[15px] font-medium tracking-[-0.02em] text-paper/92 transition-opacity hover:opacity-80"
          }
        >
          Arroelo
        </Link>
        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isSolid
                  ? "text-caption text-ink/50 transition-colors hover:text-ink"
                  : "text-caption text-paper/68 transition-colors hover:text-paper"
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
              ? "btn btn-nav btn-ink"
              : "btn btn-nav bg-paper/95 text-ink hover:bg-terracotta"
          }
        >
          Reservar semana
        </Link>
      </div>
    </header>
  );
}
