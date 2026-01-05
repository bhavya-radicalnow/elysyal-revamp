"use client";

import React, { useState, useEffect } from 'react'
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";
import Image from "next/image";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import Skeleton from "@/components/ui/Skeleton";

export default function IndustriesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ServicePageLayout
      title=" Industry-Specific Digital Solutions"
      description="We design and build scalable, secure technology solutions tailored to the unique challenges and goals of every industry we serve."
      heroImage="/Industries image 01.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}
    >
      {/* Industry Solutions Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {isLoading ? (
              <div className="mb-6 space-y-3 flex flex-col items-center">
                <Skeleton height={48} width="80%" />
              </div>
            ) : (
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ backgroundImage: 'linear-gradient(90deg, #D48BB4 0%, #6391F4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Explore Our Industry Solutions
              </h2>
            )}

            {isLoading ? (
              <div className="mx-auto">
                <Skeleton count={1} height={20} width="60%" />
              </div>
            ) : (
              <p className="text-gray-700 font-medium text-lg">
                Click on any industry to learn about the specific challenges we solve and how ELYSYAL helps.
              </p>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-[20px] p-8 border border-gray-100 h-64">
                  <Skeleton height={64} width={64} className="rounded-2xl mb-6" />
                  <Skeleton height={28} width="60%" className="mb-3" />
                  <Skeleton count={2} height={16} />
                </div>
              ))
            ) : (
              [
                {
                  title: "Healthcare",
                  description: "Digital health solutions and medical software platforms.",
                  iconColor: "#A7F3D0", // Green tint
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#10B981]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  title: "Fintech",
                  description: "Financial technology solutions and payment platforms.",
                  iconColor: "#BFDBFE", // Blue tint
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3B82F6]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  title: "Education",
                  description: "E-learning platforms and education technology.",
                  iconColor: "#FEF08A", // Yellow tint
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#EAB308]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  )
                },
                {
                  title: "Real Estate",
                  description: "Property management and real estate platforms.",
                  iconColor: "#FED7AA", // Orange tint
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F97316]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  )
                },
                {
                  title: "Retail",
                  description: "E-commerce and retail management solutions.",
                  iconColor: "#FBCFE8", // Pink tint
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#EC4899]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  title: "Logistics",
                  description: "Supply chain and logistics management systems.",
                  iconColor: "#99F6E4", // Teal tint
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#14B8A6]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                  )
                }
              ].map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-pointer group"
                >
                  {/* Icon Container */}
                  <div
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: industry.iconColor }}
                  >
                    {industry.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {industry.description}
                  </p>
                </div>
              ))
            )}
          </div>

        </div>
      </section>



      {/* Challenge to Solution Section */}
      <section className="pt-16 md:pt-24 pb-0 bg-[#F2F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

            {/* Left Column: Robot Image */}
            <div className="relative h-[400px] md:h-[600px] w-full flex justify-center lg:justify-start items-end">
              <ImageWithSkeleton
                src="/Industries image 02.webp"
                alt="Challenge to Solution Robot"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {/* Right Column: Content */}
            <div className="pb-16 md:pb-24">
              {isLoading ? (
                <div className="mb-6 space-y-3">
                  <Skeleton height={48} width="60%" />
                  <Skeleton height={48} width="40%" />
                </div>
              ) : (
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  From Challenge to <br />
                  Solution
                </h2>
              )}

              {isLoading ? (
                <div className="mb-10 max-w-lg">
                  <Skeleton count={2} height={18} />
                </div>
              ) : (
                <p className="text-gray-600 text-lg mb-10 max-w-lg">
                  We transform industry challenges into opportunities through tailored technology solutions.
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Pain Points Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-50">
                  {isLoading ? (
                    <div className="space-y-4">
                      <Skeleton width={100} height={20} className="rounded-full" />
                      <Skeleton width={150} height={24} />
                      <div className="space-y-2">
                        <Skeleton height={14} width="80%" />
                        <Skeleton height={14} width="70%" />
                        <Skeleton height={14} width="90%" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold mb-4">
                        Industry Challenges
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Common Pain Points
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Legacy systems",
                          "Operational inefficiencies",
                          "Scalability and compliance"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Solutions Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                  {isLoading ? (
                    <div className="space-y-4">
                      <Skeleton width={100} height={20} className="rounded-full" />
                      <Skeleton width={150} height={24} />
                      <div className="space-y-2">
                        <Skeleton height={14} width="80%" />
                        <Skeleton height={14} width="70%" />
                        <Skeleton height={14} width="90%" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-4">
                        ELYSYAL Solutions
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Our Approach
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Custom-built platforms",
                          "Secure and scalable architectures",
                          "Automation and analytics-driven insights"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                            <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-[10px]">
                              ✓
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <CallToAction  
        title="Build Solutions That Fit Your Industry"
        description="Let's create technology that aligns with your business goals and industry demands."
        primaryBtnText="Start Your Project"
        primaryBtnLink="#"
      />

    </ServicePageLayout>
  )
}

