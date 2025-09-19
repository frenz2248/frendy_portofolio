import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MouseProvider } from "@/context/MouseContext";
import MusicPlayer from "./components/MusicPlayer";

// Font config
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frendy Portfolio",
  description:
    "Portofolio resmi Frendy Ardiansyah, Mahasiswa Teknik Komputer. Menampilkan proyek, skill, dan kontak secara profesional.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#031930] text-[#D1DDED]">
        <MouseProvider>{children}</MouseProvider>
      </body>
    </html>
  );
}
