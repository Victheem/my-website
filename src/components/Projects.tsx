"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Automated Capsule Filling Line",
    description:
      "A modern pharmaceutical equipment project designed for high precision and efficiency. This project automates capsule filling, reducing manual handling and ensuring consistent product quality.",
    image: "/equipment1.jpg",
  },
  {
    id: 2,
    title: "Smart Estate Development, Abuja",
    description:
      "Luxury residential estate integrating technology, comfort, and sustainability. The project features smart homes with integrated IoT solutions, solar energy, and advanced security systems.",
    image: "/real-estate1.jpg",
  },
  {
    id: 3,
    title: "Machinery Assembly Plant",
    description:
      "A cutting-edge assembly line for pharmaceutical equipment in Nigeria. It supports local manufacturing, boosts employment, and enhances production capacity across the region.",
    image: "/pharma4.jpg",
  },
];

export const Projects = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center text-gray-800"
        >
          Our Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          Explore our latest works in pharmaceutical technology and real estate development.
        </motion.p>

        {/* Static project grid */}
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-transparent hover:border-[#800000] hover:shadow-[0_0_20px_#80000033]"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{project.description}</p>
                <Button
                  variant="outline"
                  className="mt-4 text-[#800000] border-[#800000] hover:bg-[#800000] hover:text-white transition-all"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full p-8 relative border border-[#800000]/30 shadow-[0_0_30px_#80000055]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-[#800000] text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={600}
                height={300}
                className="rounded-xl object-cover mb-5"
              />
              <h3 className="text-2xl font-bold text-[#800000] mb-3">{selectedProject.title}</h3>
              <p className="text-gray-700">{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};