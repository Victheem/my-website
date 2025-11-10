"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision: React.FC = () => {
  const cards = [
    {
      icon: <FaBullseye className="text-maroon-600 text-4xl mb-3 animate-pulse" />,
      title: "Our Mission",
      description:
        "To manufacture top-quality, innovative, and affordable pharmaceutical equipment that empowers local and international pharmaceutical industries, while creating sustainable employment and promoting health standards across Africa.",
    },
    {
      icon: <FaEye className="text-maroon-600 text-4xl mb-3 animate-pulse" />,
      title: "Our Vision",
      description:
        "To become Africa’s most trusted pharmaceutical equipment manufacturer — setting the gold standard in innovation, reliability, and global partnerships while driving healthcare transformation across the continent.",
    },
  ];

  return (
    <section className="relative py-24 bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-600/5 via-maroon-500/10 to-maroon-600/5 blur-3xl" />
      <div className="relative container mx-auto px-6 z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-maroon-700 mb-16"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.04 }}
              className="p-6 border border-maroon-600/30 rounded-xl shadow-md hover:shadow-maroon-400/50 transition-all duration-400 backdrop-blur-sm bg-white/20"
            >
              <div className="flex flex-col items-center">
                {card.icon}
                <h3 className="text-xl font-semibold mb-2 text-maroon-700">{card.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
