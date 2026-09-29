import { QuotesFeatured, type Quote } from "@/components/saas/kit";

const FEATURED: Quote = {
  kicker: "Sector Inmobiliario",
  text: "Centralizar nuestra gestión inmobiliaria y el seguimiento de prospectos en un solo lugar duplicó la respuesta de nuestro equipo.",
};

const QUOTES: Quote[] = [
  {
    kicker: "Control & Logística",
    text: "La captura de inventarios por voz y fotografía con IA eliminó los errores manuales al registrar entradas de almacén.",
  },
  {
    kicker: "Atención al Cliente",
    text: "La integración con WhatsApp permite responder automáticamente a cada cliente sin perder la ficha de seguimiento en el ERP.",
  },
  {
    kicker: "Empresa de Servicios",
    text: "Una solución rápida, probada y adaptada a nuestras necesidades. El proceso de implementación fue claro desde la demo inicial.",
  },
];

export function SocialProof() {
  return (
    <QuotesFeatured
      title="Lo que destacan las empresas que confían en nosotros"
      featured={FEATURED}
      quotes={QUOTES}
    />
  );
}
