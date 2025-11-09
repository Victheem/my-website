"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "MAV+", logo: "/nafdac.png" },
  { name: "NAFDAC", logo: "/med.jpeg" },
  { name: "Pfizer", logo: "/ivm.jpeg" },
  { name: "GSK", logo: "/nse.jpeg" },
  { name: "WHO", logo: "/son.jpeg" },
  { name: "Novartis", logo: "/logo.png" },
  { name: "UNICEF", logo: "/nse.jpeg" },
];

const PartnerCarousel = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-8 text-maroon-700">
        Our Trusted Partners
      </h2>

      {/* Carousel Track */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-16 w-max"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-40 h-24 p-4 rounded-xl shadow-md border border-maroon-600/20 hover:shadow-[0_0_15px_#80000077] transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Glowing spinning connector */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-28 h-28 rounded-full border-4 border-maroon-600 flex items-center justify-center shadow-[0_0_25px_#800000]"
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-maroon-700 font-semibold text-center text-sm"
          >
            We
            <br />
            Innovate
            <br />
            Create
            <br />
            Build
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
