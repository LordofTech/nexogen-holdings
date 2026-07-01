"use client";

import dynamic from "next/dynamic";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LoadSequence } from "@/components/ui/LoadSequence";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Nav } from "@/components/navigation/Nav";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { About } from "@/components/sections/About";
import { HowWeBuild } from "@/components/sections/HowWeBuild";
import { Founder } from "@/components/sections/Founder";
import { Partners } from "@/components/sections/Partners";
import { Careers } from "@/components/sections/Careers";
import { Footer } from "@/components/sections/Footer";

const Products = dynamic(
  () => import("@/components/sections/Products").then((m) => m.Products),
  { ssr: false }
);

const Vision = dynamic(
  () => import("@/components/sections/Vision").then((m) => m.Vision),
  { ssr: false }
);

export function HomePage() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <LoadSequence>
        <Nav />
        <main>
          <Hero />
          <Ticker />
          <About />
          <Products />
          <Vision />
          <HowWeBuild />
          <Founder />
          <Partners />
          <Careers />
        </main>
        <Footer />
      </LoadSequence>
    </SmoothScrollProvider>
  );
}
