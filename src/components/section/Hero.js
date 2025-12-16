"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Robot starts lower (400px down) and moves up as you scroll
  const robotY = useTransform(scrollYProgress, [0, 0.5], [400, 0]);
  const robotOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Bubbles move in sync with the robot
  const bubbleY = useTransform(scrollYProgress, [0, 0.5], [400, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] overflow-hidden bg-[url('/bg.webp')] bg-cover bg-center bg-fixed"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full pt-32 lg:pt-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 z-10 relative"
          >
            <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight">
              <span className="font-normal">Build</span>{" "}
              <span className="font-bold">Smarter</span> <br />
              <span className="font-bold">Digital</span>{" "}
              <span className="font-normal">Experiences</span> <br />
              <span className="font-normal">with</span>{" "}
              <span className="font-bold text-bold-600">AI</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
              Transform your ideas into production-ready applications. Future
              Forge combines cutting-edge AI with intuitive tools to accelerate
              your development workflow.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#6391F4] to-[#937DC0] text-white rounded-full text-base font-semibold flex items-center gap-2 hover:opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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

              <button className="px-8 py-4 bg-white border border-gray-200 rounded-full text-gray-800 text-base font-semibold flex items-center gap-3 hover:bg-gray-50 transition shadow-sm hover:shadow-md">
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
          </motion.div>

          {/* RIGHT CONTENT (Robot) - Absolute Bottom on Desktop */}
          {/* RIGHT CONTENT (Robot) - Absolute Bottom on Desktop */}
          <div className="relative mt-12 lg:mt-0 lg:absolute bottom-0 right-0 w-full lg:w-1/2 flex justify-center lg:justify-end items-end h-[400px] sm:h-[500px] lg:h-auto pointer-events-none">
            {/* Chat Bubbles */}
            <motion.div
              style={{ y: bubbleY, opacity: robotOpacity }}
              className="absolute -top-3  left-4 sm:left-10 lg:-top-20 lg:left-0 z-20 flex flex-col gap-4 pointer-events-auto"
            >
              {/* Bubble 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-start gap-3 bg-white/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px] sm:max-w-[250px]"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    Hi
                  </p>
                  <p className="text-xs sm:text-sm text-gray-800 font-medium">
                    How i can help you?
                  </p>
                </div>
              </motion.div>

              {/* Bubble 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-md py-2 px-4 sm:py-3 sm:px-5 rounded-2xl shadow-lg border border-white/50 ml-4 sm:ml-8"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"></div>
                <p className="text-xs sm:text-sm text-gray-800 font-medium">
                  I can develop anything
                </p>
              </motion.div>
            </motion.div>

            {/* Robot Image */}
            <motion.div
              style={{ y: robotY, opacity: robotOpacity }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full flex items-end justify-center lg:justify-end"
            >
              <div className="relative w-[380px] pt-16 sm:w-[500px] md:w-[500px] lg:w-[600px] xl:w-[800px] h-auto">
                <Image
                  src="/robot1.webp"
                  alt="AI Robot"
                  width={1200}
                  height={1200}
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
