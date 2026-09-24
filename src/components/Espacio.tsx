const pillars = [
  {
    title: "Confianza",
    body: "Sin letra pequeña. Una tarifa clara y un espacio que se siente hogar.",
  },
  {
    title: "Pausa",
    body: "A las 11:30 paramos. Café a la fresca: ideas, personas, perspectiva.",
  },
  {
    title: "Intercambio",
    body: "Más de 10 años tejiendo redes desde Galicia hacia el mundo.",
  },
];

export function Espacio() {
  return (
    <section id="espacio" className="bg-fog px-6 py-120 md:px-10">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-caption text-graphite/70">El salón</p>
        <h2 className="mt-4 max-w-[18ch] text-heading-lg text-ink">
          Un tercer tiempo entre casa y oficina
        </h2>
        <p className="mt-6 max-w-2xl text-body-lg text-ink/70">
          Entrar en Arroelo es formar parte de una comunidad de personas
          curiosas, comprometidas y con ganas de aprender. Trabajamos en la mesa
          donde ocurren las ideas — en el centro de Pontevedra.
        </p>

        <div className="mt-16 grid gap-12 border-t border-ink/10 pt-12 md:grid-cols-3 md:gap-10">
          {pillars.map((item) => (
            <div key={item.title}>
              <h3 className="text-heading-sm text-ink">{item.title}</h3>
              <p className="mt-3 text-body text-ink/65">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
