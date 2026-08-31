export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  /** Body as an array of paragraphs / headings. */
  body: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "crm-vs-hoja-de-calculo",
    title: "CRM vs. hoja de cálculo: cuándo dejar el Excel",
    excerpt:
      "La hoja de cálculo funciona hasta que deja de funcionar. Estas son las señales de que tu equipo comercial ya necesita un CRM.",
    category: "Comercial",
    date: "2026-06-10",
    readMinutes: 4,
    body: [
      { type: "p", text: "Casi todos los equipos comerciales empiezan con una hoja de cálculo. Es gratis, todo el mundo la sabe usar y al principio alcanza. El problema aparece cuando el negocio crece." },
      { type: "h2", text: "Las señales de que el Excel ya no da" },
      { type: "ul", items: [
        "Dos personas editan el mismo archivo y una pisa los cambios de la otra.",
        "Nadie sabe cuál es la última versión del pipeline.",
        "Los seguimientos se olvidan porque no hay recordatorios.",
        "No puedes ver el historial de un cliente sin abrir tres archivos.",
      ] },
      { type: "h2", text: "Qué te da un CRM que la hoja no" },
      { type: "p", text: "Un CRM centraliza clientes, contactos y oportunidades en una sola base de datos, con un pipeline visual, actividades con recordatorios y reportes que se actualizan solos. Cada lead que llega por WhatsApp o por la web entra directo, con su ficha." },
      { type: "p", text: "No se trata de tener más funciones, sino de que ningún negocio se pierda entre pestañas." },
    ],
  },
  {
    slug: "por-que-el-inventario-nunca-cuadra",
    title: "Por qué tu inventario nunca cuadra (y cómo arreglarlo)",
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
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" });
}
