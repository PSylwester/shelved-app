// src/components/sections/Footer.tsx
import { BookOpen, Heart } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#9C2A0F]/20 bg-[#121A1D] text-[#FAD3B1]/60 transition-colors duration-300 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#9C2A0F]/10">
          {/* KOLUMNA 1: O projekcie */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FB722C] text-[#121A1D]">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#FAD3B1]">
                Shelved<span className="text-[#FB722C]">.</span>
              </span>
            </div>
            <p className="text-sm text-[#FAD3B1]/50 leading-relaxed">
              Twoja osobista przestrzeń na książki, filmy i seriale. Śledź
              postępy i buduj swoją wirtualną kolekcję.
            </p>
          </div>

          {/* KOLUMNA 2: Aplikacja */}
          <div>
            <h3 className="text-xs font-bold text-[#FB722C] uppercase tracking-widest mb-4">
              Aplikacja
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FB722C] transition-colors">
                  Moja Biblioteka
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FB722C] transition-colors">
                  Premiery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FB722C] transition-colors">
                  Odkrywaj
                </a>
              </li>
            </ul>
          </div>

          {/* KOLUMNA 3: Społeczność */}
          <div>
            <h3 className="text-xs font-bold text-[#FB722C] uppercase tracking-widest mb-4">
              Społeczność
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FB722C] transition-colors">
                  Kluby Książkowe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FB722C] transition-colors">
                  Wspólne Oglądanie
                </a>
              </li>
            </ul>
          </div>

          {/* KOLUMNA 4: Legalne */}
          <div>
            <h3 className="text-xs font-bold text-[#FB722C] uppercase tracking-widest mb-4">
              Informacje
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FB722C] transition-colors">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FB722C] transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DOLNA SEKCJA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider text-[#FAD3B1]/40">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Shelved. Stworzone z</span>
            <Heart className="h-3 w-3 text-[#9C2A0F] fill-[#9C2A0F]" />
            <span>dla popkultury.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#FB722C] transition-colors">
              <SiGithub className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
