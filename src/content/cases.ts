export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  image: string;
  liveUrl?: string;
  /** slug of the related solution in content/solutions.ts */
  solution?: string;
  challenge: string;
  approach: string[];
  result: string[];
  stack: string[];
}

export const CASES: CaseStudy[] = [
  {
    slug: "inmobiliaria-prime",
    client: "Inmobiliaria Prime",
    sector: "Sector inmobiliario",
    title: "Portal de propiedades + CRM inmobiliario conectado",
    summary:
      "Una web pública de propiedades con búsqueda y captación de leads, conectada a un CRM privado donde el equipo comercial gestiona clientes, propietarios y oportunidades.",
    image: "/brand/crm-inmobiliario.png",
    liveUrl: "https://crminmobiliaria.fidelmercadotech.com",
    solution: "crm-inmobiliario",
    challenge:
      "El equipo perdía negocios entre WhatsApp, hojas de cálculo y correos: leads sin seguimiento, propiedades desactualizadas y ningún historial del cliente.",
    approach: [
      "Portal público con búsqueda de propiedades, fichas, blog y contacto directo por WhatsApp.",
      "CRM privado con leads, clientes, propietarios, oportunidades y pipeline.",
      "El portal y el CRM comparten la misma base de datos: cada lead entra con su ficha completa.",
      "Visitas, tareas, documentos y reportes comerciales para todo el equipo.",
    ],
    result: [
      "Ningún lead del portal se queda sin respuesta",
      "Historial completo de cada cliente y propiedad",
      "El equipo trabaja sobre un solo sistema, no cinco herramientas",
      "Base lista para integrar IA y agentes de WhatsApp",
    ],
    stack: ["Next.js 16", "Laravel 12", "PostgreSQL", "JWT Auth"],
  },
  {
    slug: "fidelos-hrms",
    client: "FidelOS HRMS",
    sector: "Gestión de personas",
    title: "Sistema de Recursos Humanos para PYMES + sitio público",
    summary:
      "Un HRMS con directorio de personal, asistencia, novedades, documentos y auditoría, más un sitio público de presentación de la empresa. Con datos de demostración para evaluarlo de inmediato.",
    image: "/brand/rrhh.png",
    liveUrl: "https://demorrhh.fidelmercadotech.com",
    solution: "rrhh",
    challenge:
      "RRHH gestionaba vacaciones, permisos e incapacidades por correo y papel, sin trazabilidad de aprobaciones ni un lugar único con la información de cada empleado.",
    approach: [
      "Directorio de empleados, departamentos y cargos con alta, edición y baja controlada.",
      "Flujos de solicitud → aprobación para asistencia, vacaciones, permisos e incapacidades.",
      "Documentos por empleado, turnos, roles y permisos granulares.",
      "Dashboard conectado a la API real, con exportación CSV / PDF y auditoría de acciones.",
    ],
    result: [
      "Aprobaciones con trazabilidad, sin correos sueltos",
      "Una sola ficha por empleado con toda su información",
      "Control de acceso por rol",
      "Listo para demostrar con datos de ejemplo",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum", "TanStack Table"],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
