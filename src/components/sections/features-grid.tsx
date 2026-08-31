import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Icon } from "@/components/icon";

const FEATURES = [
  { icon: "Gauge", title: "Rápido", detail: "Tecnología moderna (Next.js, Laravel) y entregas por fases: ves avances funcionando pronto." },
  { icon: "ShieldCheck", title: "Con control", detail: "Roles, permisos y auditoría campo a campo desde el primer día." },
  { icon: "Layers", title: "Base probada", detail: "Partimos de módulos ya en producción, no de una hoja en blanco." },
  { icon: "Plug", title: "Conectado", detail: "Se integra con tu CRM, WhatsApp, pasarelas y hojas de cálculo." },
  { icon: "BrainCircuit", title: "Con IA donde ayuda", detail: "Asistentes y captura por voz/imagen, siempre con revisión humana." },
  { icon: "LineChart", title: "Medible", detail: "Reportes y métricas para saber si de verdad está funcionando." },
];

export function FeaturesGrid() {
  return (
    <section className="border-t border-border py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Características"
            title="Cómo construimos"
            description="Lo que tienen en común todos nuestros proyectos, sean un producto de estantería o un desarrollo a medida."
          />
        </Reveal>
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary">
                <Icon name={f.icon} className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xs font-bold tracking-[0.08em] uppercase">{f.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{f.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
