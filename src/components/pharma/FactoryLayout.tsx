"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Hotspot {
  id: number;
  name: string;
  description: string;
  position: string;
}

const hotspotData: Hotspot[] = [
  {
    id: 1,
    name: "Mixing Unit",
    description:
      "Our precision-grade mixing machines ensure uniform blending of pharmaceutical ingredients, adhering to WHO-GMP standards.",
    position: "top-[30%] left-[25%]",
  },
  {
    id: 2,
    name: "Tablet Press",
    description:
      "High-speed tablet compression equipment designed for consistency, hygiene, and efficiency in drug production.",
    position: "top-[50%] left-[60%]",
  },
  {
    id: 3,
    name: "Packaging Zone",
    description:
      "Automated packaging system ensuring safety, accuracy, and tamper-proof sealing for all finished products.",
    position: "top-[70%] left-[40%]",
  },
  {
    id: 4,
    name: "Quality Control Lab",
    description:
      "Our QC lab is equipped with state-of-the-art testing instruments for purity, potency, and safety verification.",
    position: "top-[40%] left-[80%]",
  },
];

const FactoryLayout: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-gray-200 text-black overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-maroon-700 mb-16 text-black"
      >
        Our Factory Layout
      </motion.h2>

      {/* 3D Factory Container */}
      <div className="relative w-full max-w-6xl mx-auto h-[600px] perspective-[1200px]">
        <motion.div
          className="relative w-full h-full rounded-3xl bg-cover bg-center shadow-2xl transform-gpu"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(10deg) rotateY(-8deg)",
          }}
          whileHover={{
            rotateY: 0,
            rotateX: 0,
            transition: { duration: 1 },
          }}
        >
          {/* Replace '/factory-layout.png' with your image in the public folder */}
          <div
            className="absolute inset-0 rounded-3xl bg-cover bg-center shadow-2xl"
            style={{ backgroundImage: "url('/floor1.jpg')" }}
          />

          {/* Hotspots */}
          {hotspotData.map((spot) => (
            <motion.div
              key={spot.id}
              onClick={() => setSelectedHotspot(spot)}
              className={`absolute ${spot.position} cursor-pointer w-6 h-6 rounded-full border-2 border-maroon-600 bg-white hover:bg-maroon-600 hover:scale-125 shadow-2xl animate-pulse`}
              whileHover={{ scale: 1.4 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal for hotspot info */}
      {selectedHotspot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedHotspot(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white text-black p-8 rounded-3xl max-w-md shadow-xl relative border-2 border-maroon-600/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedHotspot(null)}
              className="absolute top-4 right-4 text-black hover:text-maroon-700"
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-semibold text-maroon-700 mb-3">
              {selectedHotspot.name}
            </h3>
            <p className="text-black leading-relaxed">
              {selectedHotspot.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default FactoryLayout;
