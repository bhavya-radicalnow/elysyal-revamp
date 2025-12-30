import ServicePageLayout from "@/components/layout/ServicePageLayout";
import ServiceFeatures from "@/components/layout/ServiceFeatures";
import CallToAction from "@/components/section/CallToAction"; 
import Image from "next/image";




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

            <section className="bg-white max-w-7xl pt-16  pb-8 " style={{ background: "linear-gradient(to right, #CCD4F0, #DEDBF0)" }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Powering the Future with  <br />
                        <span className="text-[#6391F4]"> Blockchain Innovation</span>
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-10">
                        We help businesses unlock the full potential of blockchain with secure, scalable, and high-impact solutions. From smart contracts and token development to DeFi platforms, NFT marketplaces, Web3 and DApp development, crypto exchanges, and cross-chain scalability.
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

      <CallToAction   title={<>Ready to <span className="text-[#548BF8]">Build on Blockchain?</span></>}
        description="Join the decentralized revolution with custom blockchain solutions that drive innovation and create value."
       
      />
     
    </ServicePageLayout>
  );
}
