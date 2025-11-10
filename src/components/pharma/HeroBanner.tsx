"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaIndustry } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function HeroBanner() {
  // For 3D tilt effect
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);
  const rotateX = useTransform(y, [-100, 100], [12, -12]);

  function handlePointer(e: React.PointerEvent) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set((px - 0.5) * 200);
    y.set((py - 0.5) * 200);
  }

  function resetPointer() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/factory-layout1.jpg"
        alt="Pharma hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Animated maroon overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 0.62, 0.5],
          background: [
            "linear-gradient(120deg,#800000cc,#b22222cc)",
            "linear-gradient(240deg,#800000cc,#a40000cc)",
            "linear-gradient(120deg,#800000cc,#b22222cc)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      />

      {/* Diagonal glow beam */}
      <motion.div
        initial={{ x: "-100%", y: "-100%" }}
        animate={{ x: "100%", y: "100%" }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-[#ffcccc33] to-transparent"
        style={{ mixBlendMode: "soft-light" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full mb-6">
              <FaIndustry className="text-white w-5 h-5" />
              <span className="text-sm">Pharma Equipment Manufacturing</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Precision-engineered pharmaceutical equipment that{" "}
              <span className="text-[#ffefef]">drives production</span> and
              ensures compliance.
            </h1>

            <p className="text-gray-200 max-w-xl mb-8">
              At Jawosh, we design, produce and commission high-performance
              pharmaceutical lines — from formulation to packaging — with
              industry-leading reliability and compliance to international
              standards.
            </p>

            {/* ✅ Correct Tooltip Buttons */}
            <TooltipProvider>
              <div className="flex flex-wrap gap-4 items-center">
                {/* Tooltip 1 */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="bg-[#800000] text-white rounded-full px-6 py-3 shadow-md hover:shadow-[0_0_20px_#800000aa] transition">
                      Request Quote <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Request a tailored quote for your production line</p>
                  </TooltipContent>
                </Tooltip>

                {/* Tooltip 2 */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full border-white text-white px-6 py-3 hover:bg-white/10 transition"
                    >
                      Factory Tour
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>See our state-of-the-art manufacturing facility</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            {/* Accordion section */}
            <div className="mt-10 max-w-xl">
              <Accordion type="single" defaultValue="item-0" collapsible>
                <AccordionItem
                  value="item-0"
                  className="mb-3 bg-white/5 rounded-lg"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-white font-medium">
                    Capacity & Output
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-sm text-gray-200">
                    Production lines from 50–2000 units/hour. Modular design for
                    throughput scaling and easy maintenance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-1"
                  className="mb-3 bg-white/5 rounded-lg"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-white font-medium">
                    Lead Time & Support
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-sm text-gray-200">
                    Typical delivery 14–20 weeks depending on customization.
                    Onsite commissioning and 12-month warranty included.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white/5 rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-left text-white font-medium">
                    Compliance
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-sm text-gray-200">
                    GMP compliant design, CE & ISO-ready documentation packages,
                    and validation support available.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>

          {/* Right: 3D Factory card */}
          <motion.div
            ref={containerRef}
            onPointerMove={handlePointer}
            onPointerLeave={resetPointer}
            style={{ rotateY, rotateX }}
            className="relative w-full h-96 md:h-[520px] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
              className="w-full max-w-md lg:max-w-lg bg-white/5 border border-white/10 rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm"
            >
              <div className="relative w-full h-80 md:h-[420px]">
                <Image
                  src="/floor2.jpg"
                  alt="3D Factory Layout"
                  fill
                  className="object-contain pointer-events-none"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#800000]" />
                  <span>Factory Layout — Interactive preview</span>
                </div>
                <div className="text-xs">Hover to inspect</div>
              </div>
            </motion.div>

            {/* Floating glow behind card */}
            <motion.div
              aria-hidden
              initial={{ scale: 0.9, opacity: 0.08 }}
              animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.08, 0.12, 0.08] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-6 rounded-2xl bg-[radial-gradient(circle,#80000033,#0000)] blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs">Scroll</span>
          <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center">
            <span className="text-sm">↓</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
