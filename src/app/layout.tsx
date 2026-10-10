import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_OG_IMAGE, jsonLdHtml, siteJsonLd } from "@/lib/seo";
import "./globals.css";

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
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-stabilgrotesk bg-fog text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(siteJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
