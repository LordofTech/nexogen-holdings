"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  "Access Bank",
  "Wise",
  "Stripe",
  "Supabase",
  "Vercel",
  "Smile Identity",
];

export function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="bg-black py-32 text-center">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-[10px] tracking-[0.15em] text-[#2D7DD2] uppercase">
          Infrastructure Partners
        </p>
        <h2 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
          Built on world-class rails.
        </h2>
        <p className="font-body mx-auto mt-4 max-w-xl text-[#8899AA]">
          We partner with the best infrastructure providers in the world so our products can deliver
          world-class experiences from day one.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="font-display group text-lg font-semibold text-[#4A4A4A] grayscale transition-all duration-300 hover:scale-105 hover:text-white hover:grayscale-0"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
