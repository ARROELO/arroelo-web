import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";

export const metadata: Metadata = {
  title: "Página no encontrada | Espacio Arroelo",
  robots: { index: false },
};

const links = [
  { href: "/espacio", label: "El espacio" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/coworkers", label: "Coworkers" },
  { href: "/blog", label: "Blog" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="flex-1">
        <section className="bg-fog px-4 pt-8 pb-24 md:px-6 md:pt-10 md:pb-32">
          <div className="max-w-[42ch] md:max-w-[50%]">
            <p className="text-label text-graphite/70">Error 404</p>
            <h1 className="mt-4 text-espacio-intro-title text-ink">
              Esta página ya no está en el salón
            </h1>
            <p className="mt-2 text-espacio-intro-body text-ink/70">
              Puede que la hayamos movido al estrenar web. Sigue por aquí:
            </p>
            <ul className="mt-10 flex flex-wrap gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="btn btn-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
