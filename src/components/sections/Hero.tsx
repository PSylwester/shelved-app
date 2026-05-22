// src/components/sections/Hero.tsx
import { ArrowRight, Play, BookOpen, Film } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#121A1D] py-24 sm:py-32 pt-40 sm:pt-54">
      {/* Dekoracyjny gradient w tle (efekt zachodu słońca) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-[#FB722C] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] rounded-full bg-[#9C2A0F] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          {/* Mały badge nad nagłówkiem */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full px-3 py-1 text-sm leading-6 text-[#FB722C] ring-1 ring-[#9C2A0F]/30 bg-[#9C2A0F]/10 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB722C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB722C]"></span>
              </span>
              Nowość: Kalendarz premier 2026
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#FAD3B1] sm:text-6xl">
            Wszystkie Twoje historie <br />
            <span className="text-[#FB722C]">w jednym miejscu.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#FAD3B1]/70 max-w-2xl mx-auto">
            Śledź postępy w czytaniu, twórz listy filmów do obejrzenia i buduj
            swoją wirtualną kolekcję. Shelved to Twój osobisty tracker
            popkultury.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-xl bg-[#FB722C] px-6 py-3.5 text-sm font-bold text-[#121A1D] shadow-lg shadow-[#FB722C]/20 transition-all hover:bg-[#FB722C]/90 hover:scale-105 active:scale-95 flex items-center gap-2">
              Zacznij budować półkę
              <ArrowRight className="h-4 w-4" />
            </button>

            <button className="text-sm font-semibold leading-6 text-[#FAD3B1] hover:text-[#FB722C] transition-colors flex items-center gap-2">
              Zobacz jak to działa <Play className="h-4 w-4 fill-current" />
            </button>
          </div>

          {/* Szybkie statystyki lub ikony kategorii */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3 max-w-3xl mx-auto border-t border-[#9C2A0F]/10 pt-10">
            <div className="flex flex-col items-center gap-2">
              <BookOpen className="h-6 w-6 text-[#FB722C]" />
              <span className="text-[#FAD3B1] font-medium">Książki</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Film className="h-6 w-6 text-[#FB722C]" />
              <span className="text-[#FAD3B1] font-medium">
                Filmy & Seriale
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 col-span-2 sm:col-span-1">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-[#121A1D] bg-[#1E292D] flex items-center justify-center text-[10px] text-[#FAD3B1]"
                  >
                    U{i}
                  </div>
                ))}
              </div>
              <span className="text-[#FAD3B1]/50 text-xs">
                Dołącz do 2k+ osób
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
