"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-[140px] h-auto">
               <Image
                src="/logo.webp"
                alt="ELYSYAL Logo"
                width={140}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-900 text-lg font-medium leading-relaxed max-w-sm">
              Build smarter digital experiences with AI-powered development tools.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Services" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Tech-stack" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Tech-Stack
                </Link>
              </li>
              <li>
                <Link href="/Industries" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/solution-hub" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Solution Hub
                </Link>
              </li>
              <li>
                <Link href="/success-Stories" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                   About Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3">
             <ul className="space-y-4">
              <li>
                <Link href="/services/ai-development" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/data-science" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/services/blockchain" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/iot-solutions" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  IoT Solutions
                </Link>
              </li>
               <li>
                <Link href="/services/legacy-modernization" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                   Legacy Modernization
                </Link>
              </li>
              <li>
                <Link href="/services/staff-augmentation" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                  Staff Augmentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 space-y-4">
             <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@elysyal.com" className="text-gray-900 hover:text-blue-600 text-sm font-semibold">hello@elysyal.com</a>
             </div>
             <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">+1 (555) 123-4567</span>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-900 text-sm font-medium">
            © 2025 ELYSYAL. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
               <Link key={item} href="#" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors">
                 {item}
               </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}