"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const equipments = [
  {
    title: "Capsule Production Line",
    image: "/equipment1.jpg",
    description:
      "Our capsule moulding and filling systems offer high precision with automated weighing, sealing, and inspection. Designed to meet GMP and WHO standards for sterile production environments.",
    specs: [
      "Output: 120,000 capsules/hour",
      "Material: Stainless Steel 316L",
      "Power: 3.2 kW, 3 Phase",
      "Control: PLC + Touchscreen Interface",
    ],
  },
  {
    title: "Syrup Filling Line",
    image: "/equipment2.jpg",
    description:
      "Fully automated liquid syrup filling line with digital calibration, capping, and labeling systems ensuring purity and throughput efficiency.",
    specs: [
      "Filling Accuracy: ±0.5%",
      "Bottle Range: 50ml - 1L",
      "Production Speed: 3,000 Bottles/Hour",
      "Integrated UV Sterilization Unit",
    ],
  },
  {
    title: "Packaging Line",
    image: "/equipment3.jpg",
    description:
      "Our packaging system integrates blister, carton, and shrink-wrap lines for a polished, tamper-proof final product presentation.",
    specs: [
      "Output: 250 Packs/Min",
      "Carton Size Range: 50×30×90mm",
      "Material Compatibility: PVC, PVDC, Aluminum",
      "Auto Rejection System for Faulty Packs",
    ],
  },
];

const EquipmentShowcase = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-maroon-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-maroon-800 mb-6"
        >
          Equipment & Production Lines
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Explore our core pharmaceutical manufacturing lines — engineered for
          efficiency, safety, and regulatory compliance.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {equipments.map((equip, i) => (
            <Dialog
              key={i}
              open={open === i}
              onOpenChange={() => setOpen(open === i ? null : i)}
            >
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-transparent hover:border-maroon-500 transition-all duration-300"
                >
                  <motion.img
                    src={equip.image}
                    alt={equip.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-maroon-700 mb-2">
                      {equip.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {equip.description}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-md border border-maroon-100 rounded-2xl shadow-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-maroon-800">
                    {equip.title}
                  </DialogTitle>
                </DialogHeader>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <img
                    src={equip.image}
                    alt={equip.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <p className="text-gray-700 leading-relaxed">
                    {equip.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
                    {equip.specs.map((s, idx) => (
                      <li key={idx}>• {s}</li>
                    ))}
                  </ul>
                </motion.div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </motion.div>

      {/* Subtle animated glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-maroon-400/20 blur-3xl rounded-full"
      />
    </section>
  );
};

export default EquipmentShowcase;
