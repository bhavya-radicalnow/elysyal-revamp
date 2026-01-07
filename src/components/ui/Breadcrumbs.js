"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on the homepage or if no pathname
  if (pathname === "/" || !pathname) return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav 
      className="flex px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8" 
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors"
          >
            <svg 
              className="w-3 h-3 mr-1.5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011-1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          
          // Format label: tech-stack -> Tech Stack
          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <li key={href} className="flex items-center">
              <svg 
                className="w-4 h-4 text-gray-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              {isLast ? (
                <span className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#B58FD8] truncate max-w-[150px] md:max-w-none">
                  {label}
                </span>
              ) : (
                <Link 
                  href={href} 
                  className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors md:ml-2"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
