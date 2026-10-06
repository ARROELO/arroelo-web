import Image from "next/image";
import { withBase } from "@/lib/path";

export function Cafe() {
  return (
    <section id="cafe" className="relative overflow-hidden bg-cream py-120">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,#d4845a33,transparent_60%)]"
      />
      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10">
        <p className="text-caption text-graphite/70">Ritual diario</p>
        <h2 className="mt-5 text-heading-lg text-ink">Café a la fresca</h2>
        <p className="mt-8 max-w-2xl text-body-lg text-ink/70">
          Lo mejor de Arroelo ocurre entre tareas. La mesa, el café, una visita:
          redes que se tejen sin networking forzado.
        </p>
        <p className="mt-6 max-w-2xl text-body text-ink/60">
          Cada día a las 11:30 paramos el reloj. Un café, algo que picar y una
          charla — a veces una visita que cambia el día.
        </p>
        <p className="mt-10 text-caption text-graphite/60">
          11:30 · todos los días
        </p>
      </div>

      <div className="relative mt-14 grid items-start gap-px md:mt-16 md:grid-cols-12">
        <div className="relative aspect-[3/4] overflow-hidden rounded-none bg-mist md:col-span-5">
          <Image
            src={withBase("/photos/mesa-fresca.jpg")}
            alt="Bandeja del Café a la fresca: uvas, queso, fruta y bollería en la mesa junto a la ventana"
            fill
            className="object-cover object-[center_70%] transition-transform duration-700 ease-out hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-mist md:col-span-7 md:mt-16 md:aspect-[5/6] lg:mt-24">
          <Image
            src={withBase("/photos/ig-mesa-oval.jpg")}
            alt="Comunidad de Arroelo alrededor de la mesa oval, con el perro en el salón"
            fill
            className="object-cover object-[center_40%] transition-transform duration-700 ease-out hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  );
}
