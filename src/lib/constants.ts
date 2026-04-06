// Datos centralizados del sitio — Guti Perú Studio
// Fuente: mockup de /Stitch/code.html

export const SITE_NAME = "GUTI PERÚ STUDIO";
export const PHOTOGRAPHER_NAME = "Arturo C. Gutiérrez";
export const PHOTOGRAPHER_INSTAGRAM = "https://instagram.com/arturocguti18";
export const SITE_TAGLINE = "Fotografía & Audiovisual";
export const SITE_LOCATION = "Jesús María, Lima, Perú";
export const SITE_EMAIL = "lacg1803@gmail.com";
export const WHATSAPP_NUMBER = "51920461466";

// Redes sociales
export const SOCIAL_HANDLE = "gutiperustudio";
export const SOCIAL_LINKS = {
  instagram: `https://instagram.com/${SOCIAL_HANDLE}`,
  facebook: `https://facebook.com/${SOCIAL_HANDLE}`,
  tiktok: `https://tiktok.com/@${SOCIAL_HANDLE}`,
} as const;

export interface Service {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "retratos",
    title: "Retratos & Lifestyle",
    description:
      "Capturamos la esencia de tu personalidad en entornos naturales o controlados.",
  },
  {
    id: "book",
    title: "Book Profesional",
    description:
      "Material visual de alto impacto para modelos, actores y profesionales corporativos.",
  },
  {
    id: "comercial",
    title: "Fotografía Comercial",
    description:
      "Producción de catálogo y producto con iluminación técnica de precisión.",
  },
  {
    id: "boudoir",
    title: "Boudoir & Arte",
    description:
      "Una experiencia íntima y artística enfocada en la elegancia y el empoderamiento.",
  },
  {
    id: "eventos",
    title: "Eventos & Moda",
    description:
      "Cobertura de desfiles, lanzamientos y editoriales de moda con visión cinematográfica.",
  },
  {
    id: "audiovisual",
    title: "Producción Audiovisual",
    description:
      "Videos musicales, reels de alto impacto y contenido cinematográfico para marcas.",
  },
];

export interface CollaborationType {
  id: string;
  title: string;
  description: string;
}

export const COLLABORATION_TYPES: CollaborationType[] = [
  {
    id: "tfp",
    title: "Sesión TFP",
    description:
      "Colaboraciones selectas para portfolios de modelos y creativos con visión compartida.",
  },
  {
    id: "studio",
    title: "Uso del Estudio",
    description:
      "Alquiler de espacio equipado para fotógrafos independientes y creadores de contenido.",
  },
  {
    id: "creative",
    title: "Proyectos Creativos",
    description:
      "Alianzas estratégicas para marcas y productoras que buscan estética diferencial.",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  avatarAlt: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "valeria",
    quote:
      "Arturo tiene una personalidad única para hacerte sentir en confianza y puedas desarrollar la sesión de forma divertida pero profesional superando todas mis expectativas",
    name: "Valeria M.",
    role: "MODELO E INFLUENCER",
    avatarSrc: "/images/valeria.png",
    avatarAlt: "Retrato de Valeria M., modelo profesional",
  },
  {
    id: "carlos",
    quote:
      "La pasión de un artista se deja notar durante todo el proceso creativo y arturo me demostró que vive por y para la fotografía",
    name: "Carlos R.",
    role: "EMPRESARIO GASTRONÓMICO",
    avatarSrc: "/images/carlos.png",
    avatarAlt: "Retrato de Carlos R., dueño de restaurante",
  },
  {
    id: "ximena",
    quote:
      "Son pocos los fotógrafos que permiten colaborar con modelos y artistas nuevos en la ciudad comprometiendo su estudio fotográfico, su experiencia y su tiempo para desarrollar proyectos nuevos. se nota su pasión",
    name: "Ximena F.",
    role: "CANTANTE DE TRAP",
    avatarSrc: "/images/ximena.png",
    avatarAlt: "Retrato de Ximena F., cantante de trap urbana",
  },
];

export type PortfolioCategory =
  | "todos"
  | "retratos"
  | "comercial"
  | "eventos"
  | "boudoir";

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<PortfolioCategory, "todos">;
  effect: "grayscale" | "scale" | "none";
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    src: "/images/retrato3.png",
    alt: "Retrato artístico de Guti Perú Studio con iluminación de alto contraste",
    category: "retratos",
    effect: "grayscale",
  },
  {
    id: "p3",
    src: "/images/retrato4.png",
    alt: "Retrato lifestyle en estudio con iluminación natural y expresión auténtica",
    category: "retratos",
    effect: "grayscale",
  },
  {
    id: "p4",
    src: "/images/pisco.png",
    alt: "Fotografía comercial de lujo de botella de pisco con iluminación golden rim",
    category: "comercial",
    effect: "none",
  },
  {
    id: "p6",
    src: "/images/retrato5.png",
    alt: "Retrato profesional con luz de acento y composición editorial",
    category: "retratos",
    effect: "none",
  },
  {
    id: "p7",
    src: "/images/ceviche.png",
    alt: "Macro fotografía de ceviche peruano fresco con colores vibrantes y gotas de agua",
    category: "comercial",
    effect: "grayscale",
  },
  {
    id: "prod1",
    src: "/images/producto1.png",
    alt: "Fotografía de producto profesional - Guti Perú Studio",
    category: "comercial",
    effect: "none",
  },
  {
    id: "prod2",
    src: "/images/producto2.png",
    alt: "Fotografía comercial de producto con iluminación técnica",
    category: "comercial",
    effect: "grayscale",
  },
  {
    id: "prod3",
    src: "/images/producto3.png",
    alt: "Producción fotográfica para catálogo comercial",
    category: "comercial",
    effect: "none",
  },
  {
    id: "p8",
    src: "/images/retrato6.png",
    alt: "Retrato headshot profesional con fondo difuminado y luz suave",
    category: "retratos",
    effect: "none",
  },
  // Eventos — fotos reales de Guti Perú Studio
  {
    id: "e1",
    src: "/images/evento2.png",
    alt: "Cobertura de evento social con iluminación ambiente por Guti Perú Studio",
    category: "eventos",
    effect: "none",
  },
  {
    id: "e2",
    src: "/images/evento7.png",
    alt: "Fotografía de evento corporativo con enfoque en momentos auténticos",
    category: "eventos",
    effect: "grayscale",
  },
  {
    id: "e3",
    src: "/images/evento6.png",
    alt: "Cobertura fotográfica de desfile o lanzamiento con visión cinematográfica",
    category: "eventos",
    effect: "none",
  },
  {
    id: "e4",
    src: "/images/evento3.png",
    alt: "Fotografía de evento con captura de instantes espontáneos y luz natural",
    category: "eventos",
    effect: "scale",
  },
  {
    id: "e5",
    src: "/images/quince1.png",
    alt: "Fotografía de Quinceañera - Guti Perú Studio",
    category: "eventos",
    effect: "grayscale",
  },
  {
    id: "e6",
    src: "/images/quince2.png",
    alt: "Cobertura de fiesta de Quince Años con estilo cinematográfico",
    category: "eventos",
    effect: "none",
  },
  // Boudoir — fotos reales de Guti Perú Studio
  {
    id: "b1",
    src: "/images/boudoir-1.png",
    alt: "Fotografía boudoir artística con iluminación suave y ambiente íntimo",
    category: "boudoir",
    effect: "none",
  },
  {
    id: "b2",
    src: "/images/boudoir-2.png",
    alt: "Retrato boudoir elegante con enfoque en la composición y texturas",
    category: "boudoir",
    effect: "grayscale",
  },
  {
    id: "b3",
    src: "/images/boudoir-3.png",
    alt: "Sesión boudoir profesional con juegos de luces y sombras dramáticas",
    category: "boudoir",
    effect: "none",
  },
  {
    id: "b4",
    src: "/images/boudoir-4.png",
    alt: "Arte boudoir con estética editorial y atención al detalle",
    category: "boudoir",
    effect: "scale",
  },
  {
    id: "b5",
    src: "/images/boudoir-5.png",
    alt: "Fotografía íntima con iluminación técnica de precisión",
    category: "boudoir",
    effect: "grayscale",
  },
  {
    id: "b6",
    src: "/images/boudoir-6.png",
    alt: "Estética boudoir clásica con un toque moderno y sofisticado",
    category: "boudoir",
    effect: "none",
  },
  {
    id: "b7",
    src: "/images/boudoir-7.png",
    alt: "Retrato boudoir de alto impacto visual y narrativa artística",
    category: "boudoir",
    effect: "scale",
  },
  {
    id: "b8",
    src: "/images/boudoir-8.png",
    alt: "Sesión de arte y empoderamiento a través de la fotografía boudoir",
    category: "boudoir",
    effect: "none",
  },
];
