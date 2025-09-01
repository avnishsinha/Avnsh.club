

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "../components/ThemeToggle";
import MusicEmbed from "../components/MusicEmbed";
import { ThemeScript } from "./theme-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avnsh.club | Avnish Kumar Sinha",
  description: "Developer • Designer • Creator | Portfolio & Drop Page",
  keywords: ["Avnish Kumar Sinha", "Developer", "Designer", "Portfolio", "avnsh.club"],
  openGraph: {
    title: "Avnsh.club | Avnish Kumar Sinha",
    description: "Developer • Designer • Creator | Portfolio & Drop Page",
    url: "https://avnsh.club",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Avnsh.club Preview",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="en" className="scroll-smooth">
      <head>
        <ThemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white dark:bg-white dark:text-neutral-900 transition-colors duration-300 snap-y snap-mandatory overflow-y-scroll`}>
        <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-200/60 dark:border-gray-800/60">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold">avnsh.club</a>
            <nav className="flex items-center gap-3">
              <a className="opacity-80 hover:opacity-100" href="#work">Work</a>
              <a className="opacity-80 hover:opacity-100" href="#contact">Contact</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <MusicEmbed />
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
