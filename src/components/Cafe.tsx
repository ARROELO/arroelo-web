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

      <div className="mx-auto mt-12 max-w-[1440px] px-4 md:mt-16 md:px-6 lg:mt-20">
        <div className="relative aspect-[3/4] overflow-hidden rounded-none bg-mist md:max-w-[min(28rem,42%)]">
          <Image
            src={withBase("/photos/mesa-fresca.jpg")}
            alt="Bandeja del Café a la fresca: uvas, queso, fruta y bollería en la mesa junto a la ventana"
            fill
            className="object-cover object-[center_70%] transition-transform duration-700 ease-out hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 28vw"
          />
        </div>
      </div>

      <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-none bg-mist md:mt-16 md:aspect-[21/9] lg:mt-20">
        <Image
          src={withBase("/photos/echn-cafe-mesa.jpg")}
          alt="Café y conversación alrededor de la mesa del salón en Espacio Arroelo"
          fill
          className="object-cover object-[center_40%] transition-transform duration-700 ease-out hover:scale-[1.03]"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
