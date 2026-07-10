"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { COMPANY_NAME } from "@/lib/site";

const logoClass = "w-auto object-contain mix-blend-lighten";

export function NexogenMark({
  className = "",
  height,
  size,
}: {
  className?: string;
  height?: number;
  size?: number;
}) {
  const h = height ?? size ?? 36;

  return (
    <Image
      src="/assets/nexogen-logo.png"
      alt={COMPANY_NAME}
      width={Math.round(h * 1.15)}
      height={h}
      className={cn(logoClass, className)}
      style={{ height: h, width: "auto" }}
      priority
    />
  );
}

export function NexogenMarkAnimated({
  className = "",
  height,
  size,
  animate = true,
}: {
  className?: string;
  height?: number;
  size?: number;
  animate?: boolean;
}) {
  const h = height ?? size ?? 120;

  if (!animate) {
    return <NexogenMark height={h} className={className} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src="/assets/nexogen-logo.png"
        alt={COMPANY_NAME}
        width={Math.round(h * 1.15)}
        height={h}
        className={cn(logoClass, className)}
        style={{ height: h, width: "auto" }}
        priority
      />
    </motion.div>
  );
}
