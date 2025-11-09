"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Building2,
  Cpu,
  Users,
  Lightbulb,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    desc: "Over the years, we’ve earned a reputation for reliability in pharmaceutical equipment manufacturing and real estate innovation.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    desc: "We leverage modern technology to design, build, and deliver smart, sustainable, and efficient solutions.",
  },
  {
    icon: Wrench,
    title: "Precision Engineering",
    desc: "Every machine, every structure — built with accuracy, durability, and performance at its core.",
  },
  {
    icon: Building2,
    title: "Quality Real Estate",
    desc: "Developing smart estates and facilities that combine beauty, functionality, and technology for modern living.",
  },
  {
    icon: Users,
    title: "Dedicated Professionals",
    desc: "Our team is made up of visionary engineers, developers, and experts committed to excellence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Growth",
    desc: "We innovate, create, and build — helping industries and communities thrive through technology.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8000000a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900"
        >
          Why Choose <span className="text-[#800000]">Jawosh Tech</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          At Jawosh Technologies, we redefine innovation by combining expertise,
          engineering precision, and a passion for excellence in every project
          we deliver.
        </motion.p>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-gray-200 hover:border-[#800000] shadow-md hover:shadow-[0_0_25px_#80000033] transition-all duration-500 rounded-2xl p-8"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 rounded-full border border-[#800000] bg-[#80000010] text-[#800000] shadow-[0_0_15px_#80000055]"
                >
                  <reason.icon size={36} />
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
