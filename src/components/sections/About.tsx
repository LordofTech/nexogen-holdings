"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { ViewportMount } from "@/components/ui/ViewportMount";

const AboutOrb = dynamic(
  () => import("@/components/three/AboutOrb").then((m) => m.AboutOrb),
  { ssr: false }
);

const stats = [
  { num: "01", label: "Flagship Product Launched" },
  { num: "05", label: "Verticals We Build In" },
  { num: "∞", label: "Products We Plan to Build" },
];

function CountUp({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState(value === "∞" ? "∞" : "0");

  useEffect(() => {
    if (!inView || value === "∞") {
      setDisplay(value);
      return;
    }
    const target = parseInt(value, 10);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setDisplay(String(current).padStart(2, "0"));
      if (current >= target) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [inView, value]);

  return <>{display}</>;
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={ref} className="relative min-h-screen bg-black py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[55%_45%] lg:px-10">
        <div>
          <p className="font-mono text-[10px] tracking-[0.15em] text-[#2D7DD2] uppercase">
            About Nexogen
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
            className="font-display mt-6 max-w-[520px] text-[clamp(2.5rem,5vw,3.5rem)] leading-none font-bold text-white"
          >
            One company. Infinite products.
          </motion.h2>

          <TextReveal
            className="font-body mt-6 space-y-4 text-base leading-relaxed text-[#8899AA]"
            delay={0.2}
          >
            {`Nexogen Group Limited is a technology group born in Lagos, Nigeria. We exist to build the software that Africa's next generation deserves — and the world doesn't yet know it needs.
We operate across five verticals: Financial Technology, Education Technology, Government Technology, Consumer Apps, and Hardware. Each product we build is independently powerful, but connected by one philosophy — technology should remove barriers, not create them.
We are builders. We ship. We scale. We repeat.`}
          </TextReveal>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <p className="font-display text-4xl font-bold text-white md:text-5xl">
                  <CountUp value={stat.num} inView={inView} />
                </p>
                <p className="font-body mt-2 text-xs text-[#8899AA]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          ref={panelRef}
          className="relative"
          onMouseMove={(e) => {
            if (!panelRef.current) return;
            const rect = panelRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            panelRef.current.style.transform = `translate(${x}px, ${y}px)`;
          }}
          onMouseLeave={() => {
            if (panelRef.current) panelRef.current.style.transform = "translate(0, 0)";
          }}
        >
          <ViewportMount minHeight={400} fallback={<div className="min-h-[400px]" />}>
            <AboutOrb />
          </ViewportMount>
        </div>
      </div>
    </section>
  );
}
