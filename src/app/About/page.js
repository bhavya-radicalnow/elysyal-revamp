import React from 'react'
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import FAQ from "@/components/section/FAQ";

export default function AboutPage() {
  const principles = [
    {
      title: "Problem Before Technology",
      description: "We don't start with solutions. We spend 2-4 weeks understanding your business challenge, stakeholders, and constraints. Only then do we choose technology that actually fits your needs—not trends."
    },
    {
      title: "Collaborative by Design",
      description: "We're an extension of your team, not a vendor. Weekly demos, transparent communication, and shared ownership mean you always know what we're building and why."
    },
    {
      title: "Design Meets Engineering",
      description: "Designers and engineers work together from day one. Beautiful UI that confuse users are worthless. We build solutions that are both scalable and intuitive."
    },
    {
      title: "Data-Informed Decisions",
      description: "We define success metrics upfront and measure everything. Your third project with us is better than their first with someone new—context and experience compound over time."
    },
    {
      title: "We Built for Change and User Friendly",
      description: "Your solution shouldn't become technical debt in 3 years. We design modular systems, write clean code, and mentor your team—so your investment stays valuable long-term."
    }
  ];

  return (
    <ServicePageLayout
      title="About Company"
      description="Transform your ideas into production-ready applications. Elysyal combines cutting-edge AI with intuitive tools to accelerate your development workflow."
      backgroundImage="/About Company bg.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}
      heroPadding="pt-48 md:pt-56 lg:pt-64 pb-32 md:pb-40"
    >


      {/* How It Started Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              How It Started
            </h2>

            <div className="prose prose-lg text-black mb-16 space-y-6">
              <p>
                Elysial was founded on a simple observation: most digital transformation projects fail not
                because of technology, but because strategy, design, and execution are disconnected.
              </p>
              <p>
                Our founders—veterans from leading tech companies—realized the market was fragmented.
                Strategy consultants couldn't build. Agencies couldn't think strategically. Engineers worked
                without business context. So we created something different: a company where strategy,
                design, and engineering speak the same language.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-12 mb-20">
              {/* 2015-2016 */}
              <div className="relative pl-8 border-l-4 border-blue-200">
                <h3 className="text-2xl font-bold text-black mb-4">2015–2016 | Foundation</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Small team of 5, focused on solving real problems
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    First success: AI-powered healthcare platform
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Core learning: Understanding the problem matters more than flashy tech
                  </li>
                </ul>
              </div>

              {/* 2017-2019 */}
              <div className="relative pl-8 border-l-4 border-blue-200">
                <h3 className="text-2xl font-bold text-black mb-4">2017–2019 | Growth & Depth</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Scaled to 25+ specialists across disciplines
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Expanded from startups to enterprise work
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Built proprietary Digital Discovery framework
                  </li>
                </ul>
              </div>

              {/* 2020-2025 */}
              <div className="relative pl-8 border-l-4 border-blue-200">
                <h3 className="text-2xl font-bold text-black mb-4">2020–2025 | Leadership & Innovation</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Technology serves people, not the other way around
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Speed without strategy is waste; strategy without execution is fantasy
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    The best solutions come from cross-functional collaboration
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Continuous learning keeps us relevant and ahead
                  </li>
                </ul>
              </div>
            </div>

            {/* Foundation Card */}
            <div className="bg-blue-50/50 rounded-[2rem] p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Our Foundation</h3>
              <p className="text-black leading-relaxed text-lg">
                Technology serves people first—never the other way around. Speed without strategy becomes wasted
                effort, while strategy without execution remains mere fantasy. The strongest solutions emerge from
                cross-functional collaboration between strategy, design, and engineering. Continuous learning
                ensures we stay relevant, adaptive, and always ahead of tomorrow challenges.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#8B5CF6]">
              Our Core Principles
            </h2>
            <p className="text-black font-medium text-lg md:text-xl leading-relaxed">
              We partner with businesses across diverse industries to deliver
              tailored technology solutions that drive growth and innovation.
            </p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-start"
              >
                <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* Leadership & Expertise Section */}
      <section className="py-16 md:py-24 bg-[#EAF5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black">
            Leadership & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO Card */}
            <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-48 h-48 rounded-full border-8 border-teal-600 mb-6 overflow-hidden bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-black font-medium">
                  IMAGE
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">[CEO Name]</h3>
              <p className="text-black font-medium mb-4">Co-Founder & CEO</p>
              <p className="text-black leading-relaxed text-sm">
                20+ years building tech. Strategy, product, teams.
              </p>
            </div>

            {/* CTO Card */}
            <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-48 h-48 rounded-full border-8 border-cyan-500 mb-6 overflow-hidden bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-black font-medium">
                  IMAGE
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">[CTO Name]</h3>
              <p className="text-black font-medium mb-4">Chief Technology Officer</p>
              <p className="text-black leading-relaxed text-sm">
                15+ years full-stack. 50M+ users. AWS certified.
              </p>
            </div>

            {/* CDO Card */}
            <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-48 h-48 rounded-full border-8 border-orange-300 mb-6 overflow-hidden bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-black font-medium">
                  IMAGE
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">[CDO Name]</h3>
              <p className="text-black font-medium mb-4">Chief Design Officer</p>
              <p className="text-black leading-relaxed text-sm">
                12+ years product design & design systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

    </ServicePageLayout>
  )
}
