import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f6f3] px-5 text-[#1b2730]">
      <div className="max-w-md text-center">
        <p className="font-serif text-5xl text-[#1644c5]">404</p>
        <h1 className="mt-4 font-serif text-2xl text-[#18242d]">Page introuvable</h1>
        <p className="mt-4 text-sm leading-6 text-[#5b6870]">La page que vous cherchez n’existe pas ou a été déplacée.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#1644c5] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1037a5]">
          <ArrowLeft size={16} /> Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}