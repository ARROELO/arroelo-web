import { Cafe } from "@/components/Cafe";
import { Contacto, SiteFooter } from "@/components/Contacto";
import { Espacio } from "@/components/Espacio";
import { Hero } from "@/components/Hero";
import { Redes } from "@/components/Redes";
import { SiteHeader } from "@/components/SiteHeader";
import { Tarifa } from "@/components/Tarifa";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Espacio />
        <Cafe />
        <Tarifa />
        <Redes />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  );
}
