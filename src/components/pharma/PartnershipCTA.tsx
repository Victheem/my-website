"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaHandshake,
  FaArrowRight,
  FaEnvelopeOpenText,
  FaBuilding,
} from "react-icons/fa";

const PartnershipCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-maroon-950 to-maroon-900 text-white py-28 px-6">
      {/* Floating glow background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -top-40 right-0 w-[500px] h-[500px] bg-maroon-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Let’s <span className="text-maroon-400">Build the Future</span>{" "}
          Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-300 mb-10"
        >
          Investors, government agencies, and global health innovators
          join hands with
          <strong> Jawosh Tech Properties Ltd </strong> in revolutionizing
          Africa’s pharmaceutical and manufacturing industries.
        </motion.p>

        {/* Partnership Highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-white/10 hover:bg-maroon-600/30 backdrop-blur-sm border border-maroon-700 rounded-2xl px-8 py-6 cursor-pointer transition-all hover:shadow-[0_0_25px_rgba(128,0,0,0.5)]">
                  <FaBuilding className="text-4xl mx-auto text-maroon-400 mb-3" />
                  <p className="font-semibold">Corporate Partners</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Collaborate on large-scale manufacturing and export projects.
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-white/10 hover:bg-maroon-600/30 backdrop-blur-sm border border-maroon-700 rounded-2xl px-8 py-6 cursor-pointer transition-all hover:shadow-[0_0_25px_rgba(128,0,0,0.5)]">
                  <FaHandshake className="text-4xl mx-auto text-maroon-400 mb-3" />
                  <p className="font-semibold">Distributors</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Join our network to distribute top-grade pharmaceutical
                equipment.
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-white/10 hover:bg-maroon-600/30 backdrop-blur-sm border border-maroon-700 rounded-2xl px-8 py-6 cursor-pointer transition-all hover:shadow-[0_0_25px_rgba(128,0,0,0.5)]">
                  <FaEnvelopeOpenText className="text-4xl mx-auto text-maroon-400 mb-3" />
                  <p className="font-semibold">Investors</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Partner with us to expand into West and Central Africa.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              boxShadow: "0px 0px 20px rgba(128,0,0,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-maroon-600 hover:bg-maroon-700 transition-all px-8 py-4 rounded-full text-lg font-semibold mx-auto"
          >
            Become a Partner <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Floating maroon border animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute left-1/2 -translate-x-1/2 top-16 w-[120px] h-[120px] border-2 border-maroon-400 rounded-full opacity-30"
        />
      </div>
    </section>
  );
};

export default PartnershipCTA;
