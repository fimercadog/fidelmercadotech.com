import type { ReactNode } from "react";
import { Container } from "@/components/marketing/container";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

export function LegalPage({
  title,
  updatedAt,
  intro,
  sections,
}: {
  title: string;
  updatedAt: string;
  intro?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <header className="flex flex-col gap-2 border-b border-border pb-8">
          <span className="fmt-eyebrow">Legal</span>
          <h1 className="text-3xl sm:text-4xl">{title}</h1>
          <p className="text-sm text-muted-foreground">Última actualización: {updatedAt}</p>
        </header>

        {intro ? <div className="mt-8 text-sm leading-7 text-muted-foreground">{intro}</div> : null}

        <div className="mt-8 flex flex-col gap-8">
          {sections.map((s, i) => (
            <div key={s.heading} className="flex flex-col gap-2">
              <h2 className="text-lg">
                {i + 1}. {s.heading}
              </h2>
              <div className="text-sm leading-7 text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_li]:mt-1 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
