import Navbar, { MobileTabBar } from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import ProductWorkflow from "@/components/landing/ProductWorkflow";
import Pricing from "@/components/landing/Pricing";
import WhyRestra from "@/components/landing/WhyRestra";
import Team from "@/components/landing/Team";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import ChatWidget from "@/components/landing/ChatWidget";
import ScrollProgress from "@/components/landing/ScrollProgress";
import ClickBurst from "@/components/landing/ClickBurst";
import LoadingScreen from "@/components/landing/LoadingScreen";

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
        <ProblemSection />
        <ProductWorkflow />
        <WhyRestra />
        <Team />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
