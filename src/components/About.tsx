"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Rotating connector circle */}
      <div className="absolute left-1/2 -top-20 -translate-x-1/2 z-20 flex flex-col items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="relative w-32 h-32 rounded-full border-4 border-maroon-700 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute text-xs font-semibold tracking-widest text-maroon-700 uppercase"
          >
            We Innovate • Create • Build •
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            About{" "}
            <span className="text-maroon-700">JAWOSH Tech Properties Ltd</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            JAWOSH Tech Properties Ltd is a dynamic, innovation-driven company
            operating across key industries —{" "}
            <span className="font-semibold text-gray-800">
              pharma equipment manufacturing
            </span>
            ,
            <span className="font-semibold text-gray-800">
              {" "}
              real estate development
            </span>
            , and{" "}
            <span className="font-semibold text-gray-800">
              property management
            </span>
            . We design solutions that empower businesses, enhance communities,
            and shape the future of sustainable living.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-gray-700 text-base leading-relaxed"
          >
            Through cutting-edge technology, strategic investments, and a
            commitment to excellence, we’re building a better tomorrow — one
            innovation at a time.
          </motion.p>
        </motion.div>

        {/* Right: Animated Image */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src="/engineering1"
            alt="About Jawosh"
            width={550}
            height={500}
            className="object-contain drop-shadow-2xl"
          />

          {/* Decorative overlay shape (optional subtle glow) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-maroon-700 blur-3xl rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
