import { Container } from "@/components/marketing/container";
import { Icon } from "@/components/icon";

/**
 * Horizontal strip in the style of the reference layout's social-proof row —
 * but instead of invented follower counts it lists what we actually do.
 */
const ITEMS = [
  { icon: "Code2", label: "Software empresarial" },
  { icon: "BrainCircuit", label: "IA aplicada" },
  { icon: "Workflow", label: "Automatización" },
  { icon: "Users", label: "CRM" },
  { icon: "Boxes", label: "Inventario" },
  { icon: "MessageSquare", label: "Agentes de WhatsApp" },
];

export function CapabilityStrip() {
  return (
    <div className="border-y border-border bg-muted/40">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-3 lg:grid-cols-6">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center">
            <Icon name={item.icon} className="size-5 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
