"use client";

import { NexogenMark } from "@/components/ui/NexogenMark";

const footerLinks = ["About", "Products", "Vision", "Pipeline", "Contact"];

export function Footer() {
  return (
    <>
      <section id="contact" className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
        <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight text-white">
          Ready to build with us?
        </h2>
        <p className="font-body mt-6 max-w-xl text-lg text-[#8899AA]">
          Whether you&apos;re an investor, a partner, a talented engineer, or just curious — we
          want to hear from you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:arthur@nexxogenn.com?subject=Enquiry%20from%20Nexogen%20Group%20website"
            className="font-body flex h-[52px] items-center rounded-full bg-[#2D7DD2] px-8 text-sm text-white"
            data-cursor-label="Contact"
          >
            Get in Touch
          </a>
          <a
            href="#products"
            className="font-body flex h-[52px] items-center rounded-full border border-[#1A1A1A] px-8 text-sm text-white"
            data-cursor-label="View"
          >
            View TRVRSE
          </a>
        </div>
        <div className="font-mono mt-16 flex flex-wrap justify-center gap-8 text-xs text-[#8899AA]">
          <a
            href="mailto:arthur@nexxogenn.com?subject=Enquiry%20from%20Nexogen%20Group%20website"
            className="hover:text-white"
          >
            arthur@nexxogenn.com
          </a>
          <span>Lagos, Nigeria</span>
        </div>
      </section>

      <footer className="border-t border-[#1A1A1A] bg-[#050505] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-10">
          <div className="flex items-center gap-2">
            <NexogenMark size={20} className="text-white" />
            <span className="font-display text-xs tracking-[0.1em] text-white">NEXOGEN</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-xs text-[#8899AA] transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="font-body text-xs text-[#4A4A4A]">
            © 2026 Nexogen Group Limited. All rights reserved.
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-6">
          {["X", "LinkedIn", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-mono text-[10px] tracking-[0.15em] text-[#8899AA] uppercase hover:text-white"
              data-cursor-label="Open"
            >
              {social}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
