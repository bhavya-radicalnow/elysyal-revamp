"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header className="w-full bg-white/70 backdrop-blur-md fixed top-0 left-0 z-50 shadow-sm transition-all duration-300">
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
        <nav className="hidden lg:flex items-center gap-8   text-sm font-bold leading-none tracking-normal text-black">
          <Link href="#" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Tech-Stack</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Industries</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Solution Hub</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Success Stories</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">About Company</Link>
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
            className="lg:hidden bg-white/90 backdrop-blur-md shadow-md overflow-hidden border-t border-gray-100 absolute w-full left-0 top-full"
          >
            <nav className="flex flex-col gap-4 px-6 py-6  text-sm font-bold text-black">
               <Link href="#" onClick={() => setOpen(false)}>Services</Link>
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
