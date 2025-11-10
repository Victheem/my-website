"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface Interactive3DCardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const Interactive3DCard: React.FC<Interactive3DCardProps> = ({
  imageSrc,
  title,
  subtitle,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);
  const rotateX = useTransform(y, [-100, 100], [12, -12]);

  function handlePointer(e: React.PointerEvent<HTMLDivElement>) {
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
    <motion.div
      ref={containerRef}
      onPointerMove={handlePointer}
      onPointerLeave={resetPointer}
      style={{ rotateY, rotateX }}
      className={`relative flex items-center justify-center ${className}`}
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
            src={imageSrc}
            alt={title}
            fill
            className="object-contain pointer-events-none"
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#800000]" />
            <span>{title}</span>
          </div>
          {subtitle && <div className="text-xs">{subtitle}</div>}
        </div>
      </motion.div>

      {/* Floating glow behind card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0.08 }}
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-6 rounded-2xl bg-[radial-gradient(circle,#80000033,#0000)] blur-3xl"
      />
    </motion.div>
  );
};
