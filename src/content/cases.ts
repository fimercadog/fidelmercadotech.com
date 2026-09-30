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
    title: "Portal de propiedades + ERP inmobiliario conectado",
    summary:
      "Una web pública de propiedades con búsqueda y captación de leads, conectada a un ERP donde el equipo comercial gestiona clientes, propietarios y oportunidades.",
    image: "/brand/crm-inmobiliario.png",
    liveUrl: "https://crminmobiliaria.fidelmercadotech.com",
    solution: "crm-inmobiliario",
    challenge:
      "El equipo perdía negocios entre WhatsApp, hojas de cálculo y correos: leads sin seguimiento, propiedades desactualizadas y ningún historial del cliente.",
    approach: [
      "Portal público con búsqueda de propiedades, fichas, blog y contacto directo por WhatsApp.",
      "ERP con leads, clientes, propietarios, oportunidades y pipeline.",
      "El portal y el ERP comparten la misma base de datos: cada lead entra con su ficha completa.",
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
    title: "ERP Recursos Humanos para PYMES + sitio público",
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
  {
    slug: "erp-veterinaria",
    client: "Clínica Veterinaria",
    sector: "Veterinaria",
    title: "ERP para clínica veterinaria con módulo de pacientes y web pública",
    summary:
      "Sistema completo para clínica veterinaria: propietarios, mascotas, historia clínica por paciente, inventario de insumos y web pública de la clínica — en una sola plataforma.",
    image: "/assets/saas-product/saas-46.png",
    liveUrl: "https://demo-erp-web-veterinaria.api.fidelmercadotech.com",
    solution: "veterinaria",
    challenge:
      "La clínica llevaba la historia clínica de cada mascota en papel, el inventario de medicamentos en una hoja aparte, y no tenía forma de recordar a los propietarios sobre vacunas o controles pendientes.",
    approach: [
      "Módulo de propietarios con mascotas vinculadas y ficha individual por paciente.",
      "Registro de atenciones, seguimientos y notas clínicas por visita.",
      "Inventario de medicamentos e insumos con alertas de stock bajo, integrado al motor de inventario existente.",
      "Web pública de la clínica con servicios, equipo y contacto directo por WhatsApp.",
    ],
    result: [
      "Historia clínica digital accesible desde cualquier equipo de la clínica",
      "Inventario actualizado tras cada atención, sin anotaciones en papel",
      "Una sola herramienta para la clínica y su tienda de insumos",
      "Demo pública disponible con datos de ejemplo",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
  },
  {
    slug: "consultoria-ia-operaciones",
    client: "Empresa de servicios",
    sector: "Consultoría de IA",
    title: "Diagnóstico y hoja de ruta de IA para empresa con procesos manuales",
    summary:
      "Auditoría de procesos operativos, identificación de oportunidades de automatización y roadmap priorizado de implementación. Cuatro etapas que convirtieron el caos en un plan ejecutable.",
    image: "/assets/saas-product/saas-24.png",
    challenge:
      "La empresa tenía tres procesos que consumían horas semanales: ingreso de pedidos, seguimiento de clientes y generación de reportes. Sin claridad de cuál automatizar primero ni qué tecnología usar.",
    approach: [
      "Auditoría de procesos: cómo trabajan hoy, qué herramientas usan, dónde está el cuello de botella.",
      "Análisis de oportunidades: qué se puede automatizar, con qué tecnología y con qué ROI estimado.",
      "Estudio de vulnerabilidades: qué puede fallar si automatizamos y cómo mitigarlo.",
      "Roadmap de implementación: orden de ejecución para maximizar impacto y minimizar riesgo.",
    ],
    result: [
      "Dos procesos de alto impacto identificados y priorizados",
      "Estimación de ahorro de 12 horas semanales en el primer trimestre",
      "Hoja de ruta clara con fases, costos y criterios de éxito",
      "Equipo alineado antes de escribir una línea de código",
    ],
    stack: ["Análisis de procesos", "n8n", "IA aplicada", "Documentación ejecutiva"],
  },
  {
    slug: "ia-local-datos-privados",
    client: "Empresa con datos sensibles",
    sector: "IA en Local",
    title: "Modelos de IA desplegados en servidor propio sin enviar datos a la nube",
    summary:
      "Despliegue de un modelo de lenguaje dentro de la infraestructura propia del cliente. IA funcional con privacidad total: los datos nunca salen de la red interna.",
    image: "/assets/saas-product/saas-47.png",
    challenge:
      "La empresa necesitaba capacidades de IA para consultar documentos y responder preguntas del equipo, pero sus datos son confidenciales y no podía enviarlos a APIs externas como OpenAI o Claude.",
    approach: [
      "Selección del modelo de lenguaje según los requerimientos de hardware disponible y tipo de consultas.",
      "Instalación y configuración en el servidor propio del cliente, dentro de su red interna.",
      "Integración con los documentos y bases de datos internas sin exposición externa.",
      "Pruebas de calidad de respuesta y ajuste de parámetros para el caso de uso específico.",
    ],
    result: [
      "IA operativa con cero datos enviados a terceros",
      "Sin API keys, sin tarifas por consulta, uso ilimitado",
      "Funciona sin internet: disponible aunque los proveedores externos fallen",
      "Sin dependencia de cambios de precios o condiciones del proveedor",
    ],
    stack: ["Ollama", "Modelo LLM local", "Servidor del cliente", "Red interna"],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
