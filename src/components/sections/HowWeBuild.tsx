"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Africa First, World Ready",
    body: "We build for the African user first, but architect for global scale from day one.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#2D7DD2" strokeWidth="1.5">
        <circle cx="20" cy="20" r="14" />
        <path d="M8 20 H32 M20 8 C26 14 26 26 20 32 C14 26 14 14 20 8" />
      </svg>
    ),
  },
  {
    title: "Ship, then Scale",
    body: "We launch lean, validate fast, and scale hard. No waiting for perfect.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#2D7DD2" strokeWidth="1.5">
        <path d="M8 28 L20 8 L32 28 Z" />
        <line x1="20" y1="18" x2="20" y2="24" />
      </svg>
    ),
  },
  {
    title: "Technology with Purpose",
    body: "Every product solves a real problem for a real person. We do not build technology for technology's sake.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#2D7DD2" strokeWidth="1.5">
        <rect x="10" y="10" width="20" height="20" rx="2" />
        <path d="M16 20 L18 22 L24 16" />
      </svg>
    ),
  },
];

export function HowWeBuild() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-[10px] tracking-[0.15em] text-[#2D7DD2] uppercase">
          The Nexogen Way
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 22 }}
          className="font-display mt-4 text-5xl font-bold text-white"
        >
          We build differently.
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 100, damping: 22 }}
              className="group rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-8 transition-all duration-400 hover:-translate-y-1 hover:border-[#2D7DD2] hover:shadow-[0_20px_60px_rgba(45,125,210,0.15)]"
              data-cursor-label="View"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{card.title}</h3>
              <p className="font-body mt-3 text-sm leading-relaxed text-[#8899AA]">{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
