"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/reveal"; // default import
import { Factory, Building2, Home } from "lucide-react";

const services = [
  {
    title: "Pharma Equipment Manufacturing",
    description:
      "We design, produce, and install cutting-edge pharmaceutical equipment tailored for high performance, precision, and reliability.",
    icon: Factory,
  },
  {
    title: "Real Estate Development",
    description:
      "From concept to construction, we build innovative, eco-friendly, and sustainable real estate projects for the modern world.",
    icon: Building2,
  },
  {
    title: "Property Management",
    description:
      "We provide comprehensive property management solutions to maximize value and ensure seamless operations for clients.",
    icon: Home,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#fff5f5] overflow-hidden">
      {/* Floating Maroon Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#800000_0%,transparent_70%)] blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <Reveal delay={0}>
          <h2 className="text-4xl font-bold mb-4 text-maroon-700">Our Services</h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            At Jawosh Tech Properties Ltd, we’re committed to delivering top-tier
            solutions across industries — driven by innovation, quality, and excellence.
          </p>
        </Reveal>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={index} delay={0.3 + index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-[0_0_20px_#80000077] p-8 border border-maroon-100 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-maroon-600 shadow-[0_0_15px_#80000066] mb-4"
                  >
                    <Icon size={36} className="text-maroon-700" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-maroon-700">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Animated Wave Divider */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: [0.42, 0, 0.58, 1] }}
        className="absolute bottom-0 left-0 w-full"
      >
        <svg
          className="w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#800000"
            fillOpacity="0.9"
            d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,224C672,213,768,139,864,122.7C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160V320H0Z"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
