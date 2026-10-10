import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { contacto } from "@/data/contacto";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Política de cookies | Espacio Arroelo",
  description:
    "espacioarroelo.es no usa cookies de publicidad ni de seguimiento. Te contamos qué tecnologías usa la web y por qué no hace falta banner.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies">
      <h2>No usamos cookies de seguimiento</h2>
      <p>
        Esta web no instala cookies propias, ni cookies de publicidad, ni de
        análisis que te identifiquen. Por eso no te mostramos un banner de
        cookies.
      </p>

      <h2>Qué usa la web</h2>
      <ul>
        <li>
          <strong>Estadísticas sin cookies</strong>: Cloudflare Web Analytics
          cuenta las visitas de forma agregada, sin cookies ni
          almacenamiento en tu navegador y sin identificarte.
        </li>
        <li>
          <strong>Seguridad</strong>: nuestro proveedor de alojamiento
          (Cloudflare) puede usar cookies técnicas para proteger la web frente
          a tráfico malicioso. Son estrictamente necesarias y están exentas de
          consentimiento.
        </li>
        <li>
          <strong>Vídeos integrados</strong>: algunas entradas del blog
          incluyen vídeos de YouTube (en su modo de privacidad mejorada) y de
          Vimeo (con el seguimiento desactivado). Esos servicios solo cargan
          contenido cuando abres la entrada y pueden guardar datos técnicos al
          reproducir el vídeo, según sus propias políticas.
        </li>
      </ul>

      <h2>Enlaces a redes sociales</h2>
      <p>
        Los enlaces a Instagram, Facebook, LinkedIn o WhatsApp son enlaces
        normales: no cargan nada de esas redes hasta que haces clic y sales de
        nuestra web.
      </p>

      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes ver, bloquear o borrar las cookies desde la configuración de tu
        navegador. Si cambiamos algo de esto, actualizaremos esta página.
      </p>

      <h2>Más información</h2>
      <p>
        Para cualquier duda, escríbenos a{" "}
        <a href={`mailto:${contacto.email}`}>{contacto.email}</a>. También
        puedes leer nuestra{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>
    </LegalPage>
  );
}
