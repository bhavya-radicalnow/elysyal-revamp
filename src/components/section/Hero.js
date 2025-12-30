"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import Skeleton from "@/components/ui/Skeleton";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[url('/bg.webp')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 xl:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton height={60} width="80%" />
                <Skeleton height={60} width="60%" />
              </div>
            ) : (
              <h1 className="text-gray-900 font-bold leading-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                <span className="font-normal">Build</span>{" "}
                <span className="font-bold">Smarter</span>
                <br />
                <span className="font-bold">Digital</span>{" "}
                <span className="font-normal">Experiences</span>
                <br />
                <span className="font-normal">with</span>{" "}
                <span className="font-bold">AI</span>
              </h1>
            )}

            {isLoading ? (
              <div className="space-y-2 max-w-xl">
                <Skeleton count={3} />
              </div>
            ) : (
              <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-xl">
                Transform your ideas into production-ready applications. Future
                Forge combines cutting-edge AI with intuitive tools to accelerate
                your development workflow.
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              <Button text="Start Your Project" href="#" variant="primary" isLoading={isLoading} />
              <Button text="Book a Demo" href="#" variant="secondary" isLoading={isLoading} />
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <div
            className="
              relative
              h-[420px]
              sm:h-[480px]
              md:h-[520px]
              lg:h-[560px]
              xl:h-[700px]
              flex items-end justify-center lg:justify-end
            "
          >
            {/* ROBOT + BUBBLES WRAPPER */}
            <div
              className="
                relative
                w-full
                max-w-[360px]
                sm:max-w-[460px]
                md:max-w-[540px]
                lg:max-w-[620px]
                xl:max-w-[760px]
              "
            >
              {/* CHAT BUBBLES — ANCHORED TO ROBOT ARM */}
              {/* TODO:- Add chat bubbles logic */}

              {/* ROBOT */}
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <ImageWithSkeleton
                  src="/Rb 1.webp"
                  alt="AI Robot"
                  width={1200}
                  height={1200}
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
