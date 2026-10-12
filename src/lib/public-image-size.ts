import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import imageSize from "next/dist/compiled/image-size";

const cache = new Map<string, { width: number; height: number }>();

/** Intrinsic pixel size of a file under /public (build/SSR). Cached per process. */
export function getPublicImageSize(
  src: string,
): { width: number; height: number } | null {
  const cached = cache.get(src);
  if (cached) return cached;

  const clean = src.split("?")[0]?.replace(/^\//, "") ?? "";
  if (!clean) return null;

  const filePath = path.join(process.cwd(), "public", clean);
  if (!existsSync(filePath)) return null;

  try {
    const buf = readFileSync(filePath);
    const meta = imageSize(buf);
    if (!meta.width || !meta.height) return null;
    const size = { width: meta.width, height: meta.height };
    cache.set(src, size);
    return size;
  } catch {
    return null;
  }
}
