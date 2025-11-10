import PartnerCarousel from "@/components/PartnerCarousel";
import AboutSection from "@/components/AboutSection";
import { Hero } from "@/components/hero";
// import ServicesSection from "@/components/ServicesSection";
import Services from "@/components/sections/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutCompany } from "@/components/AboutCompany";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Partner Carousel */}
      <PartnerCarousel />

      {/* About Company */}
      <AboutCompany />

      {/* About Section */}
      <AboutSection />

      {/* Services */}
      <Services />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer will naturally follow */}
    </main>
  );
}
