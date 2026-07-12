"use client";

import { useRef, useState } from "react";
import { cn, isTouchDevice } from "@/lib/utils";
import { TrvrseLogo } from "@/components/ui/TrvrseLogo";

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
  linkLabel?: string;
  phone?: boolean;
};

export function ProductCard({
  product,
  isActive,
  className,
}: {
  product: ProductData;
  isActive: boolean;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const canTilt = !isTouchDevice();

  const handleMove = (e: React.MouseEvent) => {
    if (!canTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 6 });
  };

  return (
    <article
      ref={cardRef}
      className={cn(
        "relative flex h-[min(70vh,640px)] w-[85vw] max-w-5xl shrink-0 flex-col justify-between overflow-hidden rounded-[24px] p-8 transition-[opacity,transform] duration-300 md:p-10",
        isActive ? "opacity-100" : "opacity-70",
        className
      )}
      style={{
        background: product.bg,
        transform: canTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
        contentVisibility: "auto",
        containIntrinsicSize: "640px",
      }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      data-cursor-label="Open"
    >
      <div className="flex items-start justify-between">
        <div style={{ color: product.accent }}>{product.icon}</div>
        {product.status === "live" ? (
          <span className="font-mono flex items-center gap-2 rounded-full border border-[#D4AF37]/40 px-3 py-1 text-[10px] tracking-[0.15em] text-[#D4AF37] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse-live" />
            Live
          </span>
        ) : (
          <span className="font-mono rounded-full border border-[#1A1A1A] px-3 py-1 text-[10px] tracking-[0.15em] text-[#B8A882] uppercase">
            Coming {product.year}
          </span>
        )}
      </div>

      <div className="relative z-10 max-w-xl">
        <h3 className="font-display text-4xl font-bold text-white md:text-6xl">{product.name}</h3>
        <p className="font-body mt-3 text-base text-[#B8A882]">{product.subtitle}</p>
        {product.description && (
          <p className="font-body mt-4 max-w-md text-sm text-[#B8A882]/80">{product.description}</p>
        )}
        {product.chips && (
          <div className="mt-6 flex flex-wrap gap-2">
            {product.chips.map((chip) => (
              <span
                key={chip}
                className="font-mono rounded-full border border-[#1A1A1A] bg-black/30 px-3 py-1.5 text-[10px] tracking-[0.15em] text-[#B8A882] uppercase"
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
            {product.linkLabel ?? "Explore Product"}
            <span className="mt-1 block h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        ) : (
          <span />
        )}
        {product.phone && <TrvrsePhone />}
      </div>
    </article>
  );
}

function TrvrsePhone() {
  return (
    <div
      className="absolute -right-2 bottom-6 hidden w-40 md:block lg:-right-4 lg:w-48"
      style={{ transform: "rotate(12deg)" }}
    >
      <div className="rounded-[2rem] border-2 border-[#1A1A1A]/80 bg-black/60 p-1.5 shadow-2xl backdrop-blur-sm">
        <div className="rounded-[1.6rem] bg-black/95 p-4">
          <TrvrseLogo size={36} />
          <p className="font-display mt-3 text-lg font-bold text-white">₦2.45M</p>
          <p className="font-mono text-[8px] text-[#D4AF37]">≈ $1,633 USD</p>
          <div className="mt-3 rounded-lg border border-[#D4AF37]/30 bg-gradient-to-br from-[#1a1508] to-[#0A0A0A] p-2">
            <p className="font-mono text-[7px] tracking-wider text-[#B8A882] uppercase">Virtual Card</p>
            <p className="font-mono mt-1 text-[9px] text-white">•••• 4829</p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1">
            {["Send", "Convert"].map((a) => (
              <div
                key={a}
                className="rounded-lg border border-[#1A1A1A] py-1 text-center font-mono text-[7px] text-[#B8A882]"
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
