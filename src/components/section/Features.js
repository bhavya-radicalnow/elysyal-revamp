"use client";

import Image from "next/image";

const features = [
  {
    title: "AI-Powered Development",
    description:
      "Leverage cutting-edge AI to build scalable and intelligent applications faster.",
    icon: "/icons/ai.svg",
  },
  {
    title: "Fast Time to Market",
    description:
      "Accelerate your product launch with optimized workflows and automation.",
    icon: "/icons/speed.svg",
  },
  {
    title: "Scalable Architecture",
    description:
      "Future-ready solutions designed to grow with your business needs.",
    icon: "/icons/scale.svg",
  },
  {
    title: "Secure by Design",
    description:
      "Enterprise-grade security baked into every layer of development.",
    icon: "/icons/security.svg",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
           <div className="max-w-xl space-y-6">
          <h1
            className="
              font-bold text-gray-900
              text-3xl
              sm:text-4xl
              md:text-5xl
              xl:text-6xl
              leading-tight
            "
          >
  <span className="font-bold ">Everything You</span>
<br />
  <span className="font-bold">Need to </span>
    <span className="font-bold text-blue-400">Build</span> <br/>
  <span className="font-bold text-blue-400">Fast</span>



  <div>    

         <p className="
  text-gray-600
  text-sm
  sm:text-base
  md:text-lg
  leading-relaxed
  sm:leading-7
  md:leading-8
  max-w-md
  sm:max-w-lg
">
 Future Forge combines the best of AI generation with developer-friendly tools to help you ship products faster than ever.
</p> </div>


          <div className="flex flex-wrap gap-4 pt-2">
     <button className="px-6 py-3 bg-gradient-to-r from-[#6391F4] to-[#937DC0] text-white rounded-full text-sm sm:text-base flex items-center gap-2 hover:opacity-90 transition">
  Start Your Project
  <svg className="w-8 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</button>

</div>
</h1> 
</div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-3 hover:shadow-lg transition"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
