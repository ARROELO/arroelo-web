import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Espacio Arroelo — Coworking en Pontevedra",
    short_name: "Arroelo",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f2",
    theme_color: "#f7f5f2",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
