import Image from "next/image";

export function Cafe() {
  return (
    <section
      id="cafe"
      className="relative overflow-hidden bg-cream px-6 py-120 md:px-10"
    >
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,#d4845a33,transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-[1100px] items-center gap-16 md:grid-cols-2">
        <div>
          <p className="text-caption text-graphite/70">Ritual diario</p>
          <h2 className="mt-4 text-heading-lg text-ink">Café a la fresca</h2>
          <p className="mt-6 text-body-lg text-ink/70">
            Cada día a las 11:30 paramos el reloj. Un café, una conversación, a
            veces una visita que cambia el día. Así se construye la
            #arroeloverfamily — sin networking forzado.
          </p>
          <p className="mt-6 text-body text-ink/60">
            Comunidad +35. Luz natural. Mesas de madera. Pet friendly.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl-2 bg-mist">
          <Image
            src="/photos/community.jpg"
            alt="Momento de comunidad alrededor de Café a la fresca"
            fill
            className="object-cover object-[center_20%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-paper">
            <p className="text-caption text-paper/70">11:30 · todos los días</p>
            <p className="mt-2 text-subheading">
              El parón que da sentido al resto de la jornada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
