"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "@/components/ui/Skeleton";

export default function ServiceFeatures({ 
  title = "Key Features & Services",
  description = "",
  features = [] 
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {isLoading ? (
            <div className="mb-6 flex flex-col items-center gap-3">
              <Skeleton height={48} width={350} />
            </div>
          ) : (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b388eb] to-[#6391F4]">
                {title}
              </span>
            </motion.h2>
          )}

          {isLoading ? (
            <div className="max-w-3xl mx-auto">
              <Skeleton count={2} height={18} />
            </div>
          ) : (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="flex gap-4 items-baseline">
                <div className="flex items-center gap-3 shrink-0">
                  <Skeleton width={30} height={30} />
                  <Skeleton width={32} height={2} />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <Skeleton height={24} width="70%" />
                  <Skeleton count={2} height={14} />
                </div>
              </div>
            ))
          ) : (
            features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 group items-baseline"
              >
                {/* Number & Line */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-2xl font-bold text-[#c084fc] group-hover:text-[#6391F4] transition-colors">
                    {feature.number}
                  </span>
                  <div className="h-[2px] w-8 bg-[#e9d5ff] group-hover:bg-[#6391F4] transition-colors rounded-full" />
                </div>
                
                {/* Title & Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6391F4] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
