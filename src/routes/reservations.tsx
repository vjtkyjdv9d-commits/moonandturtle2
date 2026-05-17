import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Moon & Turtle" },
      { name: "description", content: "Book a table at Moon & Turtle in downtown Hilo. Seating is limited — reserve in advance." },
      { property: "og:title", content: "Reservations — Moon & Turtle" },
      { property: "og:description", content: "Limited seating. Reserve your table in advance." },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: ReservePage,
});

function ReservePage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-pearl">
      <SiteNav />
      <main className="px-6 py-20 md:py-28 max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-clay mb-6 font-medium italic">
            Limited Seating
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-[0.95]">Reserve a table.</h1>
          <p className="text-ink/70 leading-relaxed max-w-xl mx-auto">
            Our dining room is small and books up quickly. Send us a request below and we'll confirm by phone
            or email within 24 hours. For same-day, please call us directly.
          </p>
          <a
            href="tel:+18089610599"
            className="inline-block mt-8 font-serif text-2xl italic text-clay hover:underline"
          >
            (808) 961-0599
          </a>
        </header>

        {sent ? (
          <div className="border border-ocean/20 bg-ocean/5 p-10 text-center">
            <h2 className="font-serif text-3xl mb-4">Mahalo.</h2>
            <p className="text-ink/70">
              Your request has been received. We'll be in touch within 24 hours to confirm your reservation.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="First Name" name="first" required />
              <Field label="Last Name" name="last" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <Field label="Date" name="date" type="date" required />
              <Field label="Time" name="time" type="time" required />
              <Field label="Party Size" name="party" type="number" min={1} max={12} defaultValue={2} required />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-ink/60 mb-2">
                Notes (allergies, occasion)
              </label>
              <textarea
                name="notes"
                rows={4}
                className="w-full bg-transparent border-b border-ink/20 focus:border-clay outline-none py-2 font-serif text-lg transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-4 bg-ocean text-pearl uppercase text-[10px] tracking-widest font-bold hover:bg-clay transition-colors"
            >
              Send Request
            </button>
            <p className="text-xs text-ink/50 italic">
              Reservations are confirmed manually. We'll reach out shortly to lock in your table.
            </p>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
  max,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  max?: number;
  defaultValue?: string | number;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-ink/60 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="w-full bg-transparent border-b border-ink/20 focus:border-clay outline-none py-2 font-serif text-lg transition-colors"
      />
    </div>
  );
}
