export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  coverImage?: string;
  /** Body as an array of paragraphs / headings. */
  body: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "crm-vs-hoja-de-calculo",
    title: "ERP vs. hoja de cálculo: cuándo dejar el Excel",
    coverImage: "/brand/crm-inmobiliario.png",
    excerpt:
      "La hoja de cálculo funciona hasta que deja de funcionar. Estas son las señales de que tu equipo comercial ya necesita un ERP.",
    category: "Comercial",
    date: "2026-06-10",
    readMinutes: 4,
    body: [
      { type: "p", text: "Casi todos los equipos comerciales empiezan con una hoja de cálculo. Es gratis, todo el mundo la sabe usar y al principio alcanza. El problema aparece cuando el negocio crece." },
      { type: "h2", text: "Las señales de que el Excel ya no da" },
      { type: "ul", items: [
        "Dos personas editan el mismo archivo y una pisa los cambios de la otra.",
        "Nadie sabe cuál es la última versión de la lista de ventas.",
        "Los seguimientos se olvidan porque no hay recordatorios.",
        "No puedes ver el historial de un cliente sin abrir tres archivos.",
      ] },
      { type: "h2", text: "Qué te da un ERP que la hoja no" },
      { type: "p", text: "Un ERP centraliza clientes, contactos, inventario y oportunidades en una sola base de datos, con un tablero visual por etapas, actividades con recordatorios y reportes que se actualizan solos. Cada interesado que llega por WhatsApp o por la web entra directo, con su ficha." },
      { type: "p", text: "No se trata de tener más funciones, sino de que ningún negocio se pierda entre pestañas." },
    ],
  },
  {
    slug: "por-que-el-inventario-nunca-cuadra",
    title: "Por qué tu inventario nunca cuadra (y cómo arreglarlo)",
    // TODO(imagen): reemplazar por una captura real de un inventario con datos (la anterior era una portada vacía).
    coverImage: "/brand/illus-productivity.png",
    excerpt:
      "El conteo físico casi nunca coincide con el sistema. La causa casi siempre es la misma: hay más de un camino para registrar un movimiento.",
    category: "Operaciones",
    date: "2026-06-24",
    readMinutes: 4,
    body: [
      { type: "p", text: "Si el inventario del sistema y el de la bodega nunca coinciden, el problema rara vez es la gente. Es el proceso." },
      { type: "h2", text: "La raíz: varios caminos para el mismo movimiento" },
      { type: "p", text: "Cuando las entradas se anotan en un cuaderno, las salidas en otro y los ajustes los hace quien puede, cada camino introduce un error distinto. Al final del mes nadie sabe cuál es el número bueno." },
      { type: "h2", text: "La solución: un solo servicio de movimientos" },
      { type: "ul", items: [
        "Entradas, salidas y ajustes pasan por el mismo flujo.",
        "El sistema bloquea el stock negativo.",
        "Cada movimiento guarda stock anterior y nuevo, con usuario y fecha.",
        "El stock disponible se calcula, no se escribe a mano.",
      ] },
      { type: "p", text: "Con un único camino auditado, el descuadre deja de acumularse y el conteo físico se vuelve una verificación, no una investigación." },
    ],
  },
  {
    slug: "cuando-conviene-automatizar-un-proceso",
    title: "Cuándo conviene automatizar un proceso (y cuándo no)",
    coverImage: "/brand/rrhh.png",
    excerpt:
      "Automatizar por automatizar sale caro. Estas tres preguntas te dicen si un proceso vale la pena.",
    category: "Automatización",
    date: "2026-07-08",
    readMinutes: 3,
    body: [
      { type: "p", text: "La automatización ahorra tiempo, pero también cuesta construirla y mantenerla. Antes de automatizar un proceso, respóndete tres preguntas." },
      { type: "h2", text: "1. ¿Es repetitivo y estable?" },
      { type: "p", text: "Si el proceso cambia cada semana, automatizarlo significa reprogramarlo cada semana. Automatiza lo que ya se hace igual siempre." },
      { type: "h2", text: "2. ¿Cuánto tiempo consume al mes?" },
      { type: "p", text: "Suma las horas. Si son 10 horas mensuales de copiar y pegar datos, la automatización se paga sola en pocos meses. Si son 20 minutos, quizá no." },
      { type: "h2", text: "3. ¿El error humano tiene costo?" },
      { type: "p", text: "A veces lo que justifica automatizar no es el tiempo, sino evitar el error: un dato mal copiado en una factura o un pedido." },
      { type: "p", text: "Si las tres respuestas apuntan a que sí, ese proceso es un buen candidato." },
    ],
  },
  {
    slug: "por-donde-empezar-con-la-ia-en-tu-empresa",
    title: "Por dónde empezar con la IA en tu empresa (sin gastar a ciegas)",
    // TODO(imagen): reemplazar por una captura real o un gráfico propio del diagnóstico (por ahora, gráfico de marca).
    coverImage: "/brand/illus-about.png",
    excerpt:
      "Antes de comprar tecnología conviene hacerse cuatro preguntas, en orden. Así sabes qué automatizar primero y qué puede salir mal.",
    category: "Consultoría",
    date: "2026-10-05",
    readMinutes: 4,
    body: [
      { type: "p", text: "Muchas empresas me dicen lo mismo: quieren usar inteligencia artificial, pero no saben por dónde empezar. Y empezar sin criterio suele terminar en una herramienta que nadie usa o en automatizar el proceso equivocado." },
      { type: "h2", text: "Cuatro preguntas, en este orden" },
      { type: "p", text: "Cada una solo tiene respuesta si la anterior ya está respondida. Por eso el orden importa." },
      { type: "ul", items: [
        "¿Cómo trabajan hoy? Un mapa real de cómo se mueve el trabajo, no el organigrama: dónde se repite, dónde se para y dónde se pierde dinero.",
        "¿Qué se puede automatizar y con qué? Las oportunidades sobre esos procesos concretos, con la tecnología que hace falta y lo que cuesta mantenerla.",
        "¿Qué se rompe si lo hacemos? Cada oportunidad se revisa por seguridad antes de existir: qué datos toca y quién accede.",
        "¿En qué orden se hace? Las fases ordenadas por retorno y dificultad, con la forma de medir que funcionó.",
      ] },
      { type: "h2", text: "No hay un tamaño fijo" },
      { type: "p", text: "Hay empresas que solo necesitan automatizar un proceso, y con eso basta. Otras empiezan con uno y, a medida que el diagnóstico muestra hallazgos, descubren que conviene automatizar buena parte de su operación, por fases. Lo decide lo que se encuentra, no una meta de cuántos procesos automatizar." },
      { type: "h2", text: "Qué te llevas" },
      { type: "p", text: "Un plan por escrito que puedes ejecutar solo, con tu equipo o conmigo. Y la tranquilidad de no invertir hasta saber si vale la pena." },
      { type: "p", text: "Si quieres empezar por ahí, cuéntame qué se te está complicando y vemos si conviene un solo proceso o un plan más grande." },
    ],
  },
  {
    slug: "ia-en-tus-propios-equipos-privacidad-y-costos",
    title: "IA en tus propios equipos: más privacidad y costos que puedes prever",
    // TODO(imagen): reemplazar por un gráfico o captura de la IA corriendo en equipos propios (por ahora, gráfico de marca).
    coverImage: "/brand/illus-automation.png",
    excerpt:
      "No toda la IA tiene que vivir en la nube. Cuándo conviene tenerla dentro de tu empresa y qué ganas con eso.",
    category: "Inteligencia artificial",
    date: "2026-10-19",
    readMinutes: 4,
    body: [
      { type: "p", text: "Cuando usas un servicio de IA en la nube, cada pregunta viaja a un proveedor externo y cada consulta se cobra. Para muchas tareas eso está bien. Para otras, no." },
      { type: "h2", text: "Cuándo conviene tenerla en tus propios equipos" },
      { type: "ul", items: [
        "Trabajas con información delicada, como historias de pacientes, contratos o datos de clientes, que no quieres que salga de tu empresa.",
        "Prefieres un costo que puedas prever, en lugar de una factura que sube cada vez que tu equipo hace más preguntas.",
        "No quieres depender de los precios ni de las condiciones de un solo proveedor.",
      ] },
      { type: "h2", text: "Qué ganas" },
      { type: "ul", items: [
        "Privacidad: tus documentos y datos se quedan en tu red.",
        "Costos previsibles: pagas los equipos y su mantenimiento, no cada consulta.",
        "Control: tú decides quién accede y qué queda registrado.",
        "Si todo está alojado en tu empresa, puede seguir funcionando aunque se caiga el internet.",
      ] },
      { type: "h2", text: "Un ejemplo para imaginarlo" },
      { type: "p", text: "Piensa en una clínica que quiere que su equipo consulte con IA los protocolos y la información interna, sin que ningún dato de un paciente salga de su red. La consulta se procesa dentro de la clínica, no hay cobro por cada pregunta y, si se cae el internet, el asistente sigue respondiendo. Es un ejemplo ilustrativo, no el resultado de un cliente." },
      { type: "h2", text: "Cuándo no es la mejor opción" },
      { type: "p", text: "No es para todo ni para todos. Tener la IA en tus equipos requiere equipos a la altura, instalación y mantenimiento. Por eso antes conviene saber qué quieres automatizar y en qué orden: ese es el primer paso, y se resuelve con una consultoría." },
      { type: "p", text: "Si crees que te conviene, cuéntame tu caso y vemos qué necesitas." },
    ],
  },
  {
    slug: "que-recibes-al-final-de-una-consultoria-de-ia",
    title: "Qué recibes al final de una consultoría de IA (y qué decides después)",
    // TODO(imagen): reemplazar por una captura o gráfico propio del plan entregable (por ahora, gráfico de marca).
    coverImage: "/brand/illus-hero.png",
    excerpt:
      "Un plan claro, por escrito, que puedes ejecutar solo, con tu equipo o conmigo. Así se ve lo que te llevas y cómo decides el siguiente paso.",
    category: "Consultoría",
    date: "2026-10-12",
    readMinutes: 4,
    body: [
      { type: "p", text: "Mucha gente me pregunta qué recibe exactamente al contratar una consultoría. La respuesta corta: un plan claro, por escrito, que puedes ejecutar sin depender de nadie." },
      { type: "h2", text: "Qué llevas en las manos" },
      { type: "ul", items: [
        "Un mapa de cómo trabaja hoy tu empresa, con los cuellos de botella señalados.",
        "Las oportunidades de automatizar, con la tecnología necesaria y lo que cuesta mantenerla.",
        "Un estudio de qué podría romperse y qué datos toca cada cambio.",
        "Una hoja de ruta con fases ordenadas por retorno y dificultad, y la forma de medir que funcionó.",
      ] },
      { type: "p", text: "Todo se entrega documentado en un espacio compartido, para que tu equipo lo consulte cuando quiera." },
      { type: "h2", text: "Y después, tú decides" },
      { type: "p", text: "Con ese plan puedes ejecutarlo solo, con tu equipo o conmigo. No hay obligación de seguir. Si decides avanzar, cada fase se aprueba antes de pasar a la siguiente, así que nunca firmas más de lo que ya viste." },
      { type: "h2", text: "Un ejemplo para imaginarlo" },
      { type: "p", text: "Imagina una distribuidora donde cada pedido se digita varias veces: en el chat, en una hoja de cálculo y en facturación. La consultoría empieza viendo cómo se mueve el pedido hoy, propone que los pedidos de WhatsApp lleguen solos al sistema, revisa qué datos de clientes toca eso y ordena el trabajo en fases: primero los pedidos, luego el inventario y luego los reportes. Es un ejemplo ilustrativo, no el resultado de un cliente." },
      { type: "h2", text: "Cuándo no la necesitas" },
      { type: "p", text: "Si ya sabes exactamente qué proceso quieres automatizar y por qué, quizá puedas empezar directo por ese proceso. La consultoría vale la pena cuando no está claro por dónde empezar, cuando son varios procesos o cuando algo puede salir mal si se hace sin revisar." },
      { type: "p", text: "Si quieres saber cuál es tu caso, cuéntame qué se te está complicando y te digo si conviene un solo proceso o un plan más grande." },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  // timeZone UTC: "2026-10-19" se interpreta como medianoche UTC; sin esto, en Colombia (UTC-5) se mostraría el día anterior.
  return new Date(iso).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
