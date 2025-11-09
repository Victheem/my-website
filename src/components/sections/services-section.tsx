"use client";

import { Reveal } from "@/components/reveal";
import { Wrench, Cpu, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Cpu size={36} className="text-primary" />,
    title: "Technology Solutions",
    desc: "We provide innovative software and digital systems for businesses and institutions.",
  },
  {
    icon: <Wrench size={36} className="text-primary" />,
    title: "General Contracting",
    desc: "From concept to execution, we handle projects with precision and professionalism.",
  },
  {
    icon: <ShieldCheck size={36} className="text-primary" />,
    title: "Cyber & Security Systems",
    desc: "We deploy surveillance, access control, and power systems that ensure safety and efficiency.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Our Services
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <Reveal key={i} direction="up" delay={0.2 * i}>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
