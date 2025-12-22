"use client";

import Image from "next/image";

const features = [
  {
    title: "AI-First Development",
    description:
      "Generate production-ready code with natural language prompts. Our AI understands your intent and builds accordingly.",
    icon: "/AI.webp",
  },
  {
    title: "Full-Stack Platform",
    description:
      "From frontend to backend, database to deployment—everything you need in one seamless environment.",
    icon: "/_Layer_.webp",
  },
  {
    title: "Enterprise Security",
    description:
      "Built-in authentication, authorisation, and data protection. Ship secure applications from day one.",
    icon: "/lock.webp",
  },
  {
    title: "Fast Deployment",
    description:
      "One-click deployment to production. Scale automatically with your traffic without any configuration.",
    icon: "/Fast.webp",
  },
];

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-[#F8FBFF] rounded-[32px] p-8 hover:shadow-md transition-shadow duration-300">
    <div className="mb-6">
      <div className="relative w-16 h-16">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {title}
    </h3>

    <p className="text-gray-900 text-[15px] leading-relaxed">
      {description}
    </p>
  </div>
);


export default function Features() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              Everything You <br />
              Need to <span className="text-[#3B82F6]">Build</span> <br />
              <span className="text-[#3B82F6]">Fast</span>
            </h2>
            
            <p className="text-gray-900 text-lg sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Future Forge combines the best of AI generation with developer-friendly tools to help you ship products faster than ever.
            </p>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6391F4] to-[#937DC0] text-white rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
              Start Your Project
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
