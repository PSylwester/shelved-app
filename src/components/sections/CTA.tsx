// src/components/sections/CTA.tsx
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#121A1D] py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Kontener z gradientem nawiązującym do zachodu słońca */}
        <div className="relative isolate overflow-hidden bg-[#1E292D] px-6 py-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 md:pb-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 border border-[#9C2A0F]/20">
          {/* Dekoracyjne światło w tle banera */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#gradient-cta)"
              fillOpacity="0.15"
            />
            <defs>
              <radialGradient id="gradient-cta">
                <stop stopColor="#FB722C" />
                <stop offset={1} stopColor="#9C2A0F" />
              </radialGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FB722C]/10 border border-[#FB722C]/20 text-[#FB722C] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="h-3 w-3" />
              Zupełnie za darmo
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#FAD3B1] sm:text-4xl">
              Gotowy, by uporządkować <br /> swoją bibliotekę?
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#FAD3B1]/60">
              Dołącz do społeczności Shelved i przestań zastanawiać się, co
              obejrzeć lub przeczytać w następnej kolejności. Twoja półka czeka.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button className="rounded-xl bg-[#FB722C] px-8 py-4 text-sm font-bold text-[#121A1D] shadow-lg shadow-[#FB722C]/20 transition-all hover:bg-[#FB722C]/90 hover:scale-105 active:scale-95 flex items-center gap-2">
                Załóż darmowe konto
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-[#FAD3B1] hover:text-[#FB722C] transition-colors"
              >
                Dowiedz się więcej <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Opcjonalny element wizualny po prawej stronie (np. mockup lub ikony) */}
          <div className="relative mt-16 h-80 lg:mt-8 hidden lg:block">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#FB722C]/5 rounded-full blur-3xl" />
            {/* Tutaj w przyszłości możesz wstawić obrazek apki lub stos książek/płyt */}
            <div className="relative flex items-center justify-center h-full">
              <div className="p-8 rounded-2xl bg-[#121A1D]/50 border border-[#9C2A0F]/20 backdrop-blur-sm rotate-3 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#9C2A0F]" />
                  <div className="w-3 h-3 rounded-full bg-[#FB722C]" />
                  <div className="w-3 h-3 rounded-full bg-[#FAD3B1]/20" />
                </div>
                <div className="space-y-2">
                  <div className="w-48 h-2 rounded bg-[#FAD3B1]/10" />
                  <div className="w-32 h-2 rounded bg-[#FAD3B1]/10" />
                  <div className="w-40 h-2 rounded bg-[#FB722C]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
