"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Custom AI solutions, neural networks, and intelligent automation to transform your business processes.",
    icon: "/Icon - 01.webp",
    link: "/services/ai-development"
  },
  {
    title: "Blockchain Solutions",
    description: "Secure, decentralized applications and smart contracts for next-generation business models.",
    icon: "/Icon - 02.webp",
    link: "/services/blockchain"
  },
  {
    title: "Data Science & ML",
    description: "Extract insights from your data with advanced analytics, ML models, and data-driven strategies.",
    icon: "/Icon - 03.webp",
    link: "/services/data-science"
  },
  {
    title: "Custom Software",
    description: "Scalable, robust software applications tailored to your unique business requirements.",
    icon: "/Icon - 04.webp",
    link: "/services/custom-software"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: "/Icon - 05.webp",
    link: "/services/mobile-app-development"
  },
  {
    title: "IoT Solutions",
    description: "Connected devices and smart systems that enable real-time monitoring and automation.",
    icon: "/Icon - 06.webp",
    link: "#"
  },
  {
    title: "Legacy Modernization",
    description: "Custom AI solutions, neural networks, and intelligent automation to transform your business processes.",
    icon: "/Icon - 07.webp",
    link: "#"
  },
  {
    title: "Staff Augmentation",
    description: "Skilled developers and tech specialists to expand your team and accelerate project delivery.",
    icon: "/Icon - 08.webp",
    link: "/services/staff-augmentation"
  },
];

const ServiceCard = ({ title, description, icon, link }) => {
  const CardContent = (
    <div className="bg-[#FFFFFF66]
 rounded-3xl p-9 hover:shadow-xl hover:bg-white transition-shadow duration-300  flex flex-col h-full cursor-pointer h-full">
      <div className="mb-6 relative w-19 h-19">
        <Image 
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-900 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="mt-auto">
        <div className="w-8 h-8 rounded-full border border-black-300 flex items-center justify-center group cursor-pointer hover:bg-gray-900 hover:border-gray-900 transition-colors">
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

  return link && link !== "#" ? (
    <Link href={link} className="block h-full">
      {CardContent}
    </Link>
  ) : (
    <div className="h-full">
      {CardContent}
    </div>
  );
};

export default function Services() {
  const [s1, s2, s3, s4, s5, s6, s7, s8] = services;

  return (
    <section className="bg-[#EFF4FF] py-24 overflow-hidden">
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
            <p className="text-gray-800 text-lg leading-relaxed max-w-lg">
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
            
             <motion.div 
               initial={{ y: 0 }}
               animate={{ y: [0, -40, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-full h-full lg:absolute lg:-right-20 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] lg:h-[140%] pointer-events-none"
             >
                <Image
                  src="/Rb 2.webp" 
                  alt="Future Tech Robot"
                  width={800}
                  height={800}
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
             </motion.div>
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