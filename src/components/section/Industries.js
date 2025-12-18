"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const industriesLeft = [
  {
    title: "Healthcare",
    description: "Digital health solutions, telemedicine platforms, and AI-powered diagnostics.",
  },
  {
    title: "Logistics",
    description: "Supply chain optimisation, fleet management, and smart tracking systems.",
  },
  {
    title: "Fintech",
    description: "Digital banking, payment systems, and blockchain financial solutions.",
  },
  {
    title: "Wellness & Fitness",
    description: "Fitness apps, health monitoring, and personalized wellness platforms.",
  },
];

const industriesRight = [
  {
    title: "Education",
    description: "E-learning platforms, educational apps, and AI-powered tutoring systems.",
  },
  {
    title: "Real Estate",
    description: "Property management, virtual tours, and smart building solutions.",
  },
  {
    title: "Retail",
    description: "E-commerce platforms, inventory management, and customer analytics.",
  },
  {
    title: "Startups",
    description: "MVP development, scalable architecture, and rapid prototyping solutions.",
  },
];

const CleanCard = ({ title, description }) => (
  <div className="group relative bg-white rounded-[32px] p-[1.5px] bg-gradient-to-br from-pink-300/60 via-purple-300/40 to-blue-300/60 hover:from-pink-400 hover:to-blue-400 transition-all duration-300">
    <div className="bg-white rounded-[30px] p-8 h-full">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Industries() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B9749D] via-[#818CF8] to-[#60A5FA]">
              Industries We Transform
            </span>
          </h2>
          <p className="text-gray-900 max-w-3xl mx-auto text-base sm:text-lg">
            We partner with businesses across diverse industries to deliver tailored technology solutions that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
            
            {/* Left Column */}
            <div className="space-y-6 z-10">
                {industriesLeft.map((industry) => (
                    <CleanCard key={industry.title} {...industry} />
                ))}
            </div>

            {/* Center Humanoid Robot */}
            <div className="hidden lg:flex justify-center items-center relative h-full min-h-[700px]">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                        src="/Rb 3.webp" 
                        alt="Elysial Robot"
                        width={600}
                        height={900}
                        className="object-contain w-[140%] max-w-none drop-shadow-2xl"
                        priority
                    />
                  </motion.div>
            </div>

            {/* Right Column */}
             <div className="space-y-6 z-10">
                {industriesRight.map((industry) => (
                    <CleanCard key={industry.title} {...industry} />
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}