"use client";

import { useState } from "react";
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
    <main className="bg-[#031930] text-[#D1DDED] min-h-screen scroll-smooth relative overflow-hidden">
      <MusicPlayer isEnabled={musicEnabled} onEnable={handleEnableMusic} />
      <AnimatePresence>
        {musicEnabled && (
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
