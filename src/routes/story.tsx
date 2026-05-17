import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import dishBrussels from "@/assets/dish-brussels.jpg";
import dishAhi from "@/assets/dish-ahi.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The Kitchen — Moon & Turtle" },
      { name: "description", content: "Meet Mark and Sunny, the husband-and-wife team behind Hilo's beloved Moon & Turtle. Locally sourced, Asian-fusion, intimate." },
      { property: "og:title", content: "The Kitchen — Moon & Turtle" },
      { property: "og:description", content: "The story behind Hilo's most intimate seafood bistro." },
      { property: "og:url", content: "/story" },
    ],
    links: [{ rel: "canonical", href: "/story" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <div className="min-h-screen bg-pearl">
      <SiteNav />
      <main>
        <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-clay mb-6 font-medium">The Kitchen</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-10 leading-[0.95]">
            A small kitchen with a <span className="italic">big</span> island heart.
          </h1>
          <p className="text-lg leading-relaxed text-ink/80 max-w-2xl mx-auto">
            Moon & Turtle is the work of Mark and Sunny — a husband-and-wife team who built a restaurant
            around what they love: fresh, local seafood, modern Asian technique, and a room small enough
            to remember every guest's name.
          </p>
        </section>

        <section className="px-6 max-w-6xl mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <img src={dishBrussels} alt="House dish" width={800} height={1024} loading="lazy" className="w-full aspect-[4/5] object-cover rounded-sm" />
          <div>
            <h2 className="font-serif text-4xl mb-6 leading-tight">Everything from the Big Island.</h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              The catch arrives in the morning. Hamakua mushrooms, papaya, Hawaiian chili, the day's fish —
              everything we serve is harvested or caught here. The menu changes constantly because the
              island does.
            </p>
            <p className="text-ink/70 leading-relaxed">
              That's why we keep service to one seating window and the dining room intimate — so we can cook
              what's freshest, send it out fast, and actually talk story with our guests.
            </p>
          </div>
        </section>

        <section className="bg-ocean text-pearl px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-clay mb-6 font-medium">Our Approach</p>
              <h2 className="font-serif text-4xl mb-6 leading-tight">Short menu. Deep care.</h2>
              <p className="text-pearl/80 leading-relaxed mb-4 font-light">
                We don't try to do everything. Our menu is intentionally brief — a handful of small plates,
                a few mains, a market fish — so that every dish gets the attention it deserves.
              </p>
              <p className="text-pearl/80 leading-relaxed font-light">
                The result is a meal that feels personal, generous, and unmistakably Hilo.
              </p>
            </div>
            <img src={dishAhi} alt="Pan fried ahi belly" width={800} height={576} loading="lazy" className="w-full aspect-[4/3] object-cover order-1 md:order-2 rounded-sm" />
          </div>
        </section>

        <section className="px-6 py-24 max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-3xl md:text-4xl italic leading-snug mb-8">
            "One of the best culinary experiences we had in Hawaii."
          </blockquote>
          <p className="text-[10px] uppercase tracking-[0.2em] text-clay">— Boaz L., Local Guide</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
