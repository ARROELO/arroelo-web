"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/path";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(media.matches);
      const video = videoRef.current;
      if (!video) return;
      if (media.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {
          /* autoplay may be blocked */
        });
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-deep-teal text-paper">
      {reduceMotion ? (
        <Image
          src={withBase("/videos/arroelo-poster.webp")}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          poster={withBase("/videos/arroelo-poster.webp")}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden
        >
          <source src={withBase("/videos/arroelo.mp4")} type="video/mp4" />
        </video>
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,20,0.55)_0%,rgba(26,24,20,0.32)_42%,rgba(26,24,20,0.82)_100%)]"
      />
      <div
        aria-hidden
        className="hero-grain absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <p className="reveal text-caption text-cream/75">
          Coworking · Pontevedra
        </p>
        <h1 className="reveal reveal-delay-1 mt-5 max-w-[10ch] text-display">
          Arroelo
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-md text-body-lg text-paper/82">
          Una comunidad intergeneracional alrededor de la mesa — donde el
          enfoque se encuentra con la pausa compartida.
        </p>
        <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-3">
          <a href="#contacto" className="btn btn-primary">
            Probar una semana
          </a>
          <Link href="/espacio" className="btn btn-outline-light">
            Conocer el salón
          </Link>
        </div>
      </div>
    </section>
  );
}
