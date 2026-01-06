import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import CallToAction from "@/components/section/CallToAction"; 
import Image from "next/image";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";




export default function BlockchainPage() {
const features = [
    {
      number: "01",
      title: "Smart Contract Development",
      description: "Secure, automated contracts on blockchain networks."
    },
    {
      number: "02",
      title: "Token Development",
      description: "Custom cryptocurrency and utility token creation."
    },
    {
      number: "03",
      title: "Crypto Exchange Development",
      description: "Secure trading platforms for digital assets."
    },
    {
      number: "04",
      title: "Layer 2 Scaling Solutions",
      description: "High-performance blockchain scaling technologies."
    },
    {
      number: "05",
      title: "Web3 Development",
      description: "Decentralized web applications and platforms."
    },
    {
      number: "06",
      title: "DeFi Development",
      description: "Decentralized finance protocols and applications."
    },
    {
      number: "07",
      title: "DApp Development",
      description: "Decentralized application development and deployment."
    },
    {
      number: "08",
      title: "NFT Marketplace Development",
      description: "Feature-rich platforms for creating, trading and digital collectibles."
    },
    {
      number: "09",
      title: "DAO Development",
      description: "Decentralized autonomous organization frameworks."
    },
     {
      number: "10",
      title: "Cross-chain & Multi-chain Development",
      description: "Interoperable blockchain network solutions."
    }
  ];

  return (
    <ServicePageLayout
      title="Blockchain Development"
      description="Build secure, scalable, and innovative blockchain solutions for the decentralized future."
      heroImage="/Success Stories image 01.webp"
      primaryButton={{ text: "Start Your Project", href: "#" }}
      secondaryButton={{ text: "Book a Demo", href: "#" }}
    
    >

      <ServiceFeatures 
              title="Key Features & Services"
              description ="Pioneer the next generation of digital infrastructure with our comprehensive blockchain development services. From smart contracts and DeFi protocols to NFT marketplaces and Web3 applications, we create secure, scalable solutions that leverage the power of distributed ledger technology to transform industries and create new business models."
              features={features}
            />


      <section className="pt-8 sm:pt-12 lg:pt-0 pb-0" style={{ background: "linear-gradient(to right, #E2E6FA, #EFEEF9)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end">
            
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 pb-6 sm:pb-10 lg:pb-24 pt-4 lg:pt-24">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug text-gray-900">
                <span className="text-[#6391F4]">Building Blockchain Solutions</span> That Fits Your Business
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                We deliver tailored blockchain solutions that address complex business challenges and evolving technical needs. From scalable DeFi platforms and secure smart contracts to enterprise-grade DApps and NFT marketplaces, our development approach ensures reliability, transparency, and seamless integration across your decentralized ecosystem.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative h-[280px] sm:h-[380px] lg:h-[650px] w-full flex justify-center lg:justify-end">
               <ImageWithSkeleton
                  src="/Sb_2.webp"
                  alt="Blockchain Development Robot"
                  fill
                  className="object-contain object-bottom"
               />
            </div>
            
          </div>
        </div>
      </section>

      <CallToAction   title={<>Ready to <span className="text-[#548BF8]">Build on Blockchain?</span></>}
        description="Join the decentralized revolution with custom blockchain solutions that drive innovation and create value."
       
      />
     
    </ServicePageLayout>
  );
}
