import Image from "next/image";
import { withBase } from "@/lib/path";

const shots = [
  {
    src: "/photos/mesa.jpg",
    alt: "Mesa de desayuno: fruta, queso, crackers y bollería sobre madera",
    objectPosition: "object-[center_55%]",
    featured: true,
  },
  {
    src: "/photos/croissants-charla.jpg",
    alt: "Croissants dorados, café y fruta en la mesa del Café a la fresca",
    objectPosition: "object-[center_70%]",
  },
  {
    src: "/photos/cafe-foto.jpg",
    alt: "Naranjas, bollería y café junto a la ventana del salón",
    objectPosition: "object-[center_40%]",
  },
];

export function Cafe() {
  const [featured, ...rest] = shots;

  return (
    <section
      id="cafe"
      className="relative overflow-hidden bg-cream px-6 py-120 md:px-10"
    >
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,#d4845a33,transparent_60%)]"
      />
      <div className="relative mx-auto max-w-[1100px]">
        <div className="grid items-end gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-16">
          <div>
            <p className="text-caption text-graphite/70">Ritual diario</p>
            <h2 className="mt-4 text-heading-lg text-ink">Café a la fresca</h2>
            <p className="mt-6 text-body-lg text-ink/70">
              Lo mejor de Arroelo ocurre entre tareas. Conversaciones con
              perfiles como el tuyo que te sacan del aislamiento digital — sin
              networking forzado.
            </p>
            <p className="mt-6 text-body text-ink/60">
              Cada día a las 11:30 paramos el reloj. Croissants, fruta, un
              café y una charla — a veces una visita que cambia el día.
            </p>
            <p className="mt-10 text-caption text-graphite/60">
              11:30 · todos los días
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl-2 bg-mist md:aspect-[5/6]">
            <Image
              src={withBase(featured.src)}
              alt={featured.alt}
              fill
              className={`object-cover transition-transform duration-700 ease-out hover:scale-[1.03] ${featured.objectPosition}`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
              <p className="text-subheading text-paper">
                Los mejores proyectos nacen en el tercer tiempo
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 md:mt-6 md:gap-5">
          {rest.map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-mist sm:aspect-[4/3]"
            >
              <Image
                src={withBase(shot.src)}
                alt={shot.alt}
                fill
                className={`object-cover transition-transform duration-700 ease-out hover:scale-[1.03] ${shot.objectPosition}`}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
