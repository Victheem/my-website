"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTASection: React.FC = () => {

  return (
    <section className="relative py-20 bg-[#800000] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to innovate, create & build with us?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/80">
          Join Jawosh Tech Properties Ltd on our mission to transform industries
          with cutting-edge technology, real estate solutions, and exceptional
          services.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Button className="bg-white text-[#800000] shadow-md hover:shadow-[0_0_20px_#ffffff] transition-all duration-300 rounded-full px-8 py-4">
            Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
          <Button className="bg-transparent border border-white text-white shadow-none hover:shadow-[0_0_15px_#ffffff] transition-all duration-300 rounded-full px-8 py-4">
            Contact Us
          </Button>
        </div>
      </motion.div>

      {/* Optional animated background circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute -top-32 -left-32 w-64 h-64 border-4 border-white/20 rounded-full"
      />
    </section>
  );
};

export default CTASection;
