// src/components/sections/UpcomingReleases.tsx
import { Calendar, Film, BookOpen, ExternalLink } from "lucide-react";

const RELEASES = [
  {
    id: 1,
    title: "Dune: Part Three",
    date: "2026-12-18",
    type: "film",
    category: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
  },
  {
    id: 2,
    title: "Wiatry Zimy",
    date: "2026-10-12",
    type: "book",
    category: "Fantasy",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
  },
  {
    id: 3,
    title: "Project Hail Mary",
    date: "2026-03-20",
    type: "film",
    category: "Drama / Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
  },
  {
    id: 4,
    title: "Nowy Świat",
    date: "2026-06-05",
    type: "book",
    category: "Thriller",
    image:
      "https://images.unsplash.com/photo-1543004629-142a76c50c9e?w=400&q=80",
  },
];

export default function UpcomingReleases() {
  return (
    <section className="bg-[#121A1D] py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Nagłówek sekcji */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-[#FB722C] font-bold tracking-widest uppercase text-sm mb-2">
              Bądź na bieżąco
            </h2>
            <p className="text-3xl font-bold text-[#FAD3B1]">
              Nadchodzące premiery
            </p>
          </div>
          <button className="text-[#FB722C] text-sm font-semibold flex items-center gap-2 hover:underline">
            Zobacz pełny kalendarz <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        {/* Grid z kartami */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RELEASES.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-[#1E292D] border border-[#9C2A0F]/20 overflow-hidden transition-all hover:border-[#FB722C]/40 hover:shadow-2xl hover:shadow-[#FB722C]/5"
            >
              {/* Zdjęcie (Placeholder) */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                {/* Badge typu (Film/Książka) */}
                <div className="absolute top-3 left-3 bg-[#121A1D]/80 backdrop-blur-md rounded-lg p-2 text-[#FB722C]">
                  {item.type === "film" ? (
                    <Film className="h-4 w-4" />
                  ) : (
                    <BookOpen className="h-4 w-4" />
                  )}
                </div>
              </div>

              {/* Treść karty */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-[#FAD3B1]/50 mb-2">
                  <Calendar className="h-3 w-3" />
                  {new Date(item.date).toLocaleDateString("pl-PL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <h3 className="text-[#FAD3B1] font-bold text-lg mb-1 group-hover:text-[#FB722C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#FAD3B1]/40 text-xs font-medium uppercase tracking-tighter">
                  {item.category}
                </p>

                {/* Przycisk "Dodaj do swojej półki" widoczny na hover */}
                <button className="mt-4 w-full py-2 rounded-xl border border-[#FB722C]/50 text-[#FB722C] text-xs font-bold transition-all hover:bg-[#FB722C] hover:text-[#121A1D]">
                  Przypomnij mi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
