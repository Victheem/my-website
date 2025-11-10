"use client";

import HeroBanner from "@/components/pharma/HeroBanner";
import AboutPharma from "@/components/pharma/AboutPharma";
import MissionVision from "@/components/pharma/MissionVision";
import FactoryLayout from "@/components/pharma/FactoryLayout";
import EquipmentShowcase from "@/components/pharma/EquipmentShowcase";
import FactoryStats from "@/components/pharma/FactoryStats";
import WestAfricaMap from "@/components/pharma/WestAfricaMap";
import RawMaterialsFlow from "@/components/pharma/RawMaterialsFlow";
import ComplianceSection from "@/components/pharma/ComplianceSection";
import PartnershipCTA from "@/components/pharma/PartnershipCTA";

export default function PharmaPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <HeroBanner />

      {/* About Pharma */}
      <AboutPharma />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Factory Layout */}
      <FactoryLayout />

      {/* Equipment Showcase */}
      <EquipmentShowcase />

      {/* Factory Stats */}
      <FactoryStats />

      {/* West Africa Map */}
      <WestAfricaMap />

      {/* Raw Materials Flow */}
      <RawMaterialsFlow />

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Partnership Call-to-Action */}
      <PartnershipCTA />
    </main>
  );
}
