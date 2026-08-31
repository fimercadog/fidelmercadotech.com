export interface Service {
  id: string;
  icon: string;
  title: string;
  /** One-liner for cards and grids. */
  description: string;
  /** Detail-page copy. */
  tagline: string;
  problem: string;
  summary: string;
  includes: { title: string; detail: string }[];
  benefits: string[];
  /** Slugs of solutions in content/solutions.ts that relate to this service. */
  related?: string[];
}

export const SERVICES: Service[] = [
  {
    id: "web",
    icon: "Globe",
    title: "Desarrollo web",
    description: "Sitios corporativos, portales y landing pages rápidas, medibles y conectadas a tus sistemas.",
    tagline: "Tu presencia digital: rápida, medible y conectada a tu operación.",
    problem:
      "Muchas empresas tienen una web lenta, difícil de actualizar y desconectada del resto de sus herramientas. No genera contactos ni se puede medir.",
    summary:
      "Construimos sitios corporativos, portales y landing pages con tecnología moderna (Next.js), optimizados para velocidad y SEO, y conectados a tu CRM o a WhatsApp para que cada visita pueda convertirse en un contacto.",
    includes: [
      { title: "Diseño a tu negocio", detail: "Identidad visual propia, no una plantilla genérica: colores, tipografía y estructura pensados para tu público." },
      { title: "Rendimiento y SEO", detail: "Carga rápida, buenas prácticas técnicas, metadatos, sitemap y datos estructurados desde el primer día." },
      { title: "Formularios y WhatsApp", detail: "Captación de contactos con validación, anti-spam y botón directo a WhatsApp." },
      { title: "Contenido editable", detail: "Blog o catálogo básico y secciones que puedes actualizar sin depender de nosotros." },
      { title: "Analítica", detail: "Medición de visitas y conversiones para saber qué funciona." },
    ],
    benefits: [
      "Una web que carga en segundos",
      "Cada visita puede volverse un contacto",
      "Preparada para conectarse a tu CRM",
      "Medible: sabes de dónde vienen los clientes",
    ],
    related: ["crm-inmobiliario", "rrhh"],
  },
  {
    id: "software",
    icon: "Code2",
    title: "Software empresarial a medida",
    description: "Sistemas de gestión, paneles internos y plataformas construidas para tu operación, no una plantilla.",
    tagline: "El sistema que tu operación necesita, construido a tu medida.",
    problem:
      "Cuando el negocio crece, las hojas de cálculo y las herramientas sueltas dejan de alcanzar: nadie sabe cuál es el dato bueno y cada proceso vive en un lugar distinto.",
    summary:
      "Diseñamos y desarrollamos sistemas de gestión y paneles internos a la medida de tu operación: módulos, roles, reportes y automatizaciones que reflejan cómo trabaja realmente tu equipo.",
    includes: [
      { title: "Análisis del proceso", detail: "Mapeamos cómo trabajas hoy antes de escribir una línea de código." },
      { title: "Módulos a medida", detail: "Las entidades y flujos de tu negocio, no los de una plantilla." },
      { title: "Roles y permisos", detail: "Cada persona ve y hace solo lo que le corresponde." },
      { title: "Reportes y exportación", detail: "Los indicadores que tu equipo revisa, exportables a CSV / PDF." },
      { title: "Auditoría", detail: "Registro de quién hizo qué y cuándo, campo por campo." },
    ],
    benefits: [
      "Un solo lugar con el dato correcto",
      "El sistema se adapta a tu proceso, no al revés",
      "Control de acceso por rol",
      "Base para automatizar e integrar",
    ],
    related: ["crm-inventario", "rrhh"],
  },
  {
    id: "crm",
    icon: "Users",
    title: "CRM",
    description: "Gestión de clientes, contactos, oportunidades y pipeline adaptada a tu proceso comercial.",
    tagline: "Ningún lead se pierde entre WhatsApp, correos y hojas de cálculo.",
    problem:
      "El equipo comercial pierde negocios porque los contactos están repartidos, no hay seguimiento y nadie sabe en qué etapa va cada oportunidad.",
    summary:
      "Implementamos un CRM adaptado a tu proceso comercial: clientes y contactos con ficha unificada, oportunidades en un pipeline visual, actividades con recordatorios y reportes de gestión.",
    includes: [
      { title: "Clientes y contactos", detail: "Ficha unificada con historial, notas y datos de contacto de cada parte." },
      { title: "Pipeline visual", detail: "Etapas configurables con arrastrar y soltar; ves el estado de todo el negocio de un vistazo." },
      { title: "Actividades y seguimientos", detail: "Tareas y recordatorios para que ningún contacto se quede sin respuesta." },
      { title: "Reportes comerciales", detail: "Oportunidades por etapa, conversión y actividad del equipo." },
      { title: "Integración con WhatsApp", detail: "Los contactos que llegan por WhatsApp o por la web entran directo al CRM." },
    ],
    benefits: [
      "Ningún lead sin seguimiento",
      "Sabes en qué etapa va cada oportunidad",
      "Historial completo de cada cliente",
      "Reportes reales, no estimaciones",
    ],
    related: ["crm-inmobiliario", "crm-inventario"],
  },
  {
    id: "inventario",
    icon: "Boxes",
    title: "Sistemas de inventario",
    description: "Productos, stock, proveedores y movimientos auditados, con reportes y alertas de stock.",
    tagline: "El inventario deja de descuadrarse: un solo camino para cada movimiento.",
    problem:
      "Las entradas y salidas se anotan en cuadernos distintos, nadie sabe si hay stock para vender y el conteo físico nunca coincide con el sistema.",
    summary:
      "Construimos control de inventario con catálogo de productos, stock por ubicación, proveedores y movimientos (entradas, salidas y ajustes) que pasan por un único servicio que bloquea stock negativo y conserva el histórico.",
    includes: [
      { title: "Catálogo de productos", detail: "SKU único, categorías, marcas, unidades y proveedores como catálogos reutilizables." },
      { title: "Stock calculado", detail: "Estado normal / bajo / crítico / agotado calculado automáticamente." },
      { title: "Movimientos auditados", detail: "Cada entrada, salida y ajuste conserva stock anterior y nuevo, con usuario y fecha." },
      { title: "Alertas de stock", detail: "Avisos cuando un producto baja del mínimo definido." },
      { title: "Reportes", detail: "Valorización de inventario y resumen de movimientos, exportables." },
    ],
    benefits: [
      "Cotizas sabiendo el stock real",
      "El inventario no se descuadra",
      "Cada movimiento tiene origen y responsable",
      "Alertas antes de quedarte sin producto",
    ],
    related: ["crm-inventario", "fidelos"],
  },
  {
    id: "automatizacion",
    icon: "Workflow",
    title: "Automatización de procesos",
    description: "Convertimos tareas repetitivas y flujos manuales en procesos que corren solos.",
    tagline: "Las tareas repetitivas dejan de ocupar el tiempo de tu equipo.",
    problem:
      "Tu equipo pierde horas copiando datos entre sistemas, enviando los mismos correos y armando los mismos reportes a mano.",
    summary:
      "Identificamos los flujos manuales que más tiempo consumen y los convertimos en automatizaciones: sincronización entre herramientas, notificaciones, reportes programados y procesos que se disparan solos ante un evento.",
    includes: [
      { title: "Diagnóstico de procesos", detail: "Detectamos qué tareas repetitivas se pueden automatizar y cuáles no conviene." },
      { title: "Automatizaciones con n8n", detail: "Flujos visuales, mantenibles y documentados, no scripts frágiles." },
      { title: "Sincronización entre sistemas", detail: "Que un dato capturado una vez aparezca donde tiene que aparecer." },
      { title: "Notificaciones y reportes", detail: "Avisos por correo o WhatsApp y reportes programados." },
      { title: "Monitoreo", detail: "Alertas si una automatización falla, para actuar a tiempo." },
    ],
    benefits: [
      "Menos trabajo manual repetitivo",
      "Menos errores de copiar y pegar",
      "Los procesos corren aunque nadie esté pendiente",
      "Tu equipo se enfoca en lo que aporta valor",
    ],
    related: ["agentes-whatsapp"],
  },
  {
    id: "ia",
    icon: "BrainCircuit",
    title: "Inteligencia Artificial",
    description: "IA aplicada a tu negocio: asistentes, procesamiento de voz e imágenes, y análisis en lenguaje natural.",
    tagline: "IA aplicada a casos concretos de tu negocio, con contexto acotado y control.",
    problem:
      "La IA suena bien pero no es obvio dónde aplicarla sin arriesgar datos ni terminar con una herramienta que nadie usa.",
    summary:
      "Aplicamos IA a casos concretos: asistentes que responden preguntas sobre tu negocio en lenguaje natural, captura por voz e imagen, y análisis de información. Con proveedor intercambiable y el contexto siempre acotado a tu empresa.",
    includes: [
      { title: "Asistente de negocio", detail: "Preguntas en lenguaje natural sobre tus datos, con respuestas acotadas a tu empresa." },
      { title: "Captura por voz e imagen", detail: "Registrar información dictando o tomando una foto, con revisión de IA antes de guardar." },
      { title: "Proveedor intercambiable", detail: "Offline por defecto, u OpenAI / Anthropic según el caso y la sensibilidad de los datos." },
      { title: "Contexto controlado", detail: "La IA solo ve lo que definimos; nada de exponer toda la base de datos." },
      { title: "Revisión humana", detail: "Lo que la IA propone se confirma antes de escribir en tus sistemas." },
    ],
    benefits: [
      "IA en casos donde de verdad ayuda",
      "Tus datos se mantienen acotados",
      "Empiezas pequeño y creces con confianza",
      "Siempre hay un humano en el paso final",
    ],
    related: ["fidelos", "crm-inventario", "agentes-whatsapp"],
  },
  {
    id: "agentes",
    icon: "MessageSquare",
    title: "Agentes de WhatsApp",
    description: "Agentes conversacionales que atienden, califican y registran, con transferencia a una persona.",
    tagline: "Cero mensajes de WhatsApp sin responder, a cualquier hora.",
    problem:
      "Los mensajes llegan a toda hora y se responden tarde o nunca. Cada respuesta lenta es un cliente que se va con la competencia.",
    summary:
      "Configuramos agentes conversacionales para casos de uso concretos: atención, preguntas frecuentes, captación y calificación de clientes, con integración a tus sistemas y transferencia a una persona cuando hace falta.",
    includes: [
      { title: "Atención 24/7", detail: "Responde de inmediato con el tono y la información de tu empresa." },
      { title: "Preguntas frecuentes", detail: "Horarios, precios, ubicación y servicios sin intervención humana." },
      { title: "Calificación de leads", detail: "Hace las preguntas clave y deja el contacto listo para el equipo comercial." },
      { title: "Integración con tus sistemas", detail: "Consulta y registra información en tu CRM, agenda o base de datos." },
      { title: "Transferencia a humano", detail: "Deriva a una persona con el contexto de lo conversado." },
    ],
    benefits: [
      "Respuesta inmediata a cualquier hora",
      "El equipo recibe leads ya calificados",
      "La conversación queda registrada",
      "El agente se limita a lo que definimos contigo",
    ],
    related: ["agentes-whatsapp"],
  },
  {
    id: "integraciones",
    icon: "Plug",
    title: "Integraciones",
    description: "Conectamos tus herramientas entre sí: CRM, ERP, WhatsApp, pasarelas, hojas de cálculo y APIs.",
    tagline: "Tus herramientas dejan de ser islas.",
    problem:
      "Cada herramienta guarda su propia versión de la verdad y alguien tiene que pasar datos de una a otra a mano.",
    summary:
      "Conectamos tus sistemas entre sí mediante APIs y automatizaciones: CRM, ERP, WhatsApp, pasarelas de pago, hojas de cálculo y servicios externos, para que la información fluya sin intervención manual.",
    includes: [
      { title: "Mapa de sistemas", detail: "Qué herramientas tienes, qué datos comparten y dónde está la fricción." },
      { title: "Conexión por API", detail: "Integraciones sobre APIs oficiales, con manejo de errores y reintentos." },
      { title: "Sincronización de datos", detail: "Que un cambio en un sistema se refleje en los demás." },
      { title: "Webhooks y eventos", detail: "Procesos que se disparan cuando ocurre algo en otro sistema." },
      { title: "Documentación", detail: "Dejas por escrito qué conecta con qué y cómo se comporta." },
    ],
    benefits: [
      "Capturas un dato una sola vez",
      "Menos errores entre sistemas",
      "Información al día en todas tus herramientas",
      "Base para automatizar de verdad",
    ],
    related: ["crm-inventario"],
  },
  {
    id: "personalizadas",
    icon: "Puzzle",
    title: "Soluciones personalizadas",
    description: "¿Tu caso no encaja en ninguna casilla? Lo diseñamos y lo construimos contigo desde cero.",
    tagline: "Si ninguna solución encaja del todo, la construimos contigo.",
    problem:
      "Tu operación tiene una particularidad que ningún producto de estantería resuelve, y adaptarte a la herramienta te cuesta más que el problema original.",
    summary:
      "Cuando ninguno de nuestros productos encaja del todo, diseñamos y construimos una solución a la medida sobre nuestra base ya probada en producción: CRM, inventario, RRHH, IA y automatización como cimientos.",
    includes: [
      { title: "Descubrimiento", detail: "Entendemos el problema real antes de proponer una solución." },
      { title: "Alcance por escrito", detail: "Qué se construye, en qué orden y con qué criterio de terminado." },
      { title: "Base probada", detail: "Partimos de módulos ya en producción, no de cero absoluto." },
      { title: "Entregas por fases", detail: "Ves avances funcionando pronto y ajustas sobre la marcha." },
      { title: "Acompañamiento", detail: "Soporte y mejoras después de la entrega." },
    ],
    benefits: [
      "La solución se ajusta a tu caso, no al revés",
      "Partes de una base ya probada",
      "Alcance y criterios claros desde el inicio",
      "Avances tempranos, no una caja negra",
    ],
    related: ["veterinaria", "fidelos"],
  },
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
