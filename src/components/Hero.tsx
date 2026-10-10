"use client";

import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/path";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/** Skip the background video when the visitor asks for less data or is on a slow link. */
function prefersLightweight(): boolean {
  const connection = (navigator as Navigator & { connection?: NetworkInformation })
    .connection;
  if (!connection) return false;
  return (
    connection.saveData === true ||
    connection.effectiveType === "slow-2g" ||
    connection.effectiveType === "2g"
  );
}

/** Run once the page has finished loading and the main thread is idle. */
function afterPageLoad(callback: () => void): () => void {
  let idleId: number | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const schedule = () => {
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(callback, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(callback, 200);
    }
  };

  if (document.readyState === "complete") {
    schedule();
  } else {
    window.addEventListener("load", schedule, { once: true });
  }

  return () => {
    window.removeEventListener("load", schedule);
    if (idleId !== undefined) window.cancelIdleCallback(idleId);
    if (timeoutId !== undefined) clearTimeout(timeoutId);
  };
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(media.matches);
      const video = videoRef.current;
      if (!video) return;
      if (media.matches) {
        video.pause();
      } else if (video.src) {
        void video.play().catch(() => {
          /* autoplay may be blocked */
        });
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  // The poster image is the LCP element; the video only starts downloading
  // after the page has loaded so it never competes with critical resources.
  useEffect(() => {
    if (reduceMotion || prefersLightweight()) return;
    return afterPageLoad(() => {
      const video = videoRef.current;
      if (!video || video.src) return;
      const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
      video.src = withBase(
        isSmallScreen ? "/videos/arroelo-480.mp4" : "/videos/arroelo.mp4",
      );
      void video.play().catch(() => {
        /* autoplay may be blocked */
      });
    });
  }, [reduceMotion]);

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
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
        <img
          src={withBase("/videos/arroelo-poster.webp")}
          srcSet={`${withBase("/videos/arroelo-poster-828.webp")} 828w, ${withBase("/videos/arroelo-poster.webp")} 1600w`}
          sizes="100vw"
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {!reduceMotion && (
          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
            onPlaying={() => setVideoReady(true)}
          />
        )}
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
