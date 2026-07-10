"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="bg-black py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 22 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <Image
            src="/assets/Me As CEO.jpeg"
            alt="Arthur Chukwurah, Founder and CEO of Nexogen Limited"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <p className="font-display absolute bottom-8 left-8 text-4xl font-bold text-white">
            Arthur Chukwurah
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 22, delay: 0.1 }}
        >
          <p className="font-mono text-[10px] tracking-[0.15em] text-[#D4AF37] uppercase">
            The Founder
          </p>
          <h2 className="font-display mt-4 text-5xl font-bold text-white">Built by a builder.</h2>
          <p className="font-body mt-6 text-base leading-relaxed text-[#B8A882]">
            Arthur Chukwurah is a full-stack software engineer, product designer, and technology
            entrepreneur from Nigeria. He founded Nexogen Limited with one belief — that the best
            African technology products have not been built yet. He is building them.
          </p>

          <blockquote className="mt-10 border-l-2 border-[#D4AF37] pl-6">
            <span className="font-display text-4xl text-[#D4AF37]">&ldquo;</span>
            <p className="font-display -mt-4 text-2xl leading-snug text-white">
              I&apos;m not building apps. I&apos;m building infrastructure for the next generation
              of Africans.
            </p>
            <span className="font-display mt-2 block text-4xl text-[#D4AF37]">&rdquo;</span>
            <p className="font-display mt-4 text-lg italic text-[#B8A882]">Arthur Chukwurah</p>
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Software Engineer", "Fintech Founder"].map((tag) => (
              <span
                key={tag}
                className="font-mono rounded-full border border-[#1A1A1A] px-4 py-2 text-[10px] tracking-[0.15em] text-[#B8A882] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
