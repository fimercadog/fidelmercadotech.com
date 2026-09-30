import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/icon";
import { STATUS_LABEL, type Solution } from "@/content/solutions";

export function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <Link
      href={`/soluciones/${solution.slug}`}
      className="saas-shadow-soft group block h-full min-h-[360px] rounded-[24px] bg-white px-10 py-12 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="mb-10 flex items-start justify-between gap-3">
        <span className="flex size-12 items-center justify-center rounded-xl bg-[#4de961]/15 text-[#15803d]">
          <Icon name={solution.icon} className="size-6" />
        </span>
        <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
          solution.status === "demo"
            ? "bg-[#4de961] text-[#0a3d1a]"
            : solution.status === "live"
            ? "border border-[rgba(0,0,0,0.12)] text-[#555]"
            : "border border-[rgba(0,0,0,0.08)] text-[#999]"
        }`}>
          {STATUS_LABEL[solution.status]}
        </span>
      </div>
      <h3 className="saas-h5 mb-2">{solution.name}</h3>
      <p className="saas-small mb-4">{solution.tagline}</p>
      <ul className="flex flex-col gap-2 text-[13px] font-medium text-[#555]">
        {solution.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#4de961]" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
        Ver solución <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
