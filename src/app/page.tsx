import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TrvrseSection } from "@/components/TrvrseSection";
import { FoundrySection } from "@/components/FoundrySection";
import { SectorGridSection } from "@/components/SectorGridSection";
import { Footer } from "@/components/Footer";
import { ParticleCanvas } from "@/components/ParticleCanvas";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <ParticleCanvas variant="ambient" particleCount={40} />
        </div>

        <div className="relative z-[1]">
          <HeroSection />
          <TrvrseSection />
          <FoundrySection />
          <SectorGridSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
