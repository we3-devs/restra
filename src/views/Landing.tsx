import Navbar, { MobileTabBar } from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ConnectedSystem from "@/components/landing/ConnectedSystem";
import ProductWorkflow from "@/components/landing/ProductWorkflow";
import FeatureBento from "@/components/landing/FeatureBento";
import ModuleShowcase from "@/components/landing/ModuleShowcase";
import RestaurantShowcase from "@/components/landing/RestaurantShowcase";
import WhyRestra from "@/components/landing/WhyRestra";
import HomeFaq from "@/components/landing/HomeFaq";
import Team from "@/components/landing/Team";
import Pricing from "@/components/landing/Pricing";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ChatWidget from "@/components/landing/ChatWidget";
import ScrollProgress from "@/components/landing/ScrollProgress";
import ClickBurst from "@/components/landing/ClickBurst";
import LoadingScreen from "@/components/landing/LoadingScreen";

/**
 * RESTRA home page — premium B2B SaaS composition:
 * navbar → hero → dashboard → metrics → problems → connected system →
 * workflow → modules bento → module showcases → why → team → pricing →
 * FAQ → CTA → footer.
 */
export default function Landing() {
  return (
    <div className="min-h-screen bg-restra-bg text-restra-text font-body pb-16 md:pb-0">
      <LoadingScreen />
      <ScrollProgress />
      <ClickBurst />
      <Navbar />
      <MobileTabBar />
      <main>
        <Hero />
        <ConnectedSystem />
        <ProductWorkflow />
        <FeatureBento />
        <ModuleShowcase />
        <RestaurantShowcase />
        <WhyRestra />
        <Team />
        <Pricing />
        <HomeFaq />
        <CTASection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
