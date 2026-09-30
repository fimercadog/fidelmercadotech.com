import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

const PROBLEMS = [
  {
    icon: "📊",
    title: "Datos dispersos, decisiones a ciegas",
    description:
      "Las hojas de cálculo y las herramientas sueltas dejan de alcanzar cuando el negocio crece. Nadie sabe cuál es el dato bueno y cada proceso vive en un lugar distinto.",
  },
  {
    icon: "📦",
    title: "Inventario que nunca coincide con la realidad",
    description:
      "Cargar y mantener un inventario a mano es lento y nadie lo hace. El resultado: stock desactualizado, pérdidas invisibles y operaciones frenadas.",
  },
  {
    icon: "💬",
    title: "Clientes sin respuesta a cualquier hora",
    description:
      "Los mensajes llegan a toda hora y se responden tarde o nunca. Cada respuesta lenta es un cliente que se va con la competencia.",
  },
];

export function ProblemContext() {
  return (
    <section className="saas saas-section border-t border-[rgba(0,0,0,0.07)] bg-[#f9fafb]">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="El problema"
            title="¿Qué frena a las empresas hoy?"
            description="Estos tres cuellos de botella se repiten en casi todo negocio que crece sin sistemas: datos en silos, procesos manuales y atención reactiva."
            align="center"
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="flex h-full flex-col gap-4 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8">
                <span className="text-3xl">{p.icon}</span>
                <h3 className="saas-h5 text-[#333]">{p.title}</h3>
                <p className="text-[14px] leading-6 text-[#666]">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
