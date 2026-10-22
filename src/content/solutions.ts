/**
 * Solution catalogue. Copy is grounded in each project's real
 * `docs/development-status.md` / README — features listed here are ones
 * that are implemented and verified, or (where marked `status: "roadmap"`)
 * explicitly described as in construction. Do not add capabilities that do
 * not exist in the underlying product.
 */

import type { Story } from "@/content/story";
import { getService } from "@/content/services";

export type SolutionStatus = "live" | "demo" | "roadmap";

export interface SolutionFeature {
  title: string;
  detail: string;
}

export interface Solution {
  /** Optional gain-focused user story shown on the solution page. */
  story?: Story;
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

/** "IA en tus propios equipos" se cuenta una sola vez, en el servicio; esta solución lo lee de ahí para que nunca se contradigan. */
const IA_LOCAL = getService("ia-local");
const AGENTES = getService("agentes");

export const SOLUTIONS: Solution[] = [
  {
    slug: "crm-inmobiliario",
    story: {
      title: "Lo que gana una inmobiliaria con su seguimiento de ventas al día",
      asA: "asesor comercial de una inmobiliaria",
      want: "que cada interesado que llega del portal entre a mi seguimiento de ventas con su ficha y un siguiente paso agendado",
      soThat: "no perder negocios por responder tarde o por olvidarme de llamar",
      criteria: [
        "El interesado del portal aparece en el ERP sin copiarlo a mano.",
        "Cada oportunidad avanza por etapas con recordatorios de seguimiento.",
        "Tengo el historial del cliente y de la propiedad en un solo lugar.",
      ],
      points: [
        { label: "Ganas cierres", text: "Ningún interesado se queda sin respuesta. El que antes se enfriaba entre WhatsApp y hojas de cálculo ahora tiene un siguiente paso." },
      ],
    },
    name: "ERP para Inmobiliarias",
    category: "Sector inmobiliario",
    status: "demo",
    icon: "Home",
    tagline: "Gestiona toda la operación de tu inmobiliaria en un solo sistema.",
    problem:
      "Las inmobiliarias pierden negocios entre WhatsApp, hojas de cálculo y correos sueltos: interesados sin seguimiento, propiedades desactualizadas y ningún historial del cliente.",
    summary:
      "Un ERP para el equipo comercial y una web pública inmobiliaria conectada, para que cada interesado que llega desde el portal entre directo al seguimiento de ventas con su ficha completa.",
    highlights: [
      "Propiedades, interesados y seguimiento comercial",
      "Clientes, propietarios y contactos",
      "Visitas, tareas, documentos y reportes",
    ],
    features: [
      { title: "Web pública inmobiliaria", detail: "Portal de propiedades con búsqueda, fichas, blog y captación de interesados con contacto directo por WhatsApp." },
      { title: "Gestión de propiedades", detail: "Alta de propiedades con fotos, estado, propietario asociado y publicación al portal." },
      { title: "Clientes, propietarios y contactos", detail: "Ficha unificada con notas, historial y datos de contacto de cada parte." },
      { title: "Interesados y oportunidades", detail: "Cada interesado del portal entra al ERP; se convierte en oportunidad y avanza por las etapas de venta." },
      { title: "Etapas de venta y actividades", detail: "Etapas configurables, actividades y seguimientos con recordatorios para el equipo." },
      { title: "Visitas, tareas y documentos", detail: "Agenda de visitas, tareas asignadas y documentos adjuntos por propiedad u operación." },
      { title: "Reportes y equipo", detail: "Panel de métricas comerciales, gestión del equipo y exportación a Excel y PDF." },
    ],
    benefits: [
      "Ningún interesado se queda sin respuesta",
      "El portal y el ERP comparten la misma base de datos",
      "Historial completo de cada cliente y propiedad",
      "IA y agente de WhatsApp como módulos premium",
    ],
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Base de datos", "Acceso protegido por usuario"],
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
    story: {
      title: "Lo que gana un equipo de talento humano con un solo panel",
      asA: "analista de talento humano",
      want: "recibir y aprobar vacaciones, permisos e incapacidades en un solo panel",
      soThat: "cerrar cada periodo sin perseguir papeles ni correos",
      criteria: [
        "Cada solicitud sigue un flujo de solicitud y aprobación.",
        "Cada empleado tiene una sola ficha, con sus documentos.",
        "Sé quién aprobó qué y cuándo, gracias al registro de auditoría.",
      ],
      points: [
        { label: "Ganas tiempo y orden", text: "Las aprobaciones dejan de vivir en correos sueltos. Todo queda en un lugar, con responsable y fecha." },
      ],
    },
    name: "ERP Recursos Humanos",
    category: "Gestión de personas",
    status: "demo",
    icon: "UserCog",
    tagline: "Gestiona empleados, asistencia y novedades de tu empresa en un solo panel.",
    problem:
      "El área de RRHH gestiona vacaciones, permisos e incapacidades por correo y papel, sin registro de quién aprobó qué ni un lugar único con la información de cada empleado.",
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
      { title: "Usuarios, roles y permisos", detail: "Gestión de usuarios y roles con permisos para cada persona." },
      { title: "Panel de control y exportaciones", detail: "Métricas con datos reales, tablas con búsqueda y exportación a Excel y PDF por módulo." },
      { title: "Auditoría de acciones", detail: "Registro de acciones para saber quién hizo qué y cuándo." },
      { title: "IA para RRHH (módulo premium)", detail: "Interfaz del asistente lista en el panel; el proveedor de IA se conecta según el cliente." },
    ],
    benefits: [
      "Aprobaciones registradas, sin correos sueltos",
      "Una sola ficha por empleado con toda su información",
      "Control de acceso por rol",
      "Listo para demostrar con datos de ejemplo",
    ],
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario", "Tablas con búsqueda"],
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
    story: {
      title: "Lo que gana una distribuidora que cotiza con el stock a la vista",
      asA: "comercial de una distribuidora",
      want: "ver el stock real al cotizar una oportunidad",
      soThat: "prometer solo lo que puedo entregar y cerrar más rápido",
      criteria: [
        "Cotizo líneas de producto y el monto se recalcula solo.",
        "El stock que veo es el real, no el de un cuaderno.",
        "Cada movimiento de inventario queda auditado.",
      ],
      points: [
        { label: "Ganas credibilidad", text: "Dejas de cotizar a ciegas. El cliente recibe un precio y una disponibilidad en los que puede confiar." },
      ],
    },
    name: "ERP Comercial + Inventario",
    category: "Comercial y operaciones",
    status: "demo",
    hidden: true,
    icon: "Package",
    tagline: "Gestiona clientes, ventas e inventario en una sola plataforma para varias empresas.",
    problem:
      "El equipo comercial no sabe si hay stock para cotizar, y el inventario se descuadra porque las entradas y salidas se anotan en cuadernos distintos.",
    summary:
      "ERP y Control de Inventario integrados: al cotizar una oportunidad ves el stock real, y cada movimiento queda auditado. Con reportes y roles, y un asistente de IA como módulo premium.",
    highlights: [
      "Clientes, oportunidades y seguimiento comercial",
      "Productos, stock y movimientos auditados",
      "Reportes y roles; IA como módulo premium",
    ],
    features: [
      { title: "Módulo comercial", detail: "Clientes y contactos, oportunidades con historial de etapas inmutable, tablero de ventas que se mueve arrastrando, y actividades." },
      { title: "Catálogos de inventario", detail: "Categorías, marcas, unidades y proveedores como catálogos reutilizables." },
      { title: "Productos y stock", detail: "Productos con código único por empresa, estado del inventario calculado (normal / bajo / crítico / agotado) y vista de solo consulta." },
      { title: "Movimientos", detail: "Entradas, salidas y ajustes pasan por un único servicio de inventario que bloquea stock negativo y conserva stock anterior / nuevo." },
      { title: "Comercial + productos", detail: "Las oportunidades cotizan líneas de producto y recalculan el monto automáticamente." },
      { title: "Reportes", detail: "Valorización de inventario, resumen de movimientos, oportunidades por etapa y ventas por producto — todos exportables a Excel y PDF." },
      { title: "Roles y varias empresas", detail: "Cinco perfiles base (superadministrador, administrador, comercial, inventario, vendedor), cada uno con acceso solo a los datos de su empresa." },
      { title: "Auditoría", detail: "Registro campo a campo (valor anterior / nuevo) de los cambios en clientes, productos, oportunidades y más." },
      { title: "Asistente de IA (módulo premium)", detail: "Preguntas en lenguaje natural sobre el negocio, que puede funcionar sin internet o con un proveedor externo de IA, siempre limitado a los datos de tu empresa." },
    ],
    benefits: [
      "Cotizas sabiendo el stock real",
      "El inventario no se descuadra: un solo camino para cada movimiento",
      "Cada empresa ve solo sus datos",
      "Preguntas al negocio en lenguaje natural",
    ],
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario", "Permisos por rol", "Tablas con búsqueda"],
    cta: { label: "Solicitar demostración", kind: "demo" },
    heroImage: {
      id: "crm-inventario-hero",
      alt: "Tablero de ventas del ERP junto al panel de inventario",
      ratio: "16/10",
      kind: "A",
      description: "Captura real: pipeline Kanban de oportunidades o la vista de movimientos de inventario, con datos de demo.",
      // TODO(imagen): esta captura es del panel del agente Luna; reemplazar por una del ERP Comercial + Inventario.
      src: "/brand/crm-inventario.png",
    },
  },
  {
    slug: "veterinaria",
    story: {
      title: "Lo que gana una clínica veterinaria con la ficha de cada mascota a mano",
      asA: "médica veterinaria",
      want: "abrir la ficha de la mascota y ver su historial de atenciones y seguimientos",
      soThat: "decidir en consulta con todo el contexto y sin buscar en papel",
      criteria: [
        "El propietario queda vinculado a una o varias mascotas.",
        "Cada atención y seguimiento queda registrado por paciente.",
        "Los insumos y medicamentos viven en el mismo sistema que la clínica.",
      ],
      points: [
        { label: "Ganas tiempo y confianza", text: "El historial del paciente siempre a mano: atiendes con contexto y sin interrumpir la consulta para buscar una carpeta." },
      ],
    },
    name: "ERP para Veterinarias",
    category: "Clínicas y consultorios veterinarios",
    status: "demo",
    icon: "PawPrint",
    tagline: "Gestiona pacientes, propietarios y la operación completa de tu clínica veterinaria.",
    problem:
      "Las clínicas veterinarias llevan las historias de los pacientes en papel, el inventario de insumos aparte y no tienen forma de recordar controles ni vacunas a los propietarios.",
    summary:
      "Plataforma completa para clínicas veterinarias sobre mi ERP + Inventario, con el módulo veterinario: propietarios, mascotas / pacientes y gestión clínica, más la web pública de la clínica.",
    highlights: [
      "Mascotas, propietarios y citas",
      "Historia clínica y seguimientos",
      "Inventario de insumos y medicamentos",
    ],
    features: [
      { title: "Base ERP Comercial + Inventario", detail: "Todo lo del ERP Comercial + Inventario (clientes, seguimiento de ventas, productos, movimientos, reportes, roles, registro de acciones) como base." },
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
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "veterinaria-hero",
      alt: "Ilustración de dos personas conectando sus sistemas",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del ERP veterinario (la anterior era una portada vacía).
      src: "/brand/illus-collaboration.png",
      description: "Captura del homepage público de la clínica veterinaria demo: hero con servicios, equipo y contacto.",
    },
  },
  {
    slug: "clinica-estetica",
    story: {
      title: "Lo que gana una clínica estética que registra y descuenta en un solo paso",
      asA: "directora de una clínica estética",
      want: "registrar cada tratamiento con los productos usados y que el inventario se descuente solo",
      soThat: "saber qué tratamientos dejan más y no quedarme sin insumos con la agenda llena",
      criteria: [
        "La agenda se organiza por profesional y cabina, con estado de cada cita.",
        "El tratamiento registra los productos utilizados y descuenta el stock.",
        "Recibo alertas de stock bajo y reportes de ingresos por tratamiento.",
      ],
      points: [
        { label: "Ganas control", text: "Sabes qué se consumió, qué tratamientos generan más ingresos y qué profesional rinde más, sin armar hojas de cálculo." },
      ],
    },
    name: "ERP para Clínicas Estéticas",
    category: "Clínicas y centros estéticos",
    status: "demo",
    icon: "Scissors",
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
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "clinica-estetica-hero",
      alt: "Ilustración de un equipo de trabajo",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del ERP de clínica estética (la anterior era una portada vacía).
      src: "/brand/illus-about.png",
      description: "Captura del homepage público de la clínica estética demo: hero con servicios, agenda y contacto.",
    },
  },
  {
    slug: "cuidado-domiciliario",
    story: {
      title: "Lo que gana una empresa de cuidado domiciliario con cada visita registrada",
      asA: "coordinadora de cuidado domiciliario",
      want: "ver qué cuidador atendió a qué paciente y registrar lo que se hizo en cada visita",
      soThat: "facturar solo lo que se prestó y responder a las familias con certeza",
      criteria: [
        "Cada visita queda programada con su cuidador, frecuencia y horario.",
        "La bitácora recoge actividades, observaciones y confirmación del responsable.",
        "La facturación sale de las visitas realizadas.",
      ],
      points: [
        { label: "Ganas exactitud", text: "Facturación sin errores basada en lo que realmente se hizo, y un historial que puedes mostrar a la familia sin llamar a nadie." },
      ],
    },
    name: "ERP para Cuidado Domiciliario",
    category: "Servicios de salud domiciliaria",
    status: "demo",
    icon: "HeartHandshake",
    tagline: "Gestiona pacientes, cuidadores y los servicios de atención domiciliaria.",
    problem:
      "Las empresas de cuidado domiciliario coordinan pacientes, cuidadores y visitas por teléfono y papel, sin registro de las atenciones ni control de la facturación por visita.",
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
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "cuidado-domiciliario-hero",
      alt: "Ilustración de un equipo de trabajo",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del ERP de cuidado domiciliario (la anterior era una portada vacía).
      src: "/brand/illus-about.png",
      description: "Captura del homepage público del servicio de cuidado domiciliario demo: hero con servicios y contacto.",
    },
  },
  {
    slug: "agencia-viajes",
    story: {
      title: "Lo que gana una agencia de viajes con cada viaje en un solo lugar",
      asA: "agente de viajes",
      want: "tener la cotización, las reservas y los pagos de cada cliente en un solo lugar",
      soThat: "confirmar viajes más rápido y saber cuánto debo cobrar y cuánto abonar a proveedores",
      criteria: [
        "Cada cotización tiene su estado: enviada, aprobada, en proceso.",
        "Las reservas guardan número de confirmación y proveedor.",
        "Los pagos del cliente, los abonos a proveedores y las comisiones están a la vista.",
      ],
      points: [
        { label: "Ganas claridad", text: "Dejas de rastrear el estado de un viaje entre chats y correos. Sabes qué se debe cobrar y qué se debe pagar." },
      ],
    },
    name: "ERP para Agencias de Viajes",
    category: "Turismo y viajes",
    status: "demo",
    icon: "Globe",
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
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "agencia-viajes-hero",
      alt: "Ilustración de una persona trabajando con su sistema",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del ERP de agencia de viajes (la anterior era una portada vacía).
      src: "/brand/illus-hero.png",
      description: "Captura del homepage público de la agencia de viajes demo: hero con destinos, servicios y contacto.",
    },
  },
  {
    slug: "escuela-futbol",
    story: {
      title: "Lo que gana una escuela deportiva que sabe quién está al día",
      asA: "director de una escuela deportiva",
      want: "ver quién asistió y quién está al día con la mensualidad",
      soThat: "cobrar a tiempo sin perseguir a los acudientes con un cuaderno",
      criteria: [
        "La asistencia queda registrada por sesión, por estudiante y por grupo.",
        "El estado de cada matrícula y las alertas de cartera vencida están a la vista.",
        "El contacto del acudiente está siempre en la ficha del estudiante.",
      ],
      points: [
        { label: "Ganas flujo de caja", text: "Sabes desde el primer día quién se atrasó, en lugar de descubrirlo al cerrar el mes." },
      ],
    },
    name: "ERP para Escuelas Deportivas",
    category: "Escuelas y academias deportivas",
    status: "demo",
    icon: "Dumbbell",
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
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "escuela-futbol-hero",
      alt: "Ilustración de dos personas conectando sus sistemas",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del ERP de escuela deportiva (la anterior era una portada vacía).
      src: "/brand/illus-collaboration.png",
      description: "Captura del homepage público de la escuela deportiva demo: hero con programas, equipo e inscripciones.",
    },
  },
  {
    slug: "ips",
    story: {
      title: "Lo que gana una IPS con la historia clínica y la agenda en el mismo sistema",
      asA: "médico de una IPS",
      want: "ver la historia clínica del paciente y la disponibilidad de la agenda en el mismo sistema",
      soThat: "atender sin papeles y sin choques de citas",
      criteria: [
        "La historia clínica digital recoge consultas, diagnósticos y evoluciones.",
        "La agenda se programa por especialidad, médico y consultorio, sin cruces.",
        "La atención alimenta la facturación, sin volver a digitar.",
      ],
      points: [
        { label: "Ganas tiempo y orden", text: "Todos los médicos acceden a la misma historia, y la facturación sale de lo que ya se registró en la atención." },
      ],
    },
    name: "ERP para IPS / Salud",
    category: "IPS y servicios de salud",
    status: "demo",
    icon: "Stethoscope",
    tagline: "Gestiona pacientes, citas e historia clínica de tu IPS en un solo sistema.",
    problem:
      "Las IPS manejan historia clínica en papel, agenda en un sistema aparte y facturación en otro, sin conexión entre sistemas ni registro del proceso de atención.",
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
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "ips-hero",
      alt: "Ilustración de una persona trabajando con su sistema",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del ERP de IPS / salud (la anterior era una portada vacía).
      src: "/brand/illus-productivity.png",
      description: "Captura del homepage público de la IPS demo: hero con especialidades, equipo médico y citas.",
    },
  },
  {
    slug: "erp-general",
    story: {
      title: "Lo que gana una pyme que ve todo su negocio en un solo lugar",
      asA: "dueño de una pyme",
      want: "ver clientes, ventas, inventario y cobros en una sola plataforma",
      soThat: "decidir con los datos del día y no armar el reporte a mano cada mes",
      criteria: [
        "El seguimiento de ventas, las cotizaciones y las facturas viven en el mismo sistema.",
        "El stock con alertas y los movimientos auditados están a la vista.",
        "Los reportes se exportan, y puedo sumar un asistente de IA como módulo premium.",
      ],
      points: [
        { label: "Ganas visión", text: "Una sola fuente de verdad para ventas, inventario y operación, en lugar de un software para cada cosa." },
      ],
    },
    name: "ERP General",
    category: "Sector general",
    status: "demo",
    icon: "Network",
    tagline: "Gestiona clientes, ventas, inventario y equipos de cualquier empresa en una sola plataforma.",
    problem:
      "Las empresas operan con herramientas desconectadas: un software para ventas, otro para inventario y hojas de cálculo para el resto, sin una sola fuente de verdad.",
    summary:
      "ERP configurable para cualquier sector: módulo comercial completo, control de inventario, gestión de personas y reportes, con IA como módulo premium. Base sólida que se adapta al proceso de tu empresa.",
    highlights: [
      "Clientes, contactos y seguimiento comercial",
      "Inventario, productos y movimientos",
      "Roles y reportes; IA como módulo premium",
    ],
    features: [
      { title: "Módulo comercial", detail: "Clientes, contactos, oportunidades con historial de etapas, tablero de ventas y actividades." },
      { title: "Inventario y productos", detail: "Catálogo con código de producto, control de inventario, alertas y movimientos registrados." },
      { title: "Proveedores y compras", detail: "Directorio de proveedores, registro de compras y conciliación con el inventario." },
      { title: "Facturación y cobros", detail: "Cotizaciones, facturas y registro de pagos vinculados a clientes y oportunidades." },
      { title: "Roles y varias empresas", detail: "Cada perfil accede solo a los datos de su empresa." },
      { title: "Reportes e IA premium", detail: "Reportes exportables; el asistente en lenguaje natural para consultar el negocio es un módulo premium." },
    ],
    benefits: [
      "Una sola herramienta para ventas, inventario y operación",
      "Base ya configurada: sin partir desde cero",
      "Control de acceso granular por rol y empresa",
      "Suma un asistente de IA como módulo premium para consultar el negocio en lenguaje natural",
    ],
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario", "Permisos por rol"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "erp-general-hero",
      alt: "Ilustración de un flujo de trabajo automatizado",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del ERP General con datos cargados (la anterior era una portada vacía).
      src: "/brand/illus-automation.png",
      description: "Captura del homepage público del ERP General demo: hero con propuesta de valor, características y contacto.",
    },
  },
  {
    slug: "hvac",
    story: {
      title: "Lo que gana una empresa HVAC con cada equipo y cada mantenimiento registrados",
      asA: "jefe de servicio de una empresa HVAC",
      want: "ver los equipos de cada cliente con sus mantenimientos programados y los repuestos en stock",
      soThat: "no olvidar ningún mantenimiento preventivo y llegar al cliente con el repuesto",
      criteria: [
        "Cada equipo tiene su ficha con marca, modelo, serie e historial.",
        "Los mantenimientos preventivos se programan con recordatorios.",
        "La orden de trabajo registra técnico, materiales y alimenta la factura.",
      ],
      points: [
        { label: "Ganas recurrencia", text: "Ningún mantenimiento preventivo se queda sin hacer, y cada visita se cobra con base en lo que realmente se hizo." },
      ],
    },
    name: "ERP para HVAC",
    category: "HVAC y climatización",
    status: "demo",
    hidden: true,
    icon: "AirVent",
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
    stack: ["Web moderna y rápida", "Servidor seguro y estable", "Acceso protegido por usuario"],
    cta: { label: "Ver demostración", kind: "demo" },
    heroImage: {
      id: "hvac-hero",
      alt: "Ilustración de una persona trabajando con su sistema",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del ERP de HVAC (órdenes de trabajo o ficha de equipo) (aún no hay captura; por ahora, gráfico de marca).
      src: "/brand/illus-productivity.png",
      description: "Captura del ERP: lista de órdenes de trabajo o ficha de equipo instalado con historial de mantenimientos.",
    },
  },
  {
    slug: "fidelos",
    story: getService("automatizacion")?.story,
    name: "FidelOS · ERP modular",
    category: "Producto propio",
    status: "demo",
    hidden: true,
    icon: "Network",
    tagline: "Los mismos módulos para toda empresa, adaptados a tu negocio.",
    problem:
      "Cada área trabaja en su propia herramienta o en hojas de cálculo: ventas no ve el inventario, finanzas no ve las ventas y nadie tiene el dato correcto.",
    summary:
      "FidelOS es un ERP, es decir, un solo sistema que reúne los módulos que toda empresa necesita (comercial, inventario, compras, ventas, finanzas, personas, reportes y administración) sobre una misma base de datos. Se adaptan a tu negocio y se activan por módulo; la IA y el agente de WhatsApp pensado para tu tipo de negocio se suman cuando los necesitas, como módulos premium.",
    highlights: [
      "Comercial, inventario, compras y ventas",
      "Finanzas y contabilidad",
      "Administración, roles y reportes",
      "IA y WhatsApp como módulos premium",
    ],
    features: [
      { title: "Comercial (CRM)", detail: "Interesados, clientes, contactos, oportunidades, actividades y segmentos." },
      { title: "Inventario", detail: "Productos, categorías, marcas, unidades, bodegas, stock y movimientos." },
      { title: "Compras", detail: "Proveedores, órdenes, recepciones, facturas y cuentas por pagar." },
      { title: "Ventas", detail: "Cotizaciones, pedidos, facturas y cuentas por cobrar." },
      { title: "Finanzas y contabilidad", detail: "Cuentas, pagos y transferencias, con plan de cuentas, períodos y libro diario." },
      { title: "Reclutamiento", detail: "Vacantes, candidatos, postulaciones y entrevistas." },
      { title: "Administración y reportes", detail: "Organización, usuarios, roles, auditoría y reportes." },
      { title: "Módulos premium", detail: "Modo contingencia, IA para RRHH y conversaciones de WhatsApp, que se activan según tu negocio." },
    ],
    benefits: [
      "Un solo dato para todas las áreas de la empresa",
      "Activas solo los módulos que necesitas",
      "Se adapta a tu negocio sin empezar de cero",
      "IA y WhatsApp como módulos premium, cuando los necesites",
    ],
    stack: ["Web moderna y rápida", "Servidor seguro y estable"],
    cta: { label: "Solicitar una demo", kind: "demo" },
    demoUrl: "/agendar-cita",
    heroImage: {
      id: "fidelos-hero",
      alt: "Ilustración de dos personas conectando sus sistemas",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real del panel de FidelOS con el menú de módulos (CRM, Inventario, Compras, Ventas, Finanzas…) (aún no hay captura; por ahora, gráfico de marca).
      src: "/brand/illus-collaboration.png",
      description: "Captura del panel de FidelOS con el menú lateral de módulos y datos de ejemplo.",
    },
  },
  {
    slug: "agentes-whatsapp",
    story: {
      title: "Lo que gana un negocio que atiende su WhatsApp a toda hora",
      asA: "dueña de un negocio con muchos mensajes",
      want: "que un agente atienda, responda y califique a quien escribe por WhatsApp",
      soThat: "no perder clientes por contestar tarde y que mi equipo reciba contactos ya calificados",
      criteria: [
        "Cada mensaje se responde de inmediato, a cualquier hora.",
        "El agente toma nombre, necesidad y presupuesto durante la conversación.",
        "Cuando hace falta, deriva a una persona con el contexto de lo hablado.",
      ],
      points: [
        { label: "Ganas clientes", text: "Cero mensajes sin responder y un equipo comercial que recibe interesados listos para cerrar, no chats por ordenar." },
      ],
    },
    name: "Agentes de WhatsApp + Automatización",
    category: "Automatización y atención",
    status: "demo",
    icon: "MessageSquare",
    tagline: AGENTES?.tagline ?? "",
    problem: AGENTES?.problem ?? "",
    summary: AGENTES?.summary ?? "",
    highlights: [
      "Atención 24/7",
      "Preguntas frecuentes",
      "Captación y calificación de clientes",
      "Transferencia a atención humana",
    ],
    features: AGENTES?.includes ?? [],
    benefits: AGENTES?.benefits ?? [],
    stack: ["IA que conversa", "WhatsApp", "Automatización de procesos", "Conexión con tu ERP"],
    cta: { label: "Solicitar demostración", kind: "demo" },
    heroImage: {
      id: "agentes-whatsapp-hero",
      alt: "Ilustración de un flujo de trabajo automatizado",
      ratio: "16/10",
      kind: "C",
      // TODO(imagen): reemplazar por captura real de una conversación del agente de WhatsApp (aún no hay captura; por ahora, gráfico de marca).
      src: "/brand/illus-automation.png",
      description: "Mockup de teléfono con una conversación de WhatsApp real (o recreada): el agente responde una consulta, toma datos y anuncia la transferencia a una persona.",
    },
  },
{
  slug: "ia-local",
  story: IA_LOCAL?.story,
  name: IA_LOCAL?.title ?? "Inteligencia Artificial en tus propios equipos",
  category: "Inteligencia artificial privada",
  status: "demo",
  icon: "Server",

  tagline: IA_LOCAL?.tagline ?? "",
  problem: IA_LOCAL?.problem ?? "",
  summary: IA_LOCAL?.summary ?? "",

  highlights: [
    "Tus datos se quedan en tu empresa",
    "Sin cobro por cada consulta",
    "Se conecta con tus sistemas y documentos",
  ],

  features: IA_LOCAL?.includes ?? [],
  benefits: IA_LOCAL?.benefits ?? [],

  stack: [
    "Modelos de IA de código abierto",
    "IA que corre en tus propios equipos",
    "Conexiones privadas entre sistemas",
    "IA conectada a tus propios documentos",
    "Instalación y mantenimiento en tus equipos",
    "Automatización de procesos",
    "Conexión con tu CRM, ERP y sistemas internos"
  ],

  cta: {
    label: "Solicitar demostración",
    kind: "demo"
  },

  heroImage: {
    id: "ia-local-hero",
    alt: "Ilustración de una persona trabajando con su sistema",
    ratio: "16/10",
    kind: "C",
    // TODO(imagen): reemplazar por gráfico o captura de la IA corriendo en equipos propios (aún no hay captura; por ahora, gráfico de marca).
    src: "/brand/illus-hero.png",
    description:
      "Composición tecnológica empresarial con fondo blanco, un servidor ejecutando modelos de IA y conexiones visuales hacia procesos de negocio, documentos y aplicaciones internas. Estética minimalista y profesional, coherente con un diagnóstico empresarial que integra oportunidades de inteligencia artificial, ciberseguridad y una hoja de ruta de implementación."
  }
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
