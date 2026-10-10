"use client";

import type { ImageLoaderProps } from "next/image";

const SITE = "https://espacioarroelo.es";

/**
 * Cloudflare Image Transformations (zona espacioarroelo.es, "same-zone only").
 * Cada <Image> recibe su ancho en AVIF/WebP según el navegador.
 * En `next dev` no existe /cdn-cgi, así que se sirve el archivo original.
 */
export default function cloudflareLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  if (process.env.NODE_ENV === "development" || !src.startsWith("/")) {
    return src;
  }
  const params = [`width=${width}`, `quality=${quality ?? 75}`, "format=auto"];
  return `${SITE}/cdn-cgi/image/${params.join(",")}${src}`;
}
