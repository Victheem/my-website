"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/workers1.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />

        {/* Maroon Overlay */}
        <div className="absolute inset-0 bg-[#800000]/60 z-0"></div>

        <div className="absolute inset-0 bg-maroon/80 mix-blend-multiply animate-pulse" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl w-full mx-auto px-6 text-center text-white"
      >
        <Badge
          variant="secondary"
          className="rounded-full py-1 px-3 border border-white/40 bg-white/10 backdrop-blur-sm"
          asChild
        >
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-5xl md:text-6xl font-bold tracking-tight"
        >
          Customized <span className="text-white/90">Solutions</span> for Modern
          Businesses
        </motion.h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-white/80">
          Empowering businesses through technology and innovation. From
          contracting to automation, we build what drives your future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#800000] hover:bg-[#800000]/90 hover:shadow-[0_0_15px_#800000aa] transition-all duration-300 text-white rounded-full px-8 py-3 text-base"
          >
            Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white text-black hover:bg-white/10 transition-all duration-300 flex items-center gap-2 px-8 py-3"
          >
            <CirclePlay className="h-5 w-5" /> Watch Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
