"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AboutRealEstate = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-maroon-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-maroon-900 leading-tight">
            About Our{" "}
            <span className="text-maroon-600">Real Estate Division</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            <TooltipProvider>
              We are more than just builders — we are{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-maroon-700 font-semibold cursor-help underline decoration-maroon-500/40">
                    innovators
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  We introduce smart designs and technology-driven construction.
                </TooltipContent>
              </Tooltip>{" "}
              shaping communities across Nigeria and beyond. Jawosh Tech
              Properties Ltd specializes in designing and managing{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-maroon-700 font-semibold cursor-help underline decoration-maroon-500/40">
                    smart residential and commercial projects
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  These include eco-friendly estates and tech-enabled business
                  spaces.
                </TooltipContent>
              </Tooltip>{" "}
              built on modern innovation, sustainability, and long-term value.
            </TooltipProvider>
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            From luxury apartments to affordable housing, our mission is to
            redefine urban living through intelligent architecture, superior
            materials, and seamless digital management systems that enhance the
            lives of our clients.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <button className="px-8 py-4 bg-maroon-700 text-black font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_#800000] hover:bg-maroon-800 transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/real-estate3.jpg"
            alt="Modern Estate Overview"
            fill
            className="object-cover rounded-3xl"
          />

          {/* Animated overlay gradient */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-tr from-maroon-900/30 via-maroon-500/20 to-transparent"
          />
        </motion.div>
      </div>

      {/* Floating Circle Connector */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] w-[120px] h-[120px] border-2 border-maroon-500/30 rounded-full flex items-center justify-center backdrop-blur-md"
      >
        <motion.span
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-maroon-700 font-semibold text-sm"
        >
          We Innovate, Create & Build
        </motion.span>
      </motion.div>
    </section>
  );
};

export default AboutRealEstate;
