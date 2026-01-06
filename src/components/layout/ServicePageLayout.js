"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import Skeleton from "@/components/ui/Skeleton";
import { useModal } from "@/context/ModalContext";

export default function ServicePageLayout({
  title,
  description,
  heroImage,
  primaryButton,
  secondaryButton,
  children,
  alignImageBottom = false,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const { openContactModal } = useModal();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[rgb(225,235,247)]">

        {/* HERO SECTION */}
        <section className={`pt-33 md:pt-20 lg:pt-24 xl:pt-35 overflow-hidden ${alignImageBottom ? "pb-0" : "pb-20 lg:pb-16"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div
              className={`
                grid grid-cols-1
                ${heroImage ? "lg:grid-cols-2" : ""}

                gap-10 lg:gap-14 items-center
              `}
            >
              {/* LEFT CONTENT */}
              <div className="relative">

                {/* Decorative vertical pill */}
                <div className="absolute left-0 top-3 h-24 w-1.5 rounded-full bg-gradient-to-b from-pink-300 to-blue-400 hidden lg:block" />

                <div className="pl-4 md:pl-8 xl:pl-16">
                  {isLoading ? (
                    <div className="mb-6">
                      <Skeleton height={50} width="80%" />
                    </div>
                  ) : (
                    <h1 className="text-gray-900 font-bold leading-tight text-3xl sm:text-3xl md:text-3xl xl:text-3xl mb-6">
                      {title}
                    </h1>
                  )}

                  {isLoading ? (
                    <div className="mb-10 max-w-xl">
                      <Skeleton count={2} height={20} />
                    </div>
                  ) : (
                    <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-xl mb-10">
                      {description}
                    </p>
                  )}

                  {(primaryButton || secondaryButton) && (
                    <div className="flex flex-wrap gap-4">
                      {primaryButton && (
                        <Button
                          text={primaryButton.text}
                          href={primaryButton.href}
                          onClick={primaryButton.text === "Start Your Project" ? openContactModal : undefined}
                          variant="primary"
                          icon={primaryButton.icon}
                          isLoading={isLoading}
                        />
                      )}

                      {secondaryButton && (
                        <Button
                          text={secondaryButton.text}
                          href={secondaryButton.href}
                          variant="secondary"
                          icon={secondaryButton.icon}
                          isLoading={isLoading}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              {heroImage && (
                <div className={`relative flex justify-center lg:justify-end ${alignImageBottom ? "self-end h-full items-end" : ""}`}>

                  {/* Soft glow behind robot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-[70%] h-[70%] bg-blue-200/40 blur-3xl rounded-full" />
                  </div>

                  <div

                    className="
                      relative
                      w-full
                      mx-auto lg:mx-0
                      max-w-[340px]
                      sm:max-w-[400px]
                      md:max-w-[460px]
                      lg:max-w-[520px]
                      xl:max-w-[620px]
                    "
                  >
                    <ImageWithSkeleton
                      src={heroImage}
                      alt={title}
                      width={700}
                      height={900}
                      priority
                      className="object-contain w-full h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PAGE CONTENT */}
        <section >
          {children}
        </section>
      </main>

      <Footer />
    </>
  );
}
