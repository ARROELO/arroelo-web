"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
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

function parseLuma(color: string): number | null {
  const m = color.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/,
  );
  if (!m) return null;
  const alpha = m[4] === undefined ? 1 : Number(m[4]);
  if (alpha < 0.35) return null;
  const r = Number(m[1]) / 255;
  const g = Number(m[2]) / 255;
  const b = Number(m[3]) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function sampleOverDark(fallback: boolean): boolean {
  if (typeof document === "undefined") return fallback;
  const x = Math.max(24, window.innerWidth - 48);
  const y = 36;
  const stack = document.elementsFromPoint(x, y);
  for (const node of stack) {
    if (!(node instanceof HTMLElement)) continue;
    if (node.closest("[data-site-chrome]")) continue;
    const luma = parseLuma(getComputedStyle(node).backgroundColor);
    if (luma == null) continue;
    return luma < 0.42;
  }
  return fallback;
}

function NavLinks({
  pathname,
  className,
  linkClassName,
  activeClassName,
  onNavigate,
}: {
  pathname: string;
  className: string;
  linkClassName: string;
  activeClassName: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className={className}>
      {nav.map((item) => {
        const active = !item.href.startsWith("/#") && pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={active ? activeClassName : linkClassName}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader({ variant = "hero" }: Props) {
  const pathname = usePathname();
  return <SiteChrome key={pathname} pathname={pathname} variant={variant} />;
}

function SiteChrome({
  variant = "hero",
  pathname,
}: Props & { pathname: string }) {
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(variant === "hero");

  useEffect(() => {
    const fallback = variant === "hero";
    let raf = 0;
    const update = () => {
      raf = 0;
      setOverDark(sampleOverDark(fallback));
    };
    const onScrollOrResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [variant, pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const ink = !overDark;
  const linkClass =
    "block py-0.5 text-[15px] font-normal leading-[1.25] tracking-[-0.011em] transition-colors duration-200";
  const desktopLink = ink
    ? `${linkClass} text-ink/55 hover:text-ink`
    : `${linkClass} text-paper/75 hover:text-paper`;
  const desktopActive = ink
    ? `${linkClass} text-ink`
    : `${linkClass} text-paper`;

  return (
    <>
      {variant === "solid" ? (
        <div className="h-20 md:h-24" aria-hidden />
      ) : null}

      <header
        data-site-chrome
        className="pointer-events-none fixed inset-x-0 top-0 z-40"
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(26,24,20,0.28)_0%,transparent_100%)] transition-opacity duration-300 md:h-44 ${
            overDark ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="relative flex items-start justify-between px-6 pt-5 md:px-10 md:pt-7">
          <Link
            href="/"
            className="pointer-events-auto relative z-20 flex shrink-0 items-center transition-opacity hover:opacity-75"
          >
            <Image
              src={withBase(
                ink ? "/logo-arroelo-ink.png" : "/logo-arroelo.png",
              )}
              alt="Espacio Arroelo"
              width={151}
              height={36}
              className="h-8 w-auto md:h-9"
              priority
            />
          </Link>

          <nav
            className="pointer-events-auto hidden md:block"
            aria-label="Principal"
          >
            <NavLinks
              pathname={pathname}
              className="flex flex-col items-end gap-1 text-right"
              linkClassName={desktopLink}
              activeClassName={desktopActive}
            />
          </nav>

          <button
            type="button"
            className={`pointer-events-auto relative z-20 flex h-9 w-9 items-center justify-center md:hidden ${
              open || ink ? "text-ink" : "text-paper"
            }`}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`relative block h-[13px] w-[13px] transition-transform duration-300 ${
                open ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              <span className="absolute top-1/2 left-0 block h-[1.5px] w-full -translate-y-1/2 bg-current" />
              <span className="absolute top-0 left-1/2 block h-full w-[1.5px] -translate-x-1/2 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div
        data-site-chrome
        id={menuId}
        hidden={!open}
        className="fixed inset-0 z-30 md:hidden"
      >
        <button
          type="button"
          className="absolute inset-0 bg-ink/25"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        />
        <div className="absolute top-0 right-0 flex h-full w-[min(17.5rem,82vw)] flex-col bg-fog px-6 pt-24 pb-8 text-ink shadow-[-18px_0_40px_rgba(26,24,20,0.08)]">
          <nav aria-label="Principal">
            <NavLinks
              pathname={pathname}
              className="flex flex-col items-end gap-1 text-right"
              linkClassName="block py-1.5 text-[17px] font-normal leading-[1.25] tracking-[-0.011em] text-ink/55 hover:text-ink"
              activeClassName="block py-1.5 text-[17px] font-normal leading-[1.25] tracking-[-0.011em] text-ink"
              onNavigate={() => setOpen(false)}
            />
          </nav>
        </div>
      </div>
    </>
  );
}
