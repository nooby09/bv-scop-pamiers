import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Clock3, Instagram, MapPin, Menu, Phone, Utensils, X } from "lucide-react";

const dishPhoto = "/manus-storage/gnocchi-public_fb13ea87.jpg";
const phone = "05 61 60 62 57";
const tel = `tel:${phone.replaceAll(" ", "")}`;

export default function MasSaintAntonin() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.title = "Le Mas Saint-Antonin — Restaurant italien à Pamiers";
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f0e7] text-[#2d2520]">
      <header className="sticky top-0 z-50 border-b border-[#2d2520]/10 bg-[#f6f0e7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#accueil" onClick={closeMenu} className="leading-none">
            <span className="block font-serif text-xl tracking-[-0.03em] text-[#7d2f25]">Le Mas</span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#76665b]">Saint-Antonin</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#64564e] md:flex">
            <a href="#restaurant" className="transition-colors hover:text-[#7d2f25]">Le restaurant</a>
            <a href="#carte" className="transition-colors hover:text-[#7d2f25]">La carte</a>
            <a href="#contact" className="transition-colors hover:text-[#7d2f25]">Contact</a>
            <a href={tel} className="inline-flex items-center gap-2 rounded-full bg-[#7d2f25] px-4 py-2.5 text-white transition-colors hover:bg-[#65251d]"><Phone size={14} /> Réserver</a>
          </nav>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-full border border-[#2d2520]/15 p-2 text-[#7d2f25] md:hidden" aria-label="Ouvrir le menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-[#2d2520]/10 bg-[#f6f0e7] px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm font-semibold text-[#64564e]"><a href="#restaurant" onClick={closeMenu}>Le restaurant</a><a href="#carte" onClick={closeMenu}>La carte</a><a href="#contact" onClick={closeMenu}>Contact</a><a href={tel} onClick={closeMenu}>Réserver une table</a></div></nav>}
      </header>

      <main id="accueil">
        <section className="border-b border-[#2d2520]/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b0722a]">Cuisine italienne · Pamiers</p>
              <h1 className="mt-5 max-w-xl font-serif text-6xl leading-[.93] tracking-[-0.04em] text-[#7d2f25] sm:text-8xl">Un peu d’Italie, <em className="text-[#b0722a]">beaucoup</em> de goût.</h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-[#685b53]">Le Mas Saint-Antonin vous accueille à Pamiers autour d’une cuisine italienne généreuse, de produits de saison et d’un moment simplement convivial.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={tel} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7d2f25] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#65251d]"><Phone size={16} /> Réserver au {phone}</a><a href="#carte" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2d2520]/20 px-6 py-3.5 text-sm font-bold text-[#2d2520] transition-colors hover:border-[#7d2f25] hover:text-[#7d2f25]">Découvrir la carte <ArrowRight size={16} /></a></div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#8a776c]"><span className="inline-flex items-center gap-2"><MapPin size={14} className="text-[#b0722a]" /> 4 rue Bernard Saisset</span><span className="inline-flex items-center gap-2"><Utensils size={14} className="text-[#b0722a]" /> Sur place & à emporter</span></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#7d2f25] p-3 shadow-[0_18px_50px_rgba(73,38,29,.16)]"><img src={dishPhoto} alt="Plat de gnocchi photographié et publié sur la page touristique du restaurant" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" /><p className="px-3 py-3 text-[10px] leading-4 text-[#f7e9d7]/75">Photo publique — <a href="https://www.ariegepyrenees.com/restaurant/restaurant-le-mas-saint-antonin/" target="_blank" rel="noreferrer" className="underline">Ariège Pyrénées Tourisme</a>.</p></div>
            </div>
          </div>
        </section>

        <section id="restaurant" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b0722a]">L’esprit du lieu</p><h2 className="mt-4 font-serif text-5xl leading-[.98] tracking-[-0.035em] text-[#7d2f25]">Une table chaleureuse, sans chichi.</h2></div>
            <div className="grid gap-8 text-[#685b53] sm:grid-cols-2"><p className="text-base leading-7">Une cuisine inspirée par l’Italie, servie dans un cadre accueillant à Pamiers. Le restaurant propose une carte de saison et des desserts maison.</p><p className="text-base leading-7">Pour un déjeuner, un dîner ou un repas à emporter, le plus simple est de contacter directement l’équipe pour connaître la carte du moment et réserver.</p></div>
          </div>
          <div className="mt-16 grid gap-4 border-y border-[#2d2520]/15 py-7 sm:grid-cols-3"><div className="flex items-center gap-4"><CalendarDays className="text-[#b0722a]" size={24} strokeWidth={1.5} /><div><p className="text-sm font-bold">Du mardi au samedi</p><p className="mt-1 text-xs text-[#8a776c]">Service midi et soir</p></div></div><div className="flex items-center gap-4"><Clock3 className="text-[#b0722a]" size={24} strokeWidth={1.5} /><div><p className="text-sm font-bold">Réservation conseillée</p><p className="mt-1 text-xs text-[#8a776c]">Par téléphone</p></div></div><div className="flex items-center gap-4"><Utensils className="text-[#b0722a]" size={24} strokeWidth={1.5} /><div><p className="text-sm font-bold">Cuisine italienne</p><p className="mt-1 text-xs text-[#8a776c]">Sur place et à emporter</p></div></div></div>
        </section>

        <section id="carte" className="bg-[#ede1d2]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:py-24"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b0722a]">La carte</p><h2 className="mt-4 font-serif text-5xl leading-[.98] tracking-[-0.035em] text-[#7d2f25]">Des produits de saison, une carte qui change.</h2><p className="mt-6 max-w-xl text-base leading-7 text-[#685b53]">La carte et les suggestions du moment sont à découvrir directement auprès du restaurant. Pour une réservation ou une commande à emporter, appelez l’équipe.</p><a href={tel} className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#7d2f25] px-5 py-3 text-sm font-bold text-[#7d2f25] transition-colors hover:bg-[#7d2f25] hover:text-white"><Phone size={16} /> Appeler le restaurant</a></div><div className="flex items-end justify-end"><p className="max-w-xs border-l-2 border-[#b0722a] pl-5 font-serif text-3xl italic leading-tight text-[#7d2f25]">“Le goût des choses faites avec attention.”</p></div></div>
        </section>

        <section id="contact" className="bg-[#7d2f25] text-[#f9eddd]"><div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-24"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e6b66e]">Nous trouver</p><h2 className="mt-4 max-w-xl font-serif text-5xl leading-[.98] tracking-[-0.035em]">À bientôt au Mas Saint-Antonin.</h2><div className="mt-8 space-y-3 text-sm text-[#f9eddd]/80"><p className="flex items-center gap-3"><MapPin size={16} className="text-[#e6b66e]" /> 4 rue Bernard Saisset, 09100 Pamiers</p><p className="flex items-center gap-3"><Phone size={16} className="text-[#e6b66e]" /> {phone}</p></div></div><div className="flex flex-col items-start gap-4 lg:items-end"><a href={tel} className="inline-flex items-center gap-3 rounded-full bg-[#e6b66e] px-6 py-3.5 text-sm font-bold text-[#7d2f25] transition-colors hover:bg-[#f1cb91]"><Phone size={16} /> Réserver une table</a><a href="https://www.instagram.com/le_mas_st_antonin/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#f9eddd] underline decoration-[#e6b66e] underline-offset-4"><Instagram size={16} /> Voir Instagram</a></div></div></section>
      </main>

      <footer className="bg-[#4e211b] px-5 py-6 text-center text-[11px] text-[#f9eddd]/60">© Le Mas Saint-Antonin · Concept de démonstration — informations et visuels à valider par le restaurant.</footer>
    </div>
  );
}
