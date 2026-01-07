import React from 'react'
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";

import Image from "next/image";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function successStoriesPage() {
  return (
    <ServicePageLayout
      title=" Results That Speak Louder Than Features"
      description="Real projects. Real timelines. Real impact. See how healthcare platforms reduced deployment time by 60%, fintech apps accelerated user adoption, and enterprises achieved seamless cloud migration."
      heroImage="/Success Stories image 02.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
    >


      {/* Success Stories Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
              More Wins Across <br />
              Industries
            </h2>
            <p className="text-black font-medium text-lg leading-relaxed">
              From startups to enterprises, teams trust ELYSYAL to deliver measurable results across diverse business domains.
            </p>
          </div>

          {/* Flex Container */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Digital Commerce Acceleration",
                description: "Helped a growing commerce brand optimize storefront performance, improve checkout flows, and prepare the platform for high-traffic campaigns.",
                iconColor: "bg-blue-100",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                )
              },
              {
                title: "Intelligent Supply Chain Systems",
                description: "Enabled smarter logistics planning through integrated systems that improved visibility, coordination, and operational control across regions.",
                iconColor: "bg-red-100",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Internal Systems Optimization",
                description: "Delivered tailored internal tools that simplified complex operations, reduced process friction, and improved team productivity.",
                iconColor: "bg-purple-100",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Data-Driven Healthcare Solutions",
                description: "Supported healthcare teams with secure, data-focused platforms that enhanced reporting, compliance readiness, and system reliability.",
                iconColor: "bg-teal-100",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Secure Financial Product Engineering",
                description: "Partnered with fintech teams to engineer reliable platforms focused on performance, security, and future-ready financial services.",
                iconColor: "bg-blue-100",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex-1 min-w-[300px] max-w-[400px]">
                <div className={`w-16 h-16 rounded-2xl ${item.iconColor} mb-6 flex items-center justify-center shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-black leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Client Success Stories */}
      <section className="py-16 md:py-24 bg-[#EBF3FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Header & Robot */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mb-16 relative">
            <div className="lg:w-1/2 z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-6 leading-tight">
                Featured Client <br />
                Success Stories
              </h2>
              <p className="text-black text-lg md:text-xl leading-relaxed max-w-lg">
                A closer look at how our technology solutions solve real-world challenges and deliver measurable business impact.
              </p>
            </div>

            {/* Flying Robot Image */}
            <div className="hidden lg:block absolute right-0 -top-20 w-[500px] h-[500px] pointer-events-none">
              <ImageWithSkeleton
                src="/Success Stories image 01.webp"
                alt="Flying Robot"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Cards Container */}
          <div className="space-y-8 relative z-10">

            {/* Row 1: 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  badge: "Platform Modernization",
                  badgeColor: "bg-blue-100 text-blue-700",
                  dotColor: "bg-blue-600",
                  title: "Healthcare Platform Modernization",
                  description: "Modernized legacy healthcare systems to streamline patient workflows, enhance data security, and support scalable cloud-based operations."
                },
                {
                  badge: "Product Engineering",
                  badgeColor: "bg-purple-100 text-purple-700",
                  dotColor: "bg-purple-600",
                  title: "Fintech App Development",
                  description: "Designed and developed a secure, high-performance mobile application enabling real-time transactions and seamless financial experiences."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${item.badgeColor}`}>
                    <span className={`w-2 h-2 rounded-full ${item.dotColor}`}></span>
                    {item.badge}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-black text-base md:text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Row 2: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  badge: "Digital Transformation",
                  badgeColor: "bg-green-100 text-green-700",
                  dotColor: "bg-green-600",
                  title: "Retail E-Commerce Transformation",
                  description: "Reimagined a retail e-commerce platform to improve performance, simplify user journeys, and support multi-channel growth."
                },
                {
                  badge: "System Optimization",
                  badgeColor: "bg-yellow-100 text-yellow-700",
                  dotColor: "bg-yellow-600",
                  title: "Logistics Operations Platform",
                  description: "Built a centralized logistics system to improve shipment visibility, optimize workflows, and support growing operational demands."
                },
                {
                  badge: "Process Automation",
                  badgeColor: "bg-red-100 text-red-700",
                  dotColor: "bg-red-600",
                  title: "Enterprise Workflow Automation",
                  description: "Implemented custom workflow automation to reduce manual processes, improve system efficiency, and enhance cross-team collaboration."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${item.badgeColor}`}>
                    <span className={`w-2 h-2 rounded-full ${item.dotColor}`}></span>
                    {item.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-black text-base leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      <CallToAction
        title="Turn Ready Solutions Into Real Results"
        description="Whether you need a quick launch or a scalable long-term platform, our Solution Hub gives you a strong foundation to build on."
        primaryButton={{ text: "Start Your Project", href: "#" }}
        secondaryButton={{ text: "Book a Demo", href: "#" }}
      />

    </ServicePageLayout>

  )
}

