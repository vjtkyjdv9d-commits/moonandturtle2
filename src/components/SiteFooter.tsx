import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/5 py-24 px-6 md:px-8 bg-pearl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl mb-6 italic">Moon & Turtle</h3>
          <p className="text-sm text-ink/60 mb-2">51 Kalakaua St, Hilo, HI 96720</p>
          <p className="text-sm text-ink/60 mb-2">(808) 961-0599</p>
          <p className="text-sm text-ink/60 italic font-serif">Tuesday — Saturday • 5:30PM until late</p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Connect</h4>
          <ul className="space-y-3 text-sm text-ink/70">
            <li><a href="https://facebook.com" className="hover:text-clay transition-colors">Facebook</a></li>
            <li><a href="https://instagram.com" className="hover:text-clay transition-colors">Instagram</a></li>
            <li><a href="tel:+18089610599" className="hover:text-clay transition-colors">Call Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Visit</h4>
          <ul className="space-y-3 text-sm text-ink/70">
            <li><Link to="/menu" className="hover:text-clay transition-colors">Daily Menu</Link></li>
            <li><Link to="/reservations" className="hover:text-clay transition-colors">Reservations</Link></li>
            <li><Link to="/visit" className="hover:text-clay transition-colors">Location & Hours</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-ink/40 uppercase tracking-tighter">© {new Date().getFullYear()} Moon & Turtle. Hilo, Hawaii.</p>
        <p className="text-[10px] text-ink/40 uppercase tracking-tighter">Built for the Big Island.</p>
      </div>
    </footer>
  );
}
