import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#f5f6f3] px-5 text-[#1b2730]">
      <span className="font-serif text-3xl text-[#1644c5]">BV <span className="text-[#75ae0d]">SCOP</span></span>
      <Link href="/" className="inline-flex items-center gap-3 rounded-md bg-[#1644c5] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1037a5]">
        Voir le site <ArrowRight size={16} />
      </Link>
    </div>
  );
}