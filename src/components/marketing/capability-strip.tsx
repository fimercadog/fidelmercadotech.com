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
    <div className="border-b border-border bg-background">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-12 sm:grid-cols-3 lg:grid-cols-6">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3 text-center">
            <span className="flex size-12 items-center justify-center rounded-2xl fmt-gradient text-white shadow-lg shadow-primary/25">
              <Icon name={item.icon} className="size-5" />
            </span>
            <span className="text-xs font-semibold text-foreground">{item.label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
