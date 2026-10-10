import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/arroelo-web" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Redimensiona en Cloudflare (ver src/lib/image-loader.ts). Pocos anchos
    // para no pasar de las 5.000 transformaciones únicas al mes del plan gratuito.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [256, 384],
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
