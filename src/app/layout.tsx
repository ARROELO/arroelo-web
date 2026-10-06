import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arroelo — El tercer tiempo | Coworking en Pontevedra",
  description:
    "Ni casa, ni oficina. Un espacio abierto en Pontevedra donde suceden cosas: mesa, pausa y redes — sin networking forzado. Café a la fresca y más de 10 años.",
  openGraph: {
    title: "Arroelo — El Tercer Tiempo | Coworking en Pontevedra",
    description:
      "Ni casa, ni oficina. Un espacio abierto donde suceden cosas.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-stabilgrotesk bg-fog text-ink">
        {children}
      </body>
    </html>
  );
}
