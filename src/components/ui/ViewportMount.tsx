"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function ViewportMount({
  children,
  className,
  rootMargin = "250px",
  minHeight,
  fallback = null,
}: {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  minHeight?: string | number;
  fallback?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={cn(className)} style={minHeight ? { minHeight } : undefined}>
      {visible ? children : fallback}
    </div>
  );
}
