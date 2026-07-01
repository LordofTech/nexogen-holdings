"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

const sequence = [
  "Africa",
  "has always been",
  "the future.",
  "We are building",
  "the infrastructure",
  "that proves it.",
];

export function Vision() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });
  const reduced = prefersReducedMotion();

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #0a1628 0%, #000000 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono mb-8 text-[10px] tracking-[0.15em] text-[#8899AA] uppercase">
          Our vision
        </p>

        <div className="space-y-3 md:space-y-4">
          {sequence.map((text, i) => (
            <motion.p
              key={text}
              initial={reduced ? false : { opacity: 0, y: 16, scale: 1.04 }}
              animate={
                reduced || inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 16, scale: 1.04 }
              }
              transition={{
                duration: 0.35,
                delay: reduced ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(2rem,5.5vw,3.75rem)] leading-tight font-bold text-white"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={reduced ? false : { scaleX: 0 }}
          animate={reduced || inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4, delay: reduced ? 0 : 0.45 }}
          className="mx-auto mt-10 h-px w-full max-w-md origin-center bg-[#2D7DD2]"
        />

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced || inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.35, delay: reduced ? 0 : 0.55 }}
          className="font-mono mt-10 text-sm text-[#8899AA]"
        >
          — Arthur Chukwurah, Founder &amp; CEO
        </motion.p>
      </div>
    </section>
  );
}
