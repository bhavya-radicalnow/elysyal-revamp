"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Service items with icons and links
  const serviceItems = [
    { title: "Artificial Intelligence Development", href: "/services/ai-development", icon: "/Icon - 01.webp" },
    { title: "Blockchain Development", href: "/services/blockchain", icon: "/Icon - 02.webp" },
    { title: "Data Science", href: "/services/data-science", icon: "/Icon - 03.webp" },
    { title: "Custom Software Development", href: "/services/custom-software", icon: "/Icon - 04.webp" },
    { title: "Mobile App Development", href: "/services/mobile-app-development", icon: "/Icon - 05.webp" },
    { title: "Staff Augmentation Services", href: "/services/staff-augmentation", icon: "/Icon - 08.webp" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0   left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-transparent shadow-none"}`}>
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="ELYSYAL Logo"
            width={140}
            height={140}
            priority
            className="w-32 md:w-40 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold leading-none tracking-normal text-black">

          {/* Services Dropdown */}
          <div className="group h-full flex items-center">
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors py-8">
              Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu - Full Width */}
            <div className="fixed left-0 top-[90px] w-full bg-white shadow-xl border-t border-gray-100 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-[100]">
              <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                  </svg>
                  <h3 className="font-bold text-2xl text-gray-800">Services</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 group/item"
                    >
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image src={item.icon} alt={item.title} fill className="object-contain" />
                      </div>
                      <span className="text-lg font-medium text-gray-700 group-hover/item:text-blue-600 transition-colors">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/Tech-stack" className="hover:text-blue-600 transition-colors">Tech-Stack</Link>
          <Link href="/Industries" className="hover:text-blue-600 transition-colors">Industries</Link>
          <Link href="/solution-hub
          " className="hover:text-blue-600 transition-colors">Solution Hub</Link>
          <Link href="/success-Stories" className="hover:text-blue-600 transition-colors">Success Stories</Link>
          <Link href="/About" className="hover:text-blue-600 transition-colors">About Company</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="#"
            className="text-black px-5 py-2 rounded-md text-sm font-bold hover:text-blue-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Hamburger (Mobile / Tablet) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1 z-50"
          aria-label="Open menu"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white/90 backdrop-blur-md shadow-md overflow-hidden border-t border-gray-100 absolute w-full left-0 top-full max-h-[90vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 px-6 py-6 text-sm font-bold text-black">

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50 rounded-lg mt-2 "
                    >
                      <div className="flex flex-col p-2 gap-2">
                        {serviceItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-md hover:bg-white transition-colors"
                          >
                            <div className="relative w-5 h-5 flex-shrink-0">
                              <Image src={item.icon} alt={item.title} fill className="object-contain" />
                            </div>
                            <span className="text-xs font-normal text-gray-700">
                              {item.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="#" onClick={() => setOpen(false)}>Tech-Stack</Link>
              <Link href="#" onClick={() => setOpen(false)}>Industries</Link>
              <Link href="#" onClick={() => setOpen(false)}>Solution Hub</Link>
              <Link href="#" onClick={() => setOpen(false)}>Success Stories</Link>
              <Link href="#" onClick={() => setOpen(false)}>About Company</Link>
              <Link
                href="#"
                className="font-bold"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
