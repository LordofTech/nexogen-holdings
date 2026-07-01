"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ProductData = {
  id: string;
  name: string;
  subtitle: string;
  description?: string;
  status: "live" | "coming";
  year?: string;
  bg: string;
  accent: string;
  icon: React.ReactNode;
  chips?: string[];
  link?: string;
  phone?: boolean;
};

export function ProductCard({
  product,
  isActive,
}: {
  product: ProductData;
  isActive: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  return (
    <motion.article
      ref={cardRef}
      className={cn(
        "relative flex h-[70vh] w-[80vw] max-w-5xl shrink-0 flex-col justify-between overflow-hidden rounded-[24px] p-10 transition-[opacity,transform] duration-500",
        isActive ? "scale-100 opacity-100" : "scale-[0.85] opacity-40"
      )}
      style={{
        background: product.bg,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      data-cursor-label="Open"
    >
      <div className="flex items-start justify-between">
        <div className="text-[#2D7DD2]" style={{ color: product.accent }}>
          {product.icon}
        </div>
        {product.status === "live" ? (
          <span className="font-mono flex items-center gap-2 rounded-full border border-[#06D6A0]/40 px-3 py-1 text-[10px] tracking-[0.15em] text-[#06D6A0] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#06D6A0] animate-pulse-live" />
            Live
          </span>
        ) : (
          <span className="font-mono rounded-full border border-[#1A1A1A] px-3 py-1 text-[10px] tracking-[0.15em] text-[#8899AA] uppercase">
            Coming {product.year}
          </span>
        )}
      </div>

      <div className="relative z-10 max-w-xl">
        <h3 className="font-display text-5xl font-bold text-white md:text-7xl">{product.name}</h3>
        <p className="font-body mt-3 text-base text-[#8899AA]">{product.subtitle}</p>
        {product.description && (
          <p className="font-body mt-4 max-w-md text-sm text-[#8899AA]/80">{product.description}</p>
        )}
        {product.chips && (
          <div className="mt-6 flex flex-wrap gap-2">
            {product.chips.map((chip) => (
              <span
                key={chip}
                className="font-mono rounded-full border border-[#1A1A1A] bg-black/30 px-3 py-1.5 text-[10px] tracking-[0.15em] text-[#8899AA] uppercase"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-end justify-between">
        {product.link ? (
          <a
            href={product.link}
            className="group font-body text-sm text-white"
            data-cursor-label="Explore"
          >
            Explore Product
            <span className="mt-1 block h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        ) : (
          <span />
        )}
        {product.phone && <TraversePhone />}
      </div>
    </motion.article>
  );
}

function TraversePhone() {
  return (
    <div
      className="absolute -right-4 bottom-8 hidden w-44 rotate-[15deg] md:block lg:w-52"
      style={{ transform: "rotate(15deg) translateZ(20px)" }}
    >
      <div className="rounded-[2rem] border-2 border-[#1A1A1A] bg-black p-1.5 shadow-2xl">
        <div className="rounded-[1.6rem] bg-[#0A1628] p-4">
          <p className="font-mono text-[8px] text-[#2D7DD2]">TRAVERSE</p>
          <p className="font-display mt-2 text-lg font-bold text-white">₦2.45M</p>
          <p className="font-mono text-[8px] text-[#06D6A0]">≈ $1,633 USD</p>
          <div className="mt-3 grid grid-cols-2 gap-1">
            {["Send", "Convert"].map((a) => (
              <div
                key={a}
                className="rounded-lg border border-[#1A1A1A] py-1 text-center font-mono text-[7px] text-[#8899AA]"
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
