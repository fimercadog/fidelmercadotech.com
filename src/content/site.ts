/**
 * Central branding / contact config. Components never hardcode a phone
 * number, email or URL — they read it from here (overridable via env).
 */
export const SITE = {
  name: "Fidel Mercado Tech",
  shortName: "FMT",
  domain: "fidelmercadotech.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fidelmercadotech.com",
  tagline: "Software, IA y automatización para hacer crecer tu empresa.",
  description:
    "Creamos sistemas empresariales, CRM, inventarios, soluciones especializadas y agentes inteligentes que convierten procesos manuales en operaciones digitales.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573027029498",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+57 302 702 9498",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contacto@fidelmercadotech.com",
  locale: "es_CO",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { title: "Soluciones", href: "/soluciones" },
  { title: "Servicios", href: "/servicios" },
  { title: "Precios", href: "/precios" },
  { title: "Contacto", href: "/contacto" },
] as const;

export const FOOTER_NAV = [
  {
    heading: "Soluciones",
    links: [
      { title: "CRM Inmobiliario", href: "/soluciones/crm-inmobiliario" },
      { title: "Recursos Humanos", href: "/soluciones/rrhh" },
      { title: "CRM + Inventario", href: "/soluciones/crm-inventario" },
      { title: "Gestión Veterinaria", href: "/soluciones/veterinaria" },
      { title: "FidelOS · Inventario con IA", href: "/soluciones/fidelos" },
      { title: "Agentes de WhatsApp", href: "/soluciones/agentes-whatsapp" },
    ],
  },
  {
    heading: "Servicios",
    links: [
      { title: "Desarrollo de software", href: "/servicios#software" },
      { title: "Automatización", href: "/servicios#automatizacion" },
      { title: "Inteligencia Artificial", href: "/servicios#ia" },
      { title: "Integraciones", href: "/servicios#integraciones" },
      { title: "Desarrollo web", href: "/servicios#web" },
      { title: "Planes y precios", href: "/precios" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { title: "Soluciones", href: "/soluciones" },
      { title: "Contacto", href: "/contacto" },
      { title: "Solicitar demostración", href: "/contacto?motivo=demo" },
    ],
  },
] as const;
