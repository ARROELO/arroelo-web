import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";
import { faq } from "@/data/faq";
import { jsonLdHtml, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Preguntas frecuentes — Coworking en Pontevedra | Arroelo",
  description:
    "Precios, semana de prueba gratis, horarios, salas de reunión, mascotas y Anceu: todo lo que suele preguntarse antes de venir a Espacio Arroelo.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: absoluteUrl("/faq"),
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqJsonLd) }}
      />
      <SiteHeader variant="solid" />
      <main>
        <header className="bg-fog px-4 pt-8 pb-16 md:px-6 md:pt-10 md:pb-20">
          <div className="max-w-[42ch] md:max-w-[50%]">
            <p className="text-label text-graphite/70">Antes de venir</p>
            <h1 className="mt-4 text-espacio-intro-title text-ink">
              Preguntas frecuentes
            </h1>
            <p className="mt-2 text-espacio-intro-body text-ink/70">
              Lo que suele preguntarse antes de sentarse por primera vez en el
              salón.
            </p>
          </div>
        </header>
        <section className="bg-fog px-4 pb-24 md:px-6 md:pb-32">
          <div className="divide-y divide-ink/10 border-t border-ink/10 md:max-w-[50rem]">
            {faq.map((item) => (
              <article key={item.id} id={item.id} className="py-10">
                <h2 className="text-espacio-title text-ink">{item.question}</h2>
                <p className="mt-3 max-w-[60ch] text-body-lg text-ink/70">
                  {item.answer}
                </p>
                {item.link ? (
                  <Link
                    href={item.link.href}
                    className="mt-4 inline-block text-body text-ink underline decoration-terracotta/55 underline-offset-4 hover:text-terracotta"
                  >
                    {item.link.label} →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
