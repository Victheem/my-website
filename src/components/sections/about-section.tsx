"use client";

import { Reveal } from "@/components/reveal";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <Image
            src="/jawosh-building.jpg"
            alt="About Jawosh"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </Reveal>

        <Reveal direction="right" delay={0.2}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Jawosh Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jawosh Technologies is a forward-thinking company dedicated to
              delivering cutting-edge technology and general contracting
              solutions. We blend innovation, reliability, and craftsmanship to
              transform ideas into impactful results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team brings years of expertise across software engineering,
              energy, and smart infrastructure—committed to excellence and
              sustainability.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
