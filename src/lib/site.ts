/** Canonical production origin (override with NEXT_PUBLIC_SITE_URL). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://espacioarroelo.es"
).replace(/\/$/, "");

/** Absolute URL for a site-root path (respects GitHub Pages basePath). */
export function absoluteUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${base}${normalized === "/" ? "" : normalized}`;
}
