import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

export function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function isIOSSafari() {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) && !(window as Window & { MSStream?: unknown }).MSStream;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const SPRING = {
  soft: { type: "spring" as const, stiffness: 80, damping: 20 },
  snappy: { type: "spring" as const, stiffness: 300, damping: 30 },
  cinematic: { type: "spring" as const, stiffness: 120, damping: 24 },
};

export const DURATION = {
  min: 0.4,
  max: 1.2,
};
