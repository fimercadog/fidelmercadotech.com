"use client";

import { useState } from "react";
import { Container } from "@/components/marketing/container";
import { PawPrint, Scissors, Stethoscope, ChevronLeft, Check, Loader2, CalendarDays } from "lucide-react";

const VERTICALS = [
  {
    id: "veterinaria",
    label: "Veterinaria",
    description: "Consultas, vacunas y cuidado de mascotas",
    icon: PawPrint,
    api: "https://demo-erp-web-veterinaria.api.fidelmercadotech.com",
    accentColor: "#4ade80",
  },
  {
    id: "clinica-estetica",
    label: "Clínica Estética",
    description: "Tratamientos faciales, corporales y estéticos",
    icon: Scissors,
    api: "https://demo-erp-web-clinica-estetica.api.fidelmercadotech.com",
    accentColor: "#a78bfa",
  },
  {
    id: "ips",
    label: "IPS / Salud",
    description: "Consulta médica y atención en salud",
    icon: Stethoscope,
    api: "https://demo-ips.api.fidelmercadotech.com",
    accentColor: "#38bdf8",
  },
];

type Step = "vertical" | "service" | "datetime" | "patient" | "confirm" | "done";

interface Service { id: number; name: string; estimated_duration_minutes: number; price: number }
interface Slot { time: string }

export default function AgendarCitaPage() {
  const [step, setStep] = useState<Step>("vertical");
  const [vertical, setVertical] = useState<typeof VERTICALS[0] | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [service, setService] = useState<Service | null>(null);
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [slot, setSlot] = useState("");
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", petName: "" });
  const [booking, setBooking] = useState<{ starts_at: string; service: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  /* ── helpers ── */
  const api = (v: typeof VERTICALS[0], path: string) =>
    `${v.api}/api${path}`;

  async function selectVertical(v: typeof VERTICALS[0]) {
    setVertical(v);
    setError("");
    try {
      const r = await fetch(api(v, "/public/appointments/services"));
      const data = await r.json();
      setServices(data.data ?? []);
    } catch {
      setError("No se pudo conectar con el sistema demo. Intenta más tarde.");
      return;
    }
    setStep("service");
  }

  async function selectService(s: Service) {
    setService(s);
    setSlots([]);
    setSlot("");
    setDate("");
    setStep("datetime");
  }

  async function loadSlots(d: string) {
    if (!vertical || !service || !d) return;
    setDate(d);
    setLoadingSlots(true);
    setSlots([]);
    setSlot("");
    try {
      const r = await fetch(api(vertical, `/public/appointments/availability?service_id=${service.id}&date=${d}`));
      const data = await r.json();
      setSlots(data.slots ?? []);
    } catch {
      setSlots([]);
    }
    setLoadingSlots(false);
  }

  async function submitBooking() {
    if (!vertical || !service || !date || !slot) return;
    setSubmitting(true);
    setError("");

    const body = {
      service_id: service.id,
      date,
      start_time: slot,
      name: form.name,
      email: form.email,
      phone: form.phone,
      pet_name: form.petName || form.name,
      // Para IPS / estética: campos opcionales que el backend ignora si no aplican
      species_id: 1,
      consent: true,
    };

    try {
      const r = await fetch(api(vertical, "/public/appointments/book"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      const data = await r.json();
      if (r.ok) {
        setBooking(data.appointment);
        setStep("done");
      } else {
        setError(data.message ?? "Error al agendar. Intentá con otro horario.");
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    }
    setSubmitting(false);
  }

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  /* ── render ── */
  return (
    <main className="min-h-screen bg-[#f8f9fa] py-14">
      <Container>
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#dcfce7] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#15803d] mb-4">
            <CalendarDays className="size-3.5" />
            Demo en vivo
          </span>
          <h1 className="font-heading text-4xl font-black text-[#1a1a1a] sm:text-5xl">
            Agenda una cita
          </h1>
          <p className="mt-3 text-[#666] text-[15px] max-w-md mx-auto">
            Prueba el sistema de agendamiento en tiempo real. Elige la vertical y reserva un turno demo.
          </p>
        </div>

        {/* Progress */}
        {step !== "done" && (
          <div className="mb-8 flex justify-center gap-2">
            {(["vertical", "service", "datetime", "patient", "confirm"] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className="flex size-7 items-center justify-center rounded-full text-[11px] font-bold transition-all"
                  style={{
                    background: step === s ? "#15803d" : ["vertical","service","datetime","patient","confirm"].indexOf(step) > i ? "#15803d" : "#e5e7eb",
                    color: ["vertical","service","datetime","patient","confirm"].indexOf(step) >= i ? "#fff" : "#9ca3af",
                  }}
                >
                  {["vertical","service","datetime","patient","confirm"].indexOf(step) > i
                    ? <Check className="size-3.5" />
                    : i + 1}
                </div>
                {i < 4 && <div className="h-px w-6 bg-[#e5e7eb]" />}
              </div>
            ))}
          </div>
        )}

        <div className="mx-auto max-w-2xl">
          {/* STEP 1: Elegir vertical */}
          {step === "vertical" && (
            <div>
              <h2 className="mb-5 text-center text-lg font-bold text-[#1a1a1a]">¿Para qué tipo de clínica?</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {VERTICALS.map((v) => {
                  const Icon = v.icon;
                  return (
                    <button
                      key={v.id}
                      onClick={() => selectVertical(v)}
                      className="group flex flex-col items-center gap-3 rounded-2xl border-2 border-[#e5e7eb] bg-white p-6 text-center transition-all hover:border-[#15803d] hover:shadow-lg"
                    >
                      <div className="flex size-12 items-center justify-center rounded-xl" style={{ background: `${v.accentColor}20` }}>
                        <Icon className="size-6" style={{ color: v.accentColor }} />
                      </div>
                      <div>
                        <p className="font-bold text-[#1a1a1a]">{v.label}</p>
                        <p className="mt-1 text-[12px] text-[#666]">{v.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}
            </div>
          )}

          {/* STEP 2: Elegir servicio */}
          {step === "service" && vertical && (
            <div>
              <button onClick={() => setStep("vertical")} className="mb-4 flex items-center gap-1 text-sm text-[#666] hover:text-[#1a1a1a]">
                <ChevronLeft className="size-4" /> Volver
              </button>
              <h2 className="mb-5 text-lg font-bold text-[#1a1a1a]">Elige un servicio — {vertical.label}</h2>
              <div className="flex flex-col gap-3">
                {services.length === 0 && (
                  <p className="text-center text-sm text-[#666]">No hay servicios disponibles en este momento.</p>
                )}
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => selectService(s)}
                    className="flex items-center justify-between rounded-2xl border-2 border-[#e5e7eb] bg-white px-5 py-4 text-left transition-all hover:border-[#15803d] hover:shadow-md"
                  >
                    <div>
                      <p className="font-semibold text-[#1a1a1a]">{s.name}</p>
                      <p className="text-[12px] text-[#666]">{s.estimated_duration_minutes} min</p>
                    </div>
                    {s.price > 0 && (
                      <span className="text-sm font-bold text-[#15803d]">
                        ${s.price.toLocaleString("es-CO")}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Fecha y hora */}
          {step === "datetime" && service && (
            <div>
              <button onClick={() => setStep("service")} className="mb-4 flex items-center gap-1 text-sm text-[#666] hover:text-[#1a1a1a]">
                <ChevronLeft className="size-4" /> Volver
              </button>
              <h2 className="mb-5 text-lg font-bold text-[#1a1a1a]">Selecciona fecha y hora</h2>

              <label className="block mb-1 text-sm font-medium text-[#1a1a1a]">Fecha</label>
              <input
                type="date"
                min={minDateStr}
                value={date}
                onChange={(e) => loadSlots(e.target.value)}
                className="w-full rounded-xl border-2 border-[#e5e7eb] bg-white px-4 py-3 text-sm focus:border-[#15803d] focus:outline-none mb-5"
              />

              {date && (
                <>
                  <label className="block mb-3 text-sm font-medium text-[#1a1a1a]">Horario disponible</label>
                  {loadingSlots && (
                    <div className="flex justify-center py-6">
                      <Loader2 className="size-6 animate-spin text-[#15803d]" />
                    </div>
                  )}
                  {!loadingSlots && slots.length === 0 && (
                    <p className="text-center text-sm text-[#666] py-4">No hay turnos disponibles para esa fecha.</p>
                  )}
                  {!loadingSlots && slots.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
                      {slots.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSlot(s)}
                          className="rounded-xl border-2 py-2 text-sm font-semibold transition-all"
                          style={{
                            borderColor: slot === s ? "#15803d" : "#e5e7eb",
                            background: slot === s ? "#15803d" : "#fff",
                            color: slot === s ? "#fff" : "#1a1a1a",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                  {slot && (
                    <button
                      onClick={() => setStep("patient")}
                      className="mt-6 w-full rounded-xl bg-[#15803d] py-3 text-sm font-bold text-white hover:bg-[#166534] transition-colors"
                    >
                      Continuar con {slot}
                    </button>
                  )}
                </>
              )}
            </div>
          )}

          {/* STEP 4: Datos del paciente / contacto */}
          {step === "patient" && (
            <div>
              <button onClick={() => setStep("datetime")} className="mb-4 flex items-center gap-1 text-sm text-[#666] hover:text-[#1a1a1a]">
                <ChevronLeft className="size-4" /> Volver
              </button>
              <h2 className="mb-5 text-lg font-bold text-[#1a1a1a]">Tus datos</h2>
              <div className="flex flex-col gap-4">
                {[
                  { key: "name", label: "Nombre completo", type: "text", placeholder: "María García" },
                  { key: "email", label: "Correo electrónico", type: "email", placeholder: "maria@ejemplo.com" },
                  { key: "phone", label: "Teléfono (opcional)", type: "tel", placeholder: "300 123 4567" },
                  ...(vertical?.id === "veterinaria"
                    ? [{ key: "petName", label: "Nombre de tu mascota", type: "text", placeholder: "Toby" }]
                    : []),
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block mb-1 text-sm font-medium text-[#1a1a1a]">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                      className="w-full rounded-xl border-2 border-[#e5e7eb] bg-white px-4 py-3 text-sm focus:border-[#15803d] focus:outline-none"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStep("confirm")}
                disabled={!form.name || !form.email}
                className="mt-6 w-full rounded-xl bg-[#15803d] py-3 text-sm font-bold text-white hover:bg-[#166534] transition-colors disabled:opacity-40"
              >
                Revisar y confirmar
              </button>
            </div>
          )}

          {/* STEP 5: Confirmar */}
          {step === "confirm" && vertical && service && (
            <div>
              <button onClick={() => setStep("patient")} className="mb-4 flex items-center gap-1 text-sm text-[#666] hover:text-[#1a1a1a]">
                <ChevronLeft className="size-4" /> Volver
              </button>
              <h2 className="mb-5 text-lg font-bold text-[#1a1a1a]">Confirma tu cita</h2>

              <div className="rounded-2xl border-2 border-[#15803d] bg-white p-6 mb-5">
                <div className="grid gap-3 text-sm">
                  {[
                    { label: "Vertical", value: vertical.label },
                    { label: "Servicio", value: service.name },
                    { label: "Fecha", value: new Date(date + "T00:00:00").toLocaleDateString("es-CO", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) },
                    { label: "Hora", value: slot },
                    { label: "Nombre", value: form.name },
                    { label: "Email", value: form.email },
                    ...(form.phone ? [{ label: "Teléfono", value: form.phone }] : []),
                    ...(form.petName ? [{ label: "Mascota", value: form.petName }] : []),
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="text-[#666]">{row.label}</span>
                      <span className="font-semibold text-[#1a1a1a] capitalize">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4 text-[11px] text-center text-[#999]">
                Esta es una demo. No se generan citas reales ni se envían notificaciones.
              </p>

              {error && <p className="mb-3 text-sm text-red-600 text-center">{error}</p>}

              <button
                onClick={submitBooking}
                disabled={submitting}
                className="w-full rounded-xl bg-[#15803d] py-3 text-sm font-bold text-white hover:bg-[#166534] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {submitting && <Loader2 className="size-4 animate-spin" />}
                {submitting ? "Agendando…" : "Confirmar cita demo"}
              </button>
            </div>
          )}

          {/* DONE */}
          {step === "done" && booking && (
            <div className="text-center py-8">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#dcfce7]">
                <Check className="size-8 text-[#15803d]" />
              </div>
              <h2 className="text-2xl font-black text-[#1a1a1a] mb-2">¡Cita agendada!</h2>
              <p className="text-[#666] mb-6">
                Tu cita demo quedó registrada en el sistema {vertical?.label}.
              </p>
              <div className="inline-block rounded-2xl bg-white border-2 border-[#e5e7eb] px-8 py-5 text-left mb-8">
                <p className="text-sm text-[#666] mb-1">Servicio</p>
                <p className="font-bold text-[#1a1a1a] mb-3">{booking.service ?? service?.name}</p>
                <p className="text-sm text-[#666] mb-1">Fecha y hora</p>
                <p className="font-bold text-[#1a1a1a]">
                  {new Date(booking.starts_at).toLocaleString("es-CO", {
                    weekday: "long", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
                  })}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={vertical?.api}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#15803d] px-6 py-3 text-sm font-bold text-white hover:bg-[#166534] transition-colors"
                >
                  Ver en el sistema demo
                </a>
                <button
                  onClick={() => { setStep("vertical"); setVertical(null); setService(null); setSlot(""); setDate(""); setBooking(null); setForm({ name: "", email: "", phone: "", petName: "" }); }}
                  className="rounded-xl border-2 border-[#e5e7eb] bg-white px-6 py-3 text-sm font-bold text-[#1a1a1a] hover:border-[#15803d] transition-colors"
                >
                  Agendar otra cita
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
