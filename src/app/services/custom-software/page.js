import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction"; 
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import Image from "next/image";  

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

              <section className="max-w-7xl pt-16  pb-8 " style={{ background: "linear-gradient(to right, #CCD4F0, #DEDBF0)" }}>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                    Building Custom Software  <br />
                                    <span className="text-[#6391F4]">That Fits Your Business</span>
                                  </h2>
                                  <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-10">
                                    We deliver tailored software solutions that address complex business challenges and evolving technical needs. From enterprise applications and SaaS platforms to scalable microservices, ERP systems, and embedded software, our development approach ensures reliability, performance, and seamless integration across your digital ecosystem.
                                  </p>
                                  <div className="relative w-full max-w-lg mx-auto h-64 md:h-96">
                                     <Image 
                                       src="/custom 2.webp" 
                                       alt="Autonomous AI Robot" 
                                       fill 
                                       className="object-contain" 
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
