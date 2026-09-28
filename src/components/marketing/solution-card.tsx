import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { STATUS_LABEL, type Solution } from "@/content/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <div className="fmt-elevate group flex h-full flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-[#00e676] hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-transform duration-300 group-hover:scale-110">
          <Icon name={solution.icon} className="size-6" />
        </span>
        <Badge variant="secondary" className="rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-slate-700">
          {STATUS_LABEL[solution.status]}
        </Badge>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-900">{solution.name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{solution.tagline}</p>
      </div>

      <ul className="mt-auto flex flex-col gap-2 pt-2 text-xs font-semibold text-slate-800">
        {solution.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-center gap-2">
            <span className="size-2 shrink-0 rounded-full bg-[#00e676]" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="pt-3 border-t border-slate-100">
        <Link
          href={`/soluciones/${solution.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-[#00c853]"
        >
          Ver solución
          <ArrowRight className="size-4 text-[#00c853] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
