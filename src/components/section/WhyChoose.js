"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import Skeleton from "@/components/ui/Skeleton";

const stats = [
  { value: "25+ Countries", label: "Global Reach" },
  { value: "99.9% Uptime", label: "Enterprise Security" },
  { value: "10x Growth", label: "Scalable Solutions" },
  { value: "40% Faster", label: "Performance Boost" },
];

export default function WhyChoose() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#FEECEF] via-[#E8E8FF] to-[#E5F2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10 pl-4 md:pl-8 xl:pl-16">
            <div className="space-y-6">
              {isLoading ? (
                <div className="space-y-3 xl:space-y-0">
                  <Skeleton height={48} width="80%" className="xl:w-[70%]" />
                  <div className="xl:hidden">
                    <Skeleton height={48} width="60%" />
                  </div>
                </div>
              ) : (
                <h2 className="text-3xl md:text-5xl xl:text-5xl font-extrabold text-[#1F1F1F] tracking-tight flex items-center xl:whitespace-nowrap">
                  Why Choose ELYSYAL
                </h2>
              )}

              {isLoading ? (
                <div className="max-w-lg">
                  <Skeleton count={2} height={18} />
                </div>
              ) : (
                <p className="text-black text-lg leading-relaxed max-w-lg">
                  We combine technical excellence with business acumen to deliver
                  solutions that not only work but drive measurable results.
                </p>
              )}
            </div>

            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  {isLoading ? (
                    <div className="space-y-2">
                      <Skeleton height={36} width={150} />
                      <Skeleton height={20} width={100} />
                    </div>
                  ) : (
                    <>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F]">
                        {stat.value}
                      </h3>
                      <p className="text-[#752e5c] text-lg font-medium">
                        {stat.label}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                relative
                w-full xl:w-[130%]
                max-w-[280px]
                sm:max-w-[360px]
                md:max-w-[420px]    /* iPads */
                lg:max-w-[520px]
                xl:max-w-[1160px]    /* Desktop */
                xl:-mr-32
                xl:-mb-48
                z-20
              "
            >
              <ImageWithSkeleton
                src="/Rb 4.webp"
                alt="Why Choose Robot"
                width={700}
                height={900}
                className="object-contain w-full h-auto"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
