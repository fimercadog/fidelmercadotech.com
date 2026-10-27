/**
 * Central branding / contact config. Components never hardcode a phone
 * number, email or URL — they read it from here (overridable via env).
 */
export const SITE = {
  name: "Fidel Mercado Tech",
  shortName: "FMT",
  domain: "fidelmercadotech.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fidelmercadotech.com",
  tagline: "Tú pones el negocio, yo me encargo de lo que se complica.",
  description:
    "Resuelvo lo que se complica en tu operación: ERP, inventarios, automatización e IA que convierten procesos manuales en operaciones digitales, con acompañamiento directo antes y después de la entrega.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573058148918",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+57 305 814 8918",
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
  { title: "Caso 1", href: "/casos/distribuidora-pedidos-ia" },
  { title: "Blog", href: "/blog" },
  { title: "Nosotros", href: "/nosotros" },
] as const;

export const NAV_SOLUTIONS_DROPDOWN = [
  { title: "ERP para Inmobiliarias", href: "/soluciones/crm-inmobiliario" },
  { title: "ERP Recursos Humanos", href: "/soluciones/rrhh" },
  { title: "ERP Comercial", href: "/soluciones/crm-inventario" },
  { title: "ERP para Veterinarias", href: "/soluciones/veterinaria" },
  { title: "ERP para Clínicas Estéticas", href: "/soluciones/clinica-estetica" },
  { title: "FidelOS · ERP modular", href: "/soluciones/fidelos" },
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
    heading: "Capacidades",
    links: [
      { title: "Desarrollo de software", href: "/servicios/software" },
      { title: "FidelOS", href: "/soluciones/fidelos" },
      { title: "Inteligencia Artificial", href: "/servicios/ia" },
      { title: "Consultoría de IA", href: "/servicios/consultoria-ia" },
      { title: "IA en Local", href: "/servicios/ia-local" },
      { title: "Integraciones", href: "/servicios/integraciones" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { title: "Nosotros", href: "/nosotros" },
      { title: "Casos de éxito", href: "/casos" },      { title: "Blog", href: "/blog" },
      { title: "Contacto", href: "/contacto" },
      { title: "Solicitar demostración", href: "/contacto?motivo=demo" },
      { title: "Privacidad", href: "/privacidad" },
      { title: "Términos", href: "/terminos" },
    ],
  },
  {
    heading: "Por qué FidelOS",
    links: [
      { title: "IA como módulo premium", href: "/servicios/ia" },
      { title: "Omnicanalidad", href: "/servicios/integraciones" },
      { title: "Escalabilidad", href: "/soluciones" },
      { title: "Ver Demostración", href: "/contacto?motivo=demo" },
    ],
  },
] as const;
