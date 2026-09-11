import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const phone = "05 34 01 31 00";
const email = "bvscop@bvscop.fr";

const expertise = [
  {
    number: "01",
    icon: Zap,
    title: "Électricité générale",
    text: "Des installations pensées pour durer, de l'étude à la mise en service.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Réseaux & télécoms",
    text: "Des infrastructures fiables pour les bâtiments, les sites et les territoires.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Énergies renouvelables",
    text: "Des solutions techniques pour accompagner la transition énergétique.",
  },
];

const values = [
  "Une expertise technique lisible",
  "Une relation directe et durable",
  "Des solutions adaptées à chaque projet",
];

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f6f2] text-[#14201f]">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" aria-label="BV SCOP accueil">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d6a66a] text-[#13201e] shadow-lg shadow-black/10 transition-transform duration-200 group-hover:rotate-6">
              <span className="text-lg font-black tracking-[-0.08em]">BV</span>
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-bold tracking-[0.18em]">BV SCOP</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-white/65">Électricité · Réseaux · Énergies</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
            <a className="transition-colors hover:text-white" href="#expertises">Expertises</a>
            <a className="transition-colors hover:text-white" href="#engagement">Engagement</a>
            <a className="transition-colors hover:text-white" href="#contact">Contact</a>
            <a className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-white transition-colors hover:border-[#d6a66a] hover:bg-[#d6a66a] hover:text-[#14201f]" href={`tel:${phone.replaceAll(" ", "")}`}>
              <Phone size={14} />
              {phone}
            </a>
          </nav>

          <button className="rounded-full border border-white/25 p-2 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Ouvrir le menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/15 bg-[#14201f]/95 px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-white/85">
              <a href="#expertises" onClick={closeMenu}>Expertises</a>
              <a href="#engagement" onClick={closeMenu}>Engagement</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
              <a href={`tel:${phone.replaceAll(" ", "")}`} onClick={closeMenu}>Appeler {phone}</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[720px] overflow-hidden bg-[#14201f]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,27,28,.93)_0%,rgba(20,32,31,.72)_46%,rgba(20,32,31,.26)_100%),url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=86')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(214,166,106,.18),transparent_28%)]" />
          <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-16 pt-36 lg:px-10 lg:pb-24">
            <div className="max-w-3xl">
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#d6a66a]"><span className="h-px w-10 bg-[#d6a66a]" /> Pamiers · Ariège</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">L’énergie technique, <em className="font-serif font-normal text-[#d6a66a]">en confiance.</em></h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/72 sm:text-lg">Électricité générale, réseaux et solutions énergétiques pour accompagner les projets qui comptent.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button onClick={scrollToContact} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d6a66a] px-6 py-3.5 text-sm font-bold text-[#14201f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e5bc85] active:scale-[.98]">Parlons de votre projet <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" /></button>
                <a href="#expertises" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10">Découvrir nos expertises <ChevronDown size={17} /></a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f6f2] to-transparent" />
        </section>

        <section className="relative mx-auto -mt-1 max-w-7xl px-6 lg:px-10">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_24px_70px_rgba(20,32,31,.11)] sm:grid-cols-3">
            <div className="border-b border-[#14201f]/10 px-7 py-7 sm:border-b-0 sm:border-r"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6a66a]">01</p><p className="mt-3 text-lg font-semibold">Une expertise de terrain</p><p className="mt-2 text-sm leading-6 text-[#52605e]">Des réponses concrètes pour les projets techniques.</p></div>
            <div className="border-b border-[#14201f]/10 px-7 py-7 sm:border-b-0 sm:border-r"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6a66a]">02</p><p className="mt-3 text-lg font-semibold">Un interlocuteur engagé</p><p className="mt-2 text-sm leading-6 text-[#52605e]">Une relation directe, de l’étude au suivi.</p></div>
            <div className="px-7 py-7"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6a66a]">03</p><p className="mt-3 text-lg font-semibold">Une vision durable</p><p className="mt-2 text-sm leading-6 text-[#52605e]">Des installations pensées dans le temps.</p></div>
          </div>
        </section>

        <section id="expertises" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b57d3f]">Ce que nous faisons</p>
              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">La technique, quand elle est bien <em className="font-serif font-normal text-[#b57d3f]">pensée.</em></h2>
              <p className="mt-7 max-w-md text-base leading-7 text-[#52605e]">Une approche claire et exigeante pour les installations électriques, les réseaux et les solutions énergétiques.</p>
              <a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#14201f] underline decoration-[#d6a66a] decoration-2 underline-offset-8 transition-colors hover:text-[#b57d3f]">Échanger sur un projet <ArrowRight size={16} /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {expertise.map(({ number, icon: Icon, title, text }) => (
                <article key={number} className="group rounded-2xl border border-[#14201f]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a66a]/70 hover:shadow-[0_18px_45px_rgba(20,32,31,.1)]">
                  <div className="flex items-start justify-between"><span className="text-xs font-bold tracking-[0.18em] text-[#b57d3f]">{number}</span><Icon size={20} strokeWidth={1.6} className="text-[#b57d3f] transition-transform duration-300 group-hover:rotate-12" /></div>
                  <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#66726f]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="engagement" className="bg-[#e8e8e1]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-32">
            <div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-[#1b302e] shadow-[0_22px_60px_rgba(20,32,31,.16)]">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(20,32,31,.18),rgba(20,32,31,.78)),url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1500&q=82')] bg-cover bg-center" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white"><div><p className="text-xs uppercase tracking-[0.2em] text-[#d6a66a]">Notre manière de travailler</p><p className="mt-2 max-w-xs text-2xl font-semibold leading-tight">Solide dans les détails. Clair dans la relation.</p></div><span className="grid h-12 w-12 place-items-center rounded-full border border-white/30"><ArrowRight size={18} /></span></div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b57d3f]">Notre engagement</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Un projet technique mérite une relation <em className="font-serif font-normal text-[#b57d3f]">simple.</em></h2>
              <p className="mt-7 text-base leading-7 text-[#52605e]">Nous croyons aux solutions utiles, aux échanges directs et au travail bien fait. Chaque projet commence par une écoute attentive et se construit avec méthode.</p>
              <ul className="mt-8 space-y-4">{values.map((value) => <li key={value} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#14201f] text-[#d6a66a]"><Check size={14} strokeWidth={3} /></span>{value}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#14201f] text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.85fr_1.15fr] lg:px-10 lg:py-32">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d6a66a]">Parlons-en</p>
              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl">Un besoin, une idée, un <em className="font-serif font-normal text-[#d6a66a]">projet ?</em></h2>
              <p className="mt-7 max-w-md text-base leading-7 text-white/65">Décrivez-nous votre besoin. Nous reviendrons vers vous pour en parler simplement.</p>
              <div className="mt-10 space-y-4 text-sm text-white/80"><a className="flex items-center gap-3 transition-colors hover:text-[#d6a66a]" href={`tel:${phone.replaceAll(" ", "")}`}><Phone size={16} className="text-[#d6a66a]" /> {phone}</a><a className="flex items-center gap-3 transition-colors hover:text-[#d6a66a]" href={`mailto:${email}`}><Mail size={16} className="text-[#d6a66a]" /> {email}</a><div className="flex items-center gap-3"><MapPin size={16} className="text-[#d6a66a]" /> Zone du Pic · Pamiers</div></div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 text-[#14201f] shadow-[0_25px_80px_rgba(0,0,0,.18)] sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Votre nom<input required className="mt-2 w-full rounded-lg border border-[#14201f]/15 bg-[#f6f6f2] px-4 py-3 outline-none transition-colors focus:border-[#b57d3f]" placeholder="Nom et prénom" /></label><label className="text-sm font-semibold">Votre entreprise<input required className="mt-2 w-full rounded-lg border border-[#14201f]/15 bg-[#f6f6f2] px-4 py-3 outline-none transition-colors focus:border-[#b57d3f]" placeholder="Entreprise" /></label></div>
              <label className="mt-5 block text-sm font-semibold">Votre message<textarea required className="mt-2 min-h-32 w-full resize-y rounded-lg border border-[#14201f]/15 bg-[#f6f6f2] px-4 py-3 outline-none transition-colors focus:border-[#b57d3f]" placeholder="Parlez-nous de votre projet..." /></label>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><button type="submit" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#14201f] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#28413e] active:scale-[.98]">Envoyer une demande <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" /></button>{sent ? <span className="text-sm font-medium text-[#3b765e]">Merci, votre demande est prête à être traitée.</span> : <span className="flex items-center gap-2 text-xs text-[#66726f]"><Clock3 size={14} /> Réponse rapide</span>}</div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#0e1716] text-white/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© BV SCOP · Pamiers, Ariège</p><div className="flex items-center gap-5"><span>Électricité · Réseaux · Énergies</span><a href="#top" className="text-[#d6a66a] transition-colors hover:text-white">Retour en haut ↑</a></div></div>
        <div className="border-t border-white/10 px-6 py-3 text-center text-[10px] tracking-wide text-white/35">Concept de démonstration — contenu à valider par BV SCOP avant mise en ligne.</div>
      </footer>
    </div>
  );
}
