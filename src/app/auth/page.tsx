"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { BookOpen, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const supabase = createClient();
  const router = useRouter();

  // Logowanie tradycyjne (Email + Hasło)
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
      router.push("/dashboard");
      router.refresh();
    }
  };

  // Logowanie przez Google
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error("Błąd Google Auth: " + error.message);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-12 overflow-hidden bg-[#121A1D]">
      {/* Dekoracyjne gradienty w tle */}
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
            <h1 className="text-2xl font-bold text-[#FAD3B1]">
              Witaj w Shelved.
            </h1>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl mb-6 text-sm text-center bg-red-500/20 text-red-400 border border-red-500/30">
              {errorMsg}
            </div>
          )}

          {/* Formularz Email / Hasło */}
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

          {/* Separator */}
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#9C2A0F]/20"></div>
            </div>
            <span className="relative bg-[#1E292D] px-4 text-xs text-[#FAD3B1]/30 uppercase tracking-widest">
              Lub
            </span>
          </div>

          {/* Nowy, pełnowymiarowy przycisk Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-[#9C2A0F]/40 hover:border-[#FB722C]/40 hover:bg-[#FB722C]/5 transition-all text-[#FAD3B1] group cursor-pointer"
          >
            <SiGoogle className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:text-[#FB722C] transition-all" />
            <span className="text-sm font-medium text-[#FAD3B1]/80 group-hover:text-[#FAD3B1] transition-colors">
              Kontynuuj przez Google
            </span>
          </button>

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
