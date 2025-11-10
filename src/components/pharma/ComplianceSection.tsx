"use client";

import { motion } from "framer-motion";
import {
  FaCertificate,
  FaCheckCircle,
  FaGlobe,
  FaShieldAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const compliances = [
  {
    icon: <FaCertificate className="text-4xl text-black" />,
    title: "WHO-GMP Certified",
    desc: "Compliant with World Health Organization Good Manufacturing Practices for pharmaceuticals.",
    delay: 0,
  },
  {
    icon: <FaShieldAlt className="text-4xl text-black" />,
    title: "ISO 9001:2015",
    desc: "Our processes adhere strictly to international quality management standards.",
    delay: 0.2,
  },
  {
    icon: <FaClipboardCheck className="text-4xl text-black" />,
    title: "NAFDAC Approved",
    desc: "Registered and approved by the National Agency for Food and Drug Administration and Control.",
    delay: 0.4,
  },
  {
    icon: <FaGlobe className="text-4xl text-black" />,
    title: "Environmental Compliance",
    desc: "Committed to sustainable and eco-friendly production standards.",
    delay: 0.6,
  },
  {
    icon: <FaCheckCircle className="text-4xl text-black" />,
    title: "Safety & Hygiene Certification",
    desc: "We maintain the highest levels of factory hygiene and staff safety compliance.",
    delay: 0.8,
  },
];

const ComplianceSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-maroon-900 via-maroon-950 to-black py-24 text-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Global Standards & Compliance</h2>
        <p className="max-w-2xl mx-auto text-black mb-12">
          Jawosh Pharma operates under globally recognized standards ensuring
          top-quality, safe, and efficient manufacturing processes for
          pharmaceutical equipment and supplies.
        </p>

        {/* Compliance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {compliances.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/10 border border-maroon-500 shadow-[0_0_25px_rgba(128,0,0,0.4)] hover:shadow-[0_0_40px_rgba(128,0,0,0.7)] transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          <h3 className="text-2xl font-semibold mb-6 text-white">Our Compliance Journey</h3>
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-8">
            {[
              "2018: ISO Setup",
              "2020: WHO-GMP Audit",
              "2022: NAFDAC Expansion",
              "2024: Africa Export License",
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * i }}
                className="relative flex flex-col items-center"
              >
                <div className="w-6 h-6 rounded-full bg-maroon-500 shadow-[0_0_15px_rgba(128,0,0,0.8)] mb-2"></div>
                <p className="text-sm text-white">{event}</p>
                {i < 3 && (
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    transition={{ delay: 0.3 * i + 0.2, duration: 1 }}
                    className="hidden md:block absolute top-3 right-[-2rem] h-[2px] bg-gradient-to-r from-maroon-400 to-maroon-700"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Ambient glow animation */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -bottom-32 left-0 w-[400px] h-[400px] bg-maroon-500/20 rounded-full blur-3xl"
      />
    </section>
  );
};

export default ComplianceSection;
