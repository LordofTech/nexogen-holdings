"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const sequence = [
  { text: "Africa", pause: true },
  { text: "has always been", pause: false },
  { text: "the future.", pause: true, hold: true },
  { text: "We are building", pause: false },
  { text: "the infrastructure", pause: false },
  { text: "that proves it.", pause: true },
];

export function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const sigRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current || !wordsRef.current) return;

    const words = wordsRef.current.querySelectorAll("[data-word]");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
      },
    });

    words.forEach((word, i) => {
      tl.fromTo(
        word,
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
        i * 0.5
      );
      if (sequence[i]?.hold) {
        tl.to({}, { duration: 0.5 });
        if (lineRef.current) {
          tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.4 }, "<");
        }
      }
    });

    if (sigRef.current) {
      tl.fromTo(sigRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, ">-0.2");
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #0a1628 0%, #000000 60%, #000000 100%)",
          animation: prefersReducedMotion() ? "none" : "oceanShift 12s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes oceanShift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(15deg); }
        }
      `}</style>

      <div className="relative z-10 px-6 text-center">
        <div ref={wordsRef} className="space-y-4">
          {sequence.map((item, i) => (
            <p
              key={i}
              data-word
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight font-bold text-white"
              style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
            >
              {item.text}
            </p>
          ))}
        </div>

        <div
          ref={lineRef}
          className="mx-auto mt-8 h-px w-full max-w-md bg-[#2D7DD2]"
          style={{ transform: "scaleX(0)", transformOrigin: "center" }}
        />

        <p
          ref={sigRef}
          className="font-mono mt-12 text-sm text-[#8899AA]"
          style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
        >
          — Arthur Chukwurah, Founder &amp; CEO
        </p>
      </div>
    </section>
  );
}
