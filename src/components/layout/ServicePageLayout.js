import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function ServicePageLayout({
  title,
  description,
  heroImage,
  backgroundImage = "/BG 2.webp",
  primaryButton,
  secondaryButton,
  children
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        {/* Hero Section */}
        <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden relative">

          {/* Background Image */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover object-center opacity-50 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent" /> {/* Optional overlay for text contrast */}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 ${heroImage ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <div className="inline-block w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 mb-6 rounded-full absolute -left-4 hidden lg:block" /> {/** Decorative line logic if needed, but let's stick to simple first */}

                {/* Decorative Pill/Line Idea from image (Left border gradient) */}
                <div className="relative pl-6 border-l-4 border-transparent lg:border-l-0">
                  <div className="hidden lg:block absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-pink-300 to-blue-300 rounded-full"></div>

                  <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                    {title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                    {description}
                  </p>

                  {(primaryButton || secondaryButton) && (
                    <div className="flex flex-wrap items-center gap-4">
                      {primaryButton && (
                        <Button
                          text={primaryButton.text}
                          href={primaryButton.href}
                          variant="primary"
                        />
                      )}

                      {secondaryButton && (
                        <Button
                          text={secondaryButton.text}
                          href={secondaryButton.href}
                          variant="secondary"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Hero Image */}
              {heroImage && (
                <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/50 blur-3xl rounded-full -z-10" />

                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-contain drop-shadow-2xl z-10"
                    priority
                  />
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Child Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
