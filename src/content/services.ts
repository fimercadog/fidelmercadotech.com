import type { Story } from "@/content/story";

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
  /** Optional step-by-step method; when present the detail page shows it instead of the plain `includes` list. */
  method?: {
    title: string;
    intro: string;
    steps: { title: string; question: string; detail: string; example?: string }[];
    /** Etiqueta del ejemplo de cada paso (por defecto "En la práctica:"). */
    exampleLabel?: string;
    /** Optional: how far the automation can go, driven by the findings of the diagnosis. */
    scope?: { title: string; text: string; paths: { title: string; text: string }[] };
    delivery: string;
  };
  /** Optional pointer to the service that comes right before/after this one in the recommended path. */
  flow?: { direction: "previous" | "next"; slug: string; text: string };
  /** Optional worked example: a user story plus its privacy and savings angle. */
  story?: Story;
}

export const SERVICES: Service[] = [
  {
    id: "web",
    story: {
      title: "Lo que gana un consultorio con una web que convierte",
      asA: "dueña de un consultorio",
      want: "que quien encuentre mi web pueda escribirme por WhatsApp o dejar sus datos en un toque",
      soThat: "convertir visitas en contactos sin depender de que alguien me llame primero",
      criteria: [
        "El botón de WhatsApp y el formulario están a un toque desde cualquier página.",
        "Cada contacto llega validado y sin spam.",
        "Veo de dónde vienen las visitas y cuáles terminan en un contacto.",
      ],
      points: [
        { label: "Ganas clientes", text: "Cada visita puede volverse un contacto. Lo que antes se iba sin dejar rastro ahora te llega con nombre y forma de responderle." },
      ],
    },
    icon: "Globe",
    title: "Desarrollo web",
    description: "Sitios corporativos, portales y páginas de presentación rápidas, medibles y conectadas a tus sistemas.",
    tagline: "Tu presencia digital: rápida, medible y conectada a tu operación.",
    problem:
      "Muchas empresas tienen una web lenta, difícil de actualizar y desconectada del resto de sus herramientas. No genera contactos ni se puede medir.",
    summary:
      "Construyo sitios, portales y páginas de presentación con tecnología moderna, rápidos y pensados para que te encuentren en Google, y conectados a tu ERP o a WhatsApp para que cada visita pueda convertirse en un contacto.",
    includes: [
      { title: "Diseño a tu negocio", detail: "Identidad visual propia, no una plantilla genérica: colores, tipografía y estructura pensados para tu público." },
      { title: "Velocidad y Google", detail: "Carga rápida y todo lo necesario para que Google entienda tu sitio y lo muestre bien, desde el primer día." },
      { title: "Formularios y WhatsApp", detail: "Captación de contactos con validación, anti-spam y botón directo a WhatsApp." },
      { title: "Contenido editable", detail: "Blog o catálogo básico y secciones que puedes actualizar sin depender de mí." },
      { title: "Analítica", detail: "Medición de visitas y conversiones para saber qué funciona." },
    ],
    benefits: [
      "Una web que carga en segundos",
      "Cada visita puede volverse un contacto",
      "Preparada para conectarse a tu ERP",
      "Medible: sabes de dónde vienen los clientes",
    ],
    related: ["crm-inmobiliario", "rrhh"],
  },
  {
    id: "software",
    story: {
      title: "Lo que gana una ferretería con un sistema a su medida",
      asA: "gerente de una ferretería con varias sedes",
      want: "un solo sistema que siga cómo vendemos y cómo compramos",
      soThat: "dejar de reconciliar tres archivos de Excel en cada cierre de mes",
      criteria: [
        "Cada sede ve el mismo dato, sin copias distintas.",
        "Cada persona ve y hace solo lo que le corresponde por su rol.",
        "El reporte del mes sale del sistema, exportable a Excel o PDF.",
      ],
      points: [
        { label: "Ganas tiempo y certeza", text: "Un solo lugar con el dato correcto. Se acaba la discusión de cuál archivo es el bueno y se acaba la doble digitación." },
      ],
    },
    icon: "Code2",
    title: "Software empresarial a medida",
    description: "Sistemas de gestión, paneles internos y plataformas construidas para tu operación, no una plantilla.",
    tagline: "El sistema que tu operación necesita, construido a tu medida.",
    problem:
      "Cuando el negocio crece, las hojas de cálculo y las herramientas sueltas dejan de alcanzar: nadie sabe cuál es el dato bueno y cada proceso vive en un lugar distinto.",
    summary:
      "Diseño y desarrollo sistemas de gestión y paneles internos a la medida de tu operación: módulos, roles, reportes y automatizaciones que reflejan cómo trabaja realmente tu equipo.",
    includes: [
      { title: "Análisis del proceso", detail: "Mapeo cómo trabajas hoy antes de escribir una línea de código." },
      { title: "Módulos a medida", detail: "Las entidades y flujos de tu negocio, no los de una plantilla." },
      { title: "Roles y permisos", detail: "Cada persona ve y hace solo lo que le corresponde." },
      { title: "Reportes y exportación", detail: "Los indicadores que tu equipo revisa, exportables a Excel y PDF." },
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
    id: "automatizacion",
    story: {
      title: "Lo que gana una empresa con todos sus módulos conectados",
      asA: "gerente de una empresa de servicios",
      want: "que ventas, inventario y finanzas trabajen sobre los mismos clientes y productos",
      soThat: "decidir con un solo dato, sin cruzar los archivos de cada área",
      criteria: [
        "Cada área trabaja sobre los mismos clientes y productos, sin copias distintas.",
        "Activo solo los módulos que mi empresa necesita hoy y sumo otros después.",
        "Cada persona ve y hace solo lo que le corresponde por su rol.",
      ],
      points: [
        { label: "Ganas visión", text: "Una sola fuente de verdad para toda la empresa. Se acaba la discusión de cuál archivo es el bueno y cada área ve lo mismo que las demás." },
      ],
    },
    icon: "Network",
    title: "FidelOS · ERP modular",
    description: "Módulos para toda tu empresa (comercial, inventario, compras, ventas y finanzas), adaptados a tu negocio.",
    tagline: "Los mismos módulos para toda empresa, adaptados a tu negocio.",
    problem:
      "Cada área trabaja en su propia herramienta o en hojas de cálculo: ventas no ve el inventario, finanzas no ve las ventas y nadie tiene el dato correcto.",
    summary:
      "FidelOS es un ERP, es decir, un solo sistema que reúne los módulos que toda empresa necesita (comercial, inventario, compras, ventas, finanzas, personas, reportes y administración) sobre una misma base de datos. Se adaptan a tu negocio y se activan por módulo; la IA y el agente de WhatsApp pensado para tu tipo de negocio se suman cuando los necesitas, como módulos premium.",
    includes: [
      { title: "Comercial (CRM)", detail: "Interesados, clientes, contactos, oportunidades de venta y actividades, con su historial." },
      { title: "Inventario y compras", detail: "Productos, bodegas, stock y movimientos, más proveedores, órdenes y recepciones." },
      { title: "Ventas y cobros", detail: "Cotizaciones, pedidos, facturas y cuentas por cobrar." },
      { title: "Finanzas y contabilidad", detail: "Cuentas, pagos y transferencias, con plan de cuentas, períodos y libro diario." },
      { title: "Administración y reportes", detail: "Organización, usuarios, roles y auditoría de quién hizo qué y cuándo, con reportes exportables." },
      { title: "Módulos premium", detail: "Modo contingencia, IA (por ejemplo para RRHH) y el agente de WhatsApp para tu tipo de negocio, que se suman cuando los necesitas." },
    ],
    benefits: [
      "Un solo dato para todas las áreas de la empresa",
      "Activas solo los módulos que necesitas",
      "Se adapta a tu negocio sin empezar de cero",
      "IA y WhatsApp como módulos premium, cuando los necesites",
    ],
    related: ["erp-general", "fidelos"],
  },
  {
    id: "ia",
    story: {
      title: "Lo que gana una comercializadora que le pregunta a su propio negocio",
      asA: "gerente de una comercializadora",
      want: "preguntarle a mi negocio en lenguaje natural, por ejemplo qué productos se están agotando",
      soThat: "decidir en minutos sin esperar a que alguien arme un reporte",
      criteria: [
        "La respuesta sale de los datos de mi empresa y de nadie más.",
        "La IA solo ve lo que se definió; no queda expuesta toda la base de datos.",
        "Lo que la IA propone lo confirmo antes de que se escriba en mis sistemas.",
      ],
      points: [
        { label: "Ganas rapidez", text: "Pasas de pedir un reporte y esperar a preguntar y decidir. La IA responde dentro de los límites que tú pones." },
      ],
    },
    icon: "BrainCircuit",
    title: "Inteligencia Artificial",
    description: "IA como módulo premium: asistentes y agentes de WhatsApp para tu tipo de negocio, que se suman a tu sistema cuando los necesitas.",
    tagline: "IA como módulo premium: se suma a tu sistema cuando la necesitas, con contexto acotado y control.",
    problem:
      "La IA suena bien pero no es obvio dónde aplicarla sin arriesgar datos ni terminar con una herramienta que nadie usa.",
    summary:
      "La IA no es la base de FidelOS: la implemento como módulo premium sobre el sistema que ya tienes. Asistentes que responden sobre los datos de tu empresa, módulos como IA para RRHH y el agente de WhatsApp para tu tipo de negocio. Puedes cambiar de proveedor de IA cuando quieras, y el contexto siempre queda limitado a tu empresa.",
    includes: [
      { title: "Asistente de negocio", detail: "Preguntas en lenguaje natural sobre tus datos, con respuestas acotadas a tu empresa." },
      { title: "Módulos premium para tu negocio", detail: "IA para RRHH, asistentes para tu operación y el agente de WhatsApp que corresponde a tu tipo de negocio." },
      { title: "Tú eliges dónde corre la IA", detail: "Puede funcionar sin internet, dentro de tu empresa, o con un proveedor externo, según el caso y lo sensibles que sean tus datos." },
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
    story: {
      title: "Lo que gana una veterinaria que responde por WhatsApp a toda hora",
      asA: "dueña de una veterinaria",
      want: "que un agente conteste y califique a quien escribe por WhatsApp, a cualquier hora",
      soThat: "no perder clientes por responder tarde y que mi equipo reciba contactos ya calificados",
      criteria: [
        "El mensaje se responde de inmediato, también de noche y fines de semana.",
        "El agente toma nombre, necesidad y datos clave durante la conversación.",
        "Cuando hace falta, pasa a una persona con el contexto de lo conversado.",
      ],
      points: [
        { label: "Ganas clientes", text: "Cero mensajes sin responder. El cliente que escribe fuera de horario recibe atención en lugar de irse con la competencia." },
      ],
    },
    icon: "MessageSquare",
    title: "Agentes de WhatsApp",
    description: "El agente de WhatsApp para tu tipo de negocio: atiende, califica y registra, con transferencia a una persona.",
    tagline: "Cero mensajes de WhatsApp sin responder, a cualquier hora.",
    problem:
      "Los mensajes llegan a toda hora y se responden tarde o nunca. Cada respuesta lenta es un cliente que se va con la competencia.",
    summary:
      "Configuro el agente de WhatsApp que corresponde a tu tipo de negocio, como módulo premium sobre tu sistema: atención, preguntas frecuentes, captación y calificación de clientes, con integración a tus sistemas y transferencia a una persona cuando hace falta.",
    includes: [
      { title: "Atención 24/7", detail: "Responde de inmediato con el tono y la información de tu empresa." },
      { title: "Preguntas frecuentes", detail: "Horarios, precios, ubicación y servicios sin intervención humana." },
      { title: "Filtro de interesados", detail: "Hace las preguntas clave y deja el contacto listo para el equipo comercial." },
      { title: "Integración con tus sistemas", detail: "Consulta y registra información en tu ERP, agenda o base de datos." },
      { title: "Transferencia a humano", detail: "Deriva a una persona con el contexto de lo conversado." },
    ],
    benefits: [
      "Respuesta inmediata a cualquier hora",
      "El equipo recibe interesados ya filtrados",
      "La conversación queda registrada",
      "El agente se limita a lo que definimos contigo",
    ],
    related: ["agentes-whatsapp"],
  },
  {
    id: "integraciones",
    story: {
      title: "Lo que gana una empresa cuyas herramientas dejan de ser islas",
      asA: "gerente administrativo",
      want: "que mi web, mi ERP y mi WhatsApp compartan la misma información",
      soThat: "capturar un dato una sola vez y dejar de copiarlo de una herramienta a otra",
      criteria: [
        "Un cambio en un sistema se refleja en los demás.",
        "Las conexiones usan los canales oficiales de cada herramienta y se reintentan solas si algo falla.",
        "Queda por escrito qué sistema conecta con cuál.",
      ],
      points: [
        { label: "Ganas tiempo", text: "Menos errores entre sistemas y la información al día en todas tus herramientas, sin que alguien la pase a mano." },
      ],
    },
    icon: "Plug",
    title: "Integraciones",
    description: "Conecto tus herramientas entre sí: ERP, WhatsApp, medios de pago en línea, hojas de cálculo y más.",
    tagline: "Tus herramientas dejan de ser islas.",
    problem:
      "Cada herramienta guarda su propia versión de la verdad y alguien tiene que pasar datos de una a otra a mano.",
    summary:
      "Conecto tus sistemas entre sí con conexiones directas y automatizaciones: ERP, WhatsApp, medios de pago en línea, hojas de cálculo y servicios externos, para que la información fluya sin intervención manual.",
    includes: [
      { title: "Mapa de sistemas", detail: "Qué herramientas tienes, qué datos comparten y dónde está la fricción." },
      { title: "Conexión directa entre sistemas", detail: "Conexiones sobre los canales oficiales de cada herramienta, que se reintentan solas si algo falla." },
      { title: "Sincronización de datos", detail: "Que un cambio en un sistema se refleje en los demás." },
      { title: "Avisos automáticos", detail: "Procesos que se activan solos cuando ocurre algo en otro sistema." },
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
    id: "consultoria-ia",
    icon: "Lightbulb",
    title: "Consultoría de IA",
    description: "Diagnóstico en cuatro preguntas encadenadas: entiendo cómo trabajas, qué automatizar, qué puede romperse y en qué orden hacerlo.",
    tagline: "Cuatro preguntas, en orden, y al final un plan que se puede ejecutar.",
    problem:
      "Muchas empresas quieren adoptar IA pero no saben por dónde empezar, qué automatizar primero ni qué puede salir mal. El resultado: proyectos que se inician sin criterio, se abandonan a la mitad o automatizan el proceso equivocado.",
    summary:
      "Mi diagnóstico es una cadena de cuatro preguntas: cada una solo tiene respuesta si la anterior ya está respondida. Empiezo viendo cómo trabajan hoy, sigo con qué se puede automatizar y con qué, reviso qué se rompe si lo hacemos y cierro con el orden en que se hace. Lo que sale se entrega documentado y lo puedes ejecutar solo, con tu equipo o conmigo.",
    method: {
      title: "Cuatro preguntas, en este orden",
      exampleLabel: "En la distribuidora:",
      intro: "Cada una solo tiene respuesta si la anterior está respondida, y al final sale un plan que se puede ejecutar. Te muestro cada paso con un ejemplo: el de una distribuidora.",
      steps: [
        {
          title: "Auditoría de procesos",
          question: "¿Cómo trabajan hoy?",
          detail: "Mapa real de cómo se mueve el trabajo dentro de la empresa, no el organigrama. Dónde se repite, dónde se para y dónde se pierde dinero.",
          example: "Cada pedido se digita tres veces: en WhatsApp, en Excel y en facturación.",
        },
        {
          title: "Análisis de oportunidades",
          question: "¿Qué se puede automatizar y con qué?",
          detail: "Oportunidades de IA y automatización sobre esos procesos concretos, con la tecnología que hace falta y lo que cuesta mantenerla.",
          example: "El candidato real: que los pedidos de WhatsApp lleguen solos al sistema, con una IA que lee el mensaje y lo registra.",
        },
        {
          title: "Estudio de vulnerabilidades",
          question: "¿Qué se rompe si lo hacemos?",
          detail: "Cada oportunidad revisada por seguridad antes de existir: qué datos toca, quién accede y qué hay que cerrar para que no abra un agujero.",
          example: "Los pedidos traen datos de clientes: antes de conectar nada se define quién accede y qué queda registrado.",
        },
        {
          title: "Hoja de ruta de implementación",
          question: "¿En qué orden se hace?",
          detail: "Las fases ordenadas por retorno y dificultad, con lo que hace falta en cada una y cómo se mide que ha funcionado.",
          example: "Fase 1: pedidos. Fase 2: inventario. Fase 3: reportes. Cada una con su criterio de terminado.",
        },
      ],
      scope: {
        title: "Se automatiza lo que el diagnóstico demuestra que vale la pena",
        text: "No parto de una meta de cuántos procesos automatizar: parto de lo que encuentro. Hay empresas que solo me piden automatizar un proceso y con eso basta. Otras empiezan con uno y, a medida que el diagnóstico muestra hallazgos, descubren que conviene automatizar buena parte de su operación, por fases y en el orden que marca la hoja de ruta. El alcance lo deciden tus procesos y los hallazgos, no una cifra.",
        paths: [
          { title: "Un proceso", text: "Lo resuelvo, lo dejo funcionando y ahí termina el alcance." },
          { title: "Varios procesos", text: "El diagnóstico los ordena por retorno y dificultad, y se automatizan por fases." },
          { title: "Gran parte de la operación", text: "Cuando los hallazgos lo justifican, la hoja de ruta se extiende a casi toda la empresa; cada fase se aprueba antes de pasar a la siguiente." },
        ],
      },
      delivery: "Se entrega documentado en un Notion compartido. A partir de ahí lo ejecutas solo, con tu equipo o conmigo.",
    },
    includes: [
      {
        title: "Auditoría de procesos",
        detail: "Mapeo cómo trabaja tu equipo hoy: flujos, herramientas, puntos de contacto, cuellos de botella y tareas repetitivas que consumen tiempo sin agregar valor.",
      },
      {
        title: "Análisis de oportunidades",
        detail: "Identifico qué procesos son candidatos reales de automatización con IA, qué tecnología aplica a cada caso (IA que lee texto, imágenes o voz, o robots que repiten tareas) y cuál es el retorno esperado.",
      },
      {
        title: "Estudio de vulnerabilidades",
        detail: "Evalúo qué puede romperse si automatizo: dependencias ocultas, riesgos de datos, resistencia del equipo, y puntos donde la IA puede fallar sin que nadie lo detecte.",
      },
      {
        title: "Hoja de ruta de implementación",
        detail: "Entrego un plan priorizado por impacto y riesgo: qué se hace primero, qué se deja para después, y los criterios para saber que cada etapa está terminada.",
      },
    ],
    benefits: [
      "Claridad estratégica antes de invertir en tecnología",
      "Evitas automatizar el proceso equivocado",
      "Sabes exactamente en qué orden implementar",
      "Reduces el riesgo de proyectos abandonados a la mitad",
    ],
    related: ["ia-local", "fidelos", "erp-general"],
    flow: {
      direction: "next",
      slug: "ia-local",
      text: "Con el diagnóstico en la mano, el siguiente paso es llevar esa IA a tus propios equipos, para que tu información y tus costos queden bajo tu control.",
    },
    story: {
      title: "Lo que gana una distribuidora pequeña",
      asA: "gerente de una distribuidora",
      want: "saber qué procesos automatizar primero y en qué orden",
      soThat: "invertir en tecnología una sola vez y no automatizar el proceso equivocado",
      criteria: [
        "Recibo un mapa de cómo trabaja hoy mi equipo, con los cuellos de botella señalados.",
        "Sé cuáles dos o tres procesos dan más retorno y qué riesgo tiene cada uno.",
        "Tengo una hoja de ruta con fases, costos y criterios para saber cuándo cada etapa está terminada.",
      ],
      points: [
        {
          label: "Ganas tiempo",
          text: "Un proceso repetitivo que hoy ocupa a varias personas varias horas a la semana se identifica y se mide antes de invertir. Sabes si vale la pena automatizarlo antes de gastar un peso.",
        },
        {
          label: "Ganas certeza",
          text: "Antes de construir nada ya sabes qué automatizar, qué dejar para después y dónde puede fallar. Evitas pagar por un sistema que nadie termina usando.",
        },
      ],
      note: "Ejemplo ilustrativo. Las horas y el retorno reales dependen de tus procesos; el diagnóstico es justamente para medirlos.",
    },
  },
{
  id: "ia-local",
  icon: "Server",
  title: "Inteligencia Artificial en tus propios equipos",
  description:
    "Implemento modelos de inteligencia artificial en equipos propios o en un servidor privado para que tu empresa tenga mayor control sobre sus datos, costos y tecnología.",
  tagline:
    "Tu IA. Tus equipos. Tus datos bajo tu control.",
  problem:
    "Depender solo de servicios de inteligencia artificial en la nube puede exponer información sensible a proveedores externos, generar costos variables por consumo y crear dependencia de plataformas cuyas tarifas, condiciones y disponibilidad no controlas. Para empresas que trabajan con información confidencial o necesitan costos previsibles, contar con una alternativa propia puede marcar la diferencia.",
  summary:
    "Diseño e implemento soluciones de inteligencia artificial que funcionan en tus propios equipos o en un servidor privado bajo tu control. Elijo modelos de IA de código abierto según las necesidades del negocio, optimizo su rendimiento y los integro con tus sistemas para automatizar procesos, consultar información interna y construir aplicaciones inteligentes sin depender obligatoriamente de servicios externos.",
  includes: [
    {
      title: "Selección estratégica del modelo",
      detail:
        "Analizo tu caso de uso, los requisitos de privacidad, la calidad de respuesta y los recursos disponibles para seleccionar el modelo más adecuado. Evalúo varias opciones de modelos de IA de código abierto, con licencias compatibles con tu proyecto."
    },
    {
      title: "Instalación y ajuste",
      detail:
        "Instalo y configuro los modelos en equipos propios o en un entorno privado. Ajusto su funcionamiento según la capacidad de tus equipos (potencia, memoria y almacenamiento) para equilibrar rendimiento, calidad y costos."
    },
    {
      title: "Conexión privada con tus sistemas",
      detail:
        "Dejo el modelo disponible mediante una conexión privada y lo conecto con tus aplicaciones, CRM, ERP, plataformas internas y automatizaciones existentes."
    },
    {
      title: "IA conectada al conocimiento de tu empresa",
      detail:
        "Conecto los modelos con documentos, manuales, catálogos, políticas y bases de conocimiento internas para que la IA responda con base en tus propias fuentes, sin tener que volver a entrenarla cada vez que cambia la información."
    },
    {
      title: "Personalización y ajuste fino",
      detail:
        "Cuando el caso de uso lo justifica, adapto el comportamiento del modelo mediante instrucciones, ejemplos, conjuntos de datos propios o entrenamiento adicional a tu medida. Defino el método según el objetivo, la calidad de los datos y el presupuesto."
    },
    {
      title: "Seguridad, monitoreo y mantenimiento",
      detail:
        "Configuro controles de acceso, métricas de rendimiento, registros operativos y seguimiento de errores. Planifico actualizaciones, respaldos y pruebas para mantener la solución estable y facilitar su evolución."
    }
  ],
  benefits: [
    "Mayor control sobre la información y dónde se procesa.",
    "Sin tarifas por cada consulta de un proveedor de IA cuando el modelo corre en tus propios equipos.",
    "Costos más previsibles, según tus equipos, la energía y el mantenimiento.",
    "Posibilidad de operar sin conexión a internet cuando toda la solución y sus dependencias están alojadas localmente.",
    "Libertad para evaluar y sustituir modelos según las necesidades del negocio.",
    "Integración con sistemas empresariales y automatizaciones existentes.",
    "Una arquitectura que puede crecer con tu empresa sin depender exclusivamente de un único proveedor."
  ],
  related: ["agentes-whatsapp", "erp-general"],
  flow: {
    direction: "previous",
    slug: "consultoria-ia",
    text: "Antes de montar la IA en tu servidor conviene saber qué automatizar, en qué orden y qué puede fallar. Ese es el primer paso.",
  },
  story: {
    title: "Lo que gana una clínica pequeña",
    asA: "gerente de una clínica",
    want: "que mi equipo consulte con IA los protocolos y la información interna",
    soThat: "ganar tiempo sin que ningún dato de un paciente salga de nuestra red",
    criteria: [
      "La consulta se procesa dentro del servidor de la clínica y no se envía a ningún proveedor externo.",
      "No hay cobro por cada pregunta: el costo es el servidor y la energía, y es fijo cada mes.",
      "Si se cae el internet, el asistente sigue respondiendo.",
    ],
    points: [
      {
        label: "Ganas privacidad",
        text: "Los protocolos, las historias y los documentos se quedan en tu red. Nadie externo los recibe, los almacena ni los usa para entrenar sus modelos, y tú decides quién accede y qué queda registrado.",
      },
      {
        label: "Ganas ahorro",
        text: "Con IA en la nube pagas por uso: más preguntas, más factura. Con un modelo local no hay cobro por consulta; pagas los equipos y su mantenimiento, un costo que puedes prever.",
      },
    ],
    note: "Ejemplo ilustrativo. Los costos reales dependen del hardware, el modelo y el uso de tu caso; los calculamos contigo antes de decidir.",
  },
},
  {
    id: "movil",
    story: {
      title: "Lo que gana un equipo en ruta con una app conectada a su sistema",
      asA: "jefe de bodega con un equipo en ruta",
      want: "que mi equipo registre entregas desde el celular, incluso sin señal",
      soThat: "que lo hecho en la calle quede en el sistema sin que nadie lo digite en la oficina",
      criteria: [
        "Lo que se captura en el celular queda en la misma base de datos del sistema.",
        "Sin conexión, las acciones se guardan y se actualizan solas al volver la señal.",
        "Cada persona entra con los mismos roles que ya tiene.",
      ],
      points: [
        { label: "Ganas tiempo", text: "Se acaba el pasar notas al final del día y la doble digitación. El dato nace una vez, donde ocurre." },
      ],
    },
    icon: "Smartphone",
    title: "Aplicaciones móviles",
    description: "Apps nativas y multiplataforma para iOS y Android conectadas a tus sistemas de gestión.",
    tagline: "Tu operación en el bolsillo de tu equipo y tus clientes.",
    problem:
      "Muchos procesos siguen atados al escritorio cuando el equipo trabaja en campo, en bodega o en ruta. Una app móvil bien hecha elimina esa fricción sin duplicar la base de datos.",
    summary:
      "Desarrollo aplicaciones móviles para iOS y Android que se integran con tus sistemas existentes: ERP, inventario, agenda o CRM. El equipo opera desde el celular con los mismos datos y permisos que en la plataforma principal.",
    includes: [
      { title: "Diseño para móvil", detail: "Interfaz pensada para uso en campo: botones grandes, navegación rápida y flujos cortos que no requieren manual." },
      { title: "Conexión a tu ERP o sistema", detail: "La app lee y escribe en la misma plataforma que usa tu equipo. Un solo dato, sin duplicados." },
      { title: "Funciona sin internet", detail: "Las acciones se guardan en el celular y se actualizan cuando vuelve la conexión — útil en bodegas o zonas sin señal." },
      { title: "Autenticación y roles", detail: "Los mismos roles de tu sistema central: cada usuario ve y puede hacer lo que le corresponde." },
      { title: "Publicación en tiendas", detail: "Gestiono el proceso de publicación en App Store y Google Play, incluida la configuración de certificados." },
    ],
    benefits: [
      "El equipo opera desde el celular con datos en tiempo real",
      "Sin doble digitación: lo que captura la app queda en el sistema",
      "Funciona aunque se corte la conexión",
      "Una sola base de datos para web y móvil",
    ],
    related: ["crm-inventario", "erp-general"],
  },
  {
    id: "personalizadas",
    story: {
      title: "Lo que gana una agencia con un proceso que ninguna herramienta resuelve",
      asA: "dueño de una agencia con un proceso propio",
      want: "un sistema que siga mi forma de trabajar y no la de una plantilla",
      soThat: "dejar de adaptarme a una herramienta que me cuesta más que el problema original",
      criteria: [
        "Se define por escrito qué se construye, en qué orden y cuándo está terminado.",
        "Veo avances funcionando por fases, no una caja negra.",
        "Parte de una base ya construida, no de cero.",
      ],
      points: [
        { label: "Ganas ajuste", text: "El sistema se adapta a tu operación y no al revés, y llegas más rápido porque no empiezas de cero." },
      ],
    },
    icon: "Puzzle",
    title: "Soluciones personalizadas",
    description: "¿Tu caso no encaja en ninguna casilla? Lo diseño y lo construyo contigo desde cero.",
    tagline: "Si ninguna solución encaja del todo, la construyo contigo.",
    problem:
      "Tu operación tiene una particularidad que ningún producto de estantería resuelve, y adaptarte a la herramienta te cuesta más que el problema original.",
    summary:
      "Cuando ninguno de mis productos encaja del todo, diseño y construyo una solución a la medida sobre mi base ya construida: ERP, inventario, RRHH, IA y automatización como cimientos.",
    includes: [
      { title: "Descubrimiento", detail: "Entiendo el problema real antes de proponer una solución." },
      { title: "Alcance por escrito", detail: "Qué se construye, en qué orden y con qué criterio de terminado." },
      { title: "Base ya construida", detail: "Parto de módulos que ya tengo construidos, no de cero absoluto." },
      { title: "Entregas por fases", detail: "Ves avances funcionando pronto y ajustas sobre la marcha." },
      { title: "Acompañamiento", detail: "Soporte y mejoras después de la entrega." },
    ],
    benefits: [
      "La solución se ajusta a tu caso, no al revés",
      "Partes de una base ya construida",
      "Alcance y criterios claros desde el inicio",
      "Avances tempranos, no una caja negra",
    ],
    related: ["veterinaria", "fidelos"],
  },
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
