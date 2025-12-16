"use client";

import Image from "next/image";

export default function Hero() {
  return (
    //   <section className="relative min-h-screen overflow-x-hidden  bg-[url('/bg.webp')] bg-center bg-cover bg-fixed">
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0.4 pt-24 lg:pt-[269px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    <section className="relative min-h-screen overflow-x-hidden bg-[url('/bg.webp')] bg-top-left bg-cover  bg-fixed">
      <div
        className="max-w-7xl pt-24 mx-auto px-4 
      sm:px-6.5 py-1.9 mt-5      grid grid-cols-1
       lg:grid-cols-2 lg:pt-[260] lg:py-1.8 
       items-start gap-12"
      >
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
            <span className="font-bold">with</span>{" "}
            <span className="font-normal">AI</span>
          </h1>

          <div>
            <p
              className="
  text-gray-600
  text-sm
  sm:text-base
  md:text-lg
  leading-relaxed
  sm:leading-7
  md:leading-8
  max-w-md
  sm:max-w-lg
"
            >
              Transform your ideas into production-ready applications. Future
              Forge combines cutting-edge AI with intuitive tools to accelerate
              your development workflow.
            </p>{" "}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-3 bg-gradient-to-r from-[#6391F4] to-[#937DC0] text-white rounded-full text-sm sm:text-base flex items-center gap-2 hover:opacity-90 transition">
              Start Your Project
              <svg
                className="w-8 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <button className="px-9 py-4 border border-gray-300 rounded-full text-black font-bold sm:text-base bg-gray-100 flex items-center gap-3 hover:bg-gray-200 transition">
              Book a Demo
              <span className="w-6 h-6 border-2 border-[#4B95F9] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#4B95F9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative flex justify-center lg:justify-end overflow-visible mt-12 lg:mt-24 xl:mt-10">
            {/* Chat Bubbles */}
            <div className="absolute top-45 lg:top-[0%] left-20 lg:left-95  z-20 flex flex-col gap-3 animate-float">
              {/* Bubble 1 */}
              <div className="flex items-start gap-3  bg-[rgba(242,242,242,1)] backdrop-blur-md p-4 rounded-3xl  px-6 py-6 shadow-lg border border-white/40 w-max">
                <div className="w-9 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-blue-500 text-xs font-bold">AI</span>
                </div>
                <div>
                  <p className="text-[10px] text-black-500 font-semibold uppercase tracking-wider">
                    Hi
                  </p>
                  <p className="text-sm text-black font-medium">
                    How can I help you?
                  </p>
                  <span className="text-blue-500 text-xs font-bold"></span>
                </div>
              </div>

              {/* Bubble 2 */}
              <div className="flex items-center justify-center bg-[rgb(242,242,242)] backdrop-blur-md py-5 px-14 rounded-4xl shadow-lg border border-white/40 w-max ml-1">
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0-translate-y-[8px] "></div>
                <p className="text-sm text-black font-medium">
                  I can develop anything 
                </p>
              </div>
            </div>

            <Image
              src="/robot1.webp"
              alt="AI Robot"
              width={1400}
              height={1400}
              priority
              className="
    absolute right-25 bottom-0 size-19
      relative z-10
      w-[340px]
      sm:w-[420px]
      md:w-[520px]
      lg:w-[670px]
      xl:w-[1200px]
      max-w-none
      h-auto
      -translate-y-24
      lg:-translate-y-20
      lg:translate-x-1.7
      xl:translate-x-60
      xl:-translate-y-1.7 
       xl:top-35
    "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
