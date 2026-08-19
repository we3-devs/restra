import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import Features from "@/components/landing/Features";
import ProductWorkflow from "@/components/landing/ProductWorkflow";
import RoleBasedAccess from "@/components/landing/RoleBasedAccess";
import QROrdering from "@/components/landing/QROrdering";
import InventoryPreview from "@/components/landing/InventoryPreview";
import Pricing from "@/components/landing/Pricing";
import WhyRestra from "@/components/landing/WhyRestra";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-restra-bg text-restra-text font-body">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <ProductWorkflow />
        <RoleBasedAccess />
        <QROrdering />
        <InventoryPreview />
        <WhyRestra />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
