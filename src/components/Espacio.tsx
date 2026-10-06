"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Cafe } from "@/components/Cafe";
import { withBase } from "@/lib/path";

const pillars = [
  {
    src: "/photos/salon-ventana.jpg",
    alt: "Salón de Arroelo con luz natural, mesa de madera y vista a la ciudad",
    objectPosition: "object-[center_40%]",
  },
  {
    src: "/photos/croissants-charla.jpg",
    alt: "Pausa a las 11:30: tazas de café, croissants y charla en la mesa",
    objectPosition: "object-[center_40%]",
  },
  {
    src: "/photos/ig-grupo-pie.jpg",
    alt: "Comunidad de Arroelo: un grupo de coworkers juntas en el salón",
    objectPosition: "object-[center_35%]",
  },
];

const bridges: {
  title: string;
  body: ReactNode;
  href: string;
  image: string;
  alt: string;
  objectPosition: string;
}[] = [
  {
    title: "De la ciudad a la aldea",
    body: (
      <>
        Por ser de Arroelo, puedes usar de forma gratuita el coworking de{" "}
        <strong className="font-medium text-ink">Anceu Coliving</strong>.
      </>
    ),
    href: "https://anceu.com/",
    image: "/photos/anceu-coworking.jpg",
    alt: "Personas trabajando en el coworking de Anceu Coliving, en la aldea",
    objectPosition: "object-[center_45%]",
  },
  {
    title: "De Galicia para el mundo",
    body: (
      <>
        Somos parte de la{" "}
        <strong className="font-medium text-ink">ECHN</strong> y así estás en
        contacto con otros espacios creativos de Europa.
      </>
    ),
    href: "https://creativehubs.net/",
    image: "/photos/echn-otro-espacio.jpg",
    alt: "Arroelo en otro hub: trabajo compartido en un espacio de la red creativa europea",
    objectPosition: "object-[center_40%]",
  },
  {
    title: "Con Rural Hackers",
    body: "Aprende de tecnología e IA desde el salón de tu coworking.",
    href: "https://www.instagram.com/p/Dd1jEO6sUUa/",
    image: "/photos/salon-trabajo.jpg",
    alt: "Coworker con portátil en el salón de Arroelo",
    objectPosition: "object-[center_40%]",
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

      <Cafe />

      {/* Same vertical rhythm as pillars → DrawRule → Café intro */}
      <div className="mt-16 sm:mt-20 md:mt-24">
        <div className="px-4 pt-14 md:px-6 md:pt-20">
          <div className="max-w-[42ch] md:max-w-[50%]">
            <h2 className="text-espacio-intro-title text-terracotta">
              Aquí no alquilamos sillas. Tejemos redes.
            </h2>
            <p className="mt-2 text-espacio-intro-body text-ink">
              Lo mejor de Arroelo ocurre entre tareas. La mesa, el café, una
              visita: una comunidad que creamos desde nuestro salón y más allá.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 lg:mt-20">
        {bridges.map((item, index) => (
          <a
            key={item.title}
            href={item.href}
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group block border-t border-ink/14"
          >
            {/* Arc impact row: narrow number at editorial left edge → text → photo to right margin */}
            <div className="grid grid-cols-1 items-start gap-8 py-14 pl-4 pr-0 md:grid-cols-[auto_minmax(0,24rem)_minmax(0,1fr)] md:gap-x-8 md:py-20 lg:grid-cols-[auto_minmax(0,28rem)_minmax(0,1fr)] lg:gap-x-10 lg:py-24 md:pl-6">
              <div className="flex items-start gap-5 md:contents">
                <span
                  className="w-[1.25rem] shrink-0 text-espacio-title text-ink tabular-nums"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="min-w-0 md:max-w-[28rem]">
                  <h3 className="max-w-[22ch] text-espacio-title text-ink transition-colors group-hover:text-terracotta">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[35ch] text-espacio-body text-ink/65 md:mt-3">
                    {item.body}
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-none bg-mist md:aspect-[3/2]">
                <Image
                  src={withBase(item.image)}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${item.objectPosition}`}
                  sizes="(max-width: 768px) 100vw, 62vw"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
