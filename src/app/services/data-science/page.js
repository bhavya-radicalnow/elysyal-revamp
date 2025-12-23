import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import Image from "next/image";

export default function DataSciencePage() {
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





  const data =  [
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


  
  return (
    <ServicePageLayout
      title="Data Science"
      description="Extract insights from your data with advanced analytics, ML models, and data-driven strategies."
      heroImage="/As_1.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}
    
    >
      <ServiceFeatures 
              title="Key Features & Services"
              description="Unlock the potential of artificial intelligence with our comprehensive AI development services. From generative AI and machine learning models to conversational agents and computer vision, we create intelligent solutions that automate processes, enhance decision-making, and drive innovation across your organization."
              features={features}
            />


             <section className="max-w-7xl pt-16  pb-8 " style={{ background: "linear-gradient(to right, #CCD4F0, #DEDBF0)" }}>
                                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                                Autonomous AI Agents for <br />
                                                <span className="text-[#6391F4]">Intelligent Automation</span>
                                              </h2>
                                              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-10">
                                                AI agents are autonomous software systems designed to perform tasks, make decisions, and interact with users with minimal human input. They mimic human problem-solving and adapt dynamically to new information, enabling businesses to automate workflows, provide instant support, and optimize operations. Build intelligent AI agents that think, act, and learn independently.
                                              </p>
                                              <div className="relative w-full max-w-lg mx-auto h-64 md:h-96">
                                                 <Image 
                                                   src="/Sb_2.webp" 
                                                   alt="Autonomous AI Robot" 
                                                   fill 
                                                   className="object-contain" 
                                                 />
                                              </div>
                                            </div>
                                          </section>
      <CallToAction />
 
    </ServicePageLayout>
  );
}
