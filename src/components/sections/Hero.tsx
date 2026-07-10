"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField").then((m) => m.ParticleField),
  { ssr: false }
);

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);

const lines = ["We Don't", "Build Apps.", "We Build", "Futures."];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <ParticleField />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-32 lg:grid-cols-2 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:pl-4"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono inline-block rounded-full border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-1.5 text-[10px] tracking-[0.15em] text-[#8899AA] uppercase"
          >
            Est. Lagos, Nigeria 2026
          </motion.span>

          <div className="mt-5">
            {lines.map((line, i) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 24,
                  delay: 0.15 + i * 0.08,
                }}
                className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.88] font-bold text-white"
              >
                {line === "Futures." ? <span className="gradient-text">{line}</span> : line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="font-body mt-8 max-w-[480px] text-lg text-[#8899AA]"
          >
            Nexogen Limited is a technology company born in Lagos, building world-class software
            that moves people, money, and knowledge without borders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 120, damping: 22 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="font-body flex h-[52px] items-center rounded-full bg-[#2D7DD2] px-8 text-sm text-white transition-shadow hover:shadow-[0_0_30px_rgba(45,125,210,0.35)]"
              data-cursor-label="Explore"
            >
              Explore Our Products
            </a>
            <a
              href="#about"
              className="font-body flex h-[52px] items-center rounded-full border border-[#1A1A1A] px-8 text-sm text-white transition-colors hover:border-[#2D7DD2]"
              data-cursor-label="View"
            >
              Our Story
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-[50vh] lg:h-[80vh]"
        >
          <HeroScene />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#8899AA] uppercase">
          Scroll to explore
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="animate-bounce-chevron text-[#8899AA]"
        >
          <path d="M4 6 L8 10 L12 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </motion.div>
    </section>
  );
}
