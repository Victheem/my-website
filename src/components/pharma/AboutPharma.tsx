"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Factory, Microscope, Leaf } from "lucide-react";

export default function AboutPharma() {
  return (
    <section className="relative bg-white dark:bg-black py-24 overflow-hidden">
      {/* Gradient overlay background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-[#80000011] to-[#b2222222] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-[#800000] text-white text-sm font-medium px-4 py-1 rounded-full">
              About Jawosh Pharma
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Driving Innovation in{" "}
              <span className="text-[#800000]">Pharmaceutical Engineering</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold">Jawosh Pharma Systems</span>, we
              combine advanced technology, strict GMP standards, and over a
              decade of industry experience to design and manufacture high-end
              pharmaceutical processing and packaging equipment for companies
              across Africa and beyond.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to simplify production through innovation, local
              engineering, and sustainable solutions that guarantee
              cost-effectiveness and reliability at every stage.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                {
                  icon: <Factory className="w-6 h-6 text-[#800000]" />,
                  title: "Local Manufacturing",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#800000]" />,
                  title: "Quality & Compliance",
                },
                {
                  icon: <Microscope className="w-6 h-6 text-[#800000]" />,
                  title: "R&D Focused",
                },
                {
                  icon: <Leaf className="w-6 h-6 text-[#800000]" />,
                  title: "Sustainable Process",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-[#80000011] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <Button className="bg-[#800000] text-white rounded-full px-6 py-3 hover:shadow-[0_0_15px_#80000088] transition">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/workers4.jpg"
                alt="Pharmaceutical laboratory"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating decorative glow */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0.05, scale: 0.8 }}
              animate={{ opacity: [0.05, 0.15, 0.05], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#80000033] blur-3xl rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
