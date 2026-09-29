import { Cafe } from "@/components/Cafe";
import { Contacto, SiteFooter } from "@/components/Contacto";
import { Espacio } from "@/components/Espacio";
import { Filosofia } from "@/components/Filosofia";
import { Hero } from "@/components/Hero";
import { Nosotras } from "@/components/Nosotras";
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
        <Filosofia />
        <Cafe />
        <Nosotras />
        <Tarifa />
        <Redes />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  );
}
