"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutCompany = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/engineering2.jpg"
            alt="Jawosh Tech team"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-[#80000040] opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">
              We Innovate, Create & Build
            </p>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            About{" "}
            <span className="text-[#800000]">Jawosh Tech Properties Ltd</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Jawosh Tech Properties Ltd is a diversified technology and real
            estate company specializing in the design and manufacturing of
            pharmaceutical equipment, estate development, and property
            management. Our mission is to transform industries and communities
            through innovation, engineering excellence, and sustainable
            development.
          </p>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="border-l-4 border-[#800000] pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide high-quality, technology-driven solutions that
                promote industrial growth, innovation, and community
                advancement.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="border-l-4 border-[#800000] pl-4"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be Africa’s leading name in technological innovation and real
                estate excellence, creating lasting value and sustainable
                impact.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
