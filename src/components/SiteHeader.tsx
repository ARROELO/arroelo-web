"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

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
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    let lastY = window.scrollY;
    let lastHidden = false;

    const threshold = () =>
      variant === "hero"
        ? Math.max(window.innerHeight * 0.72, 320)
        : Math.max(160, window.innerHeight * 0.2);

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const goingDown = y > lastY + 2;
      const goingUp = y < lastY - 2;
      const limit = threshold();

      let next = lastHidden;
      if (open) {
        next = false;
      } else if (y < 48) {
        next = false;
      } else if (y > limit && goingDown) {
        next = true;
      } else if (goingUp && y < limit) {
        next = false;
      } else if (y > limit * 1.15) {
        next = true;
      }

      if (next !== lastHidden) {
        lastHidden = next;
        setHidden(next);
      }

      if (!next) {
        setOverDark(sampleOverDark(variant === "hero"));
      }

      lastY = y;
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
  }, [variant, pathname, open]);

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
  const peeking = !hidden || open;
  const interact = peeking ? "pointer-events-auto" : "pointer-events-none";
  const linkClass =
    "block py-0.5 text-[15px] font-normal leading-[1.25] tracking-[-0.011em] transition-colors duration-200";
  const desktopLink = ink
    ? `${linkClass} text-ink/55 hover:text-ink`
    : `${linkClass} text-paper/75 hover:text-paper`;
  const desktopActive = ink
    ? `${linkClass} text-ink`
    : `${linkClass} text-paper`;
  const brandClass = ink
    ? "text-ink"
    : "text-paper";

  return (
    <>
      {variant === "solid" ? (
        <div className="h-[5.5rem] md:h-[7.25rem]" aria-hidden />
      ) : null}

      <header
        data-site-chrome
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          peeking ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
        aria-hidden={peeking ? undefined : true}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(26,24,20,0.28)_0%,transparent_100%)] transition-opacity duration-300 md:h-44 ${
            overDark && peeking ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="relative flex items-start justify-between px-6 pt-5 md:px-10 md:pt-7">
          <nav
            className={`${interact} hidden md:block`}
            aria-label="Principal"
            inert={peeking ? undefined : true}
          >
            <NavLinks
              pathname={pathname}
              className="flex flex-col items-start gap-1 text-left"
              linkClassName={desktopLink}
              activeClassName={desktopActive}
            />
          </nav>

          <button
            type="button"
            tabIndex={peeking ? undefined : -1}
            className={`${interact} relative z-20 flex h-9 w-9 items-center justify-center md:hidden ${
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

          <Link
            href="/"
            tabIndex={peeking ? undefined : -1}
            className={`${interact} relative z-20 shrink-0 transition-opacity hover:opacity-75`}
            aria-label="Arroelo — inicio"
          >
            <span
              className={`block font-bold leading-[0.88] tracking-[-0.045em] text-[clamp(2rem,5.2vw,5.25rem)] ${brandClass}`}
            >
              Arroelo
            </span>
          </Link>
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
        <div className="absolute top-0 left-0 flex h-full w-[min(17.5rem,82vw)] flex-col bg-fog px-6 pt-24 pb-8 text-ink shadow-[18px_0_40px_rgba(26,24,20,0.08)]">
          <nav aria-label="Principal">
            <NavLinks
              pathname={pathname}
              className="flex flex-col items-start gap-1 text-left"
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
