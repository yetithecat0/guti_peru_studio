"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

// Elementos de navegación principal
const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detecta scroll para ajustar opacidad del fondo
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#131313]/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-headline)] text-lg text-[#b8965a] uppercase tracking-wider hover:opacity-80 transition-opacity"
        >
          {SITE_NAME}
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-label)] text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                index === 0
                  ? "text-white border-b border-[#b8965a] pb-0.5"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contacto"
          className="hidden md:inline-flex bg-[#b8965a] text-[#271900] px-6 py-2.5 rounded-full font-[family-name:var(--font-label)] text-[10px] uppercase tracking-widest hover:brightness-110 transition-all duration-300 active:scale-95"
        >
          Agendar sesión
        </Link>

        {/* Botón menú hamburguesa — móvil */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#131313]/95 backdrop-blur-md border-t border-[#b8965a]/20 px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-[family-name:var(--font-label)] text-sm uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#b8965a] text-[#271900] px-6 py-3 rounded-full font-[family-name:var(--font-label)] text-xs uppercase tracking-widest text-center hover:brightness-110 transition-all"
          >
            Agendar sesión
          </Link>
        </div>
      )}
    </header>
  );
}
