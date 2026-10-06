import Image from "next/image";
import { withBase } from "@/lib/path";

export function Nosotras() {
  return (
    <section id="nosotras" className="bg-fog py-120">
      <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-6">
        <p className="text-label text-graphite/80">Sobre nosotras</p>
        <h2 className="mt-3 max-w-[20ch] text-heading text-ink md:mt-4">
          Así empezamos
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-ink/70 md:mt-6">
          Arroelo nace cuando nos cruzamos en LinkedIn en 2012. En menos de
          seis meses nos aventuramos a crear un coworking en Pontevedra con
          una convicción sencilla: trabajar no debería sentirse como estar de
          visita en la vida de una.
        </p>
      </div>

      <div className="mt-14 grid items-start gap-10 md:mt-20 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="relative aspect-[2/3] overflow-hidden rounded-none bg-mist md:col-span-5 md:min-h-[min(72vh,680px)] md:aspect-auto">
          <Image
            src={withBase("/photos/nosotras-prensa.jpg")}
            alt="María Pierres y África Rodríguez, cofundadoras de Arroelo, en el espacio en 2013"
            fill
            className="object-cover object-[center_20%]"
            sizes="(max-width: 768px) 100vw, 42vw"
            priority
          />
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-none bg-mist md:col-span-7 md:mt-20 md:min-h-[min(58vh,560px)] md:aspect-auto lg:mt-28">
          <Image
            src={withBase("/photos/salon-ventana.jpg")}
            alt="El salón de Arroelo con luz natural y la piedra de Pontevedra al otro lado del cristal"
            fill
            className="object-cover object-[center_40%]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-[1440px] gap-4 px-4 md:grid-cols-12 md:gap-10 md:px-5 lg:gap-14 lg:px-6">
        <p className="overflow-x-auto whitespace-nowrap text-caption text-ink/40 md:col-span-5">
          María Pierres (izq.) y África Rodríguez (dcha.) · fundadoras de
          Espacio Arroelo
        </p>
        <p className="overflow-x-auto whitespace-nowrap text-caption text-ink/40 md:col-span-7">
          Luz, mesa y la ciudad a la vista — el salón de Arroelo.
        </p>
      </div>
    </section>
  );
}
