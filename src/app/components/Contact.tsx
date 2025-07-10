"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

// Animasi item
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export function Contact() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ftg7p1u",
        "template_f0rg0lt",
        {
          from_name: nama,
          reply_to: email,
          message: pesan,
        },
        "2AxSkQp0Ic_ZlqI1p"
      )
      .then(() => {
        alert("Pesan berhasil dikirim!");
        setNama("");
        setEmail("");
        setPesan("");
      })
      .catch(() => {
        alert("Gagal mengirim pesan.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 max-w-2xl mx-auto text-center"
    >
      <motion.h2
        className="text-3xl font-bold text-[#3684DB] mb-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-[#D1DDED] mb-6 text-lg"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Contact me through the following social media:
      </motion.p>

      <div className="flex flex-col items-start gap-4 text-left mb-10">
        {[
          {
            href: "mailto:frendyardiansyah70@gmail.com",
            icon: <FaEnvelope className="text-xl" />,
            text: "Email: frendyardiansyah70@gmail.com",
          },
          {
            href: "https://wa.me/6281332774737",
            icon: <FaWhatsapp className="text-xl" />,
            text: "WhatsApp: +62 813-3277-4737",
          },
          {
            href: "https://www.linkedin.com/in/frendy-ardiansyah-338b422b4",
            icon: <FaLinkedin className="text-xl" />,
            text: "LinkedIn: frendy ardiansyah",
          },
          {
            href: "https://www.instagram.com/frndyy.ard/",
            icon: <FaInstagram className="text-xl" />,
            text: "Instagram: @frndyy.ard",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#D1DDED] hover:text-[#3684DB]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            {item.icon} <span>{item.text}</span>
          </motion.a>
        ))}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-10 space-y-4 text-left"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h3
          className="text-xl font-semibold text-[#3684DB] mb-2"
          variants={fadeInUp}
        >
          Or send a direct message:
        </motion.h3>

        <motion.input
          type="text"
          placeholder="Your Name"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full p-3 rounded bg-[#0e2a4d] text-white border border-[#3684DB]"
          required
          variants={fadeInUp}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-[#0e2a4d] text-white border border-[#3684DB]"
          required
          variants={fadeInUp}
        />
        <motion.textarea
          placeholder="Your Message"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          className="w-full p-3 rounded bg-[#0e2a4d] text-white border border-[#3684DB] h-32"
          required
          variants={fadeInUp}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="bg-[#3684DB] hover:bg-blue-600 text-white py-2 px-6 rounded shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
        >
          Send message
        </motion.button>
      </motion.form>
    </section>
  );
}
