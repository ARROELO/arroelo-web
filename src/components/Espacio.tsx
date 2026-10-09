"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { withBase } from "@/lib/path";

const pillars = [
  {
    src: "/photos/home-pilar-desayuno-comunidad.jpg",
    alt: "Un grupo diverso de personas compartiendo café y repostería en una gran mesa de madera en un espacio de coworking luminoso",
    objectPosition: "object-[center_40%]",
  },
  {
    src: "/photos/home-pilar-dos-coworkers.jpg",
    alt: "Dos mujeres trabajando con portátil y móvil en una mesa del salón de Arroelo",
    objectPosition: "object-[center_40%]",
  },
  {
    src: "/photos/home-pilar-paella-comunidad.jpg",
    alt: "Un grupo diverso de personas sonrientes posando juntas alrededor de una gran paella tradicional en un ambiente comunitario y acogedor",
    objectPosition: "object-[center_40%]",
  },
];

const captionLinkClass =
  "text-ink underline decoration-terracotta/55 underline-offset-[0.18em] decoration-1 transition-colors hover:text-terracotta hover:decoration-terracotta";

const bridges: {
  title: string;
  body: ReactNode;
  href: string;
  image: string;
  alt: string;
  objectPosition: string;
  caption?: ReactNode;
}[] = [
  {
    title: "De la ciudad a la aldea",
    body: (
      <>
        Ser de Arroelo tiene ventajas más allá del salón. También formas parte
        de{" "}
        <strong className="font-medium text-ink">Anceu Coliving</strong>: puedes
        ir a la aldea cuando quieras. Allí tienes acceso gratuito a sus dos
        espacios de coworking y a salas de taller. Cambia de aires, trabaja
        rodeado de naturaleza o prueba otro formato sin coste extra. Solo por
        ser de la comunidad. La ciudad y el campo, a un paso.
      </>
    ),
    href: "https://anceu.com/",
    image: "/photos/anceu.jpg",
    alt: "Coworking al aire libre en Anceu: portátil y cuaderno entre árboles",
    objectPosition: "object-[center_40%]",
    caption: (
      <>
        Hannah y Sara, participantes del programa{" "}
        <a
          href="https://ruralhackers.com/ruralwo/"
          target="_blank"
          rel="noopener noreferrer"
          className={captionLinkClass}
        >
          RuralWO
        </a>{" "}
        en{" "}
        <a
          href="https://anceu.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={captionLinkClass}
        >
          Anceu Coliving
        </a>
        .{" "}
        <Link href="/blog/anceu-coliving-ciudad-aldea" className={captionLinkClass}>
          El puente ciudad–aldea
        </Link>
        .
      </>
    ),
  },
  {
    title: "De Galicia para el mundo",
    body: (
      <>
        Formamos parte de la{" "}
        <strong className="font-medium text-ink">
          European Creative Hubs Network (ECHN)
        </strong>
        , una red europea de espacios creativos. Como miembro de Arroelo puedes
        unirte a intercambios internacionales y visitar otros coworkings o
        centros de arte en Europa, gratis, como parte de nuestra comunidad.
        Conoce gente nueva, comparte lo que sabes y trae ideas de vuelta. Una
        ventana al resto del continente desde Pontevedra.
      </>
    ),
    href: "https://creativehubs.net/",
    image: "/photos/making.jpg",
    alt: "Grupo en The Making Rooms (We MAKE Blackburn), hub creativo de la red ECHN",
    objectPosition: "object-[center_40%]",
    caption: (
      <>
        África, gestora de Arroelo, visitando el espacio maker{" "}
        <a
          href="https://makingrooms.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={captionLinkClass}
        >
          The Making Rooms
        </a>{" "}
        en Blackburn (
        <Link
          href="/blog/coworking-pontevedra-echn-arroelo"
          className={captionLinkClass}
        >
          ECHN
        </Link>
        ).
      </>
    ),
  },
  {
    title: "Para alimentar tu curiosidad",
    body: (
      <>
        Cada semana organizamos cafés y encuentros con gente interesante, sobre
        muchos temas que interesan a la comunidad. Gracias a nuestra alianza
        con <strong className="font-medium text-ink">Rural Hackers</strong>,
        cultivamos un vínculo especial con la tecnología y la{" "}
        <strong className="font-medium text-ink">IA</strong> aplicada a mejorar
        la vida. Compartimos conocimiento sin coste, desde el salón, para
        descubrir talento en Pontevedra y aprender juntas.
      </>
    ),
    href: "https://www.instagram.com/p/Dd1jEO6sUUa/",
    image: "/photos/home-puente-paella-comunidad.jpg",
    alt: "Grupo de la comunidad de Arroelo sonriendo detrás de una gran paella compartida en el coworking",
    objectPosition: "object-[center_32%]",
  },
];

/** Arc /process-style hairline: draws width 0→100% when it enters the viewport. */
function DrawRule() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setDrawn(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-16 px-4 sm:mt-20 md:mt-24" aria-hidden>
      <div
        ref={ref}
        className={`h-px w-full origin-left bg-ink/14 transition-transform duration-[1250ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none ${
          drawn ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}

export function Espacio() {
  return (
    <section id="espacio" className="relative z-10 bg-fog pt-8 pb-80 md:pt-10 lg:pt-12">
      {/* Post-hero intro — Arc pattern: editorial block immediately after video */}
      <div className="px-4 md:px-6">
        <div className="max-w-[42ch] md:max-w-[50%]">
          <h2 className="text-espacio-intro-title text-terracotta">
            Tu espacio de coworking en el centro de Pontevedra.
          </h2>
          <p className="mt-2 text-espacio-intro-body text-ink">
            Ni casa, ni oficina: foco cuando hace falta, pausa cuando el día lo
            pide, y libertad para que ocurran visitas, ideas y redes.
          </p>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 gap-3 px-4 sm:mt-40 sm:grid-cols-3 sm:gap-4 md:mt-48 md:gap-5">
        {pillars.map((shot) => (
          <figure key={shot.src} className="min-w-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-none">
              <Image
                src={withBase(shot.src)}
                alt={shot.alt}
                fill
                className={`object-cover ${shot.objectPosition}`}
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </figure>
        ))}
      </div>

      <DrawRule />

      {/* Same vertical rhythm as pillars → DrawRule → redes intro */}
      <div className="mt-16 sm:mt-20 md:mt-24">
        <div className="px-4 pt-14 md:px-6 md:pt-20">
          <div className="max-w-[42ch] md:max-w-[50%]">
            <h2 className="text-espacio-intro-title text-terracotta">
              Aquí no alquilamos sillas. Tejemos redes.
            </h2>
            <p className="mt-2 text-espacio-intro-body text-ink">
              Lo mejor de Arroelo ocurre entre tareas. Cada día a las 11:30
              paramos el reloj. Un café, algo que picar y una charla — a veces
              una visita que cambia el día. Así creamos una comunidad desde
              nuestro salón y más allá.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 lg:mt-20">
        {bridges.map((item, index) => {
          const external = item.href.startsWith("http");
          const linkProps = external
            ? { target: "_blank" as const, rel: "noopener noreferrer" }
            : {};

          return (
            <div key={item.title} className="group border-t border-ink/14">
              {/* Arc impact row: narrow number at editorial left edge → text → photo to right margin */}
              <div className="grid grid-cols-1 items-start gap-8 py-14 pl-4 pr-4 md:grid-cols-[auto_1fr] md:gap-x-8 md:py-20 lg:gap-x-10 lg:py-24 md:pl-6 md:pr-6">
                <div className="flex items-start gap-[3.75rem] md:gap-x-24 lg:gap-x-[7.5rem]">
                  <span
                    className="w-[1.25rem] shrink-0 text-espacio-title text-ink tabular-nums"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 md:max-w-[28rem]">
                    <a href={item.href} {...linkProps} className="block">
                      <h3 className="max-w-[22ch] text-espacio-title text-ink transition-colors group-hover:text-terracotta">
                        {item.title}
                      </h3>
                    </a>
                    <p className="mt-2 max-w-[35ch] text-espacio-body text-ink/65 md:mt-3">
                      {item.body}
                    </p>
                  </div>
                </div>
                <figure className="min-w-0 w-full md:max-w-[min(41rem,48vw)] md:justify-self-end lg:max-w-[43rem]">
                  <a
                    href={item.href}
                    {...linkProps}
                    className="relative block aspect-[4/3] overflow-hidden rounded-none bg-mist md:aspect-[3/2]"
                  >
                    <Image
                      src={withBase(item.image)}
                      alt={item.alt}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${item.objectPosition}`}
                      sizes="(max-width: 768px) 100vw, min(43rem, 48vw)"
                    />
                  </a>
                  {item.caption ? (
                    <figcaption className="mt-2.5 max-w-[64ch] text-left text-[14px] leading-[1.45] tracking-[0.01em] text-ink/50">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
