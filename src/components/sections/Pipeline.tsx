"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrvrseLogo } from "@/components/ui/TrvrseLogo";

const pipeline = [
  {
    status: "Live",
    name: "Trvrse",
    detail: "Cross-border fintech wallet — our flagship in market.",
    accent: "#2D7DD2",
  },
  {
    status: "2026",
    name: "Edunova",
    detail: "Education technology for the next generation of African students.",
    accent: "#06D6A0",
  },
  {
    status: "2026",
    name: "Civitas",
    detail: "Government technology that makes public services instant and transparent.",
    accent: "#8899AA",
  },
  {
    status: "2027+",
    name: "Nexlink & Nexhardware",
    detail: "Enterprise connectivity and physical tech — when software alone isn't enough.",
    accent: "#FFD700",
  },
];

export function Pipeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="pipeline" ref={ref} className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-[#2D7DD2] uppercase">
              What&apos;s Next
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 22 }}
              className="font-display mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none text-white"
            >
              The pipeline never stops.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-body mt-6 max-w-md text-base leading-relaxed text-[#8899AA]"
            >
              Nexogen is a holding company built to launch, scale, and compound products
              across Africa and the world. Trvrse is live. The rest of the stack is loading.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <TrvrseLogo size={40} />
              <p className="font-mono text-[10px] tracking-[0.15em] text-[#8899AA] uppercase">
                Flagship · Trvrse
              </p>
            </motion.div>
          </div>

          <div className="space-y-3">
            {pipeline.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 100, damping: 22 }}
                className="group rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] p-6 transition-all hover:border-[#2D7DD2]/40 hover:shadow-[0_16px_48px_rgba(45,125,210,0.1)]"
                data-cursor-label="View"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="font-mono text-[10px] tracking-[0.15em] uppercase"
                      style={{ color: item.accent }}
                    >
                      {item.status}
                    </span>
                    <h3 className="font-display mt-2 text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="font-body mt-2 text-sm text-[#8899AA]">{item.detail}</p>
                  </div>
                  {item.name === "Trvrse" && <TrvrseLogo size={36} className="shrink-0" />}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[32px] border border-[#1A1A1A] bg-[#0A0A0A] p-10 text-center md:flex-row md:text-left"
        >
          <div>
            <p className="font-display text-2xl font-bold text-white">
              Partner with Nexogen
            </p>
            <p className="font-body mt-2 max-w-lg text-sm text-[#8899AA]">
              Investors, banks, and strategic partners — let&apos;s build infrastructure for
              the next generation together.
            </p>
          </div>
          <a
            href="mailto:invest@nexogenholdings.com"
            className="font-body shrink-0 rounded-full bg-[#2D7DD2] px-8 py-3.5 text-sm text-white transition-shadow hover:shadow-[0_0_30px_rgba(45,125,210,0.35)]"
            data-cursor-label="Contact"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
