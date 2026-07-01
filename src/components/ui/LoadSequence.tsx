"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!showLoader) return;

    const typeStart = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTyped(word.slice(0, i));
        if (i >= word.length) clearInterval(interval);
      }, 60);
    }, 900);

    const done = setTimeout(() => {
      setShowLoader(false);
      onComplete?.();
    }, 2200);

    return () => {
      clearTimeout(typeStart);
      clearTimeout(done);
    };
  }, [showLoader, onComplete]);

  const skip = () => {
    setShowLoader(false);
    onComplete?.();
  };

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <NexogenMarkAnimated size={80} />
            <motion.p
              className="font-display mt-8 text-2xl font-bold tracking-[0.1em] text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {typed}
            </motion.p>
            <motion.p
              className="font-mono mt-2 text-[11px] tracking-[0.25em] text-[#8899AA] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Holdings Limited
            </motion.p>
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-px bg-[#2D7DD2]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
            <button
              type="button"
              onClick={skip}
              className="font-mono absolute bottom-8 right-8 text-[10px] tracking-[0.2em] text-[#8899AA] uppercase hover:text-white"
            >
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={showLoader ? { opacity: 0, scale: 0.96 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 22, delay: showLoader ? 0 : 0 }}
      >
        {!showLoader && children}
      </motion.div>
    </>
  );
}
