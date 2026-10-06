"use client";

import Image from "next/image";
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

  const media = reduceMotion ? (
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
  );

  return (
    <section
      aria-label="Arroelo"
      className={
        reduceMotion
          ? "relative min-h-[100svh] overflow-hidden bg-deep-teal text-paper"
          : "sticky top-0 z-0 h-[100svh] overflow-hidden bg-deep-teal text-paper"
      }
    >
      <div className="relative h-full w-full overflow-hidden">
        {media}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,20,0.42)_0%,rgba(26,24,20,0.18)_48%,rgba(26,24,20,0.55)_100%)]"
        />
        <div
          aria-hidden
          className="hero-grain absolute inset-0 pointer-events-none"
        />
      </div>
    </section>
  );
}
