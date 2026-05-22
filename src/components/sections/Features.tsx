// src/components/sections/Features.tsx
import {
  LayoutGrid,
  Bell,
  Search,
  Users,
  Trophy,
  Smartphone,
} from "lucide-react";

const FEATURES = [
  {
    title: "Twoja Półka, Twoje Zasady",
    description:
      "Organizuj książki i filmy w kolekcje. Oznaczaj co już za Tobą, a co dopiero planujesz zacząć.",
    icon: LayoutGrid,
  },
  {
    title: "Powiadomienia o Premierach",
    description:
      "Nigdy nie przegap premiery kolejnego tomu lub kinowego hitu. Poinformujemy Cię o dacie wydania.",
    icon: Bell,
  },
  {
    title: "Gdzie to obejrzeć?",
    description:
      "Sprawdzaj dostępność filmów i seriali na platformach streamingowych jednym kliknięciem.",
    icon: Search,
  },
  {
    title: "Statystyki Czytelnicze",
    description:
      "Podsumuj swój rok. Ile stron przeczytanych? Ile godzin przed ekranem? Twoje dane w pięknej formie.",
    icon: Trophy,
  },
  {
    title: "Kluby Dyskusyjne",
    description:
      "Dziel się opiniami ze znajomymi i dołączaj do grup tematycznych o Twoich ulubionych uniwersach.",
    icon: Users,
  },
  {
    title: "Zawsze pod ręką",
    description:
      "Dostęp do Twojej biblioteki z dowolnego urządzenia. Synchronizacja w czasie rzeczywistym.",
    icon: Smartphone,
  },
];

export default function Features() {
  return (
    <section className="bg-[#121A1D] py-24 px-6 lg:px-8 border-t border-[#9C2A0F]/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[#FB722C] font-bold tracking-widest uppercase text-sm mb-3">
            Możliwości
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-[#FAD3B1]">
            Więcej niż zwykła lista
          </p>
          <p className="mt-4 text-[#FAD3B1]/60 max-w-2xl mx-auto">
            Zaprojektowaliśmy Shelved tak, abyś mógł skupić się na tym, co
            kochasz – na historiach. Resztą zajmiemy się my.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-[#1E292D] border border-[#9C2A0F]/10 hover:border-[#FB722C]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FB722C]/10 flex items-center justify-center mb-6 group-hover:bg-[#FB722C] transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-[#FB722C] group-hover:text-[#121A1D] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#FAD3B1] mb-3 group-hover:text-[#FB722C] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#FAD3B1]/50 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
