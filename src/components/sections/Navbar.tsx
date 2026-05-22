// src/components/sections/Navbar.tsx
"use client";

import { useState } from "react";
import { BookOpen, Sun, Moon, Globe, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      {/* Kapsuła: Tło Deep Blue-Gray, obramowanie w przygaszonym pomarańczu #9C2A0F */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between bg-[#1E292D]/90 backdrop-blur-lg px-4 md:px-6 rounded-2xl border border-[#9C2A0F]/30 shadow-2xl shadow-black/50 pointer-events-auto">
        {/* LEWA STRONA: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FB722C] text-[#121A1D] shadow-lg shadow-[#FB722C]/20">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#FAD3B1]">
            Shelved<span className="text-[#FB722C]">.</span>
          </span>
        </div>

        {/* ŚRODEK: Nawigacja (Desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="#"
            className="rounded-xl px-3 py-1.5 text-sm font-medium text-[#FAD3B1] transition-colors hover:bg-[#FB722C]/10 hover:text-[#FB722C]"
          >
            Biblioteka
          </a>
          <a
            href="#"
            className="rounded-xl px-3 py-1.5 text-sm font-medium text-[#FAD3B1]/60 transition-colors hover:bg-[#FB722C]/10 hover:text-[#FB722C]"
          >
            Premiery
          </a>
          <a
            href="#"
            className="rounded-xl px-3 py-1.5 text-sm font-medium text-[#FAD3B1]/60 transition-colors hover:bg-[#FB722C]/10 hover:text-[#FB722C]"
          >
            Odkrywaj
          </a>
        </nav>

        {/* PRAWA STRONA: Akcje */}
        <div className="hidden md:flex items-center gap-1">
          <button className="flex items-center gap-1 rounded-xl p-2 text-[#FAD3B1]/60 transition-colors hover:bg-[#FB722C]/10 hover:text-[#FB722C] text-sm font-medium">
            <Globe className="h-4 w-4" />
            <span>PL</span>
            <ChevronDown className="h-3 w-3 opacity-50" />
          </button>

          {/* Zaktualizowany przycisk - teraz pasuje do Deep Sunset */}
          <button className="rounded-xl p-2 text-[#FAD3B1]/60 transition-colors hover:bg-[#FB722C]/10 hover:text-[#FB722C]">
            <Moon className="h-5 w-5" />
          </button>

          <Link
            href="/auth"
            className="ml-2 rounded-xl bg-[#FB722C] px-4 py-2 text-sm font-bold text-[#121A1D] transition-all hover:bg-[#FB722C]/90 active:scale-95 shadow-md shadow-[#FB722C]/20"
          >
            Zaloguj
          </Link>
        </div>

        {/* MOBILNE: Kontrolki */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-[#FAD3B1] hover:bg-[#FB722C]/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILNE */}
      {isOpen && (
        <div className="absolute left-4 right-4 top-20 md:hidden rounded-2xl border border-[#9C2A0F]/30 bg-[#1E292D] p-4 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-[#FAD3B1] pointer-events-auto">
          <nav className="flex flex-col gap-1">
            <a
              href="#"
              className="rounded-xl bg-[#FB722C]/10 px-3 py-2.5 text-base font-medium text-[#FB722C]"
            >
              Biblioteka
            </a>
            <a
              href="#"
              className="rounded-xl px-3 py-2.5 text-base font-medium text-[#FAD3B1]/70 hover:bg-[#FB722C]/5"
            >
              Premiery
            </a>
            <a
              href="#"
              className="rounded-xl px-3 py-2.5 text-base font-medium text-[#FAD3B1]/70 hover:bg-[#FB722C]/5"
            >
              Odkrywaj
            </a>
          </nav>
          <div className="h-px bg-[#9C2A0F]/20 my-2" />
          <Link
            href="/auth"
            className="ml-2 rounded-xl bg-[#FB722C] px-4 py-2 text-sm font-bold text-[#121A1D] transition-all hover:bg-[#FB722C]/90 active:scale-95 shadow-md shadow-[#FB722C]/20"
          >
            Zaloguj się
          </Link>
        </div>
      )}
    </header>
  );
}
