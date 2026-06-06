"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut, Loader2, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const supabase = createClient();
  const router = useRouter();

  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        // Pobieramy display_name z metadanych, które wysłaliśmy przy rejestracji
        setUserName(user.user_metadata?.display_name || user.email);
      }
      setLoading(false);
    };

    getUser();
  }, [supabase]);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    await supabase.auth.signOut();
    router.push("/auth");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121A1D] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-[#FB722C] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121A1D] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative group mb-12">
        <div className="absolute inset-0 bg-[#FB722C] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="relative">
          {/* Wyświetlanie imienia użytkownika */}
          <div className="flex items-center justify-center gap-2 mb-4 text-[#FB722C]">
            <User className="h-5 w-5" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Witaj, {userName}!
            </span>
          </div>

          <h1 className="text-5xl font-black text-[#FAD3B1] tracking-tighter mb-4">
            TODO<span className="text-[#FB722C]">:</span>dashboard
          </h1>
          <p className="text-[#FAD3B1]/40 uppercase tracking-[0.3em] text-sm font-bold">
            Twoja biblioteka jest gotowa do konfiguracji
          </p>
        </div>
      </div>

      <button
        onClick={handleSignOut}
        disabled={isLoggingOut}
        className="flex items-center gap-2 px-6 py-3 bg-[#1E292D] border border-[#9C2A0F]/30 text-[#FAD3B1]/60 hover:text-[#FB722C] hover:border-[#FB722C]/50 rounded-xl transition-all cursor-pointer disabled:opacity-50"
      >
        {isLoggingOut ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <LogOut className="h-4 w-4" />
        )}
        <span>Wyloguj się</span>
      </button>
    </div>
  );
}
