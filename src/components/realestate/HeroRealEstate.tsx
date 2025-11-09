"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaCity, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroRealEstate = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background image */}
      <Image
        src="/workers5.jpg"
        alt="Modern Real Estate"
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* Maroon glass overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-maroon-950/60 via-maroon-800/50 to-maroon-900/60 backdrop-blur-[3px]"
      />

      {/* Floating skyline glow effect */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-maroon-600/50 to-transparent blur-2xl"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-3 mb-4"
        >
          <FaBuilding className="text-4xl text-maroon-300" />
          <FaCity className="text-4xl text-maroon-400" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Redefining{" "}
          <span className="text-maroon-400">Real Estate Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
        >
          At <strong>Jawosh Tech Properties Ltd</strong>, we design, build, and
          manage properties that inspire innovation, comfort, and long-term
          value — creating modern spaces for a new Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Button className="bg-maroon-600 hover:bg-maroon-700 shadow-lg hover:shadow-[0_0_20px_#800000] transition-all duration-300 flex items-center gap-2 text-lg px-8 py-6 rounded-full">
            Explore Our Estates <FaArrowRight />
          </Button>
        </motion.div>
      </div>

      {/* Floating outline circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute w-[160px] h-[160px] border border-maroon-400/40 rounded-full bottom-20 left-20"
      />
    </section>
  );
};

export default HeroRealEstate;
