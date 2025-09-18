"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const phrases = [
    "Computer Engineering Student",
    "Web Developer",
    "FullStack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const current = phrases[currentPhrase];
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, currentPhrase]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 bg-gradient-to-br from-[#031930] via-[#062a50] to-[#0e2a4d] flex items-center px-4 md:px-10 lg:px-32 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#3684DB]/30 rounded-full blur-3xl z-0"
        style={{
          transform: `translate(${mousePos.x * 0.01}px, ${
            mousePos.y * 0.01
          }px)`,
        }}
      />

      <motion.div
        className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#D1DDED]/10 rounded-full blur-2xl z-0"
        style={{
          transform: `translate(${-mousePos.x * 0.01}px, ${
            -mousePos.y * 0.01
          }px)`,
        }}
      />

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-left text-[#D1DDED] max-w-2xl"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hello, I'm
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Frendy Ardiansyah
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#9DB5CB] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I am a passionate and dedicated computer engineering student at
            Islamic University of Kadiri with a strong foundation in software
            development and hardware systems. I am eager to apply my skills to
            solve real-world problems and contribute to innovative projects.
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-block bg-[#3684DB] hover:bg-blue-600 text-white py-3 px-6 rounded shadow transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] rounded-full shadow-2xl border-[6px] border-[#3684DB] overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#3684DB]/30 animate-spin-slow"
          />
          <Image
            src="/images/profile.png"
            alt="Foto Profil Frendy"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
