import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Menu, Phone, X } from "lucide-react";

const phone = "05 34 01 31 00";
const email = "bvscop@bvscop.fr";
const address = "ZA du Pic · 09100 Pamiers";

const activities = [
  {
    title: "Électricité générale et industrielle",
    text: "Installations neuves, maintenance et mise en conformité pour les bâtiments, les ateliers et les équipements des professionnels.",
  },
  {
    title: "Réseaux et télécommunications",
    text: "Courants forts et courants faibles : réseaux électriques, éclairage public, fibre optique et infrastructures de communication.",
  },
  {
    title: "Énergies renouvelables",
    text: "Production d’électricité, photovoltaïque et solutions de performance énergétique conçues pour durer.",
  },
];

const expertise = [
  "Électricité générale et industrielle",
  "Réseaux électriques et télécommunications",
  "Production d’électricité et énergies renouvelables",
];

const figures = [
  { value: "1992", label: "Création de l’entreprise" },
  { value: "SCOP", label: "Société coopérative" },
  { value: "Ariège", label: "Pamiers et alentours" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const tel = `tel:${phone.replaceAll(" ", "")}`;

  return (
    <div className="min-h-screen bg-[#f5f6f3] text-[#1b2730] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#dce2dc] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#accueil" onClick={closeMenu} aria-label="BV SCOP, retour à l’accueil" className="flex items-center">
            <span className="font-serif text-[24px] leading-none tracking-[-0.01em] text-[#1644c5] sm:text-[27px]">BV <span className="text-[#75ae0d]">SCOP</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#435059] md:flex">
            <a href="#activites" className="transition-colors hover:text-[#1644c5]">Activités</a>
            <a href="#a-propos" className="transition-colors hover:text-[#1644c5]">Entreprise</a>
            <a href="#contact" className="transition-colors hover:text-[#1644c5]">Contact</a>
            <a href={tel} className="inline-flex items-center gap-2 rounded-md bg-[#1644c5] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#1037a5]"><Phone size={15} /> {phone}</a>
          </nav>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-md border border-[#dce2dc] p-2 text-[#1644c5] md:hidden" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#dce2dc] bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-[#435059]">
              <a href="#activites" onClick={closeMenu}>Activités</a>
              <a href="#a-propos" onClick={closeMenu}>Entreprise</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
              <a href={tel} onClick={closeMenu}>Appeler le {phone}</a>
            </div>
          </nav>
        )}
      </header>

      <main id="accueil">
        <section className="border-b border-[#dce2dc] bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#1644c5]">Pamiers · Ariège · depuis 1992</p>
              <h1 className="max-w-2xl font-serif text-4xl leading-[1.08] text-[#18242d] sm:text-[56px]">Électricité, réseaux et énergies renouvelables.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5b6870]">BV SCOP accompagne les projets techniques des entreprises, des collectivités et des territoires en Ariège.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1644c5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1037a5]">Parler de votre projet <ArrowRight size={16} /></a>
                <a href="#activites" className="inline-flex items-center justify-center rounded-md border border-[#bfc9c2] bg-white px-5 py-3 text-sm font-semibold text-[#26343c] transition-colors hover:border-[#1644c5] hover:text-[#1644c5]">Découvrir nos métiers</a>
              </div>
            </div>
            <div className="border-l-4 border-[#8acb17] bg-[#f1f4ed] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1644c5]">Une SCOP locale</p>
              <p className="mt-5 font-serif text-2xl leading-snug text-[#1b2730]">Une expertise technique, avec un interlocuteur direct.</p>
              <ul className="mt-7 space-y-4 text-sm leading-6 text-[#5b6870]">
                {expertise.map((item) => (
                  <li key={item} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-[#75ae0d]" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="activites" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1644c5]">Nos activités</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#18242d] sm:text-4xl">Des compétences réunies au même endroit.</h2>
            <p className="mt-5 text-base leading-7 text-[#5b6870]">Trois savoir-faire complémentaires, une seule équipe pour mener votre projet de l’étude à la mise en service.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {activities.map((activity, index) => (
              <article key={activity.title} className="border border-[#dce2dc] bg-white p-7 transition-shadow hover:shadow-[0_12px_30px_rgba(27,39,48,.08)]">
                <span className="text-sm font-semibold text-[#8acb17]">0{index + 1}</span>
                <h3 className="mt-12 text-xl font-semibold leading-tight text-[#1b2730]">{activity.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#647178]">{activity.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="a-propos" className="border-y border-[#dce2dc] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1644c5]">L’entreprise</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-[#18242d] sm:text-4xl">Une entreprise ancrée dans le territoire.</h2>
              </div>
              <div>
                <p className="text-base leading-7 text-[#5b6870]">Créée en 1992 à Pamiers, BV SCOP est une société coopérative qui intervient dans les métiers de l’électricité, des réseaux et des solutions énergétiques.</p>
                <p className="mt-4 text-base leading-7 text-[#5b6870]">Nous travaillons pour les entreprises, les collectivités et les particuliers de l’Ariège et des territoires voisins, avec une même exigence : des installations fiables, durables et conformes.</p>
                <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[#dce2dc] bg-[#dce2dc] sm:grid-cols-3">
                  {figures.map((figure) => (
                    <div key={figure.label} className="bg-[#f8faf7] px-5 py-6">
                      <dt className="font-serif text-2xl text-[#1644c5]">{figure.value}</dt>
                      <dd className="mt-2 text-xs uppercase tracking-[0.12em] text-[#69746f]">{figure.label}</dd>
                    </div>
                  ))}
                </dl>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1644c5] underline decoration-[#8acb17] decoration-2 underline-offset-8">Échanger avec l’équipe <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#1644c5] text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8ec73]">Contact</p>
              <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Parlons de votre besoin technique.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/80">Pour une étude, une question ou un projet, l’équipe BV SCOP est joignable directement.</p>
            </div>
            <div className="flex flex-col items-start gap-3 text-sm font-semibold lg:items-end">
              <a href={tel} className="inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-[#1644c5] transition-colors hover:bg-[#f1f4ed]"><Phone size={17} /> {phone}</a>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-3 text-white underline decoration-[#c8ec73] underline-offset-4 hover:text-[#c8ec73]"><Mail size={16} /> {email}</a>
              <span className="inline-flex items-center gap-3 text-white/75"><MapPin size={16} /> {address}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#18242d] text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} BV SCOP · Pamiers, Ariège</p>
          <p>Électricité · Réseaux · Énergies renouvelables</p>
        </div>
      </footer>
    </div>
  );
}