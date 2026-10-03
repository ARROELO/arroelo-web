"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/path";

export function SalonMovimiento() {
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
          /* autoplay may be blocked; controls remain available */
        });
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <section
      id="salon-movimiento"
      className="bg-fog"
      aria-labelledby="salon-movimiento-title"
    >
      <div className="mx-auto max-w-[1100px] px-6 pt-120 md:px-10">
        <p className="text-caption text-graphite/70">En movimiento</p>
        <h2
          id="salon-movimiento-title"
          className="mt-4 max-w-[16ch] text-heading-lg text-ink"
        >
          El salón en movimiento
        </h2>
        <p className="mt-6 max-w-xl text-body-lg text-ink/70">
          Luz, mesas y conversación: así se siente Arroelo a lo largo del día.
        </p>
      </div>

      <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden bg-mist md:mt-16">
        {reduceMotion ? (
          <Image
            src={withBase("/videos/arroelo-poster.webp")}
            alt="Vista del salón de Arroelo con luz natural y mesas de trabajo"
            fill
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster={withBase("/videos/arroelo-poster.webp")}
            muted
            loop
            playsInline
            autoPlay
            controls
            preload="metadata"
            aria-label="Recorrido en vídeo por el salón de Espacio Arroelo"
          >
            <source src={withBase("/videos/arroelo.mp4")} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
}
