import { Contacto, SiteFooter } from "@/components/Contacto";
import { Espacio } from "@/components/Espacio";
import { Hero } from "@/components/Hero";
import { Nosotras } from "@/components/Nosotras";
import { SiteHeader } from "@/components/SiteHeader";
import { Tarifa } from "@/components/Tarifa";
import { Testimonio } from "@/components/Testimonio";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="relative">
          <Hero />
          <Espacio />
        </div>
        <Nosotras />
        <Testimonio />
        <Tarifa />
        <Contacto />
      </main>
      <SiteFooter />
    </>
  );
}
