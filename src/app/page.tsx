import PartnerCarousel from "@/components/PartnerCarousel";
import AboutSection from "@/components/AboutSection";
import { Hero } from "@/components/hero";
//import ServicesSection from "@/components/ServicesSection";
import Services from "@/components/sections/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutCompany } from "@/components/AboutCompany";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Other homepage sections like Hero, Services, etc. */}
      <Hero />

      {/* Partner Carousel */}
      <PartnerCarousel />
      <AboutCompany />

      {/* About Section (smoothly linked below via the spinning circle) */}
      <AboutSection />
      {/* <ServicesSection /> */}
      <Services />
      <WhyChooseUs />
      <Projects />
      <Contact />

      {/* Footer will naturally follow */}
    </main>
  );
}
