import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Add fallback fonts in case Google Fonts fail to load
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  fallback: ["sans-serif"], // Fallback to system fonts
  display: "swap", // Improve loading performance
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  fallback: ["serif"], // Fallback to system fonts
  display: "swap", // Improve loading performance
});

export const metadata: Metadata = {
  title: "Edwin Regency | Premium Hospitality in Noida",
  description: "If you need quality hospitality for business or leisure, keep an eye on us. Opening details drop soon!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} bg-brand-light text-brand-dark font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}