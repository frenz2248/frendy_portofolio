"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "futsal field rental",
    description:
      "A full-featured Point of Sale web app built using Laravel 12, tailored for small businesses. It streamlines the booking process, manages field availability, and helps in the efficient operation of futsal rental businesses.",
    image: "/images/project1.png",
  },
  {
    title: "POS Cashier App",
    description:
      "A comprehensive Point of Sale (POS) web application built with Laravel 12 and Tailwind CSS. Features include robust transaction processing, inventory management (products, categories, suppliers), role-based user management, and basic sales reporting.",
    image: "/images/project2.png",
  },
  {
    title: "village letter system",
    description:
      "A full-stack digital administration system for a village office, built with Next.js, Node.js/Express, and MySQL. This application allows residents to submit official letter requests online, which are then managed by staff through a dedicated admin dashboard with PDF generation capabilities.",
    image: "/images/project3.png",
  },
  {
    title: "Frendy Portfolio",
    description:
      "A modern, responsive personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. It features animated sections, smooth scrolling navigation, skill/tool highlights with tooltips, project showcases with image previews, and a contact form integrated with EmailJS.",
    image: "/images/project4.png",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="h-screen px-6 py-12 max-w-7xl mx-auto text-center flex flex-col justify-center"
    >
      <motion.h2
        className="text-3xl font-bold text-[#3684DB] mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Project Showcase
      </motion.h2>
      <motion.p
        className="text-[#D1DDED] mb-8 text-lg max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Below are some of the web applications I've built, showcasing my
        full-stack development skills and attention to detail in both UI and
        functionality.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0e2a4d] rounded-xl shadow-lg overflow-hidden border border-[#3684DB]/30 hover:shadow-2xl transition h-[360px] flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full h-40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4 text-left flex-1 flex flex-col">
              <h3 className="text-base font-semibold text-[#D1DDED] mb-0">
                {project.title}
              </h3>
              <p className="text-[#9DB5CB] text-sm mt-1 leading-tight line-clamp-8">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
