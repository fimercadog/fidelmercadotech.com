import { GetOnTrack } from "@/components/saas/kit";

export function GetOnTrackCta() {
  return (
    <GetOnTrack
      title="¿Qué se te está complicando?"
      subtitle="Cuéntamelo y lo resolvemos juntos"
      text="Dime qué proceso se te traba o qué necesitas controlar. Te muestro la solución funcionando antes de decidir y sigo acompañándote después de la entrega."
      cta={{ label: "Cuéntame tu caso", href: "/contacto?motivo=demo" }}
    />
  );
}
