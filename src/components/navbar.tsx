"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
  submenu?: NavLink[];
}

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pharma Factory", href: "/services/pharma" },
    { name: "Real Estate", href: "/services/realestate" },
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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Image
              src="/logo2.png"
              alt="Jawosh Logo"
              width={35}
              height={35}
              className="rounded-md"
            />
          </motion.div>
          JAWOSH<span className="text-dark">Tech</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>

              {/* Dropdown */}
              {link.submenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity mt-2 min-w-[200px] z-50"
                >
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-maroon-700 hover:text-white transition"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button className="bg-primary text-white shadow-md hover:shadow-[0_0_15px_#800000] transition-all duration-300">
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
            <div key={link.name} className="w-full text-center">
              <Link
                href={link.href}
                className="py-3 text-gray-700 hover:text-primary transition-colors w-full block"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>

              {/* Mobile Dropdown */}
              {link.submenu && (
                <div className="flex flex-col w-full">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      className="py-2 text-gray-700 hover:text-primary transition-colors w-full block pl-6"
                      onClick={() => setOpen(false)}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Button className="my-3 bg-primary text-white w-3/4 hover:shadow-[0_0_15px_#800000] transition-all duration-300">
            Get Started
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};
