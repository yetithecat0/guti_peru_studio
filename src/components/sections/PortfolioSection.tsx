"use client";

import Image from "next/image";
import { PortfolioCategory } from "@/lib/constants";
import { usePortfolioFilter } from "@/hooks/usePortfolioFilter";

// Categorías de filtro del portafolio
const FILTERS: { id: PortfolioCategory; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "retratos", label: "Retratos" },
  { id: "comercial", label: "Comercial" },
  { id: "eventos", label: "Eventos" },
  { id: "boudoir", label: "Boudoir" },
];

export function PortfolioSection() {
  const { activeFilter, setActiveFilter, filteredItems } = usePortfolioFilter();

  return (
    <section id="portafolio" className="bg-[#111111] py-32 px-6">
      {/* Encabezado con filtros */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-[family-name:var(--font-label)] text-white text-sm uppercase tracking-[0.3em] mb-4">
            PORTAFOLIO
          </h2>
          <div className="w-24 h-px bg-[#b8965a]" />
        </div>

        {/* Botones de filtro */}
        <div
          className="flex flex-wrap gap-3"
          role="group"
          aria-label="Filtros de portafolio"
        >
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              id={`filter-${id}`}
              onClick={() => setActiveFilter(id)}
              aria-pressed={activeFilter === id}
              className={`px-5 py-2 rounded-full font-[family-name:var(--font-label)] text-[10px] uppercase tracking-widest transition-all duration-300 ${
                activeFilter === id
                  ? "bg-[#b8965a] text-[#271900]"
                  : "border border-white/20 text-white/70 hover:border-[#b8965a] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Galería adaptable: Grid curado para "Todos", Masonry para categorías completas */}
      <div className={`mx-auto transition-all duration-500 ${
          activeFilter === "todos"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl"
            : "columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl space-y-6"
        }`}>
        {filteredItems.map((item) => {
          if (!item) return null;
          return (
            <div
              key={`${activeFilter}-${item.id}`}
              className={`relative overflow-hidden rounded-xl group transition-all duration-500 shadow-xl shadow-black/20 ${
                activeFilter === "todos" ? "aspect-[4/5]" : "break-inside-avoid"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={1000}
                className={`w-full h-full transition-all duration-700 ease-in-out transform group-hover:scale-110 ${
                  item.effect === "grayscale"
                    ? "grayscale group-hover:grayscale-0"
                    : ""
                } ${activeFilter === 'todos' ? 'object-cover' : 'object-contain'}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
