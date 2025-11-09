import HeroRealEstate from "@/components/realestate/HeroRealEstate";
import AboutRealEstate from "@/components/realestate/AboutRealEstate";
import ProjectsShowcase from "@/components/realestate/ProjectsShowcase";
import OurTeam from "@/components/realestate/OurTeam";
import ProjectsAchievements from "@/components/realestate/ProjectsAchievements";
import CtaSection from "@/components/realestate/CtaSection";

export default function RealEstatePage() {
  return (
    <main>
      <HeroRealEstate />
      <AboutRealEstate />
      <ProjectsShowcase />
      <OurTeam />
      <ProjectsAchievements />
      <CtaSection />
      {/* Next: MissionVisionRealEstate, EstatesShowcase, CoreValues, OurTeam, CTA */}
    </main>
  );
}
