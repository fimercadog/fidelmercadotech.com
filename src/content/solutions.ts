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
  /** When true, the card is hidden from the public solutions grid. The detail page still works. */
  hidden?: boolean;
  /** Link to the live demo environment, shown as a CTA button on the detail page. */
  demoUrl?: string;
  /** Hero image slot for the detail page — see docs/IMAGE_REQUIRED.md */
  heroImage: {
    id: string;
    alt: string;
    ratio: string;
    kind: "A" | "B" | "C" | "D";
    description: string;
    src?: string;
  };
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "crm-inmobiliario",
    name: "ERP para Inmobiliarias",
    category: "Sector inmobiliario",
    status: "demo",
    icon: "Home",
    demoUrl: "https://demo-erp-web-inmobiliaria.api.fidelmercadotech.com",
    tagline: "Gestiona toda la operación de tu inmobiliaria en un solo sistema.",
    problem:
      "Las inmobiliarias pierden negocios entre WhatsApp, hojas de cálculo y correos sueltos: leads sin seguimiento, propiedades desactualizadas y ningún historial del cliente.",
    summary:
      "Un ERP para el equipo comercial y una web pública inmobiliaria conectada, para que cada lead que llega desde el portal entre directo al pipeline con su ficha completa.",
    highlights: [
      "Propiedades, leads y pipeline comercial",
      "Clientes, propietarios y contactos",
      "Visitas, tareas, documentos y reportes",
    ],
    features: [
      { title: "Web pública inmobiliaria", detail: "Portal de propiedades con búsqueda, fichas, blog y captación de leads con contacto directo por WhatsApp." },
      { title: "Gestión de propiedades", detail: "Alta de propiedades con fotos, estado, propietario asociado y publicación al portal." },
      { title: "Clientes, propietarios y contactos", detail: "Ficha unificada con notas, historial y datos de contacto de cada parte." },
      { title: "Leads y oportunidades", detail: "Cada lead del portal entra al ERP; se convierte en oportunidad y avanza por el pipeline comercial." },
      { title: "Pipeline y actividades", detail: "Etapas configurables, actividades y seguimientos con recordatorios para el equipo." },
      { title: "Visitas, tareas y documentos", detail: "Agenda de visitas, tareas asignadas y documentos adjuntos por propiedad u operación." },
      { title: "Reportes y equipo", detail: "Panel de métricas comerciales, gestión del equipo y exportación CSV / PDF." },
    ],
    benefits: [
      "Ningún lead se queda sin respuesta",
      "El portal y el ERP comparten la misma base de datos",
      "Historial completo de cada cliente y propiedad",
      "Preparado para integrar IA y WhatsApp",
    ],
    stack: ["Next.js 16", "Laravel 12", "PostgreSQL / SQLite", "JWT Auth"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "crm-inmobiliario-hero",
      alt: "Web de Inmobiliaria Prime, portal de propiedades del ERP Inmobiliario",
      ratio: "16/10",
      kind: "A",
      src: "/brand/crm-inmobiliario.png",
      description: "Captura real del ERP Inmobiliario: vista de pipeline / oportunidades con la barra lateral de navegación y datos de demo.",
    },
  },
  {
    slug: "rrhh",
    name: "ERP Recursos Humanos",
    category: "Gestión de personas",
    status: "demo",
    icon: "UserCog",
    demoUrl: "https://demo-erp-web-rrhh.api.fidelmercadotech.com",
    tagline: "Gestiona empleados, asistencia y novedades de tu empresa en un solo panel.",
    problem:
      "El área de RRHH gestiona vacaciones, permisos e incapacidades por correo y papel, sin trazabilidad de aprobaciones ni un lugar único con la información de cada empleado.",
    summary:
      "Panel privado de RRHH con flujos de solicitud y aprobación, más un sitio público de presentación de la empresa. Datos de demostración incluidos para evaluarlo de inmediato.",
    highlights: [
      "Empleados, departamentos y cargos",
      "Asistencia, vacaciones, permisos e incapacidades",
      "Documentos, turnos y auditoría de acciones",
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
      alt: "Web de FidelOS HRMS, software de Recursos Humanos para empresas",
      ratio: "16/10",
      kind: "A",
      src: "/brand/rrhh.png",
      description: "Captura real del panel de RRHH: dashboard con métricas de empleados / asistencia y menú lateral de módulos.",
    },
  },
  {
    slug: "crm-inventario",
    name: "ERP Comercial + Inventario",
    category: "Comercial y operaciones",
    status: "demo",
    hidden: true,
    icon: "Package",
    tagline: "Gestiona clientes, ventas e inventario en una sola plataforma multiempresa.",
    problem:
      "El equipo comercial no sabe si hay stock para cotizar, y el inventario se descuadra porque las entradas y salidas se anotan en cuadernos distintos.",
    summary:
      "ERP y Control de Inventario integrados: al cotizar una oportunidad ves el stock real, y cada movimiento queda auditado. Con reportes, roles y un asistente de IA por empresa.",
    highlights: [
      "Clientes, oportunidades y pipeline comercial",
      "Productos, stock y movimientos auditados",
      "Reportes, roles y asistente de IA",
    ],
    features: [
      { title: "Módulo comercial", detail: "Clientes y contactos, oportunidades con historial de etapas inmutable, pipeline Kanban con arrastrar y soltar, y actividades." },
      { title: "Catálogos de inventario", detail: "Categorías, marcas, unidades y proveedores como catálogos reutilizables." },
      { title: "Productos y stock", detail: "Productos con SKU único por empresa, estado de stock calculado (normal / bajo / crítico / agotado) y vista de stock de solo lectura." },
      { title: "Movimientos", detail: "Entradas, salidas y ajustes pasan por un único servicio de inventario que bloquea stock negativo y conserva stock anterior / nuevo." },
      { title: "Comercial + productos", detail: "Las oportunidades cotizan líneas de producto y recalculan el monto automáticamente." },
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
      alt: "Pipeline Kanban del ERP junto al panel de inventario",
      ratio: "16/10",
      kind: "A",
      description: "Captura real: pipeline Kanban de oportunidades o la vista de movimientos de inventario, con datos de demo.",
    },
  },
  {
    slug: "veterinaria",
    name: "ERP para Veterinarias",
    category: "Clínicas y consultorios veterinarios",
    status: "demo",
    icon: "PawPrint",
    demoUrl: "https://demo-erp-web-veterinaria.api.fidelmercadotech.com",
    tagline: "Gestiona pacientes, propietarios y la operación completa de tu clínica veterinaria.",
    problem:
      "Las clínicas veterinarias llevan las historias de los pacientes en papel, el inventario de insumos aparte y no tienen forma de recordar controles ni vacunas a los propietarios.",
    summary:
      "Plataforma completa para clínicas veterinarias sobre nuestro ERP + Inventario probado, con el módulo veterinario: propietarios, mascotas / pacientes y gestión clínica, más la web pública de la clínica.",
    highlights: [
      "Mascotas, propietarios y citas",
      "Historia clínica y seguimientos",
      "Inventario de insumos y medicamentos",
    ],
    features: [
      { title: "Base ERP Comercial + Inventario", detail: "Todo lo del ERP Comercial + Inventario (clientes, pipeline, productos, movimientos, reportes, roles, auditoría) como cimiento." },
      { title: "Propietarios y pacientes", detail: "Ficha del propietario vinculada a una o varias mascotas / pacientes con sus datos." },
      { title: "Gestión veterinaria", detail: "Registro de atenciones y seguimientos por paciente." },
      { title: "Inventario clínico", detail: "Control de insumos y medicamentos reutilizando el motor de inventario existente." },
      { title: "Página web de la clínica", detail: "Sitio público con servicios, equipo y contacto por WhatsApp." },
    ],
    benefits: [
      "Una sola herramienta para la clínica y su tienda de insumos",
      "Historial del paciente siempre a mano",
      "Lista para demostrar con datos reales",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "veterinaria-hero",
      alt: "Web pública de la Clínica Vet Los Andes — sitio del cliente incluido en el ERP Veterinaria",
      ratio: "16/10",
      kind: "A",
      src: "/brand/veterinaria.png",
      description: "Captura del homepage público de la clínica veterinaria demo: hero con servicios, equipo y contacto.",
    },
  },
  {
    slug: "clinica-estetica",
    name: "ERP para Clínicas Estéticas",
    category: "Clínicas y centros estéticos",
    status: "demo",
    icon: "Scissors",
    demoUrl: "https://demo-erp-web-clinica-estetica.api.fidelmercadotech.com",
    tagline: "Gestiona pacientes, tratamientos y la operación completa de tu clínica estética.",
    problem:
      "Las clínicas estéticas manejan citas, tratamientos y productos en agendas físicas y hojas de cálculo separadas, sin historial del paciente ni control del inventario de insumos.",
    summary:
      "ERP diseñado para clínicas estéticas: ficha del paciente con historial de tratamientos, agenda de citas, control de inventario de productos e insumos, cotizaciones y facturación en una sola plataforma.",
    highlights: [
      "Pacientes, citas y tratamientos",
      "Productos e inventario de insumos",
      "Cotizaciones y facturación",
    ],
    features: [
      { title: "Directorio de pacientes", detail: "Ficha completa con datos de contacto, historial de tratamientos y notas del profesional." },
      { title: "Agenda de citas", detail: "Programación de citas por profesional, sala o cabina con estados: pendiente, confirmada, en curso, completada." },
      { title: "Historial de tratamientos", detail: "Registro detallado de cada tratamiento: fecha, profesional, productos utilizados y observaciones." },
      { title: "Inventario de productos e insumos", detail: "Catálogo con stock, alertas de stock bajo y registro de consumos por tratamiento." },
      { title: "Cotizaciones y ventas", detail: "Cotizaciones de tratamientos y paquetes, conversión a venta y registro de pagos." },
      { title: "Reportes y métricas", detail: "Citas por periodo, ingresos por tratamiento, consumo de insumos y rendimiento por profesional." },
    ],
    benefits: [
      "Historial completo del paciente siempre disponible",
      "El tratamiento descuenta el inventario automáticamente",
      "Agenda centralizada para todo el equipo",
      "Reportes de qué tratamientos y profesionales generan más ingresos",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "clinica-estetica-hero",
      alt: "Web pública de la clínica estética demo — sitio del cliente incluido en el ERP",
      ratio: "16/10",
      kind: "A",
      src: "/brand/clinica-estetica.png",
      description: "Captura del homepage público de la clínica estética demo: hero con servicios, agenda y contacto.",
    },
  },
  {
    slug: "cuidado-domiciliario",
    name: "ERP para Cuidado Domiciliario",
    category: "Servicios de salud domiciliaria",
    status: "demo",
    icon: "HeartHandshake",
    demoUrl: "https://demo-erp-web-cuidado-domiciliario.api.fidelmercadotech.com",
    tagline: "Gestiona pacientes, cuidadores y los servicios de atención domiciliaria.",
    problem:
      "Las empresas de cuidado domiciliario coordinan pacientes, cuidadores y visitas por teléfono y papel, sin trazabilidad de las atenciones ni control de la facturación por visita.",
    summary:
      "Plataforma para gestionar los servicios de cuidado domiciliario: directorio de pacientes y cuidadores, programación de visitas, registro de atenciones y facturación integrada.",
    highlights: [
      "Pacientes, cuidadores y visitas",
      "Programación y rutas domiciliarias",
      "Registro de atenciones y facturación",
    ],
    features: [
      { title: "Directorio de pacientes", detail: "Ficha con datos médicos básicos, domicilio, contacto del familiar responsable e historial de atenciones." },
      { title: "Directorio de cuidadores", detail: "Perfil de cada cuidador con especialización, disponibilidad y asignaciones activas." },
      { title: "Programación de visitas", detail: "Asignación de cuidador a paciente con frecuencia y horario; vista de calendario." },
      { title: "Registro de atenciones", detail: "Bitácora de cada visita: actividades realizadas, observaciones y confirmación del responsable." },
      { title: "Facturación por visita", detail: "Cobros por visita o periodo con estado de pago e historial por paciente." },
      { title: "Reportes y seguimiento", detail: "Visitas por cuidador, cobertura por zona, ingresos por periodo y alertas de visitas pendientes." },
    ],
    benefits: [
      "Control de qué cuidador atendió a qué paciente y cuándo",
      "Facturación sin errores basada en las visitas realizadas",
      "Coordinación centralizada sin depender de llamadas",
      "Historial de atenciones accesible para el equipo y el familiar",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "cuidado-domiciliario-hero",
      alt: "Web pública del servicio de cuidado domiciliario demo — sitio del cliente incluido en el ERP",
      ratio: "16/10",
      kind: "A",
      src: "/brand/cuidado-domiciliario.png",
      description: "Captura del homepage público del servicio de cuidado domiciliario demo: hero con servicios y contacto.",
    },
  },
  {
    slug: "agencia-viajes",
    name: "ERP para Agencias de Viajes",
    category: "Turismo y viajes",
    status: "demo",
    icon: "Globe",
    demoUrl: "https://demo-erp-web-agencia-viajes.api.fidelmercadotech.com",
    tagline: "Gestiona reservas, clientes y la operación completa de tu agencia de viajes.",
    problem:
      "Las agencias de viajes coordinan reservas, proveedores y pagos en chats y correos, sin un lugar único con el estado de cada paquete ni control de lo que se debe cobrar o abonar.",
    summary:
      "ERP para agencias de viajes: directorio de clientes, cotizaciones y paquetes, registro de reservas con proveedores (aerolíneas, hoteles, transfers), control de pagos y comisiones.",
    highlights: [
      "Clientes, cotizaciones y paquetes de viaje",
      "Reservas con proveedores y tiquetes",
      "Pagos, comisiones y seguimiento",
    ],
    features: [
      { title: "Directorio de clientes", detail: "Ficha del cliente con historial de viajes, preferencias y datos de contacto." },
      { title: "Cotizaciones y paquetes", detail: "Cotizaciones detalladas con servicios, fechas, precios y estado (enviada, aprobada, en proceso)." },
      { title: "Reservas con proveedores", detail: "Registro de reservas por servicio (vuelos, hoteles, transfers) con número de confirmación y proveedor." },
      { title: "Control de pagos y comisiones", detail: "Seguimiento de pagos del cliente, abonos a proveedores y comisiones percibidas." },
      { title: "Itinerarios", detail: "Generación del itinerario detallado del viaje para entregar al cliente." },
      { title: "Reportes y rentabilidad", detail: "Ventas por periodo, comisiones acumuladas, proveedores más utilizados y clientes recurrentes." },
    ],
    benefits: [
      "Cada viaje y su estado en un solo lugar, sin buscar en chats",
      "Control de lo que cobra y lo que debe a proveedores",
      "Cotizaciones profesionales que reflejan tu marca",
      "Historial completo de cada cliente para fidelizarlo",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "agencia-viajes-hero",
      alt: "Web pública de la agencia de viajes demo — sitio del cliente incluido en el ERP",
      ratio: "16/10",
      kind: "A",
      src: "/brand/agencia-viajes.png",
      description: "Captura del homepage público de la agencia de viajes demo: hero con destinos, servicios y contacto.",
    },
  },
  {
    slug: "escuela-futbol",
    name: "ERP para Escuelas Deportivas",
    category: "Escuelas y academias deportivas",
    status: "demo",
    icon: "Dumbbell",
    demoUrl: "https://demo-erp-web-escuela-futbol.api.fidelmercadotech.com",
    tagline: "Gestiona estudiantes, grupos, asistencia y la operación de tu escuela deportiva.",
    problem:
      "Las escuelas deportivas llevan matrículas en hojas de cálculo, asistencia en papel y cobros en cuadernos, sin visibilidad de quién está al día ni seguimiento del progreso de cada estudiante.",
    summary:
      "ERP para academias deportivas: directorio de estudiantes con grupos y categorías, registro de asistencia, seguimiento del progreso, control de matrículas y mensualidades.",
    highlights: [
      "Estudiantes, grupos y categorías",
      "Asistencia y seguimiento deportivo",
      "Matrículas, mensualidades y tesorería",
    ],
    features: [
      { title: "Directorio de estudiantes", detail: "Ficha del estudiante con datos del acudiente, categoría, grupo y estado de matrícula." },
      { title: "Grupos y categorías", detail: "Organización por edad, nivel o categoría con asignación de entrenador." },
      { title: "Registro de asistencia", detail: "Asistencia por sesión de entrenamiento con historial por estudiante y grupo." },
      { title: "Seguimiento deportivo", detail: "Evaluaciones y seguimiento del progreso de cada estudiante por periodo." },
      { title: "Matrículas y mensualidades", detail: "Registro de matrículas, cobros mensuales, estado de pago y alertas de cartera vencida." },
      { title: "Reportes y métricas", detail: "Asistencia por grupo, ingresos por periodo, estudiantes activos vs. inactivos y cartera." },
    ],
    benefits: [
      "Visibilidad de quién asistió y quién está al día en pagos",
      "Contacto del acudiente siempre a mano en la ficha",
      "Control de cartera sin cuadernos ni hojas de cálculo",
      "Seguimiento del progreso deportivo por estudiante",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "escuela-futbol-hero",
      alt: "Web pública de la escuela deportiva demo — sitio del cliente incluido en el ERP",
      ratio: "16/10",
      kind: "A",
      src: "/brand/escuela-futbol.png",
      description: "Captura del homepage público de la escuela deportiva demo: hero con programas, equipo e inscripciones.",
    },
  },
  {
    slug: "ips",
    name: "ERP para IPS / Salud",
    category: "IPS y servicios de salud",
    status: "demo",
    icon: "Stethoscope",
    demoUrl: "https://demo-ips.api.fidelmercadotech.com",
    tagline: "Gestiona pacientes, citas e historia clínica de tu IPS en un solo sistema.",
    problem:
      "Las IPS manejan historia clínica en papel, agenda en un sistema aparte y facturación en otro, sin integración ni trazabilidad del proceso de atención.",
    summary:
      "ERP para IPS y centros de salud: directorio de pacientes con historia clínica digital, agenda de citas por especialidad y médico, inventario de medicamentos e insumos, y facturación integrada.",
    highlights: [
      "Pacientes, citas e historia clínica",
      "Servicios, inventario y médicos",
      "Facturación y cartera",
    ],
    features: [
      { title: "Directorio de pacientes", detail: "Ficha con datos personales, información de contacto y aseguradora." },
      { title: "Historia clínica digital", detail: "Registro de consultas, diagnósticos, tratamientos y evoluciones por paciente y médico." },
      { title: "Agenda de citas", detail: "Programación por especialidad, médico y consultorio con vista de disponibilidad." },
      { title: "Inventario de medicamentos e insumos", detail: "Control de stock con alertas de agotamiento y consumos por atención." },
      { title: "Facturación y cartera", detail: "Facturas por servicio, control de pagos y seguimiento de cartera." },
      { title: "Reportes y métricas", detail: "Consultas por médico y especialidad, ocupación, ingresos y rotación de inventario." },
    ],
    benefits: [
      "Historia clínica digital accesible para todos los médicos",
      "Sin choques de citas: disponibilidad en tiempo real",
      "Facturación integrada con la atención, sin re-digitar",
      "Control de medicamentos con alertas de stock crítico",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "ips-hero",
      alt: "Web pública de la IPS demo — sitio del cliente incluido en el ERP de Salud",
      ratio: "16/10",
      kind: "A",
      src: "/brand/ips.png",
      description: "Captura del homepage público de la IPS demo: hero con especialidades, equipo médico y citas.",
    },
  },
  {
    slug: "erp-general",
    name: "ERP General",
    category: "Sector general",
    status: "demo",
    icon: "Network",
    demoUrl: "https://demo-erp-web-erp.api.fidelmercadotech.com",
    tagline: "Gestiona clientes, ventas, inventario y equipos de cualquier empresa en una sola plataforma.",
    problem:
      "Las empresas operan con herramientas desconectadas: un software para ventas, otro para inventario y hojas de cálculo para el resto, sin una sola fuente de verdad.",
    summary:
      "ERP configurable para cualquier sector: módulo comercial completo, control de inventario, gestión de personas, reportes y asistente de IA. Base sólida que se adapta al proceso de tu empresa.",
    highlights: [
      "Clientes, contactos y pipeline comercial",
      "Inventario, productos y movimientos",
      "Roles, reportes y asistente de IA",
    ],
    features: [
      { title: "Módulo comercial", detail: "Clientes, contactos, oportunidades con historial de etapas, pipeline Kanban y actividades." },
      { title: "Inventario y productos", detail: "Catálogo con SKU, control de stock, alertas y movimientos auditados." },
      { title: "Proveedores y compras", detail: "Directorio de proveedores, registro de compras y conciliación con el inventario." },
      { title: "Facturación y cobros", detail: "Cotizaciones, facturas y registro de pagos vinculados a clientes y oportunidades." },
      { title: "Roles y multiempresa", detail: "Control de acceso por rol con alcance de datos por empresa." },
      { title: "Reportes y asistente de IA", detail: "Reportes exportables y asistente en lenguaje natural para consultar el negocio." },
    ],
    benefits: [
      "Una sola herramienta para ventas, inventario y operación",
      "Base configurada y probada: sin partir desde cero",
      "Control de acceso granular por rol y empresa",
      "Pregúntale al ERP en lenguaje natural con el asistente de IA",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum", "Spatie Permission"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "erp-general-hero",
      alt: "Web pública del ERP General demo — sitio del cliente incluido en la plataforma",
      ratio: "16/10",
      kind: "A",
      src: "/brand/erp-general.png",
      description: "Captura del homepage público del ERP General demo: hero con propuesta de valor, características y contacto.",
    },
  },
  {
    slug: "hvac",
    name: "ERP para HVAC",
    category: "HVAC y climatización",
    status: "demo",
    icon: "AirVent",
    demoUrl: "https://demo-erp-web-hvac.api.fidelmercadotech.com",
    tagline: "Gestiona clientes, equipos, instalaciones y mantenimientos de tu empresa HVAC.",
    problem:
      "Las empresas de HVAC coordinan instalaciones y mantenimientos por teléfono y WhatsApp, sin historial por equipo ni control de los repuestos utilizados en cada servicio.",
    summary:
      "ERP para empresas HVAC: directorio de clientes con sus equipos instalados, órdenes de trabajo para instalaciones y mantenimientos, inventario de repuestos y facturación por servicio.",
    highlights: [
      "Clientes, equipos e instalaciones",
      "Órdenes de trabajo y mantenimientos",
      "Inventario de repuestos y facturación",
    ],
    features: [
      { title: "Clientes y equipos instalados", detail: "Ficha del cliente con sus equipos: marca, modelo, número de serie, ubicación y fecha de instalación." },
      { title: "Órdenes de trabajo", detail: "OT para instalación, mantenimiento preventivo o correctivo, con técnico asignado y materiales usados." },
      { title: "Mantenimientos preventivos", detail: "Programación de visitas periódicas por equipo con recordatorios y registro del servicio realizado." },
      { title: "Inventario de repuestos", detail: "Control de stock de repuestos y herramientas, consumos por OT y alertas de stock bajo." },
      { title: "Facturación por servicio", detail: "Factura vinculada a la OT con detalle de mano de obra, repuestos y forma de pago." },
      { title: "Reportes y métricas", detail: "OT por técnico y periodo, equipos con más fallas, ingresos por tipo de servicio y rentabilidad." },
    ],
    benefits: [
      "Historial completo de cada equipo instalado en el cliente",
      "Ningún mantenimiento preventivo olvidado",
      "Saber qué hay en stock antes de ir al cliente",
      "Facturación basada en lo que realmente se hizo",
    ],
    stack: ["Next.js 16", "Laravel 12", "Sanctum"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "hvac-hero",
      alt: "ERP para HVAC — órdenes de trabajo y equipos",
      ratio: "16/10",
      kind: "A",
      description: "Captura del ERP: lista de órdenes de trabajo o ficha de equipo instalado con historial de mantenimientos.",
    },
  },
  {
    slug: "fidelos",
    name: "FidelOS · Inventario con IA",
    category: "Producto propio",
    status: "demo",
    hidden: true,
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
      "Menos errores de digitación: la IA revisa antes de registrar",
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
    name: "Agentes de WhatsApp + Automatización",
    category: "Automatización y atención",
    status: "demo",
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
      { title: "Integración con sistemas", detail: "Conecta con tu ERP, agenda o base de datos para consultar y registrar información." },
      { title: "Transferencia a humano", detail: "Cuando la conversación lo requiere, deriva a una persona con el contexto de lo hablado." },
    ],
    benefits: [
      "Cero mensajes sin responder",
      "El equipo recibe leads ya calificados",
      "La conversación queda registrada en tus sistemas",
      "El agente se limita a lo que definimos contigo",
    ],
    stack: ["Motor de IA conversacional", "WhatsApp", "n8n", "Integraciones con ERP"],
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
