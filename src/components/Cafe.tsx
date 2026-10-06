import Image from "next/image";
import { withBase } from "@/lib/path";

export function Cafe() {
  return (
    <section id="cafe" className="relative pt-14 md:pt-20">
      <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-4 md:grid-cols-12 md:gap-10 md:px-5 lg:gap-14 lg:px-6">
        <aside className="md:sticky md:top-28 md:col-span-4 lg:col-span-3">
          <h2 className="text-heading text-ink">Café a la fresca</h2>
          <p className="mt-5 text-body text-ink/60 md:mt-6">
            Cada día a las 11:30 paramos el reloj. Un café, algo que picar y
            una charla — a veces una visita que cambia el día.
          </p>
        </aside>

        <div className="grid items-start gap-10 md:col-span-8 md:grid-cols-12 md:gap-12 lg:col-span-9 lg:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden rounded-none bg-mist md:col-span-5">
            <Image
              src={withBase("/photos/mesa-fresca.jpg")}
              alt="Bandeja del Café a la fresca: uvas, queso, fruta y bollería en la mesa junto a la ventana"
              fill
              className="object-cover object-[center_70%] transition-transform duration-700 ease-out hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 28vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-mist md:col-span-7 md:mt-28 md:aspect-[5/6] lg:mt-40">
            <Image
              src={withBase("/photos/ig-mesa-oval.jpg")}
              alt="Comunidad de Arroelo alrededor de la mesa oval, con el perro en el salón"
              fill
              className="object-cover object-[center_40%] transition-transform duration-700 ease-out hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
