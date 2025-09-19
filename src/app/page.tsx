"use client";

import { useState } from "react";
// 1. Tambahkan AnimatePresence ke import framer-motion
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "./components/main/Hero";
import { About } from "./components/main/About";
import { Projects } from "./components/main/Projects";
import { Contact } from "./components/main/Contact";
import { Skill } from "./components/main/Skill";
import { Footer } from "./components/main/Footer";
import { Navbar } from "./components/main/Navbar";
import { MouseTrail } from "./components/main/MouseTrail";
import MusicPlayer from "./components/MusicPlayer";

export default function HomePage() {
  const [musicEnabled, setMusicEnabled] = useState(false);

  const handleEnableMusic = () => {
    setMusicEnabled(true);
  };

  return (
    // 2. Hapus properti motion dari <main>. Jadikan pembungkus statis.
    <main className="bg-[#031930] text-[#D1DDED] min-h-screen scroll-smooth relative overflow-hidden">
      {/* MusicPlayer tetap di sini agar logikanya selalu aktif */}
      <MusicPlayer isEnabled={musicEnabled} onEnable={handleEnableMusic} />

      {/* 3. Bungkus semua konten utama dengan AnimatePresence */}
      <AnimatePresence>
        {/* 4. Tambahkan kondisi: hanya tampilkan jika musicEnabled adalah true */}
        {musicEnabled && (
          // 5. Bungkus semua komponen dengan motion.div untuk animasi fade-in
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <MouseTrail />
            <Navbar />

            <div id="hero">
              <Hero isAnimationActive={musicEnabled} />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="tech">
              <Skill />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
