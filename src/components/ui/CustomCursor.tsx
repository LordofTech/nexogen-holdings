"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isTouchDevice, prefersReducedMotion } from "@/lib/utils";
import { lerp } from "@/lib/utils";

type CursorState = {
  x: number;
  y: number;
  label: string;
  hovering: boolean;
  clicking: boolean;
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<CursorState>({
    x: 0,
    y: 0,
    label: "",
    hovering: false,
    clicking: false,
  });
  const targetRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const sizeRef = useRef(20);
  const rafRef = useRef(0);

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => {
      cursorRef.current.clicking = true;
    };
    const onUp = () => {
      cursorRef.current.clicking = false;
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("[data-cursor-label]");
      if (el) {
        cursorRef.current.hovering = true;
        cursorRef.current.label = el.getAttribute("data-cursor-label") ?? "View";
      } else if (!(e.target as HTMLElement).closest("[data-cursor-ring]")) {
        cursorRef.current.hovering = false;
        cursorRef.current.label = "";
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);

    const loop = () => {
      const c = cursorRef.current;
      const t = targetRef.current;
      c.x = lerp(c.x, t.x, 0.18);
      c.y = lerp(c.y, t.y, 0.18);

      const targetSize = c.clicking ? 8 : c.hovering ? 60 : 20;
      sizeRef.current = lerp(sizeRef.current, targetSize, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${c.x}px, ${c.y}px) translate(-50%, -50%)`;
        ringRef.current.style.width = `${sizeRef.current}px`;
        ringRef.current.style.height = `${sizeRef.current}px`;
        ringRef.current.style.background = c.hovering
          ? "rgba(212,175,55,0.12)"
          : "rgba(212,175,55,0)";
      }
      if (glowRef.current) {
        const gx = lerp(parseFloat(glowRef.current.dataset.x ?? "0") || c.x, t.x, 0.08);
        const gy = lerp(parseFloat(glowRef.current.dataset.y ?? "0") || c.y, t.y, 0.08);
        glowRef.current.dataset.x = String(gx);
        glowRef.current.dataset.y = String(gy);
        glowRef.current.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.textContent = c.hovering ? c.label : "";
        labelRef.current.style.opacity = c.hovering ? "1" : "0";
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[200px] w-[200px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        ref={ringRef}
        data-cursor-ring
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full border-[1.5px] border-[#D4AF37]/60 transition-[background] duration-300"
        style={{
          width: 20,
          height: 20,
          background: "rgba(255,255,255,0)",
        }}
      >
        <span
          ref={labelRef}
          className="font-mono text-[9px] uppercase tracking-[0.15em] text-white opacity-0 transition-opacity"
        />
      </div>
    </>
  );
}
