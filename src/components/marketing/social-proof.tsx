import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Card } from "@/components/ui/card";

/**
 * Testimonials / logos section. Deliberately ships with NO invented
 * clients, quotes, figures or logos. When real, verifiable references
 * exist, populate `TESTIMONIALS` / `LOGOS` and the section fills in.
 */
interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [];
const LOGOS: { name: string; src: string }[] = [];

export function SocialProof() {
  const hasContent = TESTIMONIALS.length > 0 || LOGOS.length > 0;

  return (
    <section className="border-t border-border bg-muted/30 py-20">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Confianza"
            title="Lo que dicen quienes ya trabajan con nosotros"
            description={
              hasContent
                ? undefined
                : "Estamos reuniendo los testimonios y casos de nuestros primeros clientes. Aquí aparecerán en cuanto podamos publicarlos con su autorización."
            }
          />
        </Reveal>

        {LOGOS.length > 0 ? (
          <Reveal className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
            {LOGOS.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={logo.name} src={logo.src} alt={logo.name} className="h-8 w-auto" />
            ))}
          </Reveal>
        ) : null}

        {TESTIMONIALS.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <Card className="h-full p-6">
                  <p className="text-sm leading-7 text-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-muted-foreground"> · {t.role}</span>
                  </footer>
                </Card>
              </Reveal>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
