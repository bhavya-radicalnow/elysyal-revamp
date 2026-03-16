"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { useEffect, useState } from "react";

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyhaaiadZI5y5CcrGZXEWz3cLotXul1i3_UpuVrdDHs6GFB9NfAAI-0Fngv27zyPfU7/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setFormData({ name: "", email: "", phone: "" });
      closeContactModal();
    } catch (error) {
      setIsSubmitting(false)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[2rem] p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-black mb-8">Get in Touch</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black outline-none focus:border-blue-500 transition-all"
              />
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black outline-none focus:border-blue-500 transition-all"
              />
              <input
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black outline-none focus:border-blue-500 transition-all"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-gradient-to-r from-[#6391F4] to-[#9F7AEA] text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}