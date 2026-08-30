import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/marketing/legal-page";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos",
  description:
    "Cómo Fidel Mercado Tech recolecta, usa y protege los datos personales que nos compartes, conforme a la Ley 1581 de 2012.",
  alternates: { canonical: "/privacidad" },
};

const UPDATED = "30 de agosto de 2026";

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de tratamiento de datos personales"
      updatedAt={UPDATED}
      intro={
        <p>
          Esta política describe cómo {SITE.name} (&ldquo;nosotros&rdquo;) trata los datos personales que recibimos a
          través de {SITE.domain}, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.
          Responsable del tratamiento: {SITE.name} — {SITE.email}.
        </p>
      }
      sections={[
        {
          heading: "Datos que recolectamos",
          body: (
            <p>
              Cuando completas el formulario de contacto recolectamos: nombre, empresa (opcional), correo electrónico,
              teléfono (opcional), motivo de contacto y el mensaje que escribes. No solicitamos datos sensibles. El
              sitio usa reCAPTCHA de Google para prevenir envíos automatizados.
            </p>
          ),
        },
        {
          heading: "Finalidad del tratamiento",
          body: (
            <ul>
              <li>Responder tu solicitud y coordinar una demostración o reunión.</li>
              <li>Enviarte información relacionada con la solución o el servicio que consultaste.</li>
              <li>Llevar un registro interno de oportunidades comerciales.</li>
            </ul>
          ),
        },
        {
          heading: "Autorización",
          body: (
            <p>
              Al marcar la casilla de autorización en el formulario, das tu consentimiento previo, expreso e informado
              para el tratamiento de tus datos con las finalidades descritas. Puedes negarte a entregarlos, pero en ese
              caso no podremos atender tu solicitud.
            </p>
          ),
        },
        {
          heading: "Conservación y transferencias",
          body: (
            <p>
              Conservamos tus datos mientras exista una relación comercial o interés en curso, y luego el tiempo
              necesario para atender obligaciones legales. Podemos apoyarnos en proveedores de infraestructura y
              mensajería (por ejemplo, servicios de correo, hosting y WhatsApp) que actúan como encargados del
              tratamiento bajo nuestras instrucciones.
            </p>
          ),
        },
        {
          heading: "Tus derechos",
          body: (
            <p>
              Como titular puedes conocer, actualizar, rectificar y suprimir tus datos, así como revocar la
              autorización, escribiendo a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Atenderemos tu solicitud en
              los plazos que establece la ley.
            </p>
          ),
        },
        {
          heading: "Cambios y contacto",
          body: (
            <p>
              Podemos actualizar esta política; publicaremos la versión vigente en esta página. Para cualquier duda
              escríbenos a <a href={`mailto:${SITE.email}`}>{SITE.email}</a> o revisa nuestros{" "}
              <Link href="/terminos">términos y condiciones</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
