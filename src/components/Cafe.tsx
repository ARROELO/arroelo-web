import Image from "next/image";
import { withBase } from "@/lib/path";

export function Cafe() {
  return (
    <section id="cafe" className="relative pt-14 md:pt-20">
      <div className="px-4 md:px-6">
        <div className="max-w-[42ch] md:max-w-[50%]">
          <h2 className="text-espacio-intro-title text-terracotta">
            Café a la fresca
          </h2>
          <p className="mt-2 text-espacio-intro-body text-ink">
            Cada día a las 11:30 paramos el reloj. Un café, algo que picar y
            una charla — a veces una visita que cambia el día.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1440px] items-start gap-10 px-4 md:mt-16 md:grid-cols-12 md:gap-12 md:px-6 lg:mt-20 lg:gap-16">
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
            src={withBase("/photos/conversacion-cafe.jpg")}
            alt="Café y conversación alrededor de la mesa del salón en Espacio Arroelo"
            fill
            className="object-cover object-[center_40%] transition-transform duration-700 ease-out hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
