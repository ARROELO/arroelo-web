"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/path";

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (reduceMotion) {
      const frame = frameRef.current;
      const copy = copyRef.current;
      if (frame) {
        frame.style.transform = "";
        frame.style.borderRadius = "";
      }
      if (copy) {
        copy.style.opacity = "";
        copy.style.transform = "";
      }
      return;
    }

    const frame = frameRef.current;
    const copy = copyRef.current;
    const video = videoRef.current;
    if (!frame) return;

    let raf = 0;
    let lastProgress = -1;

    const update = () => {
      raf = 0;
      const range = Math.max(window.innerHeight * 0.9, 1);
      const progress = smoothstep(clamp01(window.scrollY / range));
      if (Math.abs(progress - lastProgress) < 0.001) return;
      lastProgress = progress;

      const scale = 1 - progress * 0.12;
      const radius = progress * 28;
      const shift = progress * 4;
      frame.style.transform = `translate3d(0, ${shift}vh, 0) scale(${scale})`;
      frame.style.borderRadius = `${radius}px`;

      if (copy) {
        const fade = clamp01(progress * 1.35);
        copy.style.opacity = String(1 - fade);
        copy.style.transform = `translate3d(0, ${fade * 24}px, 0)`;
      }

      if (video) {
        if (progress > 0.92 && !video.paused) {
          video.pause();
        } else if (progress <= 0.92 && video.paused) {
          void video.play().catch(() => {});
        }
      }
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

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
      className={
        reduceMotion
          ? "relative min-h-[100svh] overflow-hidden bg-deep-teal text-paper"
          : "sticky top-0 z-0 flex min-h-[100svh] items-center justify-center overflow-hidden bg-fog text-paper"
      }
    >
      <div
        ref={frameRef}
        className={
          reduceMotion
            ? "relative min-h-[100svh] w-full overflow-hidden bg-deep-teal"
            : "hero-scroll-frame relative min-h-[100svh] w-full overflow-hidden bg-deep-teal"
        }
      >
        {media}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,20,0.55)_0%,rgba(26,24,20,0.32)_42%,rgba(26,24,20,0.82)_100%)]"
        />
        <div
          aria-hidden
          className="hero-grain absolute inset-0 pointer-events-none"
        />

        <div
          ref={copyRef}
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28"
        >
          <p className="reveal text-caption text-cream/75">
            Coworking · Pontevedra
          </p>
          <h1 className="reveal reveal-delay-1 mt-5 max-w-[10ch] text-display">
            Arroelo
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-md text-body-lg text-paper/82">
            Un espacio abierto donde suceden cosas — el tercer tiempo, alrededor
            de la mesa.
          </p>
          <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="btn btn-primary">
              Probar una semana
            </a>
            <Link href="/espacio" className="btn btn-outline-light">
              Conocer el espacio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
