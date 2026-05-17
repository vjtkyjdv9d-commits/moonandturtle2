import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Moon & Turtle, 51 Kalakaua St, Hilo HI" },
      { name: "description", content: "Find Moon & Turtle at 51 Kalakaua St in downtown Hilo, Hawaii. Hours, directions, parking, and contact." },
      { property: "og:title", content: "Visit Moon & Turtle in Hilo" },
      { property: "og:description", content: "51 Kalakaua St, Hilo, HI 96720 · (808) 961-0599" },
      { property: "og:url", content: "/visit" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <div className="min-h-screen bg-pearl">
      <SiteNav />
      <main className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <header className="mb-16 max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-clay mb-6 font-medium">Location & Hours</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-[0.95]">Find us in downtown Hilo.</h1>
          <p className="text-lg text-ink/70 leading-relaxed">
            We're tucked on Kalakaua Street, a short walk from Hilo Bay. Street parking is generally easy in
            the evening.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl mb-6 italic">Address</h2>
            <address className="not-italic text-ink/80 leading-relaxed mb-8">
              51 Kalakaua St<br />
              Hilo, HI 96720
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Moon+and+Turtle+51+Kalakaua+St+Hilo+HI"
              target="_blank"
              rel="noreferrer"
              className="inline-block border-b border-clay pb-1 text-sm uppercase tracking-widest font-medium hover:text-clay transition-all"
            >
              Get Directions
            </a>

            <h2 className="font-serif text-3xl mt-16 mb-6 italic">Contact</h2>
            <ul className="space-y-3 text-ink/80">
              <li><a href="tel:+18089610599" className="hover:text-clay transition-colors">(808) 961-0599</a></li>
              <li><a href="https://facebook.com" className="hover:text-clay transition-colors">facebook.com/moonandturtle</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-6 italic">Hours</h2>
            <ul className="text-ink/80">
              {[
                ["Monday", "Closed"],
                ["Tuesday", "5:30 PM – 9:00 PM"],
                ["Wednesday", "5:30 PM – 9:00 PM"],
                ["Thursday", "5:30 PM – 9:00 PM"],
                ["Friday", "5:30 PM – 9:00 PM"],
                ["Saturday", "5:30 PM – 9:00 PM"],
                ["Sunday", "Closed"],
              ].map(([d, h]) => (
                <li key={d} className="flex justify-between py-3 border-b border-ink/10">
                  <span>{d}</span>
                  <span className={h === "Closed" ? "italic text-ink/40" : ""}>{h}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-ink/50 mt-6 italic">
              Happy hour seating at the bar — first come, first served.
            </p>
          </div>
        </div>

        <div className="mt-20 aspect-[16/9] w-full overflow-hidden rounded-sm border border-ink/10">
          <iframe
            title="Map to Moon & Turtle"
            src="https://www.google.com/maps?q=51+Kalakaua+St,+Hilo,+HI+96720&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/reservations"
            className="inline-block px-12 py-4 bg-ocean text-pearl uppercase text-[10px] tracking-widest font-bold hover:bg-clay transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
