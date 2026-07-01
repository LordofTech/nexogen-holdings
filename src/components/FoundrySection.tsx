"use client";

import { motion } from "framer-motion";
import { ParticleCanvas } from "./ParticleCanvas";

const hubs = [
  {
    id: 1,
    title: "Ideation & Strategy",
    description: "Wireframes pulsing with conceptual data models, refined through research and iteration.",
    icon: "ideation",
  },
  {
    id: 2,
    title: "Engineering & Automated Code Factory",
    description: "Code-symbol particle flows accelerating through automated pipelines.",
    icon: "engineering",
  },
  {
    id: 3,
    title: "Validation & QA Grid",
    description: "A glowing mesh validating conceptual code integrity at every layer.",
    icon: "validation",
  },
  {
    id: 4,
    title: "Deployment & Global Scale",
    description: "TRVRSE integrated into the global network — polished, scaled, live.",
    icon: "deployment",
  },
];

function HubIcon({ type }: { type: string }) {
  if (type === "ideation") {
    return (
      <svg viewBox="0 0 80 80" className="h-16 w-16">
        <rect x="20" y="20" width="40" height="40" fill="none" stroke="#00FFFF" strokeWidth="1" opacity="0.6" />
        <rect x="28" y="28" width="24" height="24" fill="none" stroke="#00BFFF" strokeWidth="1" opacity="0.8" />
        <circle cx="40" cy="40" r="6" fill="#00FFFF" opacity="0.8" className="animate-pulse-glow" />
        <line x1="40" y1="10" x2="40" y2="20" stroke="#00FFFF" strokeWidth="1" opacity="0.4" />
        <line x1="40" y1="60" x2="40" y2="70" stroke="#00FFFF" strokeWidth="1" opacity="0.4" />
        <line x1="10" y1="40" x2="20" y2="40" stroke="#00FFFF" strokeWidth="1" opacity="0.4" />
        <line x1="60" y1="40" x2="70" y2="40" stroke="#00FFFF" strokeWidth="1" opacity="0.4" />
      </svg>
    );
  }

  if (type === "engineering") {
    return (
      <svg viewBox="0 0 80 80" className="h-16 w-16 font-mono">
        <text x="8" y="20" fill="#00FFFF" fontSize="8" opacity="0.7">{"<div>"}</text>
        <text x="12" y="32" fill="#00BFFF" fontSize="7" opacity="0.6">{"{ }"}</text>
        <text x="8" y="44" fill="#00FFFF" fontSize="8" opacity="0.7">{"</>"}</text>
        <text x="40" y="28" fill="#00FFFF" fontSize="7" opacity="0.5">fn()</text>
        <text x="40" y="40" fill="#00BFFF" fontSize="7" opacity="0.5">=&gt;</text>
        <text x="40" y="52" fill="#00FFFF" fontSize="7" opacity="0.5">run</text>
        <rect x="55" y="15" width="20" height="50" fill="none" stroke="#2C3539" strokeWidth="1" />
        <line x1="55" y1="25" x2="75" y2="25" stroke="#00FFFF" strokeWidth="0.5" opacity="0.4" />
        <line x1="55" y1="35" x2="75" y2="35" stroke="#00BFFF" strokeWidth="0.5" opacity="0.4" />
        <line x1="55" y1="45" x2="75" y2="45" stroke="#00FFFF" strokeWidth="0.5" opacity="0.4" />
      </svg>
    );
  }

  if (type === "validation") {
    return (
      <svg viewBox="0 0 80 80" className="h-16 w-16">
        <polygon
          points="40,10 65,30 65,55 40,75 15,55 15,30"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="1"
          opacity="0.6"
        />
        <polygon
          points="40,20 55,32 55,52 40,64 25,52 25,32"
          fill="none"
          stroke="#00BFFF"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <line x1="40" y1="10" x2="40" y2="75" stroke="#00FFFF" strokeWidth="0.5" opacity="0.3" />
        <line x1="15" y1="30" x2="65" y2="55" stroke="#00FFFF" strokeWidth="0.5" opacity="0.3" />
        <line x1="65" y1="30" x2="15" y2="55" stroke="#00FFFF" strokeWidth="0.5" opacity="0.3" />
        <circle cx="40" cy="42" r="4" fill="#00FFFF" opacity="0.9" className="animate-pulse-glow" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16">
      <circle cx="40" cy="40" r="25" fill="none" stroke="#2C3539" strokeWidth="1" />
      <ellipse cx="40" cy="40" rx="25" ry="10" fill="none" stroke="#00FFFF" strokeWidth="0.5" opacity="0.5" />
      <ellipse cx="40" cy="40" rx="10" ry="25" fill="none" stroke="#00BFFF" strokeWidth="0.5" opacity="0.5" />
      <circle cx="40" cy="15" r="2" fill="#00FFFF" />
      <circle cx="65" cy="40" r="2" fill="#00BFFF" />
      <circle cx="40" cy="65" r="2" fill="#00FFFF" />
      <circle cx="15" cy="40" r="2" fill="#00BFFF" />
      <circle cx="40" cy="40" r="5" fill="#00FFFF" opacity="0.8" className="animate-pulse-glow" />
    </svg>
  );
}

export function FoundrySection() {
  return (
    <section id="foundry" className="relative section-padding overflow-hidden border-t border-[#2C3539]/40">
      <ParticleCanvas variant="cascade" particleCount={60} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#00FFFF] uppercase">
            Requirement 2
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            The Foundry
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#C0C0C0]">
            Our automated CI/CD software factory — four interlocking kinetic hubs
            that transform vision into deployed reality.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {hubs.map((hub, i) => (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                <div className="relative rounded-xl border border-[#2C3539] bg-[#101010]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#00FFFF]/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                  <div className="absolute -top-3 left-6 flex h-6 w-6 items-center justify-center rounded-full border border-[#00FFFF]/60 bg-[#101010] text-xs font-bold text-[#00FFFF]">
                    {hub.id}
                  </div>

                  <div className="mb-5 flex justify-center pt-2 transition-transform duration-500 group-hover:scale-110">
                    <HubIcon type={hub.icon} />
                  </div>

                  <h3 className="mb-3 text-center text-lg font-semibold text-white sm:text-xl">
                    {hub.title}
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-[#C0C0C0]">
                    {hub.description}
                  </p>
                </div>

                {i < hubs.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center lg:flex">
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                      <path d="M0 6H20M20 6L15 1M20 6L15 11" stroke="#00FFFF" strokeWidth="1" opacity="0.5" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
