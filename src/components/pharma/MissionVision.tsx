"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision: React.FC = (): JSX.Element => {
  return (
    <section className="relative py-24 bg-white text-gray-900 overflow-hidden">
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-600/5 via-maroon-500/10 to-maroon-600/5 blur-3xl" />

      <div className="relative container mx-auto px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-maroon-700 mb-16"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-8 border-2 border-maroon-600/40 rounded-2xl shadow-md hover:shadow-maroon-500/40 transition-all duration-500 backdrop-blur-sm"
          >
            <FaBullseye className="text-maroon-600 text-5xl mb-6 animate-pulse" />
            <h3 className="text-2xl font-semibold mb-4 text-maroon-700">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              To manufacture top-quality, innovative, and affordable
              pharmaceutical equipment that empowers local and international
              pharmaceutical industries, while creating sustainable employment
              and promoting health standards across Africa.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-8 border-2 border-maroon-600/40 rounded-2xl shadow-md hover:shadow-maroon-500/40 transition-all duration-500 backdrop-blur-sm"
          >
            <FaEye className="text-maroon-600 text-5xl mb-6 animate-pulse" />
            <h3 className="text-2xl font-semibold mb-4 text-maroon-700">
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              To become Africa’s most trusted pharmaceutical equipment
              manufacturer — setting the gold standard in innovation,
              reliability, and global partnerships while driving healthcare
              transformation across the continent.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
