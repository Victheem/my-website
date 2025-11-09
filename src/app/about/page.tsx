"use client";

import AboutHero from "@/components/sections/AboutHero";
import CompanyOverview from "@/components/sections/CompanyOverview";
// Later sections:
import PartnersCarousel from "@/components/sections/PartnersCarousel";
import HistoryTimeline from "@/components/sections/HistoryTimeline";
import ServicesCards from "@/components/sections/ServicesCards";
import CoreValues from "@/components/sections/CoreValues";
import TeamSection from "@/components/sections/TeamSection";
import ProjectsAchievements from "@/components/sections/ProjectsAchievements";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <AboutHero />

      {/* Company Overview */}
      <CompanyOverview />

      {/* Partner Carousel */}
      <PartnersCarousel />
      {/* <PartnersCarousel /> */}

      {/* Our History */}
      <HistoryTimeline />

      {/* Services Cards */}
      <ServicesCards />

      {/* Core Values */}
      <CoreValues />

      {/* Our Team */}
      <TeamSection />

      {/* Projects / Achievements */}
      <ProjectsAchievements />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
