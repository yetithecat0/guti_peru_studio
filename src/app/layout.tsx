import type { Metadata } from "next";
import { Newsreader, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PHOTOGRAPHER_FULL_NAME } from "@/lib/constants";

// Optimización tipográfica con next/font
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gutiperu.com"),
  title: {
    default: "Guti Perú Studio — Fotografía & Audiovisual en Lima",
    template: "%s | Guti Perú Studio",
  },
  description:
    "Estudio fotográfico profesional en Jesús María, Lima. Especializados en retratos, books profesionales, fotografía comercial y producción audiovisual.",
  keywords: [
    "fotografía profesional Lima",
    "estudio fotográfico Jesús María",
    "book profesional Lima",
    "fotografía comercial Perú",
    "audiovisual Lima",
  ],
  authors: [{ name: PHOTOGRAPHER_FULL_NAME }],
  creator: PHOTOGRAPHER_FULL_NAME,
  publisher: PHOTOGRAPHER_FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Guti Perú Studio — Fotografía & Audiovisual",
    description: "Capturamos lo que las palabras no pueden decir. Estudio fotográfico en Lima.",
    url: "https://gutiperu.com",
    siteName: "Guti Perú Studio",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de subir esta imagen a public/
        width: 1200,
        height: 630,
        alt: "Guti Perú Studio — Fotografía & Audiovisual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guti Perú Studio — Fotografía & Audiovisual",
    description: "Estudio fotográfico profesional en Jesús María, Lima.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${newsreader.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
