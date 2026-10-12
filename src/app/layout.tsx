import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_OG_IMAGE, jsonLdHtml, siteJsonLd } from "@/lib/seo";
import "./globals.css";

/** Lora — tipografía única para toda la web (titulares, cuerpo, nav, botones). */
const lora = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora-face",
  display: "swap",
});

/** Cloudflare Web Analytics (sin cookies). Solo en producción, no en la preview de GitHub Pages. */
const CF_ANALYTICS_TOKEN = "ae674d54b9fc408e842ec2436f206373";
const loadAnalytics =
  process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_BASE_PATH;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arroelo — El tercer tiempo | Coworking en Pontevedra",
  description:
    "Ni casa, ni oficina. Un espacio abierto en Pontevedra donde suceden cosas: mesa, pausa y redes — sin networking forzado. Café a la fresca y más de 10 años.",
  openGraph: {
    title: "Arroelo — El Tercer Tiempo | Coworking en Pontevedra",
    description:
      "Ni casa, ni oficina. Un espacio abierto donde suceden cosas.",
    locale: "es_ES",
    type: "website",
    siteName: "Espacio Arroelo",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-lora bg-fog text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(siteJsonLd()) }}
        />
        {children}
        {loadAnalytics ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })}
          />
        ) : null}
      </body>
    </html>
  );
}
