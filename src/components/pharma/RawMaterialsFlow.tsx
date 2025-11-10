"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaLeaf,
  FaFlask,
  FaWater,
  FaTractor,
  FaShippingFast,
} from "react-icons/fa";

const sources = [
  {
    icon: <FaLeaf className="text-maroon-700 text-4xl" />,
    title: "Organic Extracts",
    location: "Kwara, Nigeria",
    desc: "Locally sourced herbal and organic compounds.",
    delay: 0,
  },
  {
    icon: <FaTractor className="text-maroon-700 text-4xl" />,
    title: "Agricultural Inputs",
    location: "Kaduna & Ogun, Nigeria",
    desc: "High-quality starch and natural binders for formulations.",
    delay: 0.2,
  },
  {
    icon: <FaFlask className="text-maroon-700 text-4xl" />,
    title: "Chemical Reagents",
    location: "Ghana & India",
    desc: "Certified pharmaceutical-grade chemicals.",
    delay: 0.4,
  },
  {
    icon: <FaWater className="text-maroon-700 text-4xl" />,
    title: "Purified Water",
    location: "Onsite Treatment Plant",
    desc: "Produced under WHO-GMP standards for ultra-purity.",
    delay: 0.6,
  },
  {
    icon: <FaShippingFast className="text-maroon-700 text-4xl" />,
    title: "Distribution Network",
    location: "West Africa",
    desc: "Connected export system to all partner nations.",
    delay: 0.8,
  },
];

const RawMaterialsFlow = () => {
  return (
    <section className="relative bg-gradient-to-t from-maroon-950 via-maroon-900 to-maroon-800 py-24 overflow-hidden text-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Sustainable Raw Material Sourcing
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 mb-12">
          Every component in our pharmaceutical equipment is carefully sourced
          from sustainable, high-quality suppliers across Africa and Asia —
          ensuring efficiency, reliability, and compliance with global standards.
        </p>

        {/* Flow Line Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6">
          <TooltipProvider>
            {sources.map((item, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: item.delay,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="relative flex flex-col items-center text-center cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="p-6 rounded-full bg-white/10 border border-maroon-400 shadow-[0_0_25px_rgba(128,0,0,0.4)] hover:shadow-[0_0_30px_rgba(128,0,0,0.8)] transition-all"
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.location}</p>

                    {/* Connector Lines (for desktop) */}
                    {i < sources.length - 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        transition={{ delay: item.delay + 0.4, duration: 1.2 }}
                        className="hidden md:block absolute top-1/2 right-[-3rem] h-[2px] bg-gradient-to-r from-maroon-400 to-maroon-700"
                      />
                    )}
                  </motion.div>
                </TooltipTrigger>

                <TooltipContent className="text-sm bg-maroon-900 text-white border border-maroon-600">
                  <p className="font-medium">{item.title}</p>
                  <p>{item.desc}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </motion.div>

      {/* Ambient Glow Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute -top-40 right-0 w-[500px] h-[500px] bg-maroon-500/20 rounded-full blur-3xl"
      />
    </section>
  );
};

export default RawMaterialsFlow;
