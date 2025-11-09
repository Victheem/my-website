"use client";

import { motion } from "framer-motion";
import { Calendar, Star, CheckCircle, Briefcase } from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "Jawosh Tech Properties Ltd was established with a vision to innovate.",
    icon: Calendar,
  },
    {
    year: "2013",
    title: "Expansion & Innovation",
    description:
      "Ventured into real estate development and property management.",
    icon: CheckCircle,
  },
  {
    year: "2025",
    title: "First Major Project",
    description:
      "Proposed first pharmaceutical equipment manufacturing project in Africa.",
    icon: Briefcase,
  },
  {
    year: "2026",
    title: "Key Partnership",
    description:
      "Partnered with MAV+ and other industry leaders to expand our reach.",
    icon: Star,
  },

];

export default function HistoryTimeline() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#800000] mb-12">
          Our History
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#800000]/50 h-full"></div>

          <div className="space-y-16">
            {milestones.map(({ year, title, description, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-center justify-between"
              >
                {/* Icon circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text content */}
                <div
                  className={`md:w-5/12 p-6 bg-gray-50 rounded-xl shadow-md ${
                    i % 2 === 0
                      ? "md:mr-auto text-right md:text-right"
                      : "md:ml-auto text-left"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[#800000]">
                    {year}
                  </h3>
                  <h4 className="font-bold text-lg mb-2">{title}</h4>
                  <p className="text-gray-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
