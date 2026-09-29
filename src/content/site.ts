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
    "Creamos sistemas empresariales, ERP, inventarios, soluciones especializadas y agentes inteligentes que convierten procesos manuales en operaciones digitales.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573027029498",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+57 302 702 9498",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contacto@fidelmercadotech.com",
  locale: "es_CO",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { title: "Inicio", href: "/" },
  { title: "Soluciones", href: "/soluciones" },
  { title: "Servicios", href: "/servicios" },
  { title: "Casos", href: "/casos" },
  { title: "Blog", href: "/blog" },
  { title: "Nosotros", href: "/nosotros" },
] as const;

export const FOOTER_NAV = [
  {
    heading: "Soluciones",
    links: [
      { title: "ERP para Inmobiliarias", href: "/soluciones/crm-inmobiliario" },
      { title: "ERP Recursos Humanos", href: "/soluciones/rrhh" },
      { title: "ERP para Veterinarias", href: "/soluciones/veterinaria" },
      { title: "ERP para IPS / Salud", href: "/soluciones/ips" },
      { title: "ERP para Clínicas Estéticas", href: "/soluciones/clinica-estetica" },
      { title: "Ver todas las soluciones →", href: "/soluciones" },
    ],
  },
  {
    heading: "Servicios",
    links: [
      { title: "Desarrollo de software", href: "/servicios/software" },
      { title: "FidelOS", href: "/servicios/automatizacion" },
      { title: "Inteligencia Artificial", href: "/servicios/ia" },
      { title: "Integraciones", href: "/servicios/integraciones" },
      { title: "Desarrollo web", href: "/servicios/web" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { title: "Nosotros", href: "/nosotros" },
      { title: "Casos de éxito", href: "/casos" },
      { title: "Blog", href: "/blog" },
      { title: "Contacto", href: "/contacto" },
      { title: "Solicitar demostración", href: "/contacto?motivo=demo" },
    ],
  },
  {
    heading: "Por qué FidelOS",
    links: [
      { title: "Captura con IA", href: "/servicios/ia" },
      { title: "Omnicanalidad", href: "/servicios/integraciones" },
      { title: "Escalabilidad", href: "/soluciones" },
      { title: "Ver Demostración", href: "/contacto?motivo=demo" },
    ],
  },
] as const;
