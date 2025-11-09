"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#faf5f5] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Get in <span className="text-[#800000]">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Have a project in mind or want to know more about our services? Fill
          out the form below — we’ll get back to you shortly.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-[0_0_25px_#80000022] p-8 md:p-10 mx-auto max-w-3xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none transition-all"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#800000] outline-none transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            className="px-8 py-3 text-white bg-[#800000] hover:bg-[#a00000] rounded-xl shadow-[0_0_15px_#80000077] hover:shadow-[0_0_25px_#800000aa] transition-all duration-300"
          >
            Send Message
          </Button>
        </motion.form>

        {/* Decorative glow orbs */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-10 left-10 w-32 h-32 bg-[#80000022] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-[#80000022] rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Contact;
