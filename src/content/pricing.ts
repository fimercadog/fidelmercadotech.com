export interface Plan {
  name: string;
  price: string;
  priceNote: string;
  delivery: string;
  includes: string[];
  featured?: boolean;
  cta: { label: string; motivo: string };
}

/** Precios de referencia en COP. El alcance final se acuerda por escrito. */
export const PLANS: Plan[] = [
  {
    name: "Web Express",
    price: "$590.000",
    priceNote: "COP",
    delivery: "2–3 días",
    includes: [
      "Landing de 1 página",
      "Diseño profesional y responsive",
      "Botón de WhatsApp",
      "Formulario de contacto",
      "Mapa y redes sociales",
      "SEO básico",
    ],
    cta: { label: "Empezar", motivo: "proyecto" },
  },
  {
    name: "Web Profesional",
    price: "$890.000",
    priceNote: "COP",
    delivery: "3–5 días",
    includes: [
      "Hasta 5 páginas",
      "Diseño adaptado al negocio",
      "WhatsApp y formularios",
      "Mapa y redes sociales",
      "SEO básico",
    ],
    featured: true,
    cta: { label: "Empezar", motivo: "proyecto" },
  },
  {
    name: "Web Premium",
    price: "$1.490.000",
    priceNote: "COP",
    delivery: "5–7 días",
    includes: [
      "Hasta 8 páginas",
      "Diseño más personalizado",
      "Blog o catálogo básico",
      "Animaciones",
      "Formularios avanzados",
      "SEO básico",
    ],
    cta: { label: "Empezar", motivo: "proyecto" },
  },
  {
    name: "Web + Sistema",
    price: "Desde $2.490.000",
    priceNote: "COP · según alcance",
    delivery: "Según alcance",
    includes: [
      "Página web +",
      "CRM, inventario o RRHH",
      "Automatización de procesos",
      "Integración empresarial",
      "Inteligencia artificial",
    ],
    cta: { label: "Solicitar cotización", motivo: "proyecto" },
  },
];
