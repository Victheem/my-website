"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Define type for projects if needed
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Example data
const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Apartments",
    description: "Modern apartments with premium facilities.",
    image: "/projects1.jpg",
  },
  {
    id: 2,
    title: "Commercial Complex",
    description: "Top-notch commercial real estate solutions.",
    image: "/projects2.jpg",
  },
  {
    id: 3,
    title: "Residential Villas",
    description: "Spacious and elegant villas for families.",
    image: "/projects3.jpg",
  },
];

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">
          Our Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-maroon-200 hover:shadow-[0_0_20px_rgba(128,0,0,0.4)] transition-all cursor-pointer"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsShowcase;
