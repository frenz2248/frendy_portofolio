"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "tech", "contact"];
      let current = "hero";
      let minDistance = Infinity;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            current = id;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Dashboard" },
    { id: "projects", label: "Projects" },
    { id: "tech", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-[#031930cc] backdrop-blur-md z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dan Nama */}
        <div className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="text-[#3684DB] font-bold text-lg">Frendy</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[#758BA5] text-sm">
          {menuItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${
                  active === id
                    ? "text-[#3684DB] font-semibold"
                    : "hover:text-[#D1DDED] transition"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#031930] px-6 pb-4 space-y-2 text-[#D1DDED]">
          {menuItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block ${
                active === id ? "text-[#3684DB] font-semibold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
