import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { coworkers } from "@/data/coworkers";
import { withBase } from "@/lib/path";
import { pageMetadata } from "@/lib/seo";
import "./coworkers.css";

export const metadata: Metadata = pageMetadata({
  title: "Coworkers — Arroelover Family | Espacio Arroelo",
  description:
    "La comunidad del coworking Espacio Arroelo en Pontevedra: personas autónomas, pequeños equipos y profesionales en remoto que comparten mesa, café y redes.",
  path: "/coworkers",
});

function CoworkerTile({
  name,
  href,
  photo,
  open,
  index,
}: {
  name: string;
  href?: string;
  photo?: string;
  open?: boolean;
  index: number;
}) {
  const delayMs = Math.min(index * 55, 480);
  const className = `coworker-cell${open ? " is-open" : ""}`;
  const style = { animationDelay: `${delayMs}ms` } as const;

  const body = (
    <>
      <div className="coworker-media rounded-none">
        {photo ? (
          <Image
            src={withBase(photo)}
            alt={open ? "Plaza libre en Arroelo" : name}
            fill
            className="coworker-photo rounded-none"
            sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw"
            priority={index < 4}
          />
        ) : (
          <div className="coworker-open-fill">
            <span className="coworker-open-mark" aria-hidden>
              ?
            </span>
          </div>
        )}
        <div className="coworker-meta">
          <p className="coworker-name">{name}</p>
          {open ? (
            <p className="coworker-cue">Plaza libre</p>
          ) : href ? (
            <p className="coworker-cue">Ver perfil</p>
          ) : null}
        </div>
      </div>
    </>
  );

  if (href && !open) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {body}
      </a>
    );
  }

  if (open) {
    return (
      <Link href="/#contacto" className={className} style={style}>
        {body}
      </Link>
    );
  }

  return (
    <div className={className} style={style}>
      {body}
    </div>
  );
}

export default function CoworkersPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="coworkers-page">
        <header className="coworkers-intro">
          <p className="text-label text-graphite/70">Familia coworker</p>
          <h1 className="mt-4 max-w-[18ch] text-heading-lg text-ink md:mt-5">
            Arroelover Family
          </h1>
          <p className="mt-5 max-w-xl text-body-lg text-ink/65 md:mt-6">
            Quienes trabajan cada día en el coworking de Arroelo, en el centro
            de Pontevedra. Nadie es igual a nadie, y precisamente por eso el
            espacio funciona.
            Estas son algunas caras del salón — y hay mesa para ti.
          </p>
        </header>

        <section
          className="coworkers-grid"
          aria-label="Retratos de la familia coworker"
        >
          {coworkers.map((person, i) => (
            <CoworkerTile
              key={`${person.name}-${i}`}
              name={person.name}
              href={person.href}
              photo={person.photo}
              open={person.open}
              index={i}
            />
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
