export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "web",
    icon: "Globe",
    title: "Desarrollo web",
    description: "Sitios corporativos, portales y landing pages rápidas, medibles y conectadas a tus sistemas.",
  },
  {
    id: "software",
    icon: "Code2",
    title: "Software empresarial a medida",
    description: "Sistemas de gestión, paneles internos y plataformas construidas para tu operación, no una plantilla.",
  },
  {
    id: "crm",
    icon: "Users",
    title: "CRM",
    description: "Gestión de clientes, contactos, oportunidades y pipeline adaptada a tu proceso comercial.",
  },
  {
    id: "inventario",
    icon: "Boxes",
    title: "Sistemas de inventario",
    description: "Productos, stock, proveedores y movimientos auditados, con reportes y alertas de stock.",
  },
  {
    id: "automatizacion",
    icon: "Workflow",
    title: "Automatización de procesos",
    description: "Convertimos tareas repetitivas y flujos manuales en procesos que corren solos.",
  },
  {
    id: "ia",
    icon: "BrainCircuit",
    title: "Inteligencia Artificial",
    description: "IA aplicada a tu negocio: asistentes, procesamiento de voz e imágenes, y análisis en lenguaje natural.",
  },
  {
    id: "agentes",
    icon: "MessageSquare",
    title: "Agentes de WhatsApp",
    description: "Agentes conversacionales que atienden, califican y registran, con transferencia a una persona.",
  },
  {
    id: "integraciones",
    icon: "Plug",
    title: "Integraciones",
    description: "Conectamos tus herramientas entre sí: CRM, ERP, WhatsApp, pasarelas, hojas de cálculo y APIs.",
  },
  {
    id: "personalizadas",
    icon: "Puzzle",
    title: "Soluciones personalizadas",
    description: "¿Tu caso no encaja en ninguna casilla? Lo diseñamos y lo construimos contigo desde cero.",
  },
];
