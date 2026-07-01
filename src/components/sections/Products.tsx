"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductCard, type ProductData } from "@/components/ui/ProductCard";
import { TrvrseLogo } from "@/components/ui/TrvrseLogo";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const products: ProductData[] = [
  {
    id: "trvrse",
    name: "Trvrse",
    subtitle: "Cross-Border Fintech Wallet",
    status: "live",
    bg: "linear-gradient(135deg, #0A1628 0%, #0d1f3c 50%, #0A1628 100%)",
    accent: "#2D7DD2",
    chips: ["80+ Countries", "Live FX Rates", "Virtual Cards"],
    link: "#contact",
    phone: true,
    icon: <TrvrseLogo size={48} />,
  },
  {
    id: "edunova",
    name: "EDUNOVA",
    subtitle: "Education Technology Platform",
    description: "Democratising world-class education for every African student.",
    status: "coming",
    year: "2026",
    bg: "linear-gradient(135deg, #061A10 0%, #0a2818 100%)",
    accent: "#06D6A0",
    icon: <GraduationIcon />,
  },
  {
    id: "civitas",
    name: "CIVITAS",
    subtitle: "Government Technology Suite",
    description: "Making government services accessible, transparent, and instant for citizens.",
    status: "coming",
    year: "2026",
    bg: "linear-gradient(135deg, #0D0D1A 0%, #12122a 100%)",
    accent: "#8899AA",
    icon: <ShieldIcon />,
  },
  {
    id: "nexlink",
    name: "NEXLINK",
    subtitle: "Enterprise Connectivity Platform",
    description: "Connecting African businesses to global markets, partners, and infrastructure.",
    status: "coming",
    year: "2027",
    bg: "linear-gradient(135deg, #1A0F00 0%, #2a1800 100%)",
    accent: "#FFD700",
    icon: <ChainIcon />,
  },
  {
    id: "nexhardware",
    name: "NEXHARDWARE",
    subtitle: "Physical Tech Division",
    description: "When software alone is not enough — we build the hardware too.",
    status: "coming",
    year: "2028",
    bg: "linear-gradient(135deg, #000000 0%, #111111 100%)",
    accent: "#FFFFFF",
    icon: <ChipIcon />,
  },
];

function GraduationIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#06D6A0" strokeWidth="1.5">
      <path d="M5 15 L20 8 L35 15 L20 22 Z" />
      <path d="M10 17 V28 C10 28 15 32 20 32 C25 32 30 28 30 28 V17" />
      <line x1="35" y1="15" x2="35" y2="26" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#8899AA" strokeWidth="1.5">
      <path d="M20 5 L32 10 V20 C32 28 20 35 20 35 C20 35 8 28 8 20 V10 Z" />
      <path d="M15 20 L18 23 L25 16" />
    </svg>
  );
}

function ChainIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FFD700" strokeWidth="1.5">
      <path d="M14 20 C14 14 18 10 24 10 C30 10 34 14 34 20 C34 26 30 30 24 30" />
      <path d="M26 20 C26 26 22 30 16 30 C10 30 6 26 6 20 C6 14 10 10 16 10" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.5">
      <rect x="12" y="12" width="16" height="16" rx="2" />
      <line x1="16" y1="8" x2="16" y2="12" />
      <line x1="20" y1="8" x2="20" y2="12" />
      <line x1="24" y1="8" x2="24" y2="12" />
      <line x1="16" y1="28" x2="16" y2="32" />
      <line x1="20" y1="28" x2="20" y2="32" />
      <line x1="24" y1="28" x2="24" y2="32" />
    </svg>
  );
}

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current || !trackRef.current) return;

    const totalScroll = trackRef.current.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (products.length - 1));
            setActiveIndex(idx);
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative bg-black">
      <div className="flex h-screen items-center overflow-hidden">
        <div ref={trackRef} className="flex gap-8 px-[10vw]">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} isActive={i === activeIndex} />
          ))}
        </div>
      </div>
      <p className="font-display pb-24 text-center text-2xl italic text-[#4A4A4A] transition-colors hover:text-white">
        More products in development. Nexogen never stops building.
      </p>
    </section>
  );
}
