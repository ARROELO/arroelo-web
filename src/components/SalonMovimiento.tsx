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
          /* autoplay may be blocked */
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
      className="relative min-h-[78svh] overflow-hidden bg-deep-teal text-paper md:min-h-[88svh]"
      aria-label="El salón en movimiento"
    >
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
          preload="metadata"
          aria-label="Recorrido en vídeo por el salón de Espacio Arroelo"
        >
          <source src={withBase("/videos/arroelo.mp4")} type="video/mp4" />
        </video>
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,20,0.18)_0%,rgba(26,24,20,0.05)_45%,rgba(26,24,20,0.72)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-[1400px] flex-col justify-end px-6 pb-14 md:min-h-[88svh] md:px-10 md:pb-20">
        <p className="reveal max-w-[22ch] text-heading-sm text-paper/95 md:text-heading">
          El salón en movimiento
        </p>
      </div>
    </section>
  );
}
