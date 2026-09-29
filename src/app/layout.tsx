import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arroelo — El tercer tiempo | Coworking en Pontevedra",
  description:
    "Ni casa, ni oficina. Coworking en el centro de Pontevedra: aquí no alquilamos sillas, tejemos redes. Café a la fresca, comunidad y más de 10 años.",
  openGraph: {
    title: "Arroelo — Coworking en Pontevedra",
    description:
      "El tercer tiempo. Aquí no alquilamos sillas: tejemos redes.",
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
