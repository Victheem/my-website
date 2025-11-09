"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-maroon-700 text-white py-24 text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black" >
          Get in Touch with Us
        </h1>
        <p className="text-black/80 max-w-2xl mx-auto">
          We’d love to hear from you. Fill out the form below or reach us
          through our contact details.
        </p>
      </motion.div>

      {/* Contact Form & Info */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg border border-maroon-200"
        >
          <h2 className="text-2xl font-bold mb-6 text-maroon-700">
            Contact Form
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500 outline-none transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500 outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-maroon-500 outline-none transition"
              rows={5}
            />
          </div>
          <Button
            type="submit"
            className="mt-6 bg-maroon-700 text-white rounded-full px-6 py-3 hover:shadow-[0_0_20px_rgba(128,0,0,0.6)] transition-all duration-300"
          >
            Send Message
          </Button>
        </motion.form>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-maroon-200">
            <h2 className="text-2xl font-bold mb-4 text-maroon-700">
              Our Contact
            </h2>
            <p className="text-gray-700 mb-2">📍 Abuja, Nigeria</p>
            <p className="text-gray-700 mb-2">✉ info@jawoshtech.com</p>
            <p className="text-gray-700 mb-2">📞 +234 800 000 0000</p>
          </div>

          {/* Map */}
          <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-maroon-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.431273148258!2d7.487244714768649!3d9.076538792843056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104f8e59f25a3fdb%3A0x123456789abcdef!2sAbuja!5e0!3m2!1sen!2sng!4v1699344400000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Glowing maroon bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary via-red-700 to-primary"
      />
    </main>
  );
}
