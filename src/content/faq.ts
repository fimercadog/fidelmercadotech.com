export interface Faq {
  q: string;
  a: string;
}

export const PRICING_FAQ: Faq[] = [
  {
    q: "¿Los precios son fijos?",
    a: "Son precios de referencia para arrancar la conversación. El valor final depende del alcance real: número de páginas, integraciones, contenido y funcionalidades. Lo dejamos por escrito antes de empezar.",
  },
  {
    q: "¿Qué incluye el SEO básico?",
    a: "Estructura de encabezados correcta, metadatos (title y description) por página, Open Graph para redes, sitemap, robots y URLs limpias. No incluye campañas de posicionamiento ni creación de contenido mensual.",
  },
  {
    q: "¿El dominio y el hosting están incluidos?",
    a: "No. Se cotizan aparte según el caso, porque dependen del proveedor y del plan que elijas. Te asesoramos para escoger la opción adecuada y hacemos la configuración.",
  },
  {
    q: "¿En cuánto tiempo entregan?",
    a: "Los planes de solo web van de 2 a 7 días hábiles una vez recibimos el contenido y los accesos. El plan Web + Sistema depende del alcance y se define en la propuesta.",
  },
  {
    q: "¿Qué diferencia al plan Web + Sistema?",
    a: "Además del sitio, incluye una de nuestras soluciones (CRM, inventario, RRHH, agentes de WhatsApp) o desarrollo a la medida, con su backend, base de datos y panel de administración.",
  },
  {
    q: "¿Puedo actualizar de plan después?",
    a: "Sí. Si empiezas con una web y luego necesitas un sistema, sumamos el módulo sobre lo ya entregado sin rehacer el sitio.",
  },
  {
    q: "¿Cómo se realiza el pago?",
    a: "Normalmente 50% para iniciar y 50% contra entrega. Para el plan Web + Sistema definimos hitos de pago en la propuesta.",
  },
];
