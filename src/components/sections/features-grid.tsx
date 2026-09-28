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
    <section className="border-t border-border py-20 sm:py-28 bg-card/20">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Características"
            title="Cómo construimos"
            description="Lo que tienen en común todos nuestros proyectos, sean un producto de estantería o un desarrollo a medida."
            align="center"
          />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="fmt-elevate group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/50">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon name={f.icon} className="size-6" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{f.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
