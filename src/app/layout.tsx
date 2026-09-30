import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arroelo — El tercer tiempo | Coworking en Pontevedra",
  description:
    "Ni casa, ni oficina. El tercer tiempo en Pontevedra: madera, luz natural y comunidad +35. Aquí no alquilamos sillas, tejemos redes. Café a la fresca y más de 10 años.",
  openGraph: {
    title: "Arroelo — El Tercer Tiempo | Coworking en Pontevedra",
    description:
      "Ni casa, ni oficina. Donde el enfoque se encuentra con la pausa compartida.",
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
