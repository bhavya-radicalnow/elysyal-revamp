"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

import { motion } from "framer-motion";

export default function IoTSolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[rgb(225,235,247)] flex items-center justify-center relative overflow-hidden pt-20 pb-10">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-200/30 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >


            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
              IoT Solutions
            </h1>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/60 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">
                Under Maintenance
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              We&apos;re currently engineering a smart, connected ecosystem for our IoT solutions. 
              Please check back soon to see how we&apos;re bridging the physical and digital worlds.
            </p>

            {/* CTA */}
            <Link
              href="/"
              className="
                inline-flex items-center justify-center 
                px-8 py-4 
                text-base font-bold text-white 
                bg-black rounded-xl 
                hover:bg-gray-800 
                transition-all duration-300 
                shadow-lg hover:shadow-xl hover:-translate-y-1
              "
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
