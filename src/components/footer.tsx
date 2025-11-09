"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-white py-10 mt-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold mb-2">JAWOSH Technologies</h2>
          <p className="text-sm text-gray-200">
            Innovative technology and contracting solutions for modern
            businesses.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-200">Abuja, Nigeria</p>
          <p className="text-sm text-gray-200">info@jawoshtech.com</p>
          <p className="text-sm text-gray-200">+234 800 000 0000</p>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-gray-300/30 pt-4 text-sm text-gray-200">
        © {new Date().getFullYear()} JAWOSH Technologies. All rights reserved.
      </div>
    </motion.footer>
  );
};
