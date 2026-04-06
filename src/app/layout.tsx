import type { Metadata } from "next";
import { Newsreader, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  title: "Guti Perú Studio — Fotografía & Audiovisual en Lima",
  description:
    "Estudio fotográfico profesional en Jesús María, Lima. Especializados en retratos, books profesionales, fotografía comercial y producción audiovisual.",
  keywords: [
    "fotografía profesional Lima",
    "estudio fotográfico Jesús María",
    "book profesional Lima",
    "fotografía comercial Perú",
    "audiovisual Lima",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Guti Perú Studio — Fotografía & Audiovisual",
    description: "Capturamos lo que las palabras no pueden decir.",
    locale: "es_PE",
    type: "website",
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
