"use client";

import { NexogenLogo } from "./NexogenLogo";

export function Footer() {
  return (
    <footer className="border-t border-[#2C3539]/40 bg-[#101010] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:flex-row lg:px-10">
        <div className="flex items-center gap-4">
          <NexogenLogo size={40} />
          <div>
            <p className="text-sm font-semibold tracking-wider text-white uppercase">
              Nexogen Holdings Limited
            </p>
            <p className="text-xs text-[#C0C0C0]">
              Architecting the Future
            </p>
          </div>
        </div>

        <p className="text-xs text-[#C0C0C0]/60">
          &copy; {new Date().getFullYear()} Nexogen Holdings Limited. All rights reserved.
        </p>

        <div className="flex gap-6">
          {[
            { label: "TRVRSE", href: "#trvrse" },
            { label: "The Foundry", href: "#foundry" },
            { label: "Sectors", href: "#sectors" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wider text-[#C0C0C0] uppercase transition-colors hover:text-[#00FFFF]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
