import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import Image from "next/image";

export default function AIDevelopmentPage() {
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
      title="Artificial Intelligence Development"
      description="Transform your ideas into production-ready applications. Elysyal combines cutting-edge AI with intuitive tools to accelerate your development workflow."
      heroImage="/As_1.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}
      alignImageBottom={true}
    >
      <ServiceFeatures 
        title="Key Features & Services"
        description="Unlock the potential of artificial intelligence with our comprehensive AI development services. From generative AI and machine learning models to conversational agents and computer vision, we create intelligent solutions that automate processes, enhance decision-making, and drive innovation across your organization."
        features={features}
      />

      <section className="pt-16  pb-8 " style={{ background: "linear-gradient(to right, #CCD4F0, #DEDBF0)" }}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Autonomous AI Agents for <br />
            <span className="text-[#6391F4]">Intelligent Automation</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-10">
            AI agents are autonomous software systems designed to perform tasks, make decisions, and interact with users with minimal human input. They mimic human problem-solving and adapt dynamically to new information, enabling businesses to automate workflows, provide instant support, and optimize operations. Build intelligent AI agents that think, act, and learn independently.
          </p>
          <div className="relative w-full max-w-lg mx-auto h-64 md:h-96">
             <Image 
               src="/As_2.webp" 
               alt="Autonomous AI Robot" 
               fill 
               className="object-contain" 
             />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-[#6391F4]">End-to-End Artificial</span><br />
              <span className="text-[#6391F4]">Intelligence</span><br />
              <span className="text-[#C86B98]">Development</span><br />
              <span className="text-[#C86B98]">Services</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Our AI development services cover everything from intelligent model design to real-world deployment. By combining generative AI, machine learning, conversational interfaces, and computer vision, we deliver solutions that streamline operations, enhance decision-making, and help organizations innovate with confidence.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
               <Image 
                 src="/As_3.webp" 
                 alt="End-to-End AI Development Robot" 
                 fill 
                 className="object-contain" 
               />
            </div>
          </div>
        </div>
      </section>
      
      
      <CallToAction 
        title={<>Ready to <span className="text-[#548BF8]">Embrace AI Innovation?</span></>}
        description="Let's build the future together. Our AI experts are ready to help you unlock the full potential of generative artificial intelligence for your unique business needs."
        style={{ backgroundColor: "#DEDBF0" }}
      />

      </ServicePageLayout>
  );
}
