"use client";

import Image from "next/image";

export default function Hero() {
  return (
   <section className="relative bg-[#d9e6fd] min-h-screen overflow-x-hidden">

     
        <div className="max-w-7xl pt-24 mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 lg:pt-[180px] items-start gap-12">


        {/* LEFT CONTENT */}
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
  <span className="font-normal ">Build</span>
   <span className="font-bold">Smarter</span> <br />
  <span className="font-bold">Digital</span> 
  <span className="font-normal">Experiences</span> <br />
  <span className="font-bold">with</span> <span className="font-normal">AI</span>
</h1> 

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
  Transform your ideas into production-ready applications.
  Future Forge combines cutting-edge AI with intuitive tools
  to accelerate your development workflow.
</p> </div>


          <div className="flex flex-wrap gap-4 pt-2">
     <button className="px-6 py-3 bg-gradient-to-r from-[#6391F4] to-[#937DC0] text-white rounded-full text-sm sm:text-base flex items-center gap-2 hover:opacity-90 transition">
  Start Your Project
  <svg className="w-8 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</button>

<button className="px-9 py-4 border border-gray-300 rounded-full text-black font-bold sm:text-base bg-gray-100 flex items-center gap-3 hover:bg-gray-200 transition">
   Book a Dem
  <span className="w-6 h-6 border-2 border-[#4B95F9] rounded-full flex items-center justify-center">
    <svg className="w-8 h-6  text-[#4B95F9]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"></path>
    </svg>
  </span>
</button>



          
          </div>
        </div>


       <div className="relative flex justify-center items-center">

  {/* Glow background IMAGE */}
  <Image
    // src="/bg.webp"
    alt="Glow background"
    width={600}
    height={600}
    priority
    className="
      absolute
      -z-0
      w-[300px]
      sm:w-[380px]
      md:w-[540px]
      lg:w-[700px]
      xl:w-[600px]
      h-auto
      opacity-90
    "
  />

<div className="relative flex justify-center lg:justify-end overflow-visible  mt-12 lg:mt-24 xl:mt-10 ">
  <Image
    src="/robot1.webp"
    alt="AI Robot"
    width={1400}
    height={1400}
    priority
    className="
      relative z-10
      w-[340px]
      sm:w-[420px]
      md:w-[520px]
      lg:w-[720px]
      xl:w-[1000px]
      max-w-none
      h-auto
      -translate-y-24
      lg:-translate-y-20
      xl:-translate-y-
      lg:translate-x-12
      xl:translate-x-20
    "
  />
</div>


</div>

      </div>
    </section>
  );
}
