import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MouseProvider } from "@/context/MouseContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://frendy-portofolio.vercel.app/"; 

export const metadata: Metadata = {
  title: "Frendy Portfolio",
  description:
    "Official portfolio of Frendy Ardiansyah, Computer Engineering student. Professionally showcases his projects, skills, and contacts.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Frendy Ardiansyah - Portfolio",
    description:
      "Official portfolio of Frendy Ardiansyah, a Computer Engineering student.",
    url: siteUrl,
    siteName: "Frendy's Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Pratinjau Website Portfolio Frendy Ardiansyah",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Frendy Ardiansyah - Portfolio",
    description:
      "Official portfolio of Frendy Ardiansyah, a Computer Engineering student.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#031930] text-[#D1DDED]">
        <MouseProvider>{children}</MouseProvider>
      </body>
    </html>
  );
}