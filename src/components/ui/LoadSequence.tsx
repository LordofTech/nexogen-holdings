"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NexogenMarkAnimated } from "./NexogenMark";
import { prefersReducedMotion } from "@/lib/utils";

export function LoadSequence({
  children,
  onComplete,
}: {
  children: React.ReactNode;
  onComplete?: () => void;
}) {
  const [showLoader, setShowLoader] = useState(!prefersReducedMotion());
  const [typed, setTyped] = useState("");
  const word = "NEXOGEN";

  const dismiss = useCallback(() => {
    setShowLoader(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (!showLoader) return;

    const typeStart = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTyped(word.slice(0, i));
        if (i >= word.length) clearInterval(interval);
      }, 45);
    }, 400);

    const done = setTimeout(dismiss, 1100);

    const onScroll = () => dismiss();
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchstart", onScroll, { passive: true });
    window.addEventListener("keydown", onScroll);

    return () => {
      clearTimeout(typeStart);
      clearTimeout(done);
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchstart", onScroll);
      window.removeEventListener("keydown", onScroll);
    };
  }, [showLoader, dismiss]);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            className="pointer-events-none fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <NexogenMarkAnimated size={64} />
            <motion.p
              className="font-display mt-6 text-xl font-bold tracking-[0.1em] text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {typed}
            </motion.p>
            <motion.p
              className="font-mono mt-2 text-[10px] tracking-[0.25em] text-[#8899AA] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              Holdings Limited
            </motion.p>
            <button
              type="button"
              onClick={dismiss}
              className="font-mono pointer-events-auto absolute bottom-8 right-8 text-[10px] tracking-[0.2em] text-[#8899AA] uppercase hover:text-white"
            >
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
