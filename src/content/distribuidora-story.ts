/**
 * Una sola historia de usuario contada en dos capítulos: empieza en el Caso 1
 * (la distribuidora que ordena sus pedidos) y termina en el Caso 2 (el gemelo
 * digital de esa misma distribuidora). Hipotética: sin cifras de clientes.
 */

export type JourneyPart = 1 | 2;

export const JOURNEY_NAME = "La historia de una distribuidora";

export const JOURNEY_CHAPTERS = [
  { part: 1 as const, label: "Caso 1", title: "Del desorden de pedidos a una IA que los registra", href: "/casos/distribuidora-pedidos-ia" },
  { part: 2 as const, label: "Caso 2", title: "Toda la operación en un modelo 3D", href: "/gemelo-digital" },
];

/** Se cuenta como situación: "Cuando {who} necesita {needs}, lo que busca es {goal}". */
export const JOURNEY_STORY = {
  who: "el gerente de una distribuidora",
  needs: "saber primero qué automatizar, tener esa IA funcionando dentro de su empresa y ver toda su operación en un solo modelo 3D",
  goal: "dejar de digitar cada pedido tres veces, que los datos de sus clientes no salgan de la empresa y detectar los atrasos antes de que pasen",
  /** `part` = capítulo en el que se cumple el criterio. */
  criteria: [
    { part: 1 as const, text: "Existe un mapa de cómo trabaja hoy el equipo, con los puntos donde el trabajo se repite o se frena" },
    { part: 1 as const, text: "La hoja de ruta por fases está documentada, cada fase con su criterio de terminado" },
    { part: 1 as const, text: "Los pedidos que llegan por WhatsApp quedan en facturación sin que nadie los vuelva a digitar" },
    { part: 1 as const, text: "Ningún proveedor externo recibe los datos de los clientes" },
    { part: 2 as const, text: "Cada zona de la bodega muestra su estado en un modelo 3D" },
    { part: 2 as const, text: "Los productos por agotarse se marcan antes de que falten" },
    { part: 2 as const, text: "Los pedidos que salen hoy se ven por etapa, con quién los está alistando" },
    { part: 2 as const, text: "Prueba un cambio de distribución en el modelo antes de hacerlo en la bodega" },
  ],
};

export const JOURNEY_POINTS: Record<JourneyPart, { label: string; text: string }[]> = {
  1: [
    { label: "Ganas certeza", text: "Antes de invertir sabes qué automatizar, en qué orden y dónde puede fallar." },
    { label: "Ganas tiempo", text: "El pedido se registra una sola vez, en el momento en que llega." },
    { label: "Ganas privacidad y costos previsibles", text: "Los datos de tus clientes no salen de tu empresa y no pagas por cada consulta." },
  ],
  2: [
    { label: "Ganas visión", text: "Ves toda la operación en una sola pantalla, sin recorrer la bodega." },
    { label: "Ganas anticipación", text: "Los problemas se marcan antes de volverse retrasos." },
    { label: "Ganas decisiones con respaldo", text: "Pruebas un cambio en el modelo antes de hacerlo en la bodega." },
  ],
};
