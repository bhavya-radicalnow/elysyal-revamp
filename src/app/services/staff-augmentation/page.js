import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import Image from "next/image";

export default function StaffAugmentationPage() {
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
      title="Staff Augmentation Services"
      description="Skilled developers and tech specialists to expand your team and accelerate project delivery."
      heroImage="/As_1.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}

    >
      <ServiceFeatures
        title="Key Features & Services"
        description="Unlock the potential of artificial intelligence with our comprehensive AI development services. From generative AI and machine learning models to conversational agents and computer vision, we create intelligent solutions that automate processes, enhance decision-making, and drive innovation across your organization."
        features={features}
      />

      {/* How Our Staff Augmentation Works Section */}
      <section className="bg-white  py-16 md:py-24" style={{ backgroundColor: '#D5D9F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#5B8bf3]">
                How Our Staff <br />
                Augmentation <br />
                Works
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed max-w-lg">
                We plug the right expertise into your team with a smooth, transparent process that accelerates delivery, maintains quality, and adapts to your evolving needs.
              </p>

              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(90deg, #7C9EF2 0%, #A49EF0 100%)' }}
                >
                  Start Your Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Understand Your Needs",
                  description: "We begin with a quick assessment of your team gaps to match the right talent.",
                },
                {
                  title: "Match & Onboard Experts",
                  description: "We select and onboard skilled developers who fit your tech stack and workflow.",
                },
                {
                  title: "Work in Your Rhythm",
                  description: "Augmented specialists integrate smoothly with your team and tools.",
                },
                {
                  title: "Scale & Adapt",
                  description: "Easily adjust team size and skills as your project evolves.",
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white/40 backdrop-blur-md rounded-3xl p-8 hover:bg-white/50 transition-colors duration-300"
                >
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 bg-white rounded-2xl mb-6 shadow-sm flex items-center justify-center">
                    <span className="text-gray-300 text-xs">Icon</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      <CallToAction />

    </ServicePageLayout>
  );
}
