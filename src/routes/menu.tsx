import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Daily Menu — Moon & Turtle" },
      { name: "description", content: "Our seasonal Asian-fusion menu changes frequently with the tides and harvest. Small plates, market fish, signatures, and dessert." },
      { property: "og:title", content: "Daily Menu — Moon & Turtle" },
      { property: "og:description", content: "Seasonal Asian-fusion in Hilo. Menu changes with the catch." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const sections = [
  {
    name: "Small Plates",
    items: [
      { name: "Smokey Sashimi", desc: "Cold-smoked local catch, sea salt, micro-greens", price: "24" },
      { name: "Crispy Rice", desc: "Spicy tuna, avocado, scallion oil", price: "18" },
      { name: "Papaya Ceviche", desc: "Day-boat fish, Hawaiian chili, lime, herbs", price: "17" },
      { name: "Charred Brussels Sprouts", desc: "Bacon dashi, miso glaze, sesame", price: "14" },
    ],
  },
  {
    name: "From the Sea",
    items: [
      { name: "Pan Fried Ahi Belly", desc: "Confit garlic, island citrus, scallion", price: "28" },
      { name: "Sizzling Poke", desc: "Briefly seared, soy-sesame, nori", price: "22" },
      { name: "Market Fish", desc: "Ask your server — prepared in our nightly style", price: "MP" },
    ],
  },
  {
    name: "From the Kitchen",
    items: [
      { name: "Mushroom Risotto", desc: "Hamakua mushrooms, dashi, truffle oil, parmesan", price: "26" },
      { name: "Portuguese Sausage Pasta", desc: "House sausage, garlic confit, chili flake", price: "24" },
    ],
  },
  {
    name: "Sweet",
    items: [
      { name: "Seasonal Crème Pot", desc: "Ask about tonight's flavor", price: "11" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-pearl">
      <SiteNav />
      <main className="px-6 py-20 md:py-28 max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-clay mb-6 font-medium">Updated Nightly</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-none">The Daily Menu</h1>
          <p className="text-ink/70 max-w-xl mx-auto leading-relaxed">
            Our menu is short by design and shifts with what arrives that morning. Below is a sample of what
            you might find on any given evening.
          </p>
        </header>

        <div className="space-y-20">
          {sections.map((s) => (
            <section key={s.name}>
              <div className="flex items-baseline justify-between border-b border-ink/15 pb-3 mb-8">
                <h2 className="font-serif text-3xl italic">{s.name}</h2>
                <span className="text-[10px] uppercase tracking-widest text-ink/40">Tonight's Selection</span>
              </div>
              <ul className="divide-y divide-ink/5">
                {s.items.map((item) => (
                  <li key={item.name} className="py-5 flex items-baseline justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-xl mb-1">{item.name}</h3>
                      <p className="text-sm text-ink/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="font-serif text-lg text-clay tabular-nums">{item.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-24 border-t border-ink/10 pt-10 text-center">
          <p className="text-ink/60 italic font-serif text-lg mb-6">Ready to join us?</p>
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
