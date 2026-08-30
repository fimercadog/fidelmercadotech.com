import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { STATUS_LABEL, type Solution } from "@/content/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Card className="group flex h-full flex-col gap-4 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-24px_rgba(7,21,38,0.35)]">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl fmt-gradient text-white">
          <Icon name={solution.icon} className="size-5" />
        </span>
        <Badge variant="secondary" className="shrink-0">
          {STATUS_LABEL[solution.status]}
        </Badge>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg leading-snug">{solution.name}</h3>
        <p className="text-sm leading-6 text-muted-foreground">{solution.tagline}</p>
      </div>

      <ul className="mt-auto flex flex-col gap-1.5 text-sm text-muted-foreground">
        {solution.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
            {h}
          </li>
        ))}
      </ul>

      <Link
        href={`/soluciones/${solution.slug}`}
        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
      >
        Ver solución
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Card>
  );
}
