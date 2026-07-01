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
  variant?: "mark" | "lockup";
  blend?: boolean;
}) {
  const src =
    variant === "lockup"
      ? "/branding/trvrse-horizontal-lockup.svg"
      : "/branding/trvrse-logomark.svg";

  const width = variant === "lockup" ? size * 3.2 : size;
  const height = size;

  return (
    <Image
      src={src}
      alt="Trvrse"
      width={width}
      height={height}
      className={cn(
        "object-contain",
        blend && "opacity-95 mix-blend-screen saturate-150",
        className
      )}
      priority={false}
    />
  );
}
