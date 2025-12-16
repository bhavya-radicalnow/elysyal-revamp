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
              {['Home', 'Services', 'Tech-Stack', 'Industries', 'Solution Hub', 'Success Stories', 'About Company'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3">
             <ul className="space-y-4">
              {['AI & Machine Learning', 'Data Science', 'Blockchain', 'Custom Software', 'Mobile Apps', 'IoT Solutions', 'Legacy Modernization', 'Staff Augmentation'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-900 hover:text-blue-600 text-sm font-semibold transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
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