import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/assets/trvrse-logo.png";

export function TrvrseLogo({
  className = "",
  size = 48,
  variant = "mark",
  blend = false,
}: {
  className?: string;
  size?: number;
  variant?: "mark" | "lockup" | "png";
  blend?: boolean;
}) {
  // Stacked lockup PNG (icon + wordmark) — square aspect for all variants
  const width = variant === "lockup" ? Math.round(size * 1.05) : size;
  const height = size;

  return (
    <Image
      src={LOGO_SRC}
      alt="Trvrse"
      width={width}
      height={height}
      className={cn("object-contain", blend && "mix-blend-lighten", className)}
      priority={false}
    />
  );
}
