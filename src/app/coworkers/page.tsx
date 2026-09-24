import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { coworkers } from "@/data/coworkers";

export const metadata: Metadata = {
  title: "Coworkers — Arroelover Family | Espacio Arroelo",
  description:
    "La familia coworker de Espacio Arroelo en Pontevedra. Conoce a quienes comparten el salón cada día.",
};

function Card({
  name,
  href,
  photo,
  open,
}: {
  name: string;
  href?: string;
  photo?: string;
  open?: boolean;
}) {
  const inner = (
    <>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-mist">
        {photo ? (
          <Image
            src={photo}
            alt={open ? "Plaza libre en Arroelo" : name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-cream">
            <span className="text-heading text-ink/25">
              {open
                ? "?"
                : name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
            </span>
          </div>
        )}
      </div>
      <p
        className={`mt-4 text-subheading ${open ? "text-ink/45" : "text-ink"}`}
      >
        {name}
      </p>
      {open ? (
        <p className="mt-1 text-caption text-terracotta">Plaza libre</p>
      ) : href ? (
        <p className="mt-1 text-caption text-ink/40 group-hover:text-terracotta">
          Ver perfil
        </p>
      ) : null}
    </>
  );

  if (href && !open) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {inner}
      </a>
    );
  }

  if (open) {
    return (
      <Link href="/#contacto" className="group block">
        {inner}
      </Link>
    );
  }

  return <div className="block">{inner}</div>;
}

export default function CoworkersPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main>
        <section className="bg-fog px-6 pb-120 pt-16 md:px-10">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-caption text-graphite/70">Familia coworker</p>
            <h1 className="mt-4 text-heading-lg text-ink">Arroelover Family</h1>
            <p className="mt-6 max-w-2xl text-body-lg text-ink/70">
              Entrar en Arroelo es formar parte de una comunidad de personas
              curiosas, comprometidas y con ganas de aprender. Estas son
              algunas de las caras del salón — y hay mesa para ti.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
              {coworkers.map((person, i) => (
                <Card
                  key={`${person.name}-${i}`}
                  name={person.name}
                  href={person.href}
                  photo={person.photo}
                  open={person.open}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
