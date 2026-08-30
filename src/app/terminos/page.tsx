import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/marketing/legal-page";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Condiciones de uso del sitio ${SITE.domain} de Fidel Mercado Tech.`,
  alternates: { canonical: "/terminos" },
};

const UPDATED = "30 de agosto de 2026";

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y condiciones de uso"
      updatedAt={UPDATED}
      intro={
        <p>
          Estos términos regulan el uso del sitio {SITE.domain}, operado por {SITE.name}. Al navegar el sitio aceptas
          estas condiciones.
        </p>
      }
      sections={[
        {
          heading: "Propósito del sitio",
          body: (
            <p>
              El sitio presenta información sobre los productos y servicios de {SITE.name}. El contenido es
              informativo y no constituye una oferta comercial vinculante; el alcance, precio y condiciones de cada
              proyecto se acuerdan por escrito de forma independiente.
            </p>
          ),
        },
        {
          heading: "Demostraciones y datos de ejemplo",
          body: (
            <p>
              Las demostraciones de nuestras soluciones utilizan datos ficticios de ejemplo. Las capturas e imágenes
              de producto pueden corresponder a versiones en desarrollo y cambiar sin previo aviso.
            </p>
          ),
        },
        {
          heading: "Propiedad intelectual",
          body: (
            <p>
              La marca, el logotipo, los textos, el código y el diseño de este sitio son propiedad de {SITE.name},
              salvo materiales de terceros debidamente atribuidos. No se permite su reproducción sin autorización.
            </p>
          ),
        },
        {
          heading: "Enlaces y servicios de terceros",
          body: (
            <p>
              El sitio usa servicios de terceros como Google reCAPTCHA y WhatsApp. Su uso se rige por las políticas de
              cada proveedor.
            </p>
          ),
        },
        {
          heading: "Limitación de responsabilidad",
          body: (
            <p>
              Procuramos que la información esté actualizada y correcta, pero no garantizamos que el sitio esté libre
              de errores o interrupciones. No somos responsables por daños derivados del uso o la imposibilidad de uso
              del sitio.
            </p>
          ),
        },
        {
          heading: "Datos personales y contacto",
          body: (
            <p>
              El tratamiento de datos personales se rige por nuestra{" "}
              <Link href="/privacidad">política de tratamiento de datos</Link>. Para consultas sobre estos términos
              escríbenos a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
