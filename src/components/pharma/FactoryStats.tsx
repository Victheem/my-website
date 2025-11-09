"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, ReactElement } from "react";
import { FaUsers, FaHandshake, FaIndustry, FaUserGraduate } from "react-icons/fa";

// ✅ Define type for stats
interface Stat {
  icon: ReactElement;
  title: string;
  target: number;
  description: string;
}

const statsData: Stat[] = [
  {
    icon: <FaUsers className="text-maroon-600 text-4xl" />,
    title: "Staff Members",
    target: 230,
    description: "Dedicated professionals ensuring product excellence.",
  },
  {
    icon: <FaUserGraduate className="text-maroon-600 text-4xl" />,
    title: "Trainees Empowered",
    target: 1200,
    description: "Empowering young talents through industry training.",
  },
  {
    icon: <FaHandshake className="text-maroon-600 text-4xl" />,
    title: "Partners Worldwide",
    target: 35,
    description: "Strong collaborations with trusted global organizations.",
  },
  {
    icon: <FaIndustry className="text-maroon-600 text-4xl" />,
    title: "Production Units",
    target: 12,
    description: "Fully automated units across Nigeria and expanding.",
  },
];

const FactoryStats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const timers = statsData.map((stat, i) => {
        let start = 0;
        const step = stat.target / 60; // animate over 60 frames
        const interval = setInterval(() => {
          start += step;
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = Math.min(Math.floor(start), stat.target);
            return updated;
          });
          if (start >= stat.target) clearInterval(interval);
        }, 30);
        return interval;
      });

      return () => timers.forEach(clearInterval);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-maroon-950 via-maroon-800 to-maroon-600 text-black py-24 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Empowering Growth Through Innovation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(128,0,0,0.6)]"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <motion.h3
                className="text-5xl font-bold text-black mb-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
              >
                {counts[i]}+
              </motion.h3>
              <p className="text-lg font-semibold mb-2 text-white">{stat.title}</p>
              <p className="text-sm text-black">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Subtle rotating light glow */}
      <motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
  className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-maroon-400/50 via-maroon-500/40 to-maroon-600/30 blur-3xl -z-10"
/>

    </section>
  );
};

export default FactoryStats;
