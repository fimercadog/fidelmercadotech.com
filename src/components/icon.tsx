import {
  Building2,
  Users,
  Boxes,
  Stethoscope,
  ScanLine,
  MessageSquare,
  Globe,
  Code2,
  Workflow,
  BrainCircuit,
  Plug,
  Puzzle,
  Bot,
  BarChart3,
  Database,
  ShieldCheck,
  Mic,
  Camera,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Building2,
  Users,
  Boxes,
  Stethoscope,
  ScanLine,
  MessageSquare,
  Globe,
  Code2,
  Workflow,
  BrainCircuit,
  Plug,
  Puzzle,
  Bot,
  BarChart3,
  Database,
  ShieldCheck,
  Mic,
  Camera,
  Sparkles,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
