"use client";

import { motion } from "framer-motion";

const sectors = [
  {
    id: "fintech",
    title: "Fintech",
    status: "Active",
    statusColor: "#00FFFF",
    description: "Full global TRVRSE visualization — AI-optimized transactions at planetary scale.",
    visual: "fintech",
  },
  {
    id: "govtech",
    title: "GovTech",
    status: "Incubating",
    statusColor: "#00BFFF",
    description: "Secure civic infrastructure built from impenetrable data-line shields.",
    visual: "govtech",
  },
  {
    id: "edtech",
    title: "EdTech",
    status: "Incubating",
    statusColor: "#00BFFF",
    description: "Knowledge systems powered by linked data nodes — atom meets open digital book.",
    visual: "edtech",
  },
  {
    id: "healthtech",
    title: "HealthTech",
    status: "Incubating",
    statusColor: "#00BFFF",
    description: "Geometric DNA helix of interconnected data streams for precision health.",
    visual: "healthtech",
  },
];

function SectorVisual({ type }: { type: string }) {
  if (type === "fintech") {
    return (
      <svg viewBox="0 0 200 140" className="h-full w-full">
        <defs>
          <radialGradient id="globeGlow">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="70" rx="60" ry="40" fill="url(#globeGlow)" />
        <ellipse cx="100" cy="70" rx="55" ry="35" fill="none" stroke="#2C3539" strokeWidth="1" />
        <ellipse cx="100" cy="70" rx="55" ry="15" fill="none" stroke="#00FFFF" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="100" cy="70" rx="15" ry="35" fill="none" stroke="#00BFFF" strokeWidth="0.5" opacity="0.5" />
        {[
          [70, 50], [130, 55], [85, 85], [120, 80], [100, 45], [60, 70], [140, 70],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#00FFFF" opacity="0.8" />
            {i > 0 && (
              <line
                x1={([70, 130, 85, 120, 100, 60, 140] as number[])[i - 1 < 0 ? 0 : i - 1] ?? 70}
                y1={([50, 55, 85, 80, 45, 70, 70] as number[])[i - 1 < 0 ? 0 : i - 1] ?? 50}
                x2={x}
                y2={y}
                stroke="#00FFFF"
                strokeWidth="0.5"
                opacity="0.3"
              />
            )}
          </g>
        ))}
        <line x1="70" y1="50" x2="130" y2="55" stroke="#00FFFF" strokeWidth="0.5" opacity="0.3" />
        <line x1="85" y1="85" x2="120" y2="80" stroke="#00BFFF" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="45" x2="85" y2="85" stroke="#00FFFF" strokeWidth="0.5" opacity="0.3" />
        <line x1="60" y1="70" x2="140" y2="70" stroke="#00BFFF" strokeWidth="0.5" opacity="0.3" />
      </svg>
    );
  }

  if (type === "govtech") {
    return (
      <svg viewBox="0 0 200 140" className="h-full w-full">
        <path
          d="M100 20 L160 45 L160 95 L100 120 L40 95 L40 45 Z"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <path
          d="M100 35 L145 55 L145 90 L100 105 L55 90 L55 55 Z"
          fill="none"
          stroke="#00BFFF"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={55 + i * 12}
            y1="55"
            x2={55 + i * 12}
            y2="90"
            stroke="#00FFFF"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
        <path
          d="M85 70 L95 82 L118 58"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "edtech") {
    return (
      <svg viewBox="0 0 200 140" className="h-full w-full">
        <ellipse cx="100" cy="40" rx="30" ry="12" fill="none" stroke="#00FFFF" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="100" cy="40" rx="12" ry="30" fill="none" stroke="#00BFFF" strokeWidth="0.5" opacity="0.5" />
        <circle cx="100" cy="40" r="5" fill="#00FFFF" opacity="0.8" />
        <circle cx="130" cy="40" r="3" fill="#00BFFF" opacity="0.6" />
        <circle cx="70" cy="40" r="3" fill="#00BFFF" opacity="0.6" />
        <circle cx="100" cy="10" r="3" fill="#00FFFF" opacity="0.6" />
        <circle cx="100" cy="70" r="3" fill="#00FFFF" opacity="0.6" />
        <path
          d="M60 90 L60 115 Q60 125 100 125 Q140 125 140 115 L140 90"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="1"
          opacity="0.6"
        />
        <line x1="60" y1="90" x2="140" y2="90" stroke="#00FFFF" strokeWidth="1" opacity="0.6" />
        <line x1="75" y1="95" x2="75" y2="115" stroke="#00BFFF" strokeWidth="0.5" opacity="0.4" />
        <line x1="100" y1="95" x2="100" y2="115" stroke="#00BFFF" strokeWidth="0.5" opacity="0.4" />
        <line x1="125" y1="95" x2="125" y2="115" stroke="#00BFFF" strokeWidth="0.5" opacity="0.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      <path
        d="M100 15 Q130 35 125 60 Q120 85 100 100 Q80 85 75 60 Q70 35 100 15"
        fill="none"
        stroke="#00FFFF"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M100 25 Q115 40 112 60 Q109 80 100 90 Q91 80 88 60 Q85 40 100 25"
        fill="none"
        stroke="#00BFFF"
        strokeWidth="0.5"
        opacity="0.4"
      />
      {Array.from({ length: 12 }).map((_, i) => {
        const t = i / 11;
        const x1 = 100 + Math.sin(t * Math.PI * 2) * 25;
        const y1 = 15 + t * 85;
        const x2 = 100 - Math.sin(t * Math.PI * 2) * 25;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y1}
            stroke="#00FFFF"
            strokeWidth="0.5"
            opacity="0.3"
          />
        );
      })}
      <circle cx="100" cy="40" r="3" fill="#00FFFF" opacity="0.8" />
      <circle cx="115" cy="60" r="2" fill="#00BFFF" opacity="0.6" />
      <circle cx="85" cy="60" r="2" fill="#00BFFF" opacity="0.6" />
      <circle cx="100" cy="80" r="3" fill="#00FFFF" opacity="0.8" />
    </svg>
  );
}

export function SectorGridSection() {
  return (
    <section id="sectors" className="relative section-padding overflow-hidden border-t border-[#2C3539]/40">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#00FFFF] uppercase">
            Requirement 3
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Multi-Sector Scalability
          </h2>
          <p className="mt-4 text-lg text-[#C0C0C0]">
            The Directory — proving diverse scalability across industries.
          </p>
        </motion.div>

        <div className="grid gap-0 sm:grid-cols-2" style={{ gap: "40px" }}>
          {sectors.map((sector, i) => (
            <motion.article
              key={sector.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-[#2C3539] bg-[#101010]/60 transition-all duration-500 hover:border-[#00FFFF]/30 hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]"
            >
              <div className="flex h-48 items-center justify-center p-6 sm:h-56">
                <SectorVisual type={sector.visual} />
              </div>

              <div className="border-t border-[#2C3539] p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {sector.title}
                  </h3>
                  <span
                    className="rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase"
                    style={{
                      borderColor: `${sector.statusColor}40`,
                      color: sector.statusColor,
                    }}
                  >
                    {sector.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#C0C0C0]">
                  {sector.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
