import HeroRealEstate from "@/components/realestate/HeroRealEstate";
import AboutRealEstate from "@/components/realestate/AboutRealEstate";
import ProjectsShowcase from "@/components/realestate/ProjectsShowcase";
import OurTeam from "@/components/realestate/OurTeam";
import ProjectsAchievements from "@/components/realestate/ProjectsAchievements";
import CtaSection from "@/components/realestate/CtaSection";

export default function RealEstatePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroRealEstate />

      {/* About Real Estate */}
      <AboutRealEstate />

      {/* Projects Showcase */}
      <ProjectsShowcase />

      {/* Our Team */}
      <OurTeam />

      {/* Projects / Achievements */}
      <ProjectsAchievements />

      {/* Call to Action */}
      <CtaSection />

      {/* Next sections planned: MissionVisionRealEstate, EstatesShowcase, CoreValues, OurTeam, CTA */}
    </main>
  );
}
