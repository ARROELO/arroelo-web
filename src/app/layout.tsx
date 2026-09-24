import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arroelo — El tercer tiempo | Coworking en Pontevedra",
  description:
    "Ni casa, ni oficina. Coworking en el centro de Pontevedra: madera, luz natural y comunidad. Más de 10 años tejiendo redes.",
  openGraph: {
    title: "Arroelo — Coworking en Pontevedra",
    description: "El tercer tiempo. Tu espacio de enfoque en Pontevedra.",
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
