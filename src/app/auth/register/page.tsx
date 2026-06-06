"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";
import { BookOpen, Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import Link from "next/link";

// 1. Definicja schematu walidacji
const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Nazwa użytkownika musi mieć min. 3 znaki")
      .max(20, "Nazwa użytkownika jest za długa"),
    email: z.string().email("Wprowadź poprawny adres email"),
    password: z
      .string()
      .min(12, "Hasło musi mieć co najmniej 12 znaków")
      .regex(/[A-Z]/, "Hasło musi mieć dużą literę")
      .regex(/[0-9]/, "Hasło musi mieć cyfrę"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła nie są identyczne",
    path: ["confirmPassword"],
  });

type RegisterInput = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const supabase = createClient();

  // 2. Inicjalizacja formularza
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched", // Walidacja następuje przy opuszczeniu pola
  });

  // 3. Rejestracja tradycyjna (Email + Hasło)
  const onSubmit = async (values: RegisterInput) => {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          display_name: values.username,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error("Błąd rejestracji", {
        description: error.message,
      });
    } else {
      toast.success("Konto utworzone pomyślnie!", {
        description: "Sprawdź swoją skrzynkę e-mail, aby potwierdzić profil.",
      });
    }
  };

  // Rejestracja/Logowanie przez Google
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
      toast.error("Błąd logowania przez Google: " + error.message);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-12 overflow-y-auto bg-[#121A1D]">
      {/* Background Gradients */}
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest ml-1">
                Nazwa użytkownika
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  {...register("username")}
                  placeholder="np. moleksiazkowy"
                  className={`w-full bg-[#121A1D]/50 border rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] placeholder:text-[#FAD3B1]/20 focus:outline-none transition-all ${
                    errors.username
                      ? "border-red-500/50"
                      : "border-[#9C2A0F]/20 focus:border-[#FB722C]/50"
                  }`}
                />
              </div>
              {errors.username && (
                <p className="text-[10px] text-red-400 ml-1 italic">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest ml-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  {...register("email")}
                  placeholder="twoj@email.com"
                  className={`w-full bg-[#121A1D]/50 border rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] placeholder:text-[#FAD3B1]/20 focus:outline-none transition-all ${
                    errors.email
                      ? "border-red-500/50"
                      : "border-[#9C2A0F]/20 focus:border-[#FB722C]/50"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[10px] text-red-400 ml-1 italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest ml-1">
                Hasło
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  {...register("password")}
                  type="password"
                  placeholder="minimum 12 znaków"
                  className={`w-full bg-[#121A1D]/50 border rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] placeholder:text-[#FAD3B1]/20 focus:outline-none transition-all ${
                    errors.password
                      ? "border-red-500/50"
                      : "border-[#9C2A0F]/20 focus:border-[#FB722C]/50"
                  }`}
                />
              </div>
              {errors.password && (
                <p className="text-[10px] text-red-400 ml-1 italic">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#FB722C] uppercase tracking-widest ml-1">
                Powtórz hasło
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FAD3B1]/30" />
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="wpisz hasło ponownie"
                  className={`w-full bg-[#121A1D]/50 border rounded-xl py-3 pl-10 pr-4 text-[#FAD3B1] placeholder:text-[#FAD3B1]/20 focus:outline-none transition-all ${
                    errors.confirmPassword
                      ? "border-red-500/50"
                      : "border-[#9C2A0F]/20 focus:border-[#FB722C]/50"
                  }`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-[10px] text-red-400 ml-1 italic">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FB722C] text-[#121A1D] font-bold py-3 rounded-xl mt-4 shadow-lg shadow-[#FB722C]/10 hover:bg-[#FB722C]/90 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Zarejestruj się"
              )}
              {!isSubmitting && <ArrowRight className="h-4 w-4" />}
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

          {/* Pełnowymiarowy przycisk Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-[#9C2A0F]/40 hover:border-[#FB722C]/40 hover:bg-[#FB722C]/5 transition-all text-[#FAD3B1] group cursor-pointer"
          >
            <SiGoogle className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:text-[#FB722C] transition-all" />
            <span className="text-sm font-medium text-[#FAD3B1]/80 group-hover:text-[#FAD3B1] transition-colors">
              Dołącz przez Google
            </span>
          </button>

          <p className="text-center text-[#FAD3B1]/50 text-sm mt-8">
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
