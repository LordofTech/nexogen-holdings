"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

export function TextReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = prefersReducedMotion();

  if (reduced) {
    return (
      <p ref={ref} className={className}>
        {children}
      </p>
    );
  }

  const lines = children.split("\n").filter(Boolean);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.p
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.p>
        </div>
      ))}
    </div>
  );
}

export function LineReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : { y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 22 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
