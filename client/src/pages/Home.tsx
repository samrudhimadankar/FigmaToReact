import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import StatisticsSection from "@/components/StatisticsSection";
import KeepsUsGoingSection from "@/components/KeepsUsGoingSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatisticsSection />
        <MissionSection />
        <KeepsUsGoingSection />
        <TechnologiesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}