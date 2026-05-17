import { createFileRoute, Link } from "@tanstack/react-router";
import heroSashimi from "@/assets/hero-sashimi.jpg";
import dishBrussels from "@/assets/dish-brussels.jpg";
import dishSashimi from "@/assets/dish-sashimi.jpg";
import dishPoke from "@/assets/dish-poke.jpg";
import dishAhi from "@/assets/dish-ahi.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moon & Turtle — Asian-Fusion Seafood in Hilo, Hawaii" },
      { name: "description", content: "Locally sourced seafood and seasonal Asian-fusion at Moon & Turtle, an intimate downtown Hilo cafe. 4.7★ from 685 reviews. Reservations recommended." },
      { property: "og:title", content: "Moon & Turtle — Hilo, Hawaii" },
      { property: "og:description", content: "An intimate Hilo bistro where the tides dictate the daily menu." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Moon & Turtle",
          image: "/og-image.jpg",
          telephone: "+1-808-961-0599",
          servesCuisine: ["Seafood", "Asian Fusion", "Hawaiian"],
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "51 Kalakaua St",
            addressLocality: "Hilo",
            addressRegion: "HI",
            postalCode: "96720",
            addressCountry: "US",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "685" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-pearl text-ink font-sans selection:bg-clay/20">
      <SiteNav overHero />

      {/* Hero */}
      <header className="relative h-screen min-h-[640px] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSashimi}
            alt="Fresh sashimi at Moon & Turtle"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ocean/55" />
        </div>

        <div className="relative z-10 text-center">
          <p className="text-pearl/80 text-[10px] uppercase tracking-[0.4em] mb-6">Est. Downtown Hilo</p>
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl text-pearl mb-6 leading-[0.9]">
            Moon <span className="italic font-light">&</span> Turtle
          </h1>
          <p className="text-pearl/90 text-xs sm:text-sm uppercase tracking-[0.3em] font-light max-w-md mx-auto leading-relaxed mb-10">
            Asian Fusion · Hilo · Locally Sourced
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/reservations"
              className="px-10 py-4 bg-clay text-pearl uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-pearl hover:text-ocean transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="px-10 py-4 border border-pearl/40 text-pearl uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-pearl/10 transition-colors"
            >
              View Today's Menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-8 max-w-xs hidden lg:block">
          <p className="text-pearl/70 text-xs leading-relaxed uppercase tracking-wider italic">
            "The menu is reasonably short yet innovative and inclusive… wrapped in an intimate and friendly atmosphere."
          </p>
          <p className="text-pearl/40 text-[10px] mt-3 tracking-widest uppercase">— Adam H., Local Guide</p>
        </div>
        <div className="absolute bottom-10 right-8 hidden lg:block text-right">
          <p className="text-pearl text-2xl font-serif italic">4.7 ★</p>
          <p className="text-pearl/50 text-[10px] uppercase tracking-widest">685 Google reviews</p>
        </div>
      </header>

      {/* Philosophy */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-clay mb-6 font-medium">Our Kitchen</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Rooted in the Big Island, inspired by the Pacific Rim.
            </h2>
            <p className="text-lg leading-relaxed text-ink/80 mb-6">
              At Moon & Turtle, the menu evolves with the tides and the harvest. Led by Mark and Sunny, we
              celebrate the raw bounty of Hilo—from the morning's market fish to the seasonal perfection of our
              mushroom risotto.
            </p>
            <p className="text-base leading-relaxed text-ink/60 mb-10">
              Everything we serve comes from the Big Island. Small kitchen, short menu, deep care.
            </p>
            <Link
              to="/story"
              className="inline-block border-b border-clay pb-1 text-sm uppercase tracking-widest font-medium hover:text-clay transition-all"
            >
              Read Our Story
            </Link>
          </div>
          <div className="md:col-span-5">
            <img
              src={dishBrussels}
              alt="Charred brussels sprouts with Hawaiian sea salt"
              width={800}
              height={1024}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Signature Highlights */}
      <section className="bg-ocean text-pearl py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-clay mb-4 font-medium">Guest Favorites</p>
              <h2 className="font-serif text-4xl md:text-5xl">Kitchen Signatures</h2>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-pearl/50 pb-2">
              Subject to Availability
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              { img: dishSashimi, name: "Smokey Sashimi", desc: "Our signature cold-smoked local catch, finished with Hawaiian sea salt and micro-greens." },
              { img: dishPoke, name: "Sizzling Poke", desc: "A texture-forward take on the classic, seared briefly to lock in the ocean's freshness.", offset: true },
              { img: dishAhi, name: "Ahi Garlic Belly", desc: "Rich, buttery cuts of Ahi, pan-fried with confit garlic and island-grown citrus zest." },
            ].map((d) => (
              <article key={d.name} className={`space-y-4 group ${d.offset ? "md:translate-y-8" : ""}`}>
                <div className="overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={800}
                    height={576}
                    loading="lazy"
                    className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl">{d.name}</h3>
                <p className="text-sm text-pearl/60 leading-relaxed font-light">{d.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="inline-block border-b border-clay pb-1 text-xs uppercase tracking-[0.2em] font-medium hover:text-clay transition-all"
            >
              Explore the Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-clay mb-4 font-medium text-center">
          Loved by 685 Guests
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">A few words from our table.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { q: "Everything tasted like it was harvested at the exact moment of peak freshness, and then cooked to perfection with such care and respect.", who: "MNicole" },
            { q: "Stop whatever you're doing and call now for a reservation. Crispy rice, smokey sashimi, mushroom risotto — simply sublime.", who: "Kyle Massa" },
            { q: "Food heaven. The dishes are delicious, full of flavours yet perfectly balanced. Highlight of our visit to the island.", who: "Adam H." },
          ].map((r) => (
            <figure key={r.who} className="border-t border-ink/15 pt-8">
              <blockquote className="font-serif text-xl italic leading-snug text-ink/85">"{r.q}"</blockquote>
              <figcaption className="text-[10px] uppercase tracking-widest text-clay mt-6">— {r.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-24 md:py-32 px-6 bg-pearl border-t border-ink/5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-clay mb-6 block italic">
            Limited Seating Available
          </span>
          <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Join us at the table.</h2>
          <p className="text-ink/70 mb-12 leading-relaxed">
            To maintain the intimacy of the experience, we highly recommend booking in advance. For reservations,
            please call us directly or book online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/reservations"
              className="px-12 py-4 bg-ocean text-pearl uppercase text-[10px] tracking-widest font-bold hover:bg-clay transition-colors"
            >
              Book a Table
            </Link>
            <a
              href="tel:+18089610599"
              className="text-[10px] uppercase tracking-widest text-ink/60 hover:text-clay transition-colors"
            >
              or call (808) 961-0599
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
