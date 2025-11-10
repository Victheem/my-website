"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ✅ Define the project type
interface Project {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
}

// ✅ Project data
const projects: Project[] = [
  {
    id: 1,
    name: "Jawosh Smart City Estate",
    location: "Abuja, Nigeria",
    image: "/real-estate4.jpg",
    description:
      "A sustainable and tech-driven residential community with solar integration and smart security.",
  },
  {
    id: 2,
    name: "Harmony Heights",
    location: "Lagos, Nigeria",
    image: "/real-estate1.jpg",
    description:
      "Luxury high-rise apartments overlooking the city skyline with premium amenities.",
  },
  {
    id: 3,
    name: "Green Valley Villas",
    location: "Ilorin, Nigeria",
    image: "/real-estate7.jpg",
    description:
      "Elegant villas surrounded by lush greenery, offering comfort and modern architectural design.",
  },
  {
    id: 4,
    name: "Coastal View Towers",
    location: "Port Harcourt, Nigeria",
    image: "/real-estate5.jpg",
    description:
      "Commercial and residential towers with smart energy systems and waterfront views.",
  },
];

const ComponentName: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        {/* 🏙 Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
          Our Signature Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We take pride in delivering real estate developments that combine
          innovation, beauty, and sustainability.
        </p>

        {/* 🧱 Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TooltipProvider key={project.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-1">
                        {project.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {project.location}
                      </p>
                    </div>
                  </motion.div>
                </TooltipTrigger>

                <TooltipContent>
                  <p className="text-sm max-w-xs">{project.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </motion.div>

      {/* ✨ Glowing maroon border effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-primary via-red-700 to-primary"
      />
    </section>
  );
};

export default ProjectsShowcase;
