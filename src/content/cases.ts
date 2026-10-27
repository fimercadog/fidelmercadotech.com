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
  /** Illustrative example, not a real client: pages label it and show the hypothetical-story note. */
  illustrative?: boolean;
  /** Capítulo de la historia de la distribuidora (content/distribuidora-story.ts) que cuenta este caso. */
  journeyPart?: 1 | 2;
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
      "Una web pública de propiedades con búsqueda y captación de interesados, conectada a un ERP donde el equipo comercial gestiona clientes, propietarios y oportunidades.",
    image: "/brand/crm-inmobiliario.png",
    solution: "crm-inmobiliario",
    challenge:
      "El equipo perdía negocios entre WhatsApp, hojas de cálculo y correos: interesados sin seguimiento, propiedades desactualizadas y ningún historial del cliente.",
    approach: [
      "Portal público con búsqueda de propiedades, fichas, blog y contacto directo por WhatsApp.",
      "ERP con interesados, clientes, propietarios, oportunidades y seguimiento por etapas.",
      "El portal y el ERP comparten la misma base de datos: cada interesado entra con su ficha completa.",
      "Visitas, tareas, documentos y reportes comerciales para todo el equipo.",
    ],
    result: [
      "Ningún interesado del portal se queda sin respuesta",
      "Historial completo de cada cliente y propiedad",
      "El equipo trabaja sobre un solo sistema, no cinco herramientas",
      "Base lista para integrar IA y agentes de WhatsApp",
    ],
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Base de datos", "Acceso protegido por usuario"],
  },
  {
    slug: "fidelos-hrms",
    client: "FidelOS HRMS",
    sector: "Gestión de personas",
    title: "ERP Recursos Humanos para PYMES + sitio público",
    summary:
      "Un HRMS con directorio de personal, asistencia, novedades, documentos y auditoría, más un sitio público de presentación de la empresa. Con datos de demostración para evaluarlo de inmediato.",
    image: "/brand/rrhh.png",
    solution: "rrhh",
    challenge:
      "RRHH gestionaba vacaciones, permisos e incapacidades por correo y papel, sin registro de quién aprobó qué ni un lugar único con la información de cada empleado.",
    approach: [
      "Directorio de empleados, departamentos y cargos con alta, edición y baja controlada.",
      "Flujos de solicitud → aprobación para asistencia, vacaciones, permisos e incapacidades.",
      "Documentos por empleado, turnos, roles y permisos granulares.",
      "Panel de control con datos reales, con exportación a Excel y PDF y registro de acciones.",
    ],
    result: [
      "Aprobaciones registradas, sin correos sueltos",
      "Una sola ficha por empleado con toda su información",
      "Control de acceso por rol",
      "Listo para demostrar con datos de ejemplo",
    ],
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario", "Tablas con búsqueda"],
  },
  {
    slug: "erp-veterinaria",
    client: "Clínica Veterinaria",
    sector: "Veterinaria",
    title: "ERP para clínica veterinaria con módulo de pacientes y web pública",
    summary:
      "Sistema completo para clínica veterinaria: propietarios, mascotas, historia clínica por paciente, inventario de insumos y web pública de la clínica — en una sola plataforma.",
    // TODO(imagen): reemplazar por captura real del ERP veterinario (la anterior era una portada vacía).
    image: "/brand/illus-about.png",
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
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario"],
  },
  {
    slug: "agente-luna-veterinaria",
    client: "Clínicas Veterinarias",
    sector: "Agente de WhatsApp con IA",
    title: "Luna — agente de WhatsApp que atiende, agenda y califica clientes para veterinarias",
    summary:
      "Luna responde consultas 24/7 por WhatsApp, agenda citas, resuelve preguntas frecuentes y transfiere al veterinario cuando el caso lo requiere — sin intervención humana en el primer contacto.",
    image: "/brand/crm-inventario.png",
    solution: "agentes-whatsapp",
    challenge:
      "Las clínicas recibían mensajes de WhatsApp a toda hora y respondían tarde o nunca: clientes que se iban con la competencia y dueños del negocio atrapados respondiendo lo mismo decenas de veces al día.",
    approach: [
      "Agente conversacional entrenado en los servicios, precios y protocolos de la clínica.",
      "Flujo de agendamiento: el agente toma el nombre de la mascota, el motivo y confirma la cita disponible.",
      "Respuestas a preguntas frecuentes: vacunas, tarifas, horarios, ubicación y más.",
      "Transferencia automática a un humano cuando el caso supera lo que el agente puede resolver.",
    ],
    result: [
      "Cero mensajes sin responder, a cualquier hora",
      "Citas agendadas sin que el equipo intervenga en el primer contacto",
      "El veterinario recibe solo los casos que realmente necesitan su atención",
      "Los clientes reciben respuesta en segundos, no en horas",
    ],
    stack: ["IA que conversa", "WhatsApp empresarial", "Automatización de procesos", "Conexión con el ERP veterinario"],
  },
  {
    slug: "agente-talento-humano",
    client: "Empresas con equipos de RRHH",
    sector: "Agente de WhatsApp con IA",
    title: "Agente de Talento Humano — solicitudes, novedades y consultas por WhatsApp sin papeleo",
    summary:
      "Un agente de WhatsApp que recibe solicitudes de vacaciones, permisos e incapacidades, informa al empleado el estado de su trámite y notifica al área de RRHH — sin correos, sin formularios en papel.",
    image: "/brand/illus-productivity.png",
    solution: "agentes-whatsapp",
    challenge:
      "Los empleados enviaban solicitudes por correo o papel que se perdían o se aprobaban sin registro. RRHH dedicaba horas a responder las mismas preguntas: saldo de vacaciones, estado de un permiso, fecha de pago.",
    approach: [
      "Agente conversacional integrado al ERP de RRHH: consulta saldos y estados en tiempo real.",
      "Flujo de solicitudes: el empleado describe su novedad, el agente la registra y confirma la recepción.",
      "Notificación al aprobador (jefe o RRHH) con resumen de la solicitud para aprobar o rechazar.",
      "El empleado recibe respuesta del estado directamente en WhatsApp, sin tener que preguntar.",
    ],
    result: [
      "Solicitudes registradas automáticamente, sin papeleo ni correos perdidos",
      "RRHH atiende solo lo que requiere decisión humana",
      "El empleado sabe en todo momento el estado de su trámite",
      "Registro completo de cada novedad en el ERP",
    ],
    stack: ["IA que conversa", "WhatsApp empresarial", "Automatización de procesos", "Conexión con el sistema de Recursos Humanos"],
  },
  {
    slug: "consultoria-ia-operaciones",
    client: "Empresa de servicios",
    sector: "Consultoría de IA",
    title: "Diagnóstico y hoja de ruta de IA para empresa con procesos manuales",
    summary:
      "Auditoría de procesos operativos, identificación de oportunidades de automatización y hoja de ruta priorizada de implementación. Cuatro etapas que convirtieron el caos en un plan ejecutable.",
    image: "/brand/illus-about.png",
    challenge:
      "La empresa tenía tres procesos que consumían horas semanales: ingreso de pedidos, seguimiento de clientes y generación de reportes. Sin claridad de cuál automatizar primero ni qué tecnología usar.",
    approach: [
      "Auditoría de procesos: cómo trabajan hoy, qué herramientas usan, dónde está el cuello de botella.",
      "Análisis de oportunidades: qué se puede automatizar, con qué tecnología y con qué retorno estimado.",
      "Estudio de vulnerabilidades: qué puede fallar si se automatiza y cómo mitigarlo.",
      "Hoja de ruta de implementación: orden de ejecución para maximizar impacto y minimizar riesgo.",
    ],
    result: [
      "Dos procesos de alto impacto identificados y priorizados",
      "Hoja de ruta clara con fases, costos y criterios de éxito",
      "Equipo alineado antes de escribir una línea de código",
    ],
    stack: ["Análisis de procesos", "Automatización de procesos", "IA aplicada", "Documentación ejecutiva"],
  },
  {
    slug: "ia-local-datos-privados",
    client: "Empresa con datos sensibles",
    sector: "IA en Local",
    title: "Modelos de IA instalados en equipos propios sin enviar datos a la nube",
    summary:
      "Instalación de un modelo de lenguaje dentro de los equipos propios del cliente. IA funcional con privacidad total: los datos nunca salen de la red interna.",
    image: "/brand/illus-automation.png",
    challenge:
      "La empresa necesitaba capacidades de IA para consultar documentos y responder preguntas del equipo, pero sus datos son confidenciales y no podía enviarlos a servicios externos de IA.",
    approach: [
      "Selección del modelo de lenguaje según los requerimientos de hardware disponible y tipo de consultas.",
      "Instalación y configuración en el servidor propio del cliente, dentro de su red interna.",
      "Integración con los documentos y bases de datos internas sin exposición externa.",
      "Pruebas de calidad de respuesta y ajuste de parámetros para el caso de uso específico.",
    ],
    result: [
      "IA operativa con cero datos enviados a terceros",
      "Sin tarifas por consulta ni claves de proveedores externos",
      "Funciona sin internet: disponible aunque los proveedores externos fallen",
      "Sin dependencia de cambios de precios o condiciones del proveedor",
    ],
    stack: ["IA que corre en tus equipos", "Modelo de IA propio", "Servidor del cliente", "Red interna"],
  },
  {
    slug: "distribuidora-pedidos-ia",
    client: "Distribuidora",
    sector: "Consultoría de IA + IA en tus propios equipos",
    title: "De digitar cada pedido tres veces a una IA que los registra dentro de la empresa",
    summary:
      "Primero el diagnóstico en cuatro preguntas; después, como fase 1 de la hoja de ruta, una IA instalada en el servidor de la empresa que lee los pedidos de WhatsApp y los deja listos en facturación.",
    // TODO(imagen): reemplazar por una captura real cuando exista (por ahora, gráfico de marca).
    image: "/brand/illus-automation.png",
    illustrative: true,
    // journeyPart: 1, // oculto junto con el gemelo digital (Caso 2)
    solution: "ia-local",
    challenge:
      "Cada pedido se digitaba tres veces: en WhatsApp, en Excel y en facturación. El gerente quería automatizarlo, pero no sabía por dónde empezar, y los pedidos traen datos de clientes que no quería entregar a un servicio externo.",
    approach: [
      "¿Cómo trabajan hoy? Mapa del recorrido de cada pedido, de WhatsApp a facturación.",
      "¿Qué se puede automatizar y con qué? Una IA que lee el mensaje de WhatsApp y arma el pedido.",
      "¿Qué se rompe si lo hacemos? Acceso por usuario, registro de lo que pasa y los datos de los clientes siempre dentro de la empresa.",
      "¿En qué orden se hace? Fase 1: pedidos. Fase 2: inventario. Fase 3: reportes. Cada una con su criterio de terminado.",
      "Fase 1: un modelo de IA de código abierto instalado en el servidor de la empresa y conectado a facturación, al catálogo y a la lista de precios. Una persona confirma cada pedido antes de registrarlo.",
    ],
    result: [
      "Cada pedido se registra una sola vez, en el momento en que llega",
      "Los datos de los clientes se procesan dentro de la empresa",
      "Sin cobro por cada pedido que lee la IA",
      "Hoja de ruta lista para la fase 2: inventario",
    ],
    stack: ["Análisis de procesos", "IA que corre en tus equipos", "Conexión con facturación", "Revisión humana"],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
