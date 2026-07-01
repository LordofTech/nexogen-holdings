"use client";

import { motion } from "framer-motion";
import { ParticleCanvas } from "./ParticleCanvas";
import { NexogenLogo } from "./NexogenLogo";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleCanvas variant="hero" particleCount={120} />

      <div className="absolute inset-0 bg-gradient-to-b from-[#101010]/40 via-transparent to-[#101010]/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto mb-12 flex h-40 w-40 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-[#00FFFF]/20 animate-ripple" />
          <div
            className="absolute inset-4 rounded-full border border-[#00FFFF]/30 animate-ripple"
            style={{ animationDelay: "0.8s" }}
          />
          <div
            className="absolute inset-8 rounded-full border border-[#00BFFF]/20 animate-ripple"
            style={{ animationDelay: "1.6s" }}
          />

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#00FFFF]/20 to-[#00BFFF]/10 border border-[#00FFFF]/40 shadow-[0_0_60px_rgba(0,255,255,0.3)] animate-pulse-glow">
            <NexogenLogo size={56} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          NEXOGEN HOLDINGS LIMITED:
          <br />
          <span className="kinetic-gradient">ARCHITECTING THE FUTURE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg font-medium tracking-[0.3em] text-[#00FFFF] uppercase sm:text-xl glow-text-cyan"
        >
          A Multi-Sector Venture Studio
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="h-16 w-px bg-gradient-to-b from-[#00FFFF] to-transparent animate-pulse-glow" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#101010] to-transparent pointer-events-none" />
    </section>
  );
}
