"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Custom AI solutions, neural networks, and intelligent automation to transform your business processes.",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100"
  },
  {
    title: "Blockchain Solutions",
    description: "Secure, decentralized applications and smart contracts for next-generation business models.",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100"
  },
  {
    title: "Data Science & ML",
    description: "Extract insights from your data with advanced analytics, ML models, and data-driven strategies.",
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100"
  },
  {
    title: "Custom Software",
    description: "Scalable, robust software applications tailored to your unique business requirements.",
    iconColor: "text-violet-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100"
  },
  {
    title: "IoT Solutions",
    description: "Connected devices and smart systems that enable real-time monitoring and automation.",
    iconColor: "text-cyan-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-100"
  },
  {
    title: "Legacy Modernization",
    description: "Custom AI solutions, neural networks, and intelligent automation to transform your business processes.",
    iconColor: "text-fuchsia-500",
    bgColor: "bg-fuchsia-50",
    borderColor: "border-fuchsia-100"
  },
  {
    title: "Staff Augmentation",
    description: "Skilled developers and tech specialists to expand your team and accelerate project delivery.",
    iconColor: "text-teal-500",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100"
  },
];

const ServiceCard = ({ title, description, iconColor, bgColor, borderColor }) => (
  <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
    <div className={`w-14 h-14 rounded-full ${bgColor} ${borderColor} border flex items-center justify-center mb-6`}>
      {/* Configuration for Icon Placeholder */}
       <svg className={`w-7 h-7 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
      {description}
    </p>

    <div className="mt-auto">
      <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group cursor-pointer hover:bg-gray-900 hover:border-gray-900 transition-colors">
        <svg 
          className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
);

export default function Services() {
  const [s1, s2, s3, s4, s5, s6, s7, s8] = services;

  return (
    <section className="bg-[#F3F6FF] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Row 1 */}
          <div className="order-1">
             <ServiceCard {...s1} />
          </div>
          <div className="order-2">
             <ServiceCard {...s2} />
          </div>
          
          {/* Text Block - Spans 2 cols */}
          <div className="order-3 md:col-span-2 lg:col-span-2 flex flex-col justify-center px-4 lg:pl-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Technology <br /> Services
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              From AI and blockchain to custom software development, we deliver cutting-edge solutions that drive innovation and business growth.
            </p>
          </div>


          {/* Row 2 */}
          <div className="order-4">
             <ServiceCard {...s3} />
          </div>
          <div className="order-5">
             <ServiceCard {...s4} />
          </div>
          
          {/* Robot Image - Spans 2 cols */}
          <div className="order-6 md:col-span-2 lg:col-span-2 relative min-h-[300px] flex items-center justify-center">
             {/* Decorational Image placement */}
             <div className="relative w-full h-full lg:absolute lg:-right-20 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] lg:h-[140%] pointer-events-none">
                <Image
                  src="/robot1.webp" // Using existing robot as placeholder, user can swap
                  alt="Future Tech Robot"
                  width={800}
                  height={800}
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
             </div>
          </div>


          {/* Row 3 - Full Row of Cards */}
          <div className="order-7">
             <ServiceCard {...s5} />
          </div>
          <div className="order-8">
             <ServiceCard {...s6} />
          </div>
          <div className="order-9">
             <ServiceCard {...s7} />
          </div>
          <div className="order-10">
             <ServiceCard {...s8} />
          </div>

        </div>
      </div>
    </section>
  );
}