import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { contacto, titular } from "@/data/contacto";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad | Espacio Arroelo",
  description:
    "Qué datos personales trata Espacio Arroelo Coworking SL, para qué, durante cuánto tiempo y cómo ejercer tus derechos.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        Cuidamos los datos de quienes nos escriben y de quienes trabajan en el
        salón igual que cuidamos el espacio. Aquí te contamos qué datos
        tratamos y por qué, conforme al Reglamento (UE) 2016/679 (RGPD) y a la
        Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> {titular.name} (NIF {titular.nif})
        </li>
        <li>
          <strong>Domicilio:</strong> {titular.address}
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
        </li>
      </ul>

      <h2>Qué datos tratamos y para qué</h2>
      <p>Esta web no tiene formularios ni cuentas de usuario. Tratamos datos:</p>
      <ul>
        <li>
          <strong>Cuando nos contactas</strong> por email, teléfono o WhatsApp:
          tu nombre, datos de contacto y lo que nos cuentes, para responderte y
          darte la información que pides. Base legal: tu consentimiento y la
          aplicación de medidas precontractuales a petición tuya.
        </li>
        <li>
          <strong>Si contratas un puesto o una sala</strong>: datos
          identificativos, de contacto, fiscales y de pago, para prestar el
          servicio, facturar y cumplir obligaciones legales. Base legal: la
          ejecución del contrato y el cumplimiento de obligaciones legales.
        </li>
        <li>
          <strong>Estadísticas de visitas</strong>: usamos Cloudflare Web
          Analytics, que mide visitas de forma agregada, sin cookies y sin
          identificarte. Base legal: nuestro interés legítimo en saber qué
          contenidos se leen.
        </li>
      </ul>

      <h2>Cuánto tiempo los guardamos</h2>
      <p>
        Los datos de consultas, mientras dure la conversación y hasta un año
        después si no llegas a contratar. Los de clientes, mientras dure la
        relación y, después, durante los plazos que exige la ley (por ejemplo,
        seis años para la documentación contable y fiscal).
      </p>

      <h2>Con quién los compartimos</h2>
      <p>
        No vendemos ni cedemos tus datos. Solo acceden a ellos los proveedores
        que necesitamos para trabajar, con contrato de encargo de tratamiento:
        alojamiento y analítica web (Cloudflare), correo electrónico y
        asesoría contable y fiscal. Si nos escribes por WhatsApp, esa
        conversación también la trata WhatsApp (Meta) según sus propias
        condiciones. Algunos de estos proveedores pueden tratar datos fuera
        del Espacio Económico Europeo con las garantías que exige el RGPD,
        como el Marco de Privacidad de Datos UE-EE. UU. o cláusulas
        contractuales tipo.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedirnos acceso, rectificación, supresión, oposición,
        limitación del tratamiento y portabilidad de tus datos, y retirar tu
        consentimiento en cualquier momento, escribiendo a{" "}
        <a href={`mailto:${contacto.email}`}>{contacto.email}</a>. Si crees que
        no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia
        Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          aepd.es
        </a>
        ).
      </p>

      <h2>Cookies</h2>
      <p>
        Lo explicamos en la{" "}
        <Link href="/cookies">política de cookies</Link>.
      </p>
    </LegalPage>
  );
}
