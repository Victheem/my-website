"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    id: 1,
    label: "Completed Projects",
    value: 124,
  },
  {
    id: 2,
    label: "Active Properties",
    value: 58,
  },
  {
    id: 3,
    label: "Satisfied Clients",
    value: 320,
  },
  {
    id: 4,
    label: "Partners",
    value: 12,
  },
];

// ✅ Type for Counter props
interface CounterProps {
  value: number;
}

function Counter({ value }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span className="text-4xl font-bold text-primary">{count}</span>;
}

export default function ProjectsAchievements() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Our Achievements
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Over the years, Jawosh Real Estate has delivered exceptional results 
          and exceeded expectations for clients, partners, and communities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-maroon-200 hover:shadow-[0_0_25px_rgba(128,0,0,0.5)] transition-all cursor-default"
            >
              <Counter value={stat.value} />
              <p className="text-gray-700 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated glowing maroon bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-red-700 to-primary"
      />
    </section>
  );
}
