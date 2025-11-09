"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Pharma Equipment Manufacturing",
    description:
      "We design, produce, and deliver high-quality pharmaceutical equipment with precision and reliability.",
    image: "/equipment1.jpg", // replace with your PNG
  },
  {
    title: "Real Estate Development",
    description:
      "Developing residential and commercial properties that combine functionality with aesthetic excellence.",
    image: "/real-estate1.jpg",
  },
  {
    title: "Property Management",
    description:
      "Comprehensive property management services ensuring optimal performance and tenant satisfaction.",
    image: "/real-estate5.jpg",
  },
];

export default function ServicesCards() {
  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#800000] mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map(({ title, description, image }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-[0_0_20px_#800000] transition-all duration-500"
            >
              <div className="relative h-52 w-full">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-[#800000]">
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
