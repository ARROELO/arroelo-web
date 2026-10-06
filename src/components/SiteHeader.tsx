import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/path";

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
          className="flex shrink-0 items-center transition-opacity hover:opacity-75"
        >
          <Image
            src={withBase(
              isSolid ? "/logo-arroelo-ink.png" : "/logo-arroelo.png",
            )}
            alt="Arroelo"
            width={151}
            height={36}
            className="h-8 w-auto md:h-9"
            priority
          />
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
