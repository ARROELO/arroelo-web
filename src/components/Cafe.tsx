import Image from "next/image";
import { withBase } from "@/lib/path";

export function Cafe() {
  return (
    <section id="cafe" className="relative overflow-hidden bg-cream py-120">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,#d4845a33,transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-[1280px] items-start gap-12 px-6 md:grid-cols-12 md:gap-10 md:px-10 lg:gap-[4rem]">
        <aside className="md:sticky md:top-28 md:col-span-4 lg:col-span-3">
          <p className="text-label text-graphite/80">Ritual diario</p>
          <h2 className="mt-4 text-heading text-ink md:mt-5">
            Café a la fresca
          </h2>
          <p className="mt-6 text-body-lg text-ink/70 md:mt-8">
            Lo mejor de Arroelo ocurre entre tareas. La mesa, el café, una
            visita: redes que se tejen sin networking forzado.
          </p>
          <p className="mt-5 text-body text-ink/60">
            Cada día a las 11:30 paramos el reloj. Un café, algo que picar y
            una charla — a veces una visita que cambia el día.
          </p>
          <p className="mt-8 text-label text-graphite/55">
            11:30 · todos los días
          </p>
        </aside>

        <div className="grid items-start gap-[2.5rem] md:col-span-8 md:grid-cols-12 md:gap-[3rem] lg:col-span-9 lg:gap-[4rem]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-none bg-mist md:col-span-5">
            <Image
              src={withBase("/photos/mesa-fresca.jpg")}
              alt="Bandeja del Café a la fresca: uvas, queso, fruta y bollería en la mesa junto a la ventana"
              fill
              className="object-cover object-[center_70%] transition-transform duration-700 ease-out hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 28vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-mist md:col-span-7 md:mt-28 md:aspect-[5/6] lg:mt-36">
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
