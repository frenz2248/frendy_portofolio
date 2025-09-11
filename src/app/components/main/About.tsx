"use client";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaMapMarkerAlt,
  FaUser,
  FaBirthdayCake,
  FaGraduationCap,
  FaBook,
} from "react-icons/fa";

export function About() {
  const infoItems = [
    {
      icon: <FaUser className="text-[#3684DB]" />,
      label: "Name",
      value: "Frendy Ardiansyah",
    },
    // {
    //   icon: <FaBirthdayCake className="text-[#3684DB]" />,
    //   label: "Place and date of birth",
    //   value: "Nganjuk, 16 February 2005",g
    // },
    {
      icon: <FaGraduationCap className="text-[#3684DB]" />,
      label: "University",
      value: "Islamic University of Kadiri Since 2023",
    },
    {
      icon: <FaBook className="text-[#3684DB]" />,
      label: "study program",
      value: "Computer Engineering",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#3684DB]" />,
      label: "Addres",
      value: "Sawahan District, Nganjuk Regency, East Java, Indonesia",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
    >

      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-[#3684DB] mb-4">About Me</h2>
        <p className="text-[#D1DDED] text-lg leading-relaxed">
          In a digital orchestra, I'm the conductor. Every function and
          algorithm is an instrument, and my job is to lead them to create
          harmony, creating a flawlessly functioning application. With the right
          music, I'm ready to transform a discordant bug into a beautiful
          symphony of functionality.
        </p>
      </motion.div>

      <motion.div
        className="flex-1 w-full max-w-md bg-[#0e2a4d] border border-[#3684DB]/30 rounded-xl p-6 space-y-4 shadow-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-[#D1DDED] mb-2 text-center">
          Personal Data
        </h3>
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3 text-[#D1DDED]">
            <div className="text-xl mt-1">{item.icon}</div>
            <div>
              <p className="text-sm text-[#9DB5CB]">{item.label}</p>
              <p className="text-base font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
