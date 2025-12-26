import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import Image from "next/image";


export default function MobileAppPage() {
  const features = [
    {
      number: "01",
      title: "Generative AI Solutions",
      description: "Advanced AI models for content generation, image creation, automated content production at scale."
    },
    {
      number: "02",
      title: "AI Agent Development",
      description: "Intelligent autonomous agents that handle complex tasks, make decisions, and automate workflows."
    },
    {
      number: "03",
      title: "Machine Learning Development",
      description: "Custom ML solutions for predictive analytics, pattern recognition, and intelligent data processing."
    },
    {
      number: "04",
      title: "Chatbot Development",
      description: "Advanced AI chatbots that generate natural, context-aware conversations to enhance customer engagement."
    },
    {
      number: "05",
      title: "Natural Language Development",
      description: "Advanced text analysis, sentiment detection, and language understanding capabilities."
    },
    {
      number: "06",
      title: "Multi-Modal Interaction",
      description: "Engage via text, voice, and visuals for seamless cross-platform user experiences."
    }
  ];
  return (
    <ServicePageLayout
      title="Mobile App Development"
      description="Native and cross-platform mobile applications that deliver exceptional user experiences."
      heroImage="/As_1.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}

    >
      <ServiceFeatures
        title="Key Features & Services"
        description="Unlock the potential of artificial intelligence with our comprehensive AI development services. From generative AI and machine learning models to conversational agents and computer vision, we create intelligent solutions that automate processes, enhance decision-making, and drive innovation across your organization."
        features={features}
      />

      <section className="py-16 lg:py-24" style={{ backgroundColor: "#E2E6F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Choose ELYSYAL for <br />
                <span className="text-[#6391F4]">Mobile App Development</span>
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                We build high-performance mobile applications that are secure,
                scalable, and designed to deliver real business impact—across
                platforms and industries.
              </p>

              <ul className="space-y-6">
                {[
                  "End-to-End Mobile Expertise",
                  "User-Centric & Market-Ready Apps",
                  "Scalable, Future-Proof Architecture",
                  "Transparent Process & Reliable Communication"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-xl text-gray-900 font-medium">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <Image
                src="/Rb 1.webp"
                alt="Mobile App Development Robot"
                fill
                className="object-contain transform scale-100 hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>
        </div>
      </section>



      <CallToAction />


    </ServicePageLayout>
  );
}
