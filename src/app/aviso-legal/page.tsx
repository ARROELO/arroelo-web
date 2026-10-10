import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { contacto, titular } from "@/data/contacto";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aviso legal | Espacio Arroelo",
  description:
    "Datos del titular de espacioarroelo.es y condiciones de uso del sitio web de Espacio Arroelo Coworking SL.",
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal">
      <h2>Titular del sitio web</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la
        información y de comercio electrónico (LSSI-CE), te informamos de que
        este sitio web, espacioarroelo.es, pertenece a:
      </p>
      <ul>
        <li>
          <strong>Titular:</strong> {titular.name}
        </li>
        <li>
          <strong>NIF:</strong> {titular.nif}
        </li>
        <li>
          <strong>Domicilio:</strong> {titular.address}
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
        </li>
        <li>
          <strong>Teléfono:</strong>{" "}
          <a href={contacto.phoneHref}>{contacto.phone}</a>
        </li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio web informa sobre los servicios de coworking de Espacio
        Arroelo en Pontevedra, sus tarifas y la comunidad que lo forma. El uso
        del sitio implica la aceptación de este aviso legal.
      </p>

      <h2>Uso del sitio</h2>
      <p>
        Te comprometes a usar el sitio de forma lícita y a no dañar su
        funcionamiento ni el de los sistemas que lo alojan. Los precios y
        condiciones publicados son orientativos; las condiciones que valen son
        las que acordemos contigo al contratar.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, fotografías, vídeos, logotipos y diseño de este sitio son
        de {titular.name} o se usan con permiso de sus autores. No se pueden
        reproducir con fines comerciales sin autorización. Puedes citar y
        enlazar nuestros contenidos indicando la fuente.
      </p>

      <h2>Enlaces a otros sitios</h2>
      <p>
        El sitio incluye enlaces a webs y redes de terceros. No somos
        responsables de sus contenidos ni de sus políticas de privacidad.
      </p>

      <h2>Protección de datos y cookies</h2>
      <p>
        Cómo tratamos tus datos se explica en la{" "}
        <Link href="/privacidad">política de privacidad</Link>, y el uso de
        cookies en la <Link href="/cookies">política de cookies</Link>.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Este aviso se rige por la legislación española. Para cualquier
        controversia, las partes se someten a los juzgados y tribunales de
        Pontevedra, salvo que la ley establezca otro fuero.
      </p>
    </LegalPage>
  );
}
