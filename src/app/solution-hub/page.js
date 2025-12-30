"use client";

import React, { useState, useEffect } from 'react'
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";
import Image from "next/image";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import Skeleton from "@/components/ui/Skeleton";

export default function solutionhubPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ServicePageLayout
      title=" Smart, Ready-to-Scale Digital Solutions"
      description="Our Solution Hub brings together proven, ready-to-use digital solutions designed to solve real business challenges. From pre-built products to customizable platforms, we help teams launch faster, reduce development effort, and scale with confidence."
      heroImage="/Solution Hub 03.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}
    >

      {/* Ready Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Row: Text | Robot | Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">

            {/* Column 1: Text Content */}
            <div className="lg:pr-8">
              {isLoading ? (
                <div className="mb-6 space-y-3">
                  <Skeleton height={60} width="80%" />
                  <Skeleton height={60} width="60%" />
                </div>
              ) : (
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black leading-tight">
                  Ready <br />
                  Solutions
                </h2>
              )}

              {isLoading ? (
                <div className="mb-8">
                  <Skeleton count={3} height={18} />
                </div>
              ) : (
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Pre-built and customizable solutions designed to address common business needs across industries, helping you go live faster with lower risk.
                </p>
              )}

              {isLoading ? (
                <Skeleton height={48} width={180} className="rounded-full" />
              ) : (
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
                  style={{ background: 'linear-gradient(90deg, #7C9EF2 0%, #A49EF0 100%)' }}
                >
                  Start Your Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>

            {/* Column 2: Robot Image */}
            <div className="relative h-[300px] md:h-[400px] flex justify-center items-center">
              <ImageWithSkeleton
                src="/Solution Hub 01.webp"
                alt="Ready Solutions Robot"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Column 3: Card 1 */}
            <div className="bg-[#F8F9FF] rounded-[2rem] p-8 h-full flex flex-col justify-center">
              {isLoading ? (
                <div className="space-y-6">
                  <Skeleton height={64} width={64} className="rounded-2xl" />
                  <Skeleton height={24} width="80%" />
                  <Skeleton count={2} height={14} />
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-200 to-blue-200 mb-6 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Pre-Built Software Products
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Reusable, production-ready software products that can be quickly customized to your business needs.
                  </p>
                </>
              )}
            </div>

          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="bg-[#F8F9FF] rounded-[2rem] p-8 h-64">
                  <Skeleton height={64} width={64} className="rounded-2xl mb-6" />
                  <Skeleton height={24} width="80%" className="mb-3" />
                  <Skeleton count={2} height={14} />
                </div>
              ))
            ) : (
              <>
                {/* Card 2 */}
                <div className="bg-[#F8F9FF] rounded-[2rem] p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#D6D8EA] mb-6 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Business-Critical Systems
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Solutions designed for enterprises that require high performance, security, and reliability.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#F8F9FF] rounded-[2rem] p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-200 to-teal-200 mb-6 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Development Accelerators & Frameworks
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Reusable components, templates, and frameworks that speed up development and ensure consistency.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#F8F9FF] rounded-[2rem] p-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#EAD6EA] mb-6 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    End-to-End Digital Platforms
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive platforms designed to support complex business operations and user ecosystems.
                  </p>
                </div>
              </>
            )}
          </div>

        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 md:py-24 bg-[#F2F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Content & Grid */}
            <div>
              {isLoading ? (
                <div className="mb-6 space-y-3">
                  <Skeleton height={48} width="80%" />
                  <Skeleton height={48} width="60%" />
                </div>
              ) : (
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
                  Why Our <span className="text-[#3B82F6]">Solution Hub</span> <br />
                  <span className="text-[#3B82F6]">Works!</span>
                </h2>
              )}

              {isLoading ? (
                <div className="mb-10">
                  <Skeleton count={2} height={18} />
                </div>
              ) : (
                <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                  Our Solution Hub brings together proven architectures, ready-to-scale frameworks, and real-world expertise to help businesses move from idea to impact—faster, safer, and smarter.
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isLoading ? (
                  Array(4).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100">
                      <Skeleton width={48} height={48} className="rounded-xl" />
                      <Skeleton width={150} height={20} />
                    </div>
                  ))
                ) : (
                  [
                    {
                      title: "Proven, Production-Ready Foundations",
                      iconColor: "bg-cyan-100",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                        </svg>
                      )
                    },
                    {
                      title: "Accelerated Time-to-Market",
                      iconColor: "bg-purple-100",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      )
                    },
                    {
                      title: "Built to Scale with Your Business",
                      iconColor: "bg-green-100",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                      )
                    },
                    {
                      title: "Expert-Led Engineering Excellence",
                      iconColor: "bg-orange-100",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
                        {item.icon}
                      </div>
                      <span className="text-gray-900 font-bold text-base leading-snug">
                        {item.title}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[400px] md:h-[500px] w-full flex justify-center lg:justify-end">
              <ImageWithSkeleton
                src="/Solution Hub 02.webp"
                alt="Solution Hub Success Robot"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      <CallToAction  
        title="Turn Ready Solutions Into Real Results"
        description="Whether you need a quick launch or a scalable long-term platform, our Solution Hub gives you a strong foundation to build on."
        primaryBtnText="Start Your Project"
        primaryBtnLink="#"
      />

    </ServicePageLayout>

  )
}

