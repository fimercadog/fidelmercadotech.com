import { GetOnTrack } from "@/components/saas/kit";

export function GetOnTrackCta() {
  return (
    <GetOnTrack
      title="Digitaliza tu operación"
      subtitle="Sistemas conectados que escalan con tu empresa"
      text="Cuéntanos qué proceso necesitas automatizar o controlar. Creamos la solución adecuada con demostración previa y acompañamiento continuo."
      cta={{ label: "Solicitar demostración", href: "/contacto?motivo=demo" }}
    />
  );
}
