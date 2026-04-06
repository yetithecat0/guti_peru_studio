// Página principal — Guti Perú Studio
// Ensambla todas las secciones de la landing page en orden
import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <CollaborationSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
