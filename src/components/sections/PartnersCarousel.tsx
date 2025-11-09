"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  "/nis.png",
  "/nafdac.png",
  "/med.jpeg",
  "/nse.jpeg",
  // add more logos here
];

export default function PartnersCarousel() {
  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#800000] mb-10">
          Our Partners
        </h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {partners.concat(partners).map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-40 h-24 bg-white rounded-xl shadow-md"
              >
                <Image
                  src={logo}
                  alt={`Partner ${i}`}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
