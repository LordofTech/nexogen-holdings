"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const roles = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Lagos / Remote" },
  { title: "Backend Engineer — Payments", dept: "Engineering", location: "Lagos / Remote" },
  { title: "Product Designer", dept: "Design", location: "Lagos / Remote" },
];

export function Careers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="careers" ref={ref} className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 rounded-[32px] border border-[#1A1A1A] bg-[#0A0A0A] p-10 lg:grid-cols-2 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
          >
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white">
              Join us.
            </h2>
            <p className="font-body mt-6 text-lg text-[#8899AA]">
              We are always looking for exceptional builders who want to work on products that
              matter.
            </p>
          </motion.div>

          <div className="space-y-4">
            {roles.map((role, i) => (
              <motion.article
                key={role.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="group flex items-center justify-between rounded-2xl border border-[#1A1A1A] bg-black/50 p-6 transition-all hover:-translate-y-1 hover:border-[#2D7DD2]/40"
                data-cursor-label="Apply"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{role.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-[#2D7DD2] uppercase">
                      {role.dept}
                    </span>
                    <span className="font-mono text-[10px] text-[#8899AA]">· {role.location}</span>
                  </div>
                </div>
                <span className="font-body text-sm text-[#8899AA] transition-all group-hover:translate-x-1 group-hover:text-white">
                  Apply →
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
