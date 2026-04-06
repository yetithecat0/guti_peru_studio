"use client";

import { useState, useMemo } from "react";
import { PORTFOLIO_ITEMS, PortfolioCategory } from "@/lib/constants";

export function usePortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("todos");
  
  // Custom logic for "Todos" filter: Curated fixed order
  // B/N (grayscale): Retratos, Eventos, Boudoir
  // Color (none): Comercial
  const mixedPortfolio = useMemo(() => {
    // Definimos el orden exacto de los IDs para la curaduría
    const curatedIds = [
      "p1", "e1", "p4",    // Fila 1 (B/N, B/N, Color)
      "e5", "p3", "p7",    // Fila 2 (B/N, B/N, Color)
      "b1", "prod1", "b3", // Fila 3 (B/N, Color, B/N) - EL PATRÓN SOLICITADO
      "e2", "p6", "prod2", // Fila 4 (B/N, B/N, Color)
      "e6", "p8", "prod3", // Fila 5 (B/N, B/N, Color)
      "e3", "e4"           // Pie de galería (B/N, B/N)
    ];

    // Mapeamos los IDs a los ítems reales y forzamos el efecto según las 6 elegidas para B/N
    const grayscaleIds = ["p1", "e5", "p3", "b1", "b3", "e2"];
    
    return curatedIds.map(id => {
      const item = PORTFOLIO_ITEMS.find(i => i.id === id);
      if (!item) return null;
      
      // Regla de filtros: Solo las 6 IDs seleccionadas van en B/N (grayscale).
      // El resto va a color (none).
      const effect = grayscaleIds.includes(id) ? "grayscale" : "none";
      
      return { ...item, effect };
    }).filter(Boolean);
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "todos") return mixedPortfolio;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter, mixedPortfolio]);

  return { activeFilter, setActiveFilter, filteredItems };
}
