import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/path";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-deep-teal text-paper">
      <Image
        src={withBase("/photos/comunidad-mesa.jpg")}
        alt="Comunidad Arroelo reunida en la mesa del salón"
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,24,20,0.55)_0%,rgba(26,24,20,0.32)_42%,rgba(26,24,20,0.82)_100%)]"
      />
      <div
        aria-hidden
        className="hero-grain absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="reveal text-caption text-cream/80">
          Coworking · Pontevedra
        </p>
        <h1 className="reveal reveal-delay-1 mt-6 max-w-[12ch] text-display">
          Arroelo
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-md text-body-lg text-paper/85">
          Ni casa, ni oficina. El tercer tiempo: madera, luz natural y una
          comunidad madura alrededor de la mesa — donde el enfoque se encuentra
          con la pausa compartida.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-body font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            Probar una semana
          </a>
          <Link
            href="/espacio"
            className="inline-flex items-center justify-center rounded-full border border-paper/30 px-7 py-3.5 text-body text-paper/90 transition-colors hover:border-paper/60 hover:bg-paper/10"
          >
            Conocer el salón
          </Link>
        </div>
      </div>
    </section>
  );
}
