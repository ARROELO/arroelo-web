import Link from "next/link";

export function Tarifa() {
  return (
    <section id="tarifa" className="bg-paper py-120">
      <div className="px-4 md:px-6">
        <div className="max-w-[42ch] md:max-w-[50%]">
          <p className="text-label text-graphite/70">Sin letra pequeña</p>
          <h2 className="mt-4 text-espacio-intro-title text-ink">
            Tarifas
          </h2>
          <p className="mt-2 text-espacio-intro-body text-ink/70">
            Media jornada, bono por días, jornada completa o sala exclusiva.
            Más de 10 años de coworking en Pontevedra.
          </p>
          <Link href="/tarifas" className="btn btn-ink mt-10">
            Ver todas las tarifas
          </Link>
        </div>
      </div>
    </section>
  );
}
