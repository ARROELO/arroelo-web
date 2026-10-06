import Image from "next/image";
import { withBase } from "@/lib/path";

const shots = [
  {
    src: "/photos/cafe.jpg",
    alt: "Mesa del Café a la fresca: uvas, queso, croissants y la piedra de Pontevedra al fondo",
    objectPosition: "object-[center_78%]",
    featured: true,
  },
  {
    src: "/photos/croissants-charla.jpg",
    alt: "Croissants dorados, café y fruta en la mesa del Café a la fresca",
    objectPosition: "object-[center_82%]",
  },
  {
    src: "/photos/encuentro.jpg",
    alt: "Tazas de café, bollería y conversación en la mesa oval del salón",
    objectPosition: "object-[center_65%]",
  },
  {
    src: "/photos/conversacion.jpg",
    alt: "Tazas, bizcocho y café sobre la mesa durante la pausa de las 11:30",
    objectPosition: "object-[center_70%]",
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
            <h2 className="mt-5 text-heading-lg text-ink">Café a la fresca</h2>
            <p className="mt-8 text-body-lg text-ink/70">
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

        <div className="mt-5 grid gap-4 sm:grid-cols-3 md:mt-6 md:gap-5">
          {rest.map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist"
            >
              <Image
                src={withBase(shot.src)}
                alt={shot.alt}
                fill
                className={`object-cover transition-transform duration-700 ease-out hover:scale-[1.03] ${shot.objectPosition}`}
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 border-t border-ink/10 pt-12 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist md:aspect-[4/3]">
            <Image
              src={withBase("/photos/pet.jpg")}
              alt="Mascota en el salón de Arroelo, junto a las sillas de la mesa"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-caption text-graphite/70">Pet friendly</p>
            <h3 className="mt-5 text-heading-sm text-ink">
              También a cuatro patas
            </h3>
            <p className="mt-4 text-body text-ink/65">
              Las mascotas que saben convivir son bienvenidas en el salón —
              parte de la mesa, no un extraño en la oficina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
