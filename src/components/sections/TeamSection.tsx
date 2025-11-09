"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. A",
    role: "Founder & CEO",
    image: "/engineering4.jpg", // replace with your images
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Tola Raheem",
    role: "Chief Operations Officer",
    image: "/engineering2.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jane Doe",
    role: "Head of Engineering",
    image: "/engineering6.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "John Smith",
    role: "Lead Designer",
    image: "/engineering5.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-[#800000] mb-12"
        >
          Our Team
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {teamMembers.map(({ name, role, image, linkedin, twitter }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-[0_0_20px_#800000] transition-all duration-500"
            >
              <div className="relative h-64 w-full">
                <Image src={image} alt={name} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#800000]">{name}</h3>
                <p className="text-gray-600 mb-4">{role}</p>
                <div className="flex justify-center gap-4 text-[#800000]">
                  <a href={linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={twitter} target="_blank" rel="noreferrer">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
