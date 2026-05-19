import { StickyNav } from "@/components/homepage/StickyNav";
import { HeroSection } from "@/components/homepage/HeroSection";
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
      <StickyNav />
      <HeroSection />
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
