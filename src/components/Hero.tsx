export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-deep-teal text-paper">
      {/* Atmospheric plane — full-bleed visual (swap for foto real en /public/photos/hero.jpg) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_20%,#d4845a55_0%,transparent_45%),radial-gradient(90%_70%_at_10%_90%,#f6ddc433_0%,transparent_50%),linear-gradient(160deg,#2a221c_0%,#452623_42%,#1a1814_100%)]"
      />
      <div
        aria-hidden
        className="hero-grain absolute inset-0 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -right-[10%] top-[18%] h-[55vmin] w-[55vmin] rounded-full bg-terracotta/25 blur-3xl float-soft"
      />
      <div
        aria-hidden
        className="absolute -left-[8%] bottom-[8%] h-[40vmin] w-[40vmin] rounded-full bg-cream/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="reveal text-caption text-cream/80">
          Coworking · Pontevedra
        </p>
        <h1 className="reveal reveal-delay-1 mt-6 max-w-[12ch] text-display">
          Arroelo
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-md text-body-lg text-paper/80">
          Ni casa, ni oficina. El tercer tiempo — madera, luz natural y
          comunidad para recuperar el foco.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-body font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            Probar una semana
          </a>
          <a
            href="#espacio"
            className="inline-flex items-center justify-center rounded-full border border-paper/25 px-7 py-3.5 text-body text-paper/90 transition-colors hover:border-paper/50 hover:bg-paper/5"
          >
            Conocer el salón
          </a>
        </div>
      </div>
    </section>
  );
}
