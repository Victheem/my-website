"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const Partners = () => {
  const partners = [
    { name: "Mav+", logo: "/nis.png" },
    { name: "NAFDAC", logo: "/nafdac.png" },
    { name: "NCC", logo: "/med.jpeg" },
    { name: "Zenith Bank", logo: "/ivm.jpeg" },
    { name: "Dangote", logo: "/nse.jpeg" },
    { name: "MTN", logo: "/son.jpeg" },
  ];

  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const startAnimation = () => {
    controls.start({
      x: ["100%", "-100%"],
      transition: { repeat: Infinity, duration: 25, ease: "linear" },
    });
  };

  // Start motion when component mounts
  if (!isPaused) startAnimation();

  return (
    <section
      className="bg-gray-50 py-10 overflow-hidden relative"
      onMouseEnter={() => {
        setIsPaused(true);
        controls.stop();
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        startAnimation();
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Trusted Partners
        </h2>
        <p className="text-gray-500 mt-2">
          We proudly work with leading organizations across industries
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div className="flex gap-12 items-center" animate={controls}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 h-20 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
