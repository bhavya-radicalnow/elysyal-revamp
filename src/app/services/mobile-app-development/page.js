import ServicePageLayout from "@/components/layout/ServicePageLayout";
import CallToAction from "@/components/section/CallToAction";
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import Image from "next/image";


export default function MobileAppPage() {
const features = [
    {
      number: "01",
      title: "Android App Development",
      description: "Native Android applications for Google Play Store"
    },
    {
      number: "02",
      title: "iOS App Development",
      description: "Cloud-Native iOS applications for Apple App Store"
    },
    {
      number: "03",
      title: "React Native App Development",
      description: "Cross-platform mobile apps with single codebase"
    },
    {
      number: "04",
      title: "Enterprise App Development",
      description: "Business-focused mobile solutions for productivity"
    },
    {
      number: "05",
      title: "IoT Development",
      description: "Connected device ecosystems and smart automation"
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
        description="We design and build custom software solutions tailored to unique business needs. From enterprise systems and SaaS platforms to scalable microservices and embedded software, our solutions are secure, flexible, and built to grow with your business."
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
                src="/Success Stories image 02.webp"
                alt="Mobile App Development Robot"
                fill
                className="object-contain transform scale-100 hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>
        </div>
      </section>



      <CallToAction 
      title={<>Launch Your <span className="text-[#548BF8]">Mobile App</span></>}
        description="From idea to app store, we'll help you create a mobile app that users love."
       />


    </ServicePageLayout>
  );
}
