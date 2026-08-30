/**
 * Solution catalogue. Copy is grounded in each project's real
 * `docs/development-status.md` / README — features listed here are ones
 * that are implemented and verified, or (where marked `status: "roadmap"`)
 * explicitly described as in construction. Do not add capabilities that do
 * not exist in the underlying product.
 */

export type SolutionStatus = "live" | "demo" | "roadmap";

export interface SolutionFeature {
  title: string;
  detail: string;
}

export interface Solution {
  slug: string;
  name: string;
  category: string;
  status: SolutionStatus;
  /** lucide-react icon name, resolved in components/icon.tsx */
  icon: string;
  tagline: string;
  problem: string;
  summary: string;
  /** Short one-liners for the home grid. */
  highlights: string[];
  features: SolutionFeature[];
  benefits: string[];
  stack: string[];
  cta: { label: string; kind: "demo" | "contact" };
  /** Hero image slot for the detail page — see docs/IMAGE_REQUIRED.md */
  heroImage: {
    id: string;
    alt: string;
    ratio: string;
    kind: "A" | "B" | "C" | "D";
    description: string;
  };
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "crm-inmobiliario",
    name: "CRM Inmobiliario + Página Web",
    category: "Sector inmobiliario",
    status: "demo",
    icon: "Building2",
    tagline: "Toda la operación inmobiliaria — captación, propiedades y cierre — en un solo sistema.",
    problem:
      "Las inmobiliarias pierden negocios entre WhatsApp, hojas de cálculo y correos sueltos: leads sin seguimiento, propiedades desactualizadas y ningún historial del cliente.",
    summary:
      "Un CRM privado para el equipo comercial y una web pública inmobiliaria conectada, para que cada lead que llega desde el portal entre directo al pipeline con su ficha completa.",
    highlights: [
      "Web inmobiliaria + portal de propiedades",
      "Leads, clientes, propietarios y contactos",
      "Oportunidades, pipeline y actividades",
      "Visitas, tareas, documentos y reportes",
    ],
    features: [
      { title: "Web pública inmobiliaria", detail: "Portal de propiedades con búsqueda, fichas, blog y captación de leads con contacto directo por WhatsApp." },
      { title: "Gestión de propiedades", detail: "Alta de propiedades con fotos, estado, propietario asociado y publicación al portal." },
      { title: "Clientes, propietarios y contactos", detail: "Ficha unificada con notas, historial y datos de contacto de cada parte." },
      { title: "Leads y oportunidades", detail: "Cada lead del portal entra al CRM; se convierte en oportunidad y avanza por el pipeline comercial." },
      { title: "Pipeline y actividades", detail: "Etapas configurables, actividades y seguimientos con recordatorios para el equipo." },
      { title: "Visitas, tareas y documentos", detail: "Agenda de visitas, tareas asignadas y documentos adjuntos por propiedad u operación." },
      { title: "Reportes y equipo", detail: "Panel de métricas comerciales, gestión del equipo y exportación CSV / PDF." },
    ],
    benefits: [
      "Ningún lead se queda sin respuesta",
      "El portal y el CRM comparten la misma base de datos",
      "Historial completo de cada cliente y propiedad",
      "Preparado para integrar IA y WhatsApp",
    ],
    stack: ["Next.js 16", "Laravel 12", "PostgreSQL / SQLite", "JWT Auth"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "crm-inmobiliario-hero",
      alt: "Panel del CRM Inmobiliario mostrando el pipeline de oportunidades",
      ratio: "16/10",
      kind: "A",
      description: "Captura real del CRM Inmobiliario: vista de pipeline / oportunidades con la barra lateral de navegación y datos de demo.",
    },
  },
  {
    slug: "rrhh",
    name: "Sistema de Recursos Humanos + Página Web",
    category: "Gestión de personas",
    status: "demo",
    icon: "Users",
    tagline: "Un HRMS para PYMES: personas, asistencia, novedades y documentos en un panel conectado.",
    problem:
      "El área de RRHH gestiona vacaciones, permisos e incapacidades por correo y papel, sin trazabilidad de aprobaciones ni un lugar único con la información de cada empleado.",
    summary:
      "Panel privado de RRHH con flujos de solicitud y aprobación, más un sitio público de presentación de la empresa. Datos de demostración incluidos para evaluarlo de inmediato.",
    highlights: [
      "Empleados, departamentos y cargos",
      "Asistencia, vacaciones, permisos e incapacidades",
      "Documentos por empleado y turnos",
      "Roles, permisos y auditoría de acciones",
    ],
    features: [
      { title: "Directorio de personal", detail: "Empleados, departamentos y cargos con creación, edición y baja controlada." },
      { title: "Asistencia y novedades", detail: "Asistencia, vacaciones, permisos e incapacidades con flujo de solicitud → aprobación." },
      { title: "Turnos", detail: "Definición de turnos y asignación de turnos a empleados." },
      { title: "Documentos por empleado", detail: "Repositorio de documentos asociado a cada ficha de empleado." },
      { title: "Usuarios, roles y permisos", detail: "Gestión de usuarios y roles con permisos granulares (Spatie laravel-permission)." },
      { title: "Dashboard y exportaciones", detail: "Métricas conectadas a la API real, tablas con búsqueda y paginación, exportación CSV / PDF por módulo." },
      { title: "Auditoría de acciones", detail: "Registro de acciones (audit-logs) para trazabilidad de quién hizo qué y cuándo." },
      { title: "Asistente de IA", detail: "Interfaz del asistente lista en el panel; el proveedor de IA se conecta según el cliente." },
    ],
    benefits: [
      "Aprobaciones con trazabilidad, sin correos sueltos",
      "Una sola ficha por empleado con toda su información",
      "Control de acceso por rol",
      "Listo para demostrar con datos de ejemplo",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum", "TanStack Table"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "rrhh-hero",
      alt: "Dashboard del sistema de Recursos Humanos con métricas de personal",
      ratio: "16/10",
      kind: "A",
      description: "Captura real del panel de RRHH: dashboard con métricas de empleados / asistencia y menú lateral de módulos.",
    },
  },
  {
    slug: "crm-inventario",
    name: "CRM + Control de Inventario + Página Web",
    category: "Comercial y operaciones",
    status: "demo",
    icon: "Boxes",
    tagline: "Clientes, ventas e inventario bajo control en una sola plataforma multiempresa.",
    problem:
      "El equipo comercial no sabe si hay stock para cotizar, y el inventario se descuadra porque las entradas y salidas se anotan en cuadernos distintos.",
    summary:
      "CRM y Control de Inventario integrados: al cotizar una oportunidad ves el stock real, y cada movimiento queda auditado. Con reportes, roles y un asistente de IA por empresa.",
    highlights: [
      "CRM: clientes, contactos, oportunidades, pipeline, actividades",
      "Inventario: productos, proveedores, stock, movimientos",
      "Entradas, salidas y ajustes auditados",
      "Reportes, roles, auditoría e IA",
    ],
    features: [
      { title: "CRM comercial", detail: "Clientes y contactos, oportunidades con historial de etapas inmutable, pipeline Kanban con arrastrar y soltar, y actividades." },
      { title: "Catálogos de inventario", detail: "Categorías, marcas, unidades y proveedores como catálogos reutilizables." },
      { title: "Productos y stock", detail: "Productos con SKU único por empresa, estado de stock calculado (normal / bajo / crítico / agotado) y vista de stock de solo lectura." },
      { title: "Movimientos", detail: "Entradas, salidas y ajustes pasan por un único servicio de inventario que bloquea stock negativo y conserva stock anterior / nuevo." },
      { title: "CRM + productos", detail: "Las oportunidades cotizan líneas de producto y recalculan el monto automáticamente." },
      { title: "Reportes", detail: "Valorización de inventario, resumen de movimientos, oportunidades por etapa y ventas por producto — todos exportables a CSV / PDF." },
      { title: "Roles y multiempresa", detail: "Cinco roles base (super-admin, administrador, comercial, inventario, vendedor) con alcance de datos por empresa." },
      { title: "Auditoría", detail: "Registro campo a campo (valor anterior / nuevo) de los cambios en clientes, productos, oportunidades y más." },
      { title: "Asistente de IA", detail: "Preguntas en lenguaje natural sobre el negocio, con proveedor intercambiable (offline por defecto, u OpenAI / Anthropic) y contexto siempre acotado a la empresa." },
    ],
    benefits: [
      "Cotizas sabiendo el stock real",
      "El inventario no se descuadra: un solo camino para cada movimiento",
      "Cada empresa ve solo sus datos",
      "Preguntas al negocio en lenguaje natural",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum", "Spatie Permission", "TanStack Table"],
    cta: { label: "Solicitar demostración", kind: "contact" },
    heroImage: {
      id: "crm-inventario-hero",
      alt: "Pipeline Kanban del CRM junto al panel de inventario",
      ratio: "16/10",
      kind: "A",
      description: "Captura real: pipeline Kanban de oportunidades o la vista de movimientos de inventario, con datos de demo.",
    },
  },
  {
    slug: "veterinaria",
    name: "CRM + Inventario + Gestión Veterinaria + Página Web",
    category: "Clínicas y consultorios veterinarios",
    status: "roadmap",
    icon: "Stethoscope",
    tagline: "La base de CRM + Inventario ampliada con historia clínica de pacientes y web de la clínica.",
    problem:
      "Las clínicas veterinarias llevan las historias de los pacientes en papel, el inventario de insumos aparte y no tienen forma de recordar controles ni vacunas a los propietarios.",
    summary:
      "Solución en construcción sobre nuestra plataforma probada de CRM + Inventario, sumando el módulo veterinario: propietarios, mascotas / pacientes y gestión clínica, más la web pública de la clínica.",
    highlights: [
      "Propietarios y sus mascotas / pacientes",
      "Gestión veterinaria y seguimientos",
      "Inventario de insumos y medicamentos",
      "CRM + página web de la clínica",
    ],
    features: [
      { title: "Base CRM + Inventario", detail: "Todo lo del producto CRM + Control de Inventario (clientes, pipeline, productos, movimientos, reportes, roles, auditoría) como cimiento." },
      { title: "Propietarios y pacientes", detail: "Ficha del propietario vinculada a una o varias mascotas / pacientes con sus datos." },
      { title: "Gestión veterinaria", detail: "Registro de atenciones y seguimientos por paciente. (Módulo en desarrollo.)" },
      { title: "Inventario clínico", detail: "Control de insumos y medicamentos reutilizando el motor de inventario existente." },
      { title: "Página web de la clínica", detail: "Sitio público con servicios, equipo y contacto por WhatsApp." },
    ],
    benefits: [
      "Una sola herramienta para la clínica y su tienda de insumos",
      "Historial del paciente siempre a mano",
      "Construida sobre una base ya probada en producción",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
    cta: { label: "Solicitar demostración", kind: "contact" },
    heroImage: {
      id: "veterinaria-hero",
      alt: "Ficha de paciente veterinario con historial y datos del propietario",
      ratio: "16/10",
      kind: "C",
      description: "Ilustración conceptual o mockup de la ficha de paciente veterinario (propietario + mascota + historial). Reemplazar por captura real cuando el módulo esté disponible.",
    },
  },
  {
    slug: "fidelos",
    name: "FidelOS · Inventario con IA",
    category: "Producto propio",
    status: "roadmap",
    icon: "ScanLine",
    tagline: "Levanta y controla tu inventario hablándole o tomándole una foto. La IA hace el resto.",
    problem:
      "Cargar y mantener un inventario a mano es lento y nadie lo hace. El resultado: stock que nunca coincide con la realidad.",
    summary:
      "FidelOS captura productos y movimientos por fotografía, por voz o por foto + voz; una capa de IA revisa e interpreta la captura antes de registrarla. Con trazabilidad, auditoría, roles y reportes.",
    highlights: [
      "Captura por fotografía",
      "Captura por voz",
      "Captura por foto + voz",
      "Revisión mediante IA antes de registrar",
    ],
    features: [
      { title: "Captura por fotografía", detail: "Tomas una foto del producto o del estante y el sistema propone el registro." },
      { title: "Captura por voz", detail: "Dictas el movimiento (\"entraron 20 unidades de…\") y queda pre-cargado." },
      { title: "Captura por foto + voz", detail: "Combinas imagen y dictado para capturas más completas en una sola acción." },
      { title: "Revisión mediante IA", detail: "La IA interpreta la captura, normaliza el producto y marca lo que necesita confirmación humana antes de escribir en el inventario." },
      { title: "Productos, stock y movimientos", detail: "Catálogo de productos, stock por ubicación y movimientos de entrada / salida / ajuste." },
      { title: "Trazabilidad y auditoría", detail: "Cada movimiento conserva su origen (captura, usuario, fecha) y queda auditado." },
      { title: "Roles y permisos", detail: "Control de quién puede capturar, confirmar y ajustar." },
      { title: "Reportes", detail: "Existencias, movimientos y valorización exportables." },
    ],
    benefits: [
      "Levantar inventario deja de ser una tarea de horas",
      "Menos errores de digitación: la IO revisa antes de registrar",
      "Cada dato tiene origen y responsable",
      "Pensado para operar desde el celular en bodega",
    ],
    stack: ["Next.js 16", "IA de visión y voz", "Laravel 12"],
    cta: { label: "Solicitar demostración", kind: "contact" },
    heroImage: {
      id: "fidelos-hero",
      alt: "App FidelOS capturando un producto por foto con la revisión de IA",
      ratio: "16/10",
      kind: "B",
      description: "Mockup de teléfono con la app FidelOS: pantalla de captura por foto/voz y tarjeta de revisión de IA con el producto detectado. Usar captura real de la app cuando exista.",
    },
  },
  {
    slug: "agentes-whatsapp",
    name: "Agentes de WhatsApp con IA",
    category: "Atención y captación",
    status: "live",
    icon: "MessageSquare",
    tagline: "Un agente que atiende, responde y capta clientes por WhatsApp — y sabe cuándo pasar a una persona.",
    problem:
      "Los mensajes de WhatsApp llegan a toda hora y se responden tarde o nunca. Cada respuesta lenta es un cliente que se va con la competencia.",
    summary:
      "Agentes conversacionales para casos de uso concretos del negocio: atención, preguntas frecuentes, captación y recopilación de información, con integración a tus sistemas y transferencia a atención humana.",
    highlights: [
      "Atención 24/7",
      "Preguntas frecuentes",
      "Captación y calificación de clientes",
      "Transferencia a atención humana",
    ],
    features: [
      { title: "Atención 24/7", detail: "Responde de inmediato a cualquier hora, con el tono y la información de tu empresa." },
      { title: "Preguntas frecuentes", detail: "Resuelve dudas habituales (horarios, precios, ubicación, servicios) sin intervención humana." },
      { title: "Captación de clientes", detail: "Identifica interesados, hace las preguntas de calificación y deja el lead listo para el equipo comercial." },
      { title: "Recopilación de información", detail: "Toma datos estructurados del cliente (nombre, necesidad, presupuesto) durante la conversación." },
      { title: "Integración con sistemas", detail: "Conecta con tu CRM, agenda o base de datos para consultar y registrar información." },
      { title: "Transferencia a humano", detail: "Cuando la conversación lo requiere, deriva a una persona con el contexto de lo hablado." },
    ],
    benefits: [
      "Cero mensajes sin responder",
      "El equipo recibe leads ya calificados",
      "La conversación queda registrada en tus sistemas",
      "El agente se limita a lo que definimos contigo",
    ],
    stack: ["Motor de IA conversacional", "WhatsApp", "n8n", "Integraciones con CRM"],
    cta: { label: "Solicitar demostración", kind: "contact" },
    heroImage: {
      id: "agentes-whatsapp-hero",
      alt: "Conversación de WhatsApp con un agente de IA calificando a un cliente",
      ratio: "16/10",
      kind: "B",
      description: "Mockup de teléfono con una conversación de WhatsApp real (o recreada): el agente responde una consulta, toma datos y anuncia la transferencia a una persona.",
    },
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}

export const STATUS_LABEL: Record<SolutionStatus, string> = {
  live: "En producción",
  demo: "Demo disponible",
  roadmap: "En construcción",
};
