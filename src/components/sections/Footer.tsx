"use client";

import { NexogenMark } from "@/components/ui/NexogenMark";
import { CONTACT_EMAIL, contactMailto } from "@/lib/site";

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
            href={contactMailto()}
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
          <a href={contactMailto()} className="hover:text-white">
            {CONTACT_EMAIL}
          </a>
          <span>Lagos, Nigeria</span>
        </div>
      </section>

      <footer className="border-t border-[#1A1A1A] bg-[#050505] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-10">
          <NexogenMark height={36} />

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
            © 2026 Nexogen Limited. All rights reserved.
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
