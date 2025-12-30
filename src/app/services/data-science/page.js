import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import Server from "next/dist/server/base-server";
import Image from "next/image";
import ServiceCard from "@/components/section/Services";


export default function DataSciencePage() {
  const features = [
    {
      number: "01",
      title: "Big Data Analytics & Processing",
      description: "Large-scale data processing and insights extraction"
    },
    {
      number: "02",
      title: "Data Warehousing & ETL Development",
      description: "Enterprise data storage and transformation pipelines"
    },
    {
      number: "03",
      title: "Data Visualization",
      description: "Clear visuals that turn complex data into actionable insights."
    },
    {
      number: "04",
      title: "Dashboard Development",
      description: "Interactive dashboards for real-time tracking and decisions."
    },
    {
      number: "05",
      title: "Machine Learning Models",
      description: "Custom ML algorithms for predictive analytics."
    },
    {
      number: "06",
      title: "Business Intelligence",
      description: "Strategic insights and data-driven decision making."
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

  const impacts = [
    {
      title: "Faster, Smarter Decisions",
      description: "Get real-time insights that help teams act quickly with confidence—not assumptions.",
      icon: "/Icon - 05.webp" 
    },
    {
      title: "Scalable Data Foundations",
      description: "Robust architectures designed to handle growing data volumes without performance trade-offs.",
      icon: "/Icon - 02.webp" 
    },
    {
      title: "Predictive Intelligence",
      description: "Anticipate trends, risks, and opportunities using advanced machine learning models.",
      icon: "/Icon - 03.webp" 
    },
    {
      title: "Business-Driven Insights",
      description: "Analytics aligned with KPIs, revenue goals, and operational priorities—not just data outputs.",
      icon: "/Icon - 08.webp" 
    },
  ];



  return (
    <ServicePageLayout
      title="Data Science & ML Solutions"
      description="Extract meaningful insights from your data with advanced analytics and machine learning models."
      heroImage="/data1.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}
      alignImageBottom={true}
    
    >
      <ServiceFeatures 
              title="Key Features & Services"
              description="Harness the power of big data with our comprehensive analytics and processing solutions. We help organizations process, analyze, and extract valuable insights from massive datasets using cutting-edge technologies and machine learning algorithms."
              features={features}
            />
{/* 
            <section className="py-20 px-4 md:px-8 bg-[#E0E7FF]/30" style={{ background: "linear-gradient(to bottom, #EBEFFE, #E3E6FA)" }}>
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-4xl mx-auto"> */}
 <section
  className="w-full py-16 md:py-20"
  style={{
    background: "linear-gradient(to bottom, #EBEFFE, #E3E6FA)",
  }}
>
  {/* CONTENT CONTAINER */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    
    <div className="text-center max-w-4xl mx-auto mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        The Real Impact of <span className="text-[#5B8DEF]">Our Data Science & ML Solutions</span>
                      </h2>
                      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        We turn complex data into intelligent systems that drive confident decisions, predict outcomes, and scale with your business—delivering measurable value at every stage.
                      </p>
                    </div>
            
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {impacts.map((impact, index) => (
                        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-white/50">
                          <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                             <Image 
                                src={impact.icon} 
                                alt={impact.title} 
                                width={32} 
                                height={32} 
                                className="w-8 h-8 object-contain"
                             />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[56px] flex items-center">
                              {impact.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-[15px]">
                            {impact.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>


     
      <CallToAction   title={<>Unlock Your  <span className="text-[#548BF8]">Data Potential</span></>}
        description="Transform raw data into actionable insights that drive business growth and innovation."
       
      />
 
    </ServicePageLayout>
  );
}
