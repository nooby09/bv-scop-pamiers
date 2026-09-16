import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Menu, Phone, X } from "lucide-react";

const officePhoto = "/manus-storage/bv-scop-presse_fb16decf.jpg";
const phone = "05 34 01 31 00";
const email = "bvscop@bvscop.fr";

const services = [
  {
    title: "Électricité générale et industrielle",
    text: "Des installations adaptées aux bâtiments, aux équipements et aux besoins des professionnels.",
  },
  {
    title: "Réseaux et télécommunications",
    text: "Des infrastructures fiables pour connecter les sites et accompagner les projets techniques.",
  },
  {
    title: "Énergies renouvelables",
    text: "Des solutions énergétiques qui prennent en compte la performance et la durée.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const tel = `tel:${phone.replaceAll(" ", "")}`;

  return (
    <div className="min-h-screen bg-[#f5f6f3] text-[#1b2730]">
      <header className="sticky top-0 z-50 border-b border-[#dce2dc] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#accueil" onClick={closeMenu} aria-label="BV SCOP — accueil" className="flex items-center">
            <span className="text-[22px] font-black tracking-[-0.06em] text-[#1644c5] sm:text-[25px]">BV <span className="text-[#75ae0d]">SCOP</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#435059] md:flex">
            <a href="#activites" className="transition-colors hover:text-[#1644c5]">Activités</a>
            <a href="#a-propos" className="transition-colors hover:text-[#1644c5]">À propos</a>
            <a href="#contact" className="transition-colors hover:text-[#1644c5]">Contact</a>
            <a href={tel} className="inline-flex items-center gap-2 rounded-md bg-[#1644c5] px-4 py-2.5 text-white transition-colors hover:bg-[#1037a5]"><Phone size={15} /> {phone}</a>
          </nav>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-md border border-[#dce2dc] p-2 text-[#1644c5] md:hidden" aria-label="Ouvrir le menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#dce2dc] bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold text-[#435059]">
              <a href="#activites" onClick={closeMenu}>Activités</a>
              <a href="#a-propos" onClick={closeMenu}>À propos</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
              <a href={tel} onClick={closeMenu}>Appeler {phone}</a>
            </div>
          </nav>
        )}
      </header>

      <main id="accueil">
        <section className="border-b border-[#dce2dc] bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#1644c5]">Pamiers · Ariège · Depuis 1992</p>
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#18242d] sm:text-6xl">Électricité, réseaux et énergies renouvelables.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5b6870]">BV SCOP accompagne les projets techniques des entreprises, des collectivités et des territoires en Ariège.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1644c5] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1037a5]">Parler de votre projet <ArrowRight size={16} /></a>
                <a href="#activites" className="inline-flex items-center justify-center rounded-md border border-[#bfc9c2] bg-white px-5 py-3 text-sm font-bold text-[#26343c] transition-colors hover:border-[#1644c5] hover:text-[#1644c5]">Voir nos activités</a>
              </div>
            </div>
            <div className="border-l-4 border-[#8acb17] bg-[#f1f4ed] p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1644c5]">Une SCOP locale</p>
              <p className="mt-5 text-2xl font-bold leading-tight text-[#1b2730]">Une expertise technique, avec un interlocuteur direct.</p>
              <div className="mt-7 space-y-4 text-sm leading-6 text-[#5b6870]">
                <p className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-[#75ae0d]" /> Électricité générale et industrielle</p>
                <p className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-[#75ae0d]" /> Réseaux électriques et télécommunications</p>
                <p className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-[#75ae0d]" /> Production d’électricité et énergies renouvelables</p>
              </div>
            </div>
          </div>
        </section>

        <section id="activites" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1644c5]">Nos activités</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#18242d] sm:text-4xl">Des compétences réunies au même endroit.</h2>
            <p className="mt-5 text-base leading-7 text-[#5b6870]">Une présentation claire des savoir-faire de BV SCOP pour permettre à chaque client de trouver rapidement le bon interlocuteur.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="border border-[#dce2dc] bg-white p-6 transition-shadow hover:shadow-[0_12px_30px_rgba(27,39,48,.08)] sm:p-7">
                <span className="text-sm font-bold text-[#8acb17]">0{index + 1}</span>
                <h3 className="mt-12 text-xl font-bold leading-tight text-[#1b2730]">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#647178]">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="a-propos" className="border-y border-[#dce2dc] bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
            <div className="overflow-hidden border border-[#dce2dc] bg-[#e9ece7]">
              <img src={officePhoto} alt="Photo d'archive publique présentant BV SCOP dans un article de presse" className="block aspect-[16/10] w-full object-cover" />
              <p className="px-4 py-3 text-[11px] leading-5 text-[#69746f]">Photo publique d’archive — <a className="underline hover:text-[#1644c5]" href="https://www.ladepeche.fr/article/2016/01/08/2251352-bv-scop-branche-ariege-futures-bornes-recharge-automobile.html" target="_blank" rel="noreferrer">La Dépêche du Midi, 8 janvier 2016</a>.</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1644c5]">À propos de BV SCOP</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#18242d] sm:text-4xl">Une entreprise ancrée dans le territoire.</h2>
              <p className="mt-5 text-base leading-7 text-[#5b6870]">Créée en 1992, BV SCOP intervient depuis Pamiers dans les métiers de l’électricité, des réseaux et des solutions énergétiques.</p>
              <p className="mt-4 text-base leading-7 text-[#5b6870]">Cette page de démonstration est volontairement simple : elle met en avant les activités, l’ancrage local et un accès rapide au contact.</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#1644c5] underline decoration-[#8acb17] decoration-2 underline-offset-8">Échanger avec l’équipe <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#1644c5] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8ec73]">Contact</p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.035em] sm:text-4xl">Parlons de votre besoin technique.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/80">Pour une étude, une question ou un projet, l’équipe BV SCOP peut être jointe directement.</p>
            </div>
            <div className="flex flex-col items-start gap-3 text-sm font-semibold lg:items-end">
              <a href={tel} className="inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-[#1644c5] transition-colors hover:bg-[#f1f4ed]"><Phone size={17} /> {phone}</a>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-3 text-white underline decoration-[#c8ec73] underline-offset-4 hover:text-[#c8ec73]"><Mail size={16} /> {email}</a>
              <span className="inline-flex items-center gap-3 text-white/75"><MapPin size={16} /> ZA du Pic · Pamiers</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#18242d] text-white/65">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© BV SCOP · Pamiers, Ariège</p><p>Concept de démonstration — contenus et visuels à valider avant publication.</p></div>
      </footer>
    </div>
  );
}
