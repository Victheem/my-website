import HeroBanner from "@/components/pharma/HeroBanner";
import MissionVision from "@/components/pharma/MissionVision";
import FactoryLayout from "@/components/pharma/FactoryLayout";
import FactoryStats from "@/components/pharma/FactoryStats";
import WestAfricaMap from "@/components/pharma/WestAfricaMap";
import RawMaterialsFlow from "@/components/pharma/RawMaterialsFlow";
import ComplianceSection from "@/components/pharma/ComplianceSection";
import PartnershipCTA from "@/components/pharma/PartnershipCTA";
import EquipmentShowcase from "@/components/pharma/EquipmentShowcase";


export default function PharmaPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroBanner />
      <MissionVision />
      <FactoryLayout />
      <EquipmentShowcase />
      <FactoryStats />
      <WestAfricaMap />
      <RawMaterialsFlow />
      <ComplianceSection />
      <PartnershipCTA />
    </main>
  );
}
