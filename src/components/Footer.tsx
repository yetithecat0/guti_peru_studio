import Link from "next/link";
import { MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { SITE_NAME, SITE_LOCATION, SITE_EMAIL, SOCIAL_LINKS, PHOTOGRAPHER_FULL_NAME } from "@/lib/constants";

// Ícono SVG de TikTok (no disponible en lucide-react)
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

// Columna de enlaces del footer
const FOOTER_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#131313] border-t border-[#b8965a]/30">
      {/* Columnas principales */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Columna 1: Branding */}
        <div>
          <p className="font-[family-name:var(--font-headline)] text-lg text-[#b8965a] uppercase tracking-wider mb-4">
            {SITE_NAME}
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm text-[#d1c5b5] leading-relaxed">
            Elevando la narrativa visual en Lima. Especialistas en fotografía de
            alta gama y producción audiovisual creativa.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <nav aria-label="Navegación del footer">
          <h4 className="font-[family-name:var(--font-label)] text-white text-xs uppercase tracking-widest font-bold mb-4">
            Enlaces
          </h4>
          <ul className="flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-[family-name:var(--font-body)] text-sm text-[#d1c5b5] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="font-[family-name:var(--font-label)] text-white text-xs uppercase tracking-widest font-bold mb-4">
            Contacto
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-[#d1c5b5] text-sm font-[family-name:var(--font-body)]">
              <MapPin size={16} className="text-[#b8965a] shrink-0" />
              {SITE_LOCATION}
            </li>
            <li className="flex items-center gap-2 text-[#d1c5b5] text-sm font-[family-name:var(--font-body)]">
              <Mail size={16} className="text-[#b8965a] shrink-0" />
              {SITE_EMAIL}
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="flex gap-4 mt-6">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Guti Perú Studio (@gutiperustudio)"
              className="text-[#b8965a] hover:text-white transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Guti Perú Studio (@gutiperustudio)"
              className="text-[#b8965a] hover:text-white transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Guti Perú Studio (@gutiperustudio)"
              className="text-[#b8965a] hover:text-white transition-colors duration-300"
            >
              <TikTokIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Pie legal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-white/5 text-center">
        <div className="flex flex-col gap-6 items-center">
          <p className="font-[family-name:var(--font-body)] text-[10px] text-[#d1c5b5]/50 uppercase tracking-[0.2em]">
            © {currentYear} {PHOTOGRAPHER_FULL_NAME} — {SITE_NAME}. 
            {SITE_LOCATION}. Todos los derechos reservados.
          </p>
          <div className="w-12 h-px bg-[#b8965a]/20" />
          <p className="font-[family-name:var(--font-body)] text-[9px] text-[#d1c5b5]/30 uppercase tracking-[0.3em]">
            Design by:{" "}
            <a 
              href="https://datawithia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#b8965a] hover:text-white transition-all duration-300 decoration-[#b8965a]/20 underline underline-offset-8"
            >
              DW - Automatizaciones
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
