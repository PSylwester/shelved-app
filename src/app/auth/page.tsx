// src/app/auth/page.tsx
"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { BookOpen, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import {
  SiGithub,
  SiGoogle,
  SiFacebook,
  SiApple,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const supabase = createClient();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Błąd logowania: " + error.message);
      setLoading(false);
    } else {
      // Sukces! Przekierowujemy do dashboardu
      router.push("/dashboard");
      router.refresh(); // Odświeżamy trasę, aby sprawdzić sesję
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-12 overflow-hidden bg-[#121A1D]">
      {/* ... dekoracyjne gradienty ... */}

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
            <h1 className="text-2xl font-bold text-[#FAD3B1]">
              Witaj w Shelved.
            </h1>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl mb-6 text-sm text-center bg-red-500/20 text-red-400 border border-red-500/30">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
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
                  className="w-full bg-[#121A1D]/50 border border-[#9C2A0F]/20 rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] focus:outline-none focus:border-[#FB722C]/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest">
                  Hasło
                </label>
                <a
                  href="#"
                  className="text-[10px] text-[#FAD3B1]/40 hover:text-[#FB722C]"
                >
                  Zapomniałeś?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#121A1D]/50 border border-[#9C2A0F]/20 rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] focus:outline-none focus:border-[#FB722C]/50 transition-colors"
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-[#FB722C] text-[#121A1D] font-bold py-3 rounded-xl mt-4 shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Zaloguj się"
              )}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#9C2A0F]/20"></div>
            </div>
            <span className="relative bg-[#1E292D] px-4 text-xs text-[#FAD3B1]/30 uppercase tracking-widest">
              Lub kontynuuj przez
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

          <p className="text-center text-[#FAD3B1]/50 text-sm mt-8">
            Nie masz konta?{" "}
            <Link
              href="/auth/register"
              className="text-[#FB722C] font-bold hover:underline cursor-pointer"
            >
              Zarejestruj się
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
