"use client";

import { motion } from "framer-motion";

interface MissionVisionCardProps {
  title: string;
  description: string;
}

export const MissionVisionCard: React.FC<MissionVisionCardProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      className="relative max-w-md mx-auto p-6 rounded-3xl bg-[#80000033] border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
    >
      {/* Subtle glowing background */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 0.9, opacity: 0.05 }}
        animate={{
          scale: [0.9, 1.05, 0.9],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle,#80000033,#0000)] blur-3xl -z-10"
      />

      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/90 text-base leading-relaxed">{description}</p>
    </motion.div>
  );
};
