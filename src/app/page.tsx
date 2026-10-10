import type { Metadata } from "next";
import { Contacto, SiteFooter } from "@/components/Contacto";
import { Espacio } from "@/components/Espacio";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { Tarifa } from "@/components/Tarifa";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Coworking en Pontevedra — El tercer tiempo | Arroelo",
  description:
    "Coworking en el centro de Pontevedra desde 2013: mesa fija, media jornada, bonos y sala privada, con acceso 24 h y Café a la fresca. Primera semana sin coste.",
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
      <SiteFooter cta={false} />
    </>
  );
}
