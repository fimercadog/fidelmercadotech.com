import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

const STEPS = [
  { n: "01", title: "Me cuentas", text: "Me explicas qué se te está complicando, por WhatsApp o llamada, sin formalismos." },
  { n: "02", title: "Lo entiendo", text: "Reviso tu operación y te digo con claridad qué está pasando y por dónde conviene empezar." },
  { n: "03", title: "Te lo muestro", text: "Ves la solución funcionando con datos reales antes de comprometerte a nada." },
  { n: "04", title: "Lo resuelvo", text: "Construyo y ajusto el sistema sobre una base ya construida, por fases y con avances medibles." },
  { n: "05", title: "Lo dejo seguro", text: "Roles, permisos, auditoría y respaldos para que tu información y tu operación estén a salvo." },
  { n: "06", title: "Sigo contigo", text: "Sigo cerca después de la entrega: si algo falla o necesitas crecer, me escribes y lo resolvemos." },
];

export function ProcessFunnel() {
  return (
    <section className="saas saas-section border-t border-[rgba(0,0,0,0.07)] bg-[#f9fafb]">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Cómo trabajo"
            title="Me cuentas, lo resuelvo y sigo contigo"
            description="Un camino claro de seis pasos, con trato directo conmigo desde el primer mensaje hasta mucho después de la entrega."
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
