import Image from "next/image";
import { withBase } from "@/lib/path";

export function Nosotras() {
  return (
    <section id="nosotras" className="bg-fog py-120">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <p className="text-label text-graphite/70">Sobre nosotras</p>
        <h2 className="mt-5 max-w-[20ch] text-heading-lg text-ink">
          Así empezamos
        </h2>
        <p className="mt-8 max-w-2xl text-body-lg text-ink/70">
          Arroelo nace cuando nos cruzamos en LinkedIn en 2012. En menos de
          seis meses nos aventuramos a crear un coworking en Pontevedra con
          una convicción sencilla: trabajar no debería sentirse como estar de
          visita en la vida de una.
        </p>
      </div>

      <div className="mt-14 grid items-start gap-[2.5rem] md:mt-20 md:grid-cols-12 md:gap-[3rem] lg:gap-[4rem]">
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
            src={withBase("/photos/pontevedra-calle.jpg")}
            alt="Portátil en una mesa en la Praza da Ferrería, con una mujer trabajando y otra al fondo"
            fill
            className="object-cover object-[center_45%]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-[1100px] gap-4 px-6 md:grid-cols-12 md:gap-10 md:px-10 lg:gap-14">
        <p className="overflow-x-auto whitespace-nowrap text-caption text-ink/40 md:col-span-5">
          María Pierres (izq.) y África Rodríguez (dcha.) · fundadoras de
          Espacio Arroelo
        </p>
        <p className="overflow-x-auto whitespace-nowrap text-caption text-ink/40 md:col-span-7">
          El trabajo en medio de la vida — Praza da Ferrería, a tres minutos
          del salón.
        </p>
      </div>
    </section>
  );
}
