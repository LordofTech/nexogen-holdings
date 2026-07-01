import Image from "next/image";
import { cn } from "@/lib/utils";

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
  const usePng = variant === "png" || variant === "mark";

  if (usePng) {
    return (
      <Image
        src="/assets/trvrse-logomark.png"
        alt="Trvrse"
        width={size}
        height={size}
        className={cn(
          "object-contain",
          blend && "mix-blend-lighten",
          className
        )}
        priority={false}
      />
    );
  }

  const src = "/branding/trvrse-horizontal-lockup.svg";
  const width = size * 3.2;
  const height = size;

  return (
    <Image
      src={src}
      alt="Trvrse"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority={false}
    />
  );
}
