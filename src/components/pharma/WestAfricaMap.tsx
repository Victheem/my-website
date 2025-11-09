"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Location {
  country: string;
  top: string;
  left: string;
  info: string;
}

const locations: Location[] = [
  { country: "Nigeria", top: "60%", left: "45%", info: "Headquarters – Ilorin, Lagos, Abuja" },
  { country: "Ghana", top: "55%", left: "35%", info: "Distribution and equipment assembly hub" },
  { country: "Benin", top: "58%", left: "40%", info: "Regional technical and service office" },
  { country: "Togo", top: "57%", left: "38%", info: "Training and maintenance partner base" },
  { country: "Côte d’Ivoire", top: "52%", left: "30%", info: "West African expansion frontier" },
];

const WestAfricaMap: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-blue">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-maroon-800">
          Expansion Across West Africa
        </h2>
        <p className="max-w-2xl mx-auto text-black mb-12">
          Our footprint is spreading across West Africa, connecting industries
          through advanced pharmaceutical technology, innovation, and
          sustainable solutions.
        </p>

        <div className="relative w-full max-w-4xl mx-auto aspect-[3/2] bg-blue rounded-3xl shadow-lg border border-maroon-200 overflow-hidden">
          {/* Optional clean map image */}
          <img
            src="/africa.jpeg"
            alt="West Africa Map"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <TooltipProvider>
            {locations.map((loc, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    className="absolute"
                    style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="relative flex flex-col items-center"
                    >
                      {/* Bright marker */}
                      <FaMapMarkerAlt className="text-red-700 text-4xl drop-shadow-[0_0_20px_rgba(255,0,0,0.9)]" />
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.3, 0.8] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                        className="absolute w-10 h-10 rounded-full bg-red-600/50 blur-md"
                      />
                    </motion.div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="bg-maroon-800 text-white">
                  <p className="text-sm font-medium">{loc.country}</p>
                  <p className="text-xs text-gray-200">{loc.info}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>

          {/* Animated lines connecting markers */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {locations.map((loc, i) => {
              if (i === 0) return null;
              const prev = locations[i - 1];
              return (
                <motion.line
                  key={i}
                  x1={prev.left}
                  y1={prev.top}
                  x2={loc.left}
                  y2={loc.top}
                  stroke="#800000"
                  strokeWidth={2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                />
              );
            })}
          </svg>
        </div>
      </motion.div>

      {/* Subtle glow circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-red-600/40 blur-3xl -z-10"
      />
    </section>
  );
};

export default WestAfricaMap;