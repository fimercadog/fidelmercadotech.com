import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

const STEPS = [
  { n: "01", title: "Visitante", text: "Llega a la web buscando resolver un problema concreto de su operación." },
  { n: "02", title: "Interés", text: "Entiende qué hacemos y reconoce su caso en una de nuestras soluciones." },
  { n: "03", title: "Solución", text: "Explora la solución que encaja: qué resuelve, qué incluye y cómo se ve." },
  { n: "04", title: "Demostración", text: "Pide una demo y la ve funcionando con datos reales, sin compromiso." },
  { n: "05", title: "Contacto", text: "Hablamos por WhatsApp o llamada para ajustar el alcance a su empresa." },
  { n: "06", title: "Oportunidad", text: "Arranca el proyecto o la implementación con un plan claro." },
];

export function ProcessFunnel() {
  return (
    <section className="saas saas-section border-t border-[rgba(0,0,0,0.07)] bg-[#f9fafb]">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="De visita en la web a oportunidad comercial"
            description="Cada sección de este sitio está pensada para acompañar una decisión, no solo para informar."
            align="center"
          />
        </Reveal>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 0.05}>
              <div className="saas-shadow-toggle flex h-full flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8 transition-colors hover:border-[#4de961]/40">
                <span className="text-3xl font-extrabold text-[#4de961]">{step.n}</span>
                <h3 className="saas-h5 text-[#333]">{step.title}</h3>
                <p className="text-[14px] leading-6 text-[#666]">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
