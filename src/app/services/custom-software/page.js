import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction"; 
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import Image from "next/image";  
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function CustomSoftwarePage() {
const features = [
    {
      number: "01",
      title: "Custom Enterprise Software Solutions",
      description: "Tailored business software for organizational needs."
    },
    {
      number: "02",
      title: "SaaS Development",
      description: "Cloud-based software-as-a-service platforms."
    },
    {
      number: "03",
      title: "ERP & CRM Development",
      description: "Integrated business management systems."
    },
    {
      number: "04",
      title: "Microservices & Serverless Architecture",
      description: "Scalable distributed system architectures."
    },
    {
      number: "05",
      title: "Embedded Software Development",
      description: "Hardware-integrated software solutions."
    }
  ];
  return (
    <ServicePageLayout
      title="Custom Software Development"
      description="Scalable, robust software applications tailored to your unique business requirements."
       heroImage="/custom 1.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}
      alignImageBottom={true}
      
    
    >
      <ServiceFeatures 
        title="Key Features & Services"
        description="We design and build custom software solutions tailored to unique business needs. From enterprise systems and SaaS platforms to scalable microservices and embedded software, our solutions are secure, flexible, and built to grow with your business."
        features={features}
      />

      <section className="pt-16 md:pt-24 pb-0" style={{ background: "linear-gradient(to right, #DCE6F9, #E3E7FA)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 text-left pb-16 md:pb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6391F4] mb-2 leading-tight">
              Building Custom 
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#6391F4]">Software</span> <span className="text-black">That Fits</span> <br className="hidden lg:block"/>
              <span className="text-black">Your Business</span>
            </h2>
            <p className="text-black text-lg leading-relaxed mb-6">
              We deliver tailored software solutions that address complex business challenges and evolving technical needs. From enterprise applications and SaaS platforms to scalable microservices, ERP systems, and embedded software, our development approach ensures reliability, performance, and seamless integration across your digital ecosystem.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative h-[500px] md:h-[650px] mt-auto">
             <ImageWithSkeleton 
               src="/custom 2.webp" 
               alt="Building Custom Software Robot" 
               fill 
               className="object-contain object-bottom md:object-right-bottom transform scale-125 origin-bottom drop-shadow-2xl" 
             />
          </div>

        </div>
      </section>


      <CallToAction 
      title={<>Let's   <span className="text-[#548BF8]">Build Your Software</span></>}
        description="From concept to deployment, we'll create custom software that perfectly fits your needs."
       
      />

    </ServicePageLayout>
  );
}

