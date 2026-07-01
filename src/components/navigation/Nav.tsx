"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NexogenMark } from "@/components/ui/NexogenMark";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#vision", label: "Vision" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-black/90 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-2.5" data-cursor-label="Home">
            <NexogenMark size={24} className="text-white" />
            <span className="font-display text-sm font-medium tracking-[0.1em] text-white">
              NEXOGEN
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group font-body relative text-[13px] text-[#8899AA] transition-colors hover:text-white"
                  data-cursor-label="View"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#2D7DD2] transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:arthur@nexxogenn.com?subject=Enquiry%20from%20Nexogen%20Holdings%20website"
            className="font-body hidden rounded-full border border-[#2D7DD2] px-5 py-2.5 text-[13px] text-[#2D7DD2] transition-all hover:bg-[#2D7DD2] hover:text-white hover:shadow-[0_0_20px_rgba(45,125,210,0.4)] md:inline-block"
            data-cursor-label="Contact"
          >
            Get in Touch
          </a>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-white transition-all",
                menuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span className={cn("h-0.5 w-6 bg-white transition-all", menuOpen && "opacity-0")} />
            <span
              className={cn(
                "h-0.5 w-6 bg-white transition-all",
                menuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 24 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
