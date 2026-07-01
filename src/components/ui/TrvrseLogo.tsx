import Image from "next/image";
import { cn } from "@/lib/utils";

export function TrvrseLogo({
  className = "",
  size = 48,
  variant = "mark",
}: {
  className?: string;
  size?: number;
  variant?: "mark" | "lockup";
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
      className={cn("object-contain", className)}
      priority={false}
    />
  );
}
