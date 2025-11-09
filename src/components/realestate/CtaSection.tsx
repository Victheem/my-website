"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-700 relative overflow-hidden text-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Your Dream Property?
        </h2>
        <p className="text-black/80 max-w-2xl mx-auto mb-12">
          Partner with Jawosh Real Estate today and experience innovation,
          quality, and excellence in property development.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Button className="bg-white text-maroon-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300 flex items-center gap-2">
            Contact Us <ArrowUpRight className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            className="border-white text-black/80 px-8 py-4 rounded-full hover:bg-white hover:text-maroon-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Learn More <ArrowUpRight className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>

      {/* Subtle glowing maroon lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary via-red-700 to-primary"
      />
    </section>
  );
}
