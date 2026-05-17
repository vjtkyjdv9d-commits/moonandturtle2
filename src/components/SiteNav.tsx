import { Link } from "@tanstack/react-router";

export function SiteNav({ overHero = false }: { overHero?: boolean }) {
  return (
    <nav
      className={
        overHero
          ? "fixed top-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center mix-blend-difference text-pearl"
          : "sticky top-0 w-full z-50 px-6 md:px-8 py-5 flex justify-between items-center bg-pearl/85 backdrop-blur-md border-b border-ink/5"
      }
    >
      <Link to="/" className="font-serif text-2xl tracking-tight italic">
        Moon & Turtle
      </Link>
      <div className="flex gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] font-medium items-center">
        <Link to="/menu" className="hidden sm:inline hover:text-clay transition-colors">Daily Menu</Link>
        <Link to="/story" className="hidden sm:inline hover:text-clay transition-colors">The Kitchen</Link>
        <Link to="/visit" className="hidden sm:inline hover:text-clay transition-colors">Visit</Link>
        <Link
          to="/reservations"
          className="px-4 py-2 border border-current hover:bg-clay hover:border-clay hover:text-pearl transition-colors"
        >
          Reserve
        </Link>
      </div>
    </nav>
  );
}
