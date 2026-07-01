"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

const sequence = [
  "Africa",
  "has always been",
  "the future.",
  "We are building",
  "the infrastructure",
  "that proves it.",
];

const TOTAL_STEPS = sequence.length + 2;

function stepRange(index: number): [number, number] {
  const slice = 1 / TOTAL_STEPS;
  const overlap = slice * 0.2;
  return [
    Math.max(0, index * slice - overlap * 0.5),
    Math.min(1, (index + 1) * slice + overlap * 0.5),
  ];
}

function ScrollRevealLine({
  progress,
  range,
  children,
  className,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const y = useTransform(progress, range, [16, 0], { clamp: true });

  return (
    <motion.p style={{ opacity, y }} className={className}>
      {children}
    </motion.p>
  );
}

function ScrollRevealDivider({
  progress,
  range,
  className,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scaleX = useTransform(progress, range, [0, 1], { clamp: true });

  return (
    <motion.div style={{ opacity, scaleX }} className={className} />
  );
}

/** Attribution fades in quickly and holds at full opacity before scroll ends. */
function attributionRange(dividerIndex: number): [number, number] {
  const [dividerStart] = stepRange(dividerIndex);
  const fadeSpan = (1 - dividerStart) * 0.35;
  return [dividerStart, dividerStart + fadeSpan];
}

function ScrollRevealAttribution({
  progress,
  range,
  children,
  className,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
  className?: string;
}) {
  const [fadeStart, fadeEnd] = range;
  const snapPoint = fadeStart + (fadeEnd - fadeStart) * 0.4;
  const opacity = useTransform(
    progress,
    [fadeStart, snapPoint, fadeEnd],
    [0, 1, 1],
    { clamp: true },
  );
  const y = useTransform(progress, [fadeStart, snapPoint], [8, 0], {
    clamp: true,
  });

  return (
    <motion.p style={{ opacity, y }} className={className}>
      {children}
    </motion.p>
  );
}

export function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = prefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.15"],
  });

  const lineClassName =
    "font-display text-[clamp(2rem,5.5vw,3.75rem)] leading-tight font-bold text-white";

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #0a1628 0%, #000000 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono mb-8 text-[10px] tracking-[0.15em] text-[#8899AA] uppercase">
          Our vision
        </p>

        <div className="space-y-3 md:space-y-4">
          {reduced
            ? sequence.map((text) => (
                <p key={text} className={lineClassName}>
                  {text}
                </p>
              ))
            : sequence.map((text, i) => (
                <ScrollRevealLine
                  key={text}
                  progress={scrollYProgress}
                  range={stepRange(i)}
                  className={lineClassName}
                >
                  {text}
                </ScrollRevealLine>
              ))}
        </div>

        {reduced ? (
          <>
            <div className="mx-auto mt-10 h-px w-full max-w-md bg-[#2D7DD2]" />
            <p className="font-mono mt-10 text-sm text-[#8899AA]">
              — Arthur Chukwurah, Founder &amp; CEO
            </p>
          </>
        ) : (
          <>
            <ScrollRevealDivider
              progress={scrollYProgress}
              range={stepRange(sequence.length)}
              className="mx-auto mt-10 h-px w-full max-w-md origin-center bg-[#2D7DD2]"
            />
            <ScrollRevealAttribution
              progress={scrollYProgress}
              range={attributionRange(sequence.length)}
              className="font-mono mt-10 text-sm text-[#8899AA]"
            >
              — Arthur Chukwurah, Founder &amp; CEO
            </ScrollRevealAttribution>
          </>
        )}
      </div>
    </section>
  );
}
