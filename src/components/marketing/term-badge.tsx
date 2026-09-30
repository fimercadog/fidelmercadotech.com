"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const DEFINITIONS: Record<string, string> = {
  // Stack técnico
  "Next.js 16": "El motor que hace que el sitio web del sistema cargue rápido y funcione sin interrupciones, incluso con muchos usuarios al mismo tiempo.",
  "Next.js": "El motor que hace que el sitio web del sistema cargue rápido y funcione sin interrupciones, incluso con muchos usuarios al mismo tiempo.",
  "Laravel 12": "El sistema central que guarda y protege todos los datos de tu negocio, controla quién puede ver qué y coordina todas las operaciones.",
  "Laravel": "El sistema central que guarda y protege todos los datos de tu negocio, controla quién puede ver qué y coordina todas las operaciones.",
  "Sanctum": "El portero digital: verifica que cada usuario tenga permiso antes de dejar pasar cualquier acción dentro del sistema.",
  "Spatie Permission": "El administrador de roles: define exactamente qué puede hacer cada persona (ver, editar, aprobar) según su cargo.",
  "TanStack Table": "La herramienta que genera las tablas con filtros, búsqueda y exportación que ves en los listados del sistema.",
  "React": "La tecnología que hace que la pantalla se actualice sola sin tener que recargar la página completa cada vez que haces algo.",
  "TypeScript": "Un lenguaje de programación que reduce los errores antes de que el sistema llegue a tus manos, como un corrector automático para el código.",
  "Tailwind CSS": "El sistema de diseño que mantiene la apariencia consistente en todas las pantallas del sistema.",
  "MySQL": "La base de datos que almacena de forma segura toda la información de tu negocio: clientes, productos, movimientos y más.",
  "PostgreSQL": "Base de datos de alto rendimiento que almacena de forma segura toda la información de tu negocio.",
  "SQLite": "Base de datos liviana usada en desarrollo y pruebas para validar que todo funcione antes de salir a producción.",
  "Docker": "Un contenedor que empaqueta el sistema completo para que funcione igual en cualquier servidor, sin sorpresas al instalar.",
  "Redis": "La memoria rápida del sistema: guarda las consultas más frecuentes para que las respuestas sean instantáneas.",
  "Node.js": "El servidor que procesa las peticiones del navegador en tiempo real, como un coordinador de tráfico digital.",
  "Ollama": "Permite usar inteligencia artificial de forma privada dentro de tu propia red, sin enviar datos a servicios externos.",
  "Modelo LLM local": "Inteligencia artificial instalada en tu servidor o red local: los datos de tu negocio nunca salen de tu empresa.",
  "Servidor del cliente": "El sistema corre en tu propia infraestructura o servidor, tú tienes el control total de los datos.",
  "Red interna": "La solución funciona dentro de tu red empresarial sin necesidad de internet, ideal para ambientes con conectividad limitada.",
  "OpenAI": "Servicio de inteligencia artificial en la nube que permite hacer preguntas en lenguaje natural sobre los datos de tu negocio.",
  "Anthropic": "Servicio de inteligencia artificial avanzado que responde preguntas sobre tu negocio de forma segura y confiable.",
  "Playwright": "Sistema de pruebas automáticas que verifica que el sistema funciona correctamente antes de cada actualización.",
  "n8n": "La herramienta de automatización que conecta el sistema con otros servicios (correo, WhatsApp, etc.) sin necesidad de programación.",
  "Resend": "Servicio de envío de correos transaccionales: garantiza que las notificaciones automáticas lleguen a la bandeja de entrada.",
  "PDF": "Generación de documentos en formato estándar para impresión y archivo: cotizaciones, facturas y reportes listos para entregar.",
  "CSV": "Exportación de datos a hoja de cálculo (Excel, Google Sheets) para análisis o respaldo.",
  "WhatsApp": "Integración directa con WhatsApp para enviar notificaciones, recordatorios o confirmar citas automáticamente.",

  // Status labels
  "DEMO DISPONIBLE": "Puedes ver el sistema funcionando en vivo con datos de ejemplo. Solicita acceso y lo pruebas hoy mismo.",
  "PRODUCTO PROPIO": "Desarrollado y mantenido 100% por FidelOS. Tenemos control total sobre el código y podemos adaptarlo a tus necesidades.",
  "EN DESARROLLO": "Estamos construyendo este módulo activamente. Puedes reservar tu lugar y participar en la definición de funcionalidades.",
  "PROYECTO A MEDIDA": "Lo desarrollamos desde cero según las necesidades específicas de tu empresa y sector.",
  "EN PRODUCCIÓN": "Sistema funcionando con clientes reales. Probado, estable y listo para operar tu negocio desde el primer día.",

  // Categorías
  "Comercial y operaciones": "Herramientas para vender más y operar mejor: gestión de clientes, cotizaciones, inventario y procesos del día a día.",
  "Clínicas y consultorios veterinarios": "Solución especializada para clínicas veterinarias: historias clínicas de pacientes, agenda médica e inventario de insumos.",
  "Salud y gestión hospitalaria": "Sistema para instituciones de salud: agendamiento, historias clínicas, facturación y reportes para IPS y consultorios.",
  "Gestión de personas y nómina": "Administración del equipo humano: contratos, asistencia, liquidación de nómina y documentos legales.",
  "Viajes y turismo": "Gestión de reservas, paquetes turísticos, clientes y proveedores para agencias de viaje y operadores turísticos.",
  "Educación y clubes deportivos": "Administración de estudiantes, cobros, asistencia y comunicaciones para escuelas, academias y clubes.",
  "Mantenimiento y servicios técnicos": "Control de órdenes de trabajo, técnicos, repuestos y facturación para empresas de mantenimiento y servicios.",
  "HVAC y climatización": "Sistema para empresas de aire acondicionado y climatización: órdenes de servicio, equipos instalados y garantías.",
  "Agencias digitales y consultoría": "Gestión de proyectos, tareas, facturación y clientes para agencias y consultoras de servicios profesionales.",
};

interface TermBadgeProps {
  term: string;
  className?: string;
}

export function TermBadge({ term, className = "" }: TermBadgeProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const definition = DEFINITIONS[term];

  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!definition) {
    return <span className={className}>{term}</span>;
  }

  return (
    <span ref={ref} className="relative inline-block">
      <span
        role="button"
        tabIndex={0}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => e.key === "Enter" && setOpen((v) => !v)}
        className={`cursor-pointer underline decoration-dotted underline-offset-2 ${className}`}
        title="Ver qué significa"
      >
        {term}
      </span>
      {open && (
        <span className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white p-4 shadow-xl">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-[#15803d] mb-1">{term}</span>
          <span className="block text-[13px] leading-5 text-[#555]">{definition}</span>
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
            className="absolute right-3 top-3 text-[#bbb] hover:text-[#555]"
            aria-label="Cerrar"
          >
            <X className="size-3.5" />
          </button>
          {/* flecha */}
          <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 block size-3 rotate-45 border-b border-r border-[rgba(0,0,0,0.08)] bg-white" />
        </span>
      )}
    </span>
  );
}
