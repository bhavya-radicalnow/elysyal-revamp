import React from 'react'
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import Image from "next/image";
import CallToAction from "@/components/section/CallToAction";

export default function Techstack() {
  return (

    <ServicePageLayout
      title={<>Built  <span className="font-normal"> on Proven  <span className="font-bold">Technology, </span>Designed for What’s Next</span></>}
      description="We select modern, reliable technologies that deliver strong performance today while providing the flexibility and scalability needed to support tomorrow’s growth and evolving business demands."
      heroImage="/Tech-Stack Image 01 .webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}

    >
      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 bg-white  dark:bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ backgroundImage: 'linear-gradient(90deg, #A49EF0 0%, #5B8bf3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Built with the right tools for <br />
              long-term success
            </h2>
            <p className="text-gray-900 font-medium text-lg leading-relaxed">
              We select technologies that balance speed, reliability, and flexibility. Our stack supports rapid development while ensuring stability, security, and future scalability.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Frontend Technologies",
                description: "Modern frontend frameworks used to create fast, responsive, and user-friendly interfaces across web and mobile platforms.",
                reason: "Delivers smooth user experiences, faster UI development, and consistent design across devices.",
                iconGradient: "linear-gradient(135deg, #7C9EF2 0%, #3B82F6 100%)"
              },
              {
                title: "Backend Technologies",
                description: "Scalable backend systems that handle business logic, APIs, and data processing efficiently and securely.",
                reason: "Ensures performance, reliability, and easy integration with third-party services as systems grow.",
                iconGradient: "linear-gradient(135deg, #A49EF0 0%, #8B5CF6 100%)"
              },
              {
                title: "DevOps Tools",
                description: "Automation tools for continuous integration, deployment, testing, and monitoring across environments.",
                reason: "Reduces deployment risk, speeds up releases, and maintains consistent quality.",
                iconGradient: "linear-gradient(135deg, #7C9EF2 0%, #10B981 100%)"
              },
              {
                title: "Cloud Platforms",
                description: "Cloud-native platforms used to host, scale, and manage applications globally with high availability.",
                reason: "Provides flexibility, cost efficiency, and the ability to scale infrastructure on demand.",
                iconGradient: "linear-gradient(135deg, #A49EF0 0%, #EC4899 100%)"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
              >
                {/* Icon Placeholder */}
                <div
                  className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-sm"
                  style={{ background: item.iconGradient }}
                >
                  <svg className="w-7 h-7 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 min-h-[48px]">
                  {item.description}
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-black mb-2">
                    Why it matter:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#EBF3FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Text & List */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-[#111827]">
                Why our <span className="text-[#6391F4]">technology choices</span> <br />
                <span className="text-[#B58FD8]">help your business</span>
              </h2>

              <div className="space-y-6">
                {[
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
                    <span className="text-gray-800 font-semibold text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[400px] md:h-[500px] w-full flex justify-center items-center">
              <Image
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
      primaryButton={{ text: "Start Your Project", href: "#" }}
      />

    </ServicePageLayout>
  )
}

