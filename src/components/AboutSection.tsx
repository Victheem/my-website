"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Goal,
    title: "Pharma Equipment Manufacturing",
    description:
      "We design, innovate, and produce cutting-edge pharmaceutical equipment with precision and global standards.",
  },
  {
    icon: BookCheck,
    title: "Real Estate Development",
    description:
      "We build, manage, and sustain premium properties that redefine urban living and smart investment.",
  },
  {
    icon: ChartPie,
    title: "Innovation & Technology",
    description:
      "Empowering industries through tech-driven solutions and data-powered insights for growth.",
  },
  {
    icon: Users,
    title: "Client-Centered Solutions",
    description:
      "We partner with businesses to deliver customized, efficient, and scalable outcomes that last.",
  },
  {
    icon: FolderSync,
    title: "Quality Management",
    description:
      "Consistency, precision, and compliance define our every process—from design to delivery.",
  },
  {
    icon: Zap,
    title: "Sustainable Growth",
    description:
      "Our mission is to drive impactful development through responsible and forward-thinking innovation.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white text-gray-800">
      {/* Animated headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        <span className="text-maroon-600">We Innovate, Create & Build</span>
      </motion.h2>

      {/* Spinning glowing circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 border-4 border-maroon-600 rounded-full mb-12 shadow-[0_0_20px_#800000]"
      >
        <div className="flex items-center justify-center h-full text-maroon-700 font-semibold text-center">
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-lg"
          >
            Innovate
            <br />
            Create
            <br />
            Build
          </motion.span>
        </div>
      </motion.div>

      {/* Content grid */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 px-6 md:px-10 items-center">
        {/* Accordion side */}
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {features.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl border border-maroon-600/30 p-4 hover:shadow-[0_0_15px_#80000088] transition-all duration-300"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-4 text-maroon-700">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Image side - enlarged */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/workers5.jpg"
            alt="About Jawosh Tech"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#80000040] opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">
              Engineering Tomorrow’s Solutions Today
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
