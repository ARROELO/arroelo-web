import type { Metadata } from "next";
import { Contacto } from "@/components/Contacto";
import { Espacio } from "@/components/Espacio";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { Tarifa } from "@/components/Tarifa";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Arroelo — El tercer tiempo | Coworking en Pontevedra",
  description:
    "Ni casa, ni oficina. Un espacio abierto en Pontevedra donde suceden cosas: mesa, pausa y redes — sin networking forzado. Café a la fresca y más de 10 años.",
  path: "/",
  ogTitle: "Arroelo — El Tercer Tiempo | Coworking en Pontevedra",
  ogDescription: "Ni casa, ni oficina. Un espacio abierto donde suceden cosas.",
});

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="relative">
          <Hero />
          <Espacio />
        </div>
        <Tarifa />
        <Contacto />
      </main>
    </>
  );
}
