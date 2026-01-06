"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import Skeleton from "@/components/ui/Skeleton";

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

const CleanCard = ({ title, description, isLoading }) => (
  <div className="group relative bg-white rounded-[32px] p-[1.5px] bg-gradient-to-br from-pink-300/60 via-purple-300/40 to-blue-300/60 hover:from-pink-400 hover:to-blue-400 transition-all duration-300">
    <div className="bg-white rounded-[30px] p-8 h-full">
      {isLoading ? (
        <div className="space-y-3">
          <Skeleton height={20} width="60%" />
          <Skeleton count={2} height={14} />
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold  text-black mb-3">{title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </>
      )}
    </div>
  </div>
);

export default function Industries() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 pl-4 md:pl-8 xl:pl-16">
          {isLoading ? (
            <div className="flex justify-center mb-4">
              <Skeleton height={48} width={400} />
            </div>
          ) : (
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B9749D] via-[#818CF8] to-[#60A5FA]">
                Industries We Transform
              </span>
            </h2>
          )}
          
          {isLoading ? (
            <div className="max-w-3xl mx-auto">
              <Skeleton count={2} height={18} />
            </div>
          ) : (
            <p className="text-gray-900 max-w-3xl mx-auto text-base sm:text-lg">
              We partner with businesses across diverse industries to deliver tailored technology solutions that drive growth and innovation.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
            
            {/* Left Column */}
            <div className="space-y-6 z-10">
                {industriesLeft.map((industry) => (
                    <CleanCard key={industry.title} {...industry} isLoading={isLoading} />
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
                    <ImageWithSkeleton
                        src="/Rb 3.webp" 
                        alt="Elysial Robot"
                        width={600}
                        height={1200}
                        className="object-contain w-[140%] max-w-none drop-shadow-2xl"
                        priority
                    />
                  </motion.div>
            </div>

            {/* Right Column */}
             <div className="space-y-6 z-10">
                {industriesRight.map((industry) => (
                    <CleanCard key={industry.title} {...industry} isLoading={isLoading} />
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}