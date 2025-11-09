"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip"; // shadcn tooltip
import { Info } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/jawosh-building.jpg" // replace with your private image
        alt="About Hero"
        fill
        className="object-cover"
      />

      {/* Animated Maroon Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 0.6, 0.5],
          background: [
            "linear-gradient(120deg, #800000cc, #b22222cc)",
            "linear-gradient(240deg, #800000cc, #a40000cc)",
            "linear-gradient(120deg, #800000cc, #b22222cc)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      />

      {/* Diagonal Glow Beam */}
      <motion.div
        initial={{ x: "-100%", y: "-100%" }}
        animate={{ x: "100%", y: "100%" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-[#ffcccc33] to-transparent"
        style={{ mixBlendMode: "soft-light" }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-6xl text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          About{" "}
          <span className="text-[#800000]">Jawosh Tech Properties Ltd</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Innovating across industries: pharmaceutical equipment manufacturing,
          real estate development, and property management.
        </p>

        {/* Tooltips Example */}
        <div className="flex justify-center gap-4">
          <Tooltip content="Expert Pharma Equipment Manufacturing">
            <button className="bg-[#800000] hover:shadow-[0_0_20px_#800000] text-white px-6 py-3 rounded-full transition-all duration-300">
              Pharma Industry
              <Info className="inline ml-2 w-4 h-4" />
            </button>
          </Tooltip>
          <Tooltip content="Innovative Real Estate Solutions">
            <button className="bg-[#800000] hover:shadow-[0_0_20px_#800000] text-white px-6 py-3 rounded-full transition-all duration-300">
              Real Estate
              <Info className="inline ml-2 w-4 h-4" />
            </button>
          </Tooltip>
          <Tooltip content="Professional Property Management">
            <button className="bg-[#800000] hover:shadow-[0_0_20px_#800000] text-white px-6 py-3 rounded-full transition-all duration-300">
              Property Mgmt
              <Info className="inline ml-2 w-4 h-4" />
            </button>
          </Tooltip>
        </div>
      </motion.div>

      {/* Animated scroll down arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <span className="animate-bounce text-3xl">↓</span>
      </motion.div>
    </section>
  );
}
