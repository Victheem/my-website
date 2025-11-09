"use client";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Get in Touch
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10">
            We’d love to hear from you. Whether you’re planning a project, need
            a consultation, or want to learn more about Jawosh, let’s connect.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.4}>
          <form className="max-w-2xl mx-auto grid gap-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-primary outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-primary outline-none"
            ></textarea>

            <Button
              className="bg-primary text-white hover:shadow-[0_0_15px_#800000] transition-all duration-300"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
