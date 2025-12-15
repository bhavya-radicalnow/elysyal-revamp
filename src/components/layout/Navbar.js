"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            // src="/logo.png"
            alt="ELYSYAL Logo"
            width={140}
            height={40}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="#">Services</Link>
          <Link href="#">Tech-Stack</Link>
          <Link href="#">Industries</Link>
          <Link href="#">Solution Hub</Link>
          <Link href="#">Success Stories</Link>
          <Link href="#">About Company</Link>
        </nav>


        <div className="hidden lg:block">
          <Link
            href="#"
            className=" text-black px-5 py-2.5 rounded-md text-sm font-medium "
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </header>
  );
}
