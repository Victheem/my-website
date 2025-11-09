"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Briefcase, Users, Star } from "lucide-react";

const achievements = [
  {
    title: "22,000+ Houses Sold",
    description:
      "Mass Housing Estate to individuals and government agencies.",
    icon: Briefcase,
  },
  {
    title: "Alternative Energy",
    description:
      "Pioneered eco-friendly alternative energy for urban and rural areas.",
    icon: Star,
  },
  {
    title: "Pharma Equipment Innovation",
    description:
      "Developed high-quality pharmaceutical equipment with precision.",
    icon: Trophy,
  },
  {
    title: "National Recognition",
    description:
      "Acknowledged for excellence in manufacturing and real estate services.",
    icon: Users,
  },
];

export default function ProjectsAchievements() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#800000] mb-12"
        >
          Projects & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {achievements.map(({ title, description, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-[0_0_20px_#800000] transition-all duration-500 flex items-start gap-4"
            >
              <div className="p-4 bg-[#800000] rounded-full text-white flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#800000]">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
