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

  const dismiss = useCallback(() => {
    setShowLoader(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (!showLoader) return;

    const done = setTimeout(dismiss, 1100);

    const onScroll = () => dismiss();
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchstart", onScroll, { passive: true });
    window.addEventListener("keydown", onScroll);

    return () => {
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
            <NexogenMarkAnimated height={140} />
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
