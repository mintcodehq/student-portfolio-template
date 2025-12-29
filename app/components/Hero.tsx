"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Background"
        fill
        priority
        className="object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight"
        >
          Hi, I’m <span className="text-neutral-300">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-lg text-neutral-400"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-neutral-400"
        >
          {profile.bio}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-neutral-700 text-neutral-300 text-sm hover:bg-neutral-900 transition"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
