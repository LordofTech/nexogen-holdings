"use client";

import { motion } from "framer-motion";
import { NexogenLogo } from "./NexogenLogo";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#trvrse", label: "TRVRSE" },
  { href: "#foundry", label: "The Foundry" },
  { href: "#sectors", label: "Sectors" },
];

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#2C3539]/60 bg-[#101010]/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#hero" className="flex items-center gap-3 group">
          <NexogenLogo size={36} className="transition-transform group-hover:scale-110" />
          <span className="hidden sm:block text-sm font-semibold tracking-[0.2em] text-white uppercase">
            Nexogen
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wider text-[#C0C0C0] uppercase transition-colors hover:text-[#00FFFF]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#trvrse"
          className="rounded border border-[#00FFFF]/40 px-4 py-2 text-xs font-semibold tracking-widest text-[#00FFFF] uppercase transition-all hover:bg-[#00FFFF]/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
        >
          Learn More
        </a>
      </nav>
    </motion.header>
  );
}
