"use client";

import { useState } from "react"; // NOWE
import { createClient } from "@/utils/supabase/client"; // NOWE
import { BookOpen, Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import {
  SiGithub,
  SiGoogle,
  SiFacebook,
  SiApple,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useRouter } from "next/navigation"; // NOWE

export default function RegisterPage() {
  // 1. NOWE: Stany dla pól formularza
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const supabase = createClient();
  const router = useRouter();

  // 2. NOWE: Funkcja obsługująca rejestrację
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Prosta walidacja haseł
    if (password !== confirmPassword) {
      setMessage("Hasła nie są identyczne!");
      setLoading(false);
      return;
    }

    if (password.length < 12) {
      setMessage("Hasło musi mieć minimum 12 znaków.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Przesyłamy nazwę użytkownika jako metadane
        data: {
          display_name: username,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage("Błąd: " + error.message);
    } else {
      setMessage("Sukces! Sprawdź skrzynkę e-mail, aby potwierdzić konto.");
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-12 overflow-y-auto bg-[#121A1D]">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FB722C] blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#9C2A0F] blur-[150px] opacity-10 pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="bg-[#1E292D]/80 backdrop-blur-xl rounded-3xl border border-[#9C2A0F]/30 p-8 shadow-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#FAD3B1]/40 hover:text-[#FB722C] transition-colors mb-8 group cursor-pointer"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">
              ←
            </span>
            Wróć do strony głównej
          </Link>

          <div className="text-center mb-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FB722C] text-[#121A1D] mb-4 shadow-lg shadow-[#FB722C]/20">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-[#FAD3B1]">Stwórz konto.</h1>
            <p className="text-[#FAD3B1]/50 text-sm mt-2">
              Zacznij budować swoją półkę już dziś.
            </p>
          </div>

          {/* Wyświetlanie komunikatów o błędach/sukcesach */}
          {message && (
            <div
              className={`p-3 rounded-xl mb-6 text-sm text-center ${message.includes("Sukces") ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest ml-1">
                Nazwa użytkownika
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="np. moleksiazkowy"
                  className="w-full bg-[#121A1D]/50 border border-[#9C2A0F]/20 rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] placeholder:text-[#FAD3B1]/20 focus:outline-none focus:border-[#FB722C]/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest ml-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="twoj@email.com"
                  className="w-full bg-[#121A1D]/50 border border-[#9C2A0F]/20 rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] placeholder:text-[#FAD3B1]/20 focus:outline-none focus:border-[#FB722C]/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest ml-1">
                Hasło
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="minimum 12 znaków"
                  className="w-full bg-[#121A1D]/50 border border-[#9C2A0F]/20 rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] placeholder:text-[#FAD3B1]/20 focus:outline-none focus:border-[#FB722C]/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest ml-1">
                Powtórz hasło
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  required
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="wpisz hasło ponownie"
                  className="w-full bg-[#121A1D]/50 border border-[#9C2A0F]/20 rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] placeholder:text-[#FAD3B1]/20 focus:outline-none focus:border-[#FB722C]/50 transition-colors"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 ml-1 pt-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 rounded border-[#9C2A0F]/40 bg-[#121A1D]/50 text-[#FB722C] focus:ring-[#FB722C]/50 accent-[#FB722C] cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-xs text-[#FAD3B1]/60 leading-snug cursor-pointer"
              >
                Akceptuję{" "}
                <a href="#" className="text-[#FB722C] hover:underline">
                  Regulamin
                </a>{" "}
                oraz{" "}
                <a href="#" className="text-[#FB722C] hover:underline">
                  Politykę prywatności
                </a>{" "}
                Shelved.
              </label>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-[#FB722C] text-[#121A1D] font-bold py-3 rounded-xl mt-4 shadow-lg shadow-[#FB722C]/10 hover:bg-[#FB722C]/90 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Zarejestruj się"
              )}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#9C2A0F]/20"></div>
            </div>
            <span className="relative bg-[#1E292D] px-4 text-xs text-[#FAD3B1]/30 uppercase tracking-widest">
              Lub przez
            </span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[SiGithub, SiGoogle, SiFacebook, SiApple].map((Icon, idx) => (
              <button
                key={idx}
                type="button"
                className="flex items-center justify-center py-3 rounded-xl border border-[#9C2A0F]/40 hover:bg-[#FAD3B1]/5 transition-colors text-[#FAD3B1] group cursor-pointer"
              >
                <Icon className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          <p className="text-center text-[#FAD3B1]/50 text-sm mt-6">
            Masz już konto?{" "}
            <Link
              href="/auth"
              className="text-[#FB722C] font-bold hover:underline cursor-pointer"
            >
              Zaloguj się
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
