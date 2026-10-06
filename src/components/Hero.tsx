"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/path";

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

/** Arc-style shrink: linear 0→1 over one viewport of scroll. */
const SCROLL_RANGE_VH = 1;
const SCALE_MIN = 0.78;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
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
      if (frame) {
        frame.style.transform = "";
      }
      return;
    }

    const stage = stageRef.current;
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!stage || !frame) return;

    let raf = 0;
    let lastProgress = -1;

    const update = () => {
      raf = 0;
      const range = Math.max(window.innerHeight * SCROLL_RANGE_VH, 1);
      const progress = clamp01(window.scrollY / range);
      if (Math.abs(progress - lastProgress) < 0.0005) return;
      lastProgress = progress;

      const scale = 1 - progress * (1 - SCALE_MIN);
      frame.style.transform = `scale3d(${scale}, ${scale}, 1)`;

      if (video) {
        if (progress > 0.95 && !video.paused) {
          video.pause();
        } else if (progress <= 0.95 && video.paused) {
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
      ref={stageRef}
      aria-label="Arroelo"
      data-hero-scroll
      className={
        reduceMotion
          ? "relative min-h-[100svh] overflow-hidden bg-deep-teal text-paper"
          : "hero-scroll-stage sticky top-0 z-0 min-h-[100svh] bg-fog text-paper"
      }
    >
      <div
        ref={frameRef}
        className={
          reduceMotion
            ? "relative min-h-[100svh] w-full overflow-hidden bg-deep-teal"
            : "hero-scroll-frame relative h-[100svh] w-full overflow-hidden bg-deep-teal"
        }
      >
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
