import { ScrollScene } from "@/components/animation/ScrollScene";
import { StickyNav } from "@/components/homepage/StickyNav";
import { TrustStrip } from "@/components/homepage/TrustStrip";
import { ProductSection } from "@/components/homepage/ProductSection";
import { BeforeAfter } from "@/components/homepage/BeforeAfter";
import { FeaturesGrid } from "@/components/homepage/FeaturesGrid";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { Outcomes } from "@/components/homepage/Outcomes";
import { FAQ } from "@/components/homepage/FAQ";
import { CTA } from "@/components/homepage/CTA";
import { Footer } from "@/components/homepage/Footer";

export default function HomePage() {
  return (
    <>
      {/* Scroll-pinned 22s animation — acts as the hero. */}
      <ScrollScene />

      {/* Static homepage continues below */}
      <StickyNav />
      <TrustStrip />
      <ProductSection />
      <BeforeAfter />
      <FeaturesGrid />
      <HowItWorks />
      <Outcomes />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
