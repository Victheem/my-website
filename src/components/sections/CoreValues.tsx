"use client";

import { motion } from "framer-motion";
import { Tooltip } from "@/components/ui/tooltip";
import { Shield, Zap, Star, Users } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate transparently and ethically in every project and partnership.",
    tooltip:
      "Our actions and decisions are guided by honesty and accountability.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "We constantly develop new solutions to stay ahead in technology and real estate.",
    tooltip: "Innovative thinking drives our growth and impact.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We deliver high-quality results that exceed client expectations.",
    tooltip: "Excellence is embedded in our processes and outcomes.",
  },
  {
    icon: Users,
    title: "Customer-Centricity",
    desc: "Our clients and partners are at the heart of everything we do.",
    tooltip: "Prioritizing relationships ensures long-term success.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#800000] mb-12"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {coreValues.map(({ icon: Icon, title, desc, tooltip }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-[0_0_20px_#800000] transition-all duration-500 relative"
            >
              <Tooltip content={tooltip}>
                <div className="absolute top-4 right-4 cursor-pointer">
                  <svg
                    className="w-5 h-5 text-[#800000]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 15h-1.5v-6h1.5v6zm0-8h-1.5V7h1.5v2z" />
                  </svg>
                </div>
              </Tooltip>

              <div className="flex justify-center mb-4">
                <Icon className="w-12 h-12 text-[#800000]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
