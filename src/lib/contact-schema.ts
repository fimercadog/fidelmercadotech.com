import { z } from "zod";

export const MOTIVOS = ["demo", "proyecto", "automatizacion", "ia", "otro"] as const;

export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre").max(120),
  empresa: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Correo no válido").max(160),
  telefono: z.string().trim().max(40).optional().or(z.literal("")),
  motivo: z.enum(MOTIVOS),
  interes: z.string().trim().max(80).optional().or(z.literal("")),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más (mín. 10 caracteres)").max(3000),
  // Honeypot — real users leave it empty.
  website: z.string().max(0).optional().or(z.literal("")),
  consentimiento: z.literal(true, { message: "Necesitamos tu autorización para contactarte" }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const MOTIVO_LABEL: Record<(typeof MOTIVOS)[number], string> = {
  demo: "Solicitar una demostración",
  proyecto: "Desarrollo de software a medida",
  automatizacion: "Automatización de procesos",
  ia: "Inteligencia Artificial / agentes",
  otro: "Otro",
};
