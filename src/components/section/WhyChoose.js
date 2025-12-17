"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    value: "25+ Countries",
    label: "Global Reach",
  },
  {
    value: "99.9% Uptime",
    label: "Enterprise Security",
  },
  {
    value: "10x Growth",
    label: "Scalable Solutions",
  },
  {
    value: "40% Faster",
    label: "Global Reach",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#FEECEF] via-[#E8E8FF] to-[#E5F2FF] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-10 z-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#1F1F1F] tracking-tight">
                Why Choose ELYSYAL
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                We combine technical excellence with business acumen to deliver solutions that not only work but drive measurable results.
              </p>
            </div>

            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">
                    {stat.value}
                  </h3>
                  <p className="text-[#752e5c] text-lg font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image (Robot) */}
          <div className="relative flex justify-center lg:justify-end">
           
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-20 w-[350px] h-[450px] sm:w-[600px] sm:h-[750px] lg:w-[900px] lg:h-[1100px]  lg:-mr-38 lg:-mb-52 lg:translate-x-2 lg:translate-y-3"
            >
                <Image
                  src="/Rb 4.webp" 
                  alt="Why Choose Robot"
                  fill
                  className="object-contain"
                  priority
                />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}