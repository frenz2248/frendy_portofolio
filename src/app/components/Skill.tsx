"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostman,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

export function Skill() {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML",
      desc: "Markup Language",
      color: "text-orange-500",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      desc: "Styling",
      color: "text-blue-500",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
      desc: "CSS Framework",
      color: "text-cyan-400",
    },
    {
      icon: <FaReact />,
      name: "React",
      desc: "Frontend Library",
      color: "text-sky-400",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      desc: "React Framework",
      color: "text-white",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      desc: "Backend Runtime",
      color: "text-green-600",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
      desc: "PHP Framework",
      color: "text-red-500",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      desc: "Database",
      color: "text-yellow-500",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
      desc: "Backend Language",
      color: "text-indigo-400",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      desc: "Code Hosting",
      color: "text-white",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      desc: "Version Control",
      color: "text-orange-600",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      desc: "Programming Language",
      color: "text-yellow-400",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
      desc: "API Testing",
      color: "text-orange-400",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      desc: "Web Framework",
      color: "text-gray-300",
    },
    {
      icon: <VscVscodeInsiders />,
      name: "VsCode",
      desc: "Code Editor",
      color: "text-blue-500",
    },
  ];

  return (
    <section
      id="tech"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center"
    >
      <motion.h2
        className="text-3xl font-bold text-[#3684DB] mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Tech Stack & Tools
      </motion.h2>
      <motion.p
        className="text-[#D1DDED] mb-10 max-w-3xl mx-auto leading-relaxed text-lg md:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My computer engineering background provides a unique perspective,
        focusing on creating applications that are not only functional, but also
        stable and performant.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              type: "spring",
              stiffness: 120,
            }}
          >
            <div className={`text-6xl md:text-7xl ${skill.color}`}>
              {skill.icon}
            </div>
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
              {skill.name}: {skill.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
