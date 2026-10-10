import type { Metadata } from "next";
import { contacto, horario, titular } from "@/data/contacto";
import { absoluteUrl } from "@/lib/site";

export const SITE_NAME = "Espacio Arroelo";

/** Default 1200×630 share image for pages without their own. */
export const DEFAULT_OG_IMAGE = {
  url: "/og-arroelo.jpg",
  width: 1200,
  height: 630,
  alt: "Coworkers de Espacio Arroelo conversando alrededor de la mesa del salón en Pontevedra",
};

/**
 * Page metadata with canonical, Open Graph and Twitter card.
 * Next merges metadata shallowly, so every page sets the full openGraph object.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: path,
      type: "website",
      locale: "es_ES",
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export const ORGANIZATION_ID = absoluteUrl("/#organization");
export const WEBSITE_ID = absoluteUrl("/#website");

/** Site-wide schema.org graph: the coworking as LocalBusiness + the website. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": ORGANIZATION_ID,
        name: SITE_NAME,
        alternateName: "Arroelo",
        description:
          "Coworking en el centro de Pontevedra desde 2013: mesas fijas, sala exclusiva, media jornada y bonos de días sueltos, con acceso 24 horas y una comunidad que se junta cada día en el Café a la fresca.",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/logo-arroelo-ink.png"),
        image: absoluteUrl(DEFAULT_OG_IMAGE.url),
        legalName: titular.name,
        taxID: titular.nif,
        telephone: contacto.phoneIntl,
        email: contacto.email,
        foundingDate: "2013",
        founder: [
          { "@type": "Person", name: "África Rodríguez" },
          { "@type": "Person", name: "María Pierres" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rúa Cobián Roffignac 6, planta 3",
          addressLocality: "Pontevedra",
          postalCode: "36002",
          addressRegion: "Galicia",
          addressCountry: "ES",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 42.4318,
          longitude: -8.6421,
        },
        hasMap: contacto.mapsHref,
        areaServed: { "@type": "City", name: "Pontevedra" },
        openingHoursSpecification: horario.slots.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: horario.days,
          opens: slot.opens,
          closes: slot.closes,
        })),
        priceRange: "100 €–400 € / mes",
        currenciesAccepted: "EUR",
        amenityFeature: [
          "Acceso 24 horas",
          "Salas de reunión con pantalla 4K",
          "Fibra óptica 1 Giga",
          "Pet friendly",
          "Café a la fresca diario a las 11:30",
        ].map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        sameAs: [
          "https://www.instagram.com/arroelo/",
          "https://www.facebook.com/EspacioArroelo/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        inLanguage: "es-ES",
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

/** Serialise JSON-LD safely for a <script> tag. */
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
