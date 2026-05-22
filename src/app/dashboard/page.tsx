// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#121A1D] flex items-center justify-center p-6 text-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-[#FB722C] blur-[100px] opacity-20 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="relative">
          <h1 className="text-5xl font-black text-[#FAD3B1] tracking-tighter mb-4">
            TODO<span className="text-[#FB722C]">:</span>dashboard
          </h1>
          <p className="text-[#FAD3B1]/40 uppercase tracking-[0.3em] text-sm font-bold">
            System zarządzania aplikacją w budowie
          </p>
        </div>
      </div>
    </div>
  );
}
