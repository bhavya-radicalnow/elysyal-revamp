"use client";

import React, { useState, useEffect } from 'react'
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import Image from "next/image";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import CallToAction from "@/components/section/CallToAction";
import Skeleton from "@/components/ui/Skeleton";

export default function Techstack() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (

    <ServicePageLayout
      heroPadding="pt-44 md:pt-36 lg:pt-40 xl:pt-48 pb-44 md:pb-36 lg:pb-40 xl:pb-48"
      title={<>Built <span className="font-normal">on Proven</span> Technology, <br /> <span className="font-normal">Designed for</span> What’s Next</>}
      description="We select modern, reliable technologies that deliver strong performance today while providing the flexibility and scalability needed to support tomorrow’s growth and evolving business demands."
      heroImage="/Tech-Stack Image 01 .webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{
        text: "Book a Demo",
        href: "#",
        icon: (
          <div className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center bg-white">
            <svg className="w-2.5 h-2.5 text-blue-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )
      }}

    >
      {/* Tech Stack Section */}
      <section className="py-28 md:py-36 bg-white  dark:bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {isLoading ? (
              <div className="mb-6 space-y-3 flex flex-col items-center">
                <Skeleton height={40} width="70%" />
                <Skeleton height={40} width="50%" />
              </div>
            ) : (
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ backgroundImage: 'linear-gradient(90deg, #A49EF0 0%, #5B8bf3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Built with the right tools for <br />
                long-term success
              </h2>
            )}

            {isLoading ? (
              <div className="max-w-3xl mx-auto">
                <Skeleton count={2} height={18} />
              </div>
            ) : (
              <p className="text-black font-medium text-lg leading-relaxed">
                We select technologies that balance speed, reliability, and flexibility. Our stack supports rapid development while ensuring stability, security, and future scalability.
              </p>
            )}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend Technologies",
                description: "Modern frontend frameworks used to create fast, responsive, and user-friendly interfaces across web and mobile platforms.",
                reason: "Delivers smooth user experiences, faster UI development, and consistent design across devices.",
                iconGradient: "linear-gradient(135deg, #7C9EF2 0%, #3B82F6 100%)",
                icon: "/icons/frontend.svg"
              },
              {
                title: "Backend Technologies",
                description: "Scalable backend systems that handle business logic, APIs, and data processing efficiently and securely.",
                reason: "Ensures performance, reliability, and easy integration with third-party services as systems grow.",
                iconGradient: "linear-gradient(135deg, #A49EF0 0%, #8B5CF6 100%)",
                icon: "/icons/backend.svg"
              },
              {
                title: "DevOps Tools",
                description: "Automation tools for continuous integration, deployment, testing, and monitoring across environments.",
                reason: "Reduces deployment risk, speeds up releases, and maintains consistent quality.",
                iconGradient: "linear-gradient(135deg, #7C9EF2 0%, #10B981 100%)",
                icon: "/icons/devops.svg"
              },
              {
                title: "Cloud Platforms",
                description: "Cloud-native platforms used to host, scale, and manage applications globally with high availability.",
                reason: "Provides flexibility, cost efficiency, and the ability to scale infrastructure on demand.",
                iconGradient: "linear-gradient(135deg, #A49EF0 0%, #EC4899 100%)",
                icon: "/icons/cloud.svg"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
              >
                {/* Icon Placeholder */}
                <div
                  className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-sm p-3.5"
                  style={{ background: item.iconGradient }}
                >
                  <ImageWithSkeleton
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                {isLoading ? (
                  <div className="space-y-4">
                    <Skeleton height={28} width="60%" />
                    <Skeleton count={2} height={16} />
                    <div className="pt-6">
                      <Skeleton height={18} width="40%" />
                      <Skeleton height={16} width="80%" />
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {item.title}
                    </h3>
                    <p className="text-black leading-relaxed mb-8 min-h-[48px]">
                      {item.description}
                    </p>

                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-bold text-black mb-2">
                        Why it matter:
                      </h4>
                      <p className="text-black leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28 md:py-36" style={{ backgroundColor: '#EBF3FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Text & List */}
            <div>
              {isLoading ? (
                <div className="mb-10 space-y-3">
                  <Skeleton height={40} width="80%" />
                  <Skeleton height={40} width="60%" />
                </div>
              ) : (
                <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-[#111827]">
                  Why our <span className="text-[#6391F4]">technology choices</span> <br />
                  <span className="text-[#B58FD8]">help your business</span>
                </h2>
              )}

              <div className="space-y-6">
                {isLoading ? (
                  Array(4).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl">
                      <Skeleton circle width={32} height={32} />
                      <Skeleton width={250} height={20} />
                    </div>
                  ))
                ) : (
                  [
                    "Faster time to market with modern frameworks and automation",
                    "Scalable architectures that grow with your business",
                    "Secure systems built with industry best practices",
                    "Easy maintenance and future-ready integrations"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-black font-semibold text-lg">{benefit}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[400px] md:h-[500px] w-full flex justify-center items-center">
              <ImageWithSkeleton
                src="/Tech-Stack Image 02 .webp"
                alt="Technology Benefits Robot"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      <CallToAction
        title="Let's choose the right stack for your product"
        description="Share your goals and technical needs, and our experts will help define the most suitable technology stack for your project."
        primaryBtnText="Start Your Project"
        primaryBtnLink="#"
      />

    </ServicePageLayout>
  )
}

