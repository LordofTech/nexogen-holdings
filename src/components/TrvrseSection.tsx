"use client";

import { motion } from "framer-motion";
import { ParticleCanvas } from "./ParticleCanvas";

const features = [
  "AI-Optimized Transactions",
  "Secured Infrastructure",
  "Global Payment Transactions",
  "Real-Time Data Visualization",
  "Payment Authority",
  "Secured Incubations",
];

function DataVizPanel() {
  const points = [30, 45, 35, 60, 50, 75, 65, 90, 80, 70];
  const pathD = points
    .map((y, i) => `${i === 0 ? "M" : "L"} ${i * 28 + 10} ${100 - y}`)
    .join(" ");

  return (
    <div className="rounded-lg border border-[#2C3539] bg-[#101010]/90 p-4 backdrop-blur-sm">
      <p className="mb-2 text-[10px] font-semibold tracking-widest text-[#00FFFF] uppercase">
        Real-Time Data Visualization
      </p>
      <svg viewBox="0 0 300 100" className="w-full h-20">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${pathD} L 290 100 L 10 100 Z`} fill="url(#chartGrad)" />
        <path d={pathD} fill="none" stroke="#00FFFF" strokeWidth="1.5" />
        {points.map((y, i) => (
          <circle key={i} cx={i * 28 + 10} cy={100 - y} r="2" fill="#00FFFF" />
        ))}
      </svg>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-b from-[#00FFFF]/10 to-transparent blur-2xl" />
      <div className="relative rounded-[2.5rem] border-2 border-[#2C3539] bg-[#0a0a0a] p-2 shadow-[0_0_40px_rgba(0,255,255,0.15)]">
        <div className="rounded-[2rem] border border-[#2C3539] bg-gradient-to-b from-[#181818] to-[#101010] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#2C3539]">
            <span className="text-xs font-bold tracking-widest text-[#00FFFF]">TRVRSE</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#00FFFF]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#00BFFF]/50" />
            </div>
          </div>
          <div className="p-5 space-y-4">
            <div className="rounded-xl border border-[#2C3539] bg-[#101010] p-4">
              <p className="text-[10px] text-[#C0C0C0] uppercase tracking-wider">Balance</p>
              <p className="text-2xl font-bold text-white">$24,891.50</p>
              <p className="text-xs text-[#00FFFF] mt-1">+12.4% this month</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Send", "Receive", "Exchange", "Analytics"].map((action) => (
                <button
                  key={action}
                  className="rounded-lg border border-[#2C3539] py-2 text-[10px] font-medium text-[#C0C0C0] uppercase tracking-wider hover:border-[#00FFFF]/40 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { label: "Global Transfer", amount: "-$1,240.00", status: "Completed" },
                { label: "AI Optimization", amount: "+$340.20", status: "Active" },
              ].map((tx) => (
                <div
                  key={tx.label}
                  className="flex items-center justify-between rounded-lg border border-[#2C3539]/60 px-3 py-2"
                >
                  <div>
                    <p className="text-[10px] text-white">{tx.label}</p>
                    <p className="text-[9px] text-[#00FFFF]">{tx.status}</p>
                  </div>
                  <p className="text-[10px] font-mono text-[#C0C0C0]">{tx.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrvrseSection() {
  return (
    <section id="trvrse" className="relative section-padding overflow-hidden">
      <ParticleCanvas variant="vortex" particleCount={100} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#00FFFF] uppercase">
            Requirement 1 &amp; 3
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            TRVRSE Primacy
          </h2>
          <p className="mt-4 text-xl text-[#C0C0C0]">
            Flagship Innovation: <span className="text-[#00FFFF]">TRVRSE</span>
          </p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-10">
          <motion.ul
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex items-center gap-4"
              >
                <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]" />
                <span className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <PhoneMockup />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-4 top-8 w-48 sm:-right-8 sm:w-56 lg:-right-16"
            >
              <DataVizPanel />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
