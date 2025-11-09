"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full shadow-md bg-white/90 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Text */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="relative w-10 h-10"
          >
            <Image
              src="/logo.png" // replace with your logo
              alt="JTP Logo"
              fill
              className="object-contain"
            />
          </motion.div>
          <span className="text-2xl font-bold text-[#800000]">
            JAWOSH<span className="text-gray-800">Tech</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-700 transition-colors ${
                pathname === link.href
                  ? "text-[#800000] font-semibold"
                  : "hover:text-[#800000]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-[#800000] text-white shadow-md hover:shadow-[0_0_15px_#800000] transition-all duration-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center md:hidden bg-white border-t border-gray-100 shadow-sm"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`py-3 w-full text-center transition-colors ${
                pathname === link.href
                  ? "text-[#800000] font-semibold"
                  : "text-gray-700 hover:text-[#800000]"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="my-3 bg-[#800000] text-white w-3/4 hover:shadow-[0_0_15px_#800000] transition-all duration-300">
            Get Started
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};
