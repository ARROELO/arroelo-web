import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/Contacto";

export const LEGAL_UPDATED = "10 de octubre de 2026";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="flex-1 bg-fog px-4 pt-8 pb-24 md:px-6 md:pt-10 md:pb-32">
        <article className="max-w-[70ch]">
          <p className="text-label text-graphite/70">Legal</p>
          <h1 className="mt-4 text-espacio-intro-title text-ink">{title}</h1>
          <p className="mt-2 text-body text-ink/50">
            Última actualización: {LEGAL_UPDATED}
          </p>
          <div className="mt-12 space-y-5 text-body-lg text-ink/75 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-terracotta [&_h2]:pt-6 [&_h2]:text-espacio-title [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
