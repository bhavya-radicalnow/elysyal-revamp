"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* Logo */}
        <Image
          src="/logo.webp"
          alt="ELYSYAL Logo"
          width={140}
          height={140}
          priority
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold leading-none tracking-normal text-black">
          <Link href="#">Services</Link>
          <Link href="#">Tech-Stack</Link>
          <Link href="#">Industries</Link>
          <Link href="#">Solution Hub</Link>
          <Link href="#">Success Stories</Link>
          <Link href="#">About Company</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="#"
            className="text-black px-5 py-2.5 rounded-md text-sm font-bold"
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
            className="lg:hidden bg-white shadow-md overflow-hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6 text-sm font-bold text-black">
              <Link href="#" onClick={() => setOpen(false)}>Services</Link>
              <Link href="#" onClick={() => setOpen(false)}>Tech-Stack</Link>
              <Link href="#" onClick={() => setOpen(false)}>Industries</Link>
              <Link href="#" onClick={() => setOpen(false)}>Solution Hub</Link>
              <Link href="#" onClick={() => setOpen(false)}>Success Stories</Link>
              <Link href="#" onClick={() => setOpen(false)}>About Company</Link>
              <Link
                href="#"
              
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
