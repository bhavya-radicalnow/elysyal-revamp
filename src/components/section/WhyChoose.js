"use client";

import Image from "next/image";

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
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#FEECEF] via-[#E8E8FF] to-[#E5F2FF]">
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
                  <p className="text-[#A25988] text-lg font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image (Robot) */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Using the same robot image as a placeholder since User does not have the specific peace-sign pose yet. 
                 Positioning it to look prominent. */}
            <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[600px] lg:h-[700px]">
                <Image
                  src="/robot1.webp" 
                  alt="Why Choose Robot"
                  fill
                  className="object-contain"
                  priority
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}