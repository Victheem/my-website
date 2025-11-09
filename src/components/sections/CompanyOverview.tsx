"use client";

import { motion } from "framer-motion";
import { Tooltip } from "@/components/ui/tooltip"; // shadcn tooltip
import { Award, Eye, Shield } from "lucide-react";

const overview = [
  {
    icon: Award,
    title: "Our Mission",
    desc: "To innovate, create, and deliver cutting-edge solutions in pharma manufacturing, real estate development, and property management.",
    tooltip: "Focused on impactful solutions that drive industry standards.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the leading provider of high-quality technology and real estate solutions in Nigeria and across Africa.",
    tooltip: "We aim for growth, trust, and excellence.",
  },
  {
    icon: Shield,
    title: "Our Values",
    desc: "Integrity, Innovation, Excellence, and Customer-Centricity guide all our operations and decisions.",
    tooltip: "These core principles define how we operate every day.",
  },
];

export default function CompanyOverview() {
  return (
    <section className="relative py-20 bg-white text-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-[#800000]"
        >
          Company Overview
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {overview.map(({ icon: Icon, title, desc, tooltip }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-white border border-[#8B000030] p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 relative"
            >
              {/* Tooltip icon */}
              <Tooltip content={tooltip}>
                <InfoIcon className="absolute top-4 right-4 w-5 h-5 text-[#800000] cursor-pointer" />
              </Tooltip>

              <div className="flex justify-center mb-4">
                <Icon className="w-14 h-14 text-[#800000]" />
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

// Small Info Icon Component
function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10
        10-4.477 10-10S17.523 2 12 2zm.75 15h-1.5v-6h1.5v6zm0-8h-1.5V7h1.5v2z"
      />
    </svg>
  );
}
