"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Define type for team members
interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  bio: string;
}

// ✅ Team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Victor Tola",
    role: "CEO & Founder",
    photo: "/engineering1.jpg",
    bio: "Victor leads Jawosh Real Estate with a vision for innovation, quality, and sustainable development across Nigeria and West Africa.",
  },
  {
    id: 2,
    name: "Amara Okafor",
    role: "Head of Design",
    photo: "/engineering2.jpg",
    bio: "Amara oversees architectural designs, ensuring modern aesthetics meet functionality and client expectations.",
  },
  {
    id: 3,
    name: "Chinedu Eze",
    role: "Operations Manager",
    photo: "/engineering4.jpg",
    bio: "Chinedu manages day-to-day operations, ensuring timely project delivery and smooth coordination across departments.",
  },
  {
    id: 4,
    name: "Funke Adeyemi",
    role: "Marketing Lead",
    photo: "/workers13.jpg",
    bio: "Funke drives brand visibility and client engagement, showcasing Jawosh Real Estate’s excellence and achievements.",
  },
];

const OurTeam: React.FC = (): JSX.Element => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our talented professionals are the backbone of Jawosh Real Estate,
          delivering excellence across all projects.
        </p>
      </motion.div>

      {/* 🧑‍💼 Team Grid */}
      <div className="mt-12 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128,0,0,0.6)" }}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer border border-maroon-200 shadow-lg"
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative w-full h-64">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🪟 Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-800"
              onClick={() => setSelectedMember(null)}
            >
              <X size={26} />
            </button>
            <h3 className="text-2xl font-semibold mb-2">
              {selectedMember.name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{selectedMember.role}</p>
            <p className="text-gray-700">{selectedMember.bio}</p>
            <div className="mt-6 text-center">
              <Button
                className="bg-maroon-600 text-white hover:shadow-maroon-400 transition-all duration-300"
                onClick={() => setSelectedMember(null)}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* ✨ Glowing maroon bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-red-700 to-primary"
      />
    </section>
  );
};

export default OurTeam;
