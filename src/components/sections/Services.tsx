"use client";
import { motion } from "framer-motion";
import { Factory, Building2, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Pharma Equipment Manufacturing",
    desc: "Designing and building world-class pharmaceutical machines with precision, innovation, and reliability.",
    direction: "left",
  },
  {
    icon: Building2,
    title: "Real Estate Development",
    desc: "Developing modern structures and communities that redefine smart living and urban innovation.",
    direction: "bottom",
  },
  {
    icon: ClipboardCheck,
    title: "Property Management",
    desc: "Managing and maintaining properties with excellence, ensuring long-term value and trust.",
    direction: "right",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-white text-gray-800 overflow-hidden">
      {/* Animated maroon glow background */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-tr from-[#8B000010] via-[#8B000020] to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[#8B0000]"
        >
          Our Core Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 mb-12 text-lg"
        >
          At Jawosh Tech Properties Ltd, we innovate across industries — from
          technology-driven pharma production to futuristic real estate
          projects.
        </motion.p>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map(({ icon: Icon, title, desc, direction }, i) => (
            <motion.div
              key={i}
              initial={
                direction === "left"
                  ? { opacity: 0, x: -100 }
                  : direction === "right"
                    ? { opacity: 0, x: 100 }
                    : { opacity: 0, y: 80 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139,0,0,0.2)",
              }}
              viewport={{ once: true }}
              className="bg-white border border-[#8B000030] p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 relative overflow-hidden"
            >
              {/* glowing icon animation */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px #8B0000",
                    "0 0 15px #8B0000",
                    "0 0 0px #8B0000",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex justify-center mb-6"
              >
                <Icon className="w-14 h-14 text-[#8B0000]" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 15px #8B0000" }}
          className="mt-16 bg-[#8B0000] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all"
        >
          Explore More Services
        </motion.button>
      </div>
    </section>
  );
}
