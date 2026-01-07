"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";
import Skeleton from "@/components/ui/Skeleton";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const NavLogo = () => {
  return (
    <div className="relative w-40 md:w-52 h-[auto] aspect-[3/1] pl-4 md:pl-8 xl:pl-16 pt-4">
      <ImageWithSkeleton
        src="/logo.webp"
        alt="ELYSYAL Logo"
        width={140}
        height={140}
        priority
        className="w-full h-auto"
      />
    </div>
  );
};

const ServiceLink = ({ item, onClick, isActive }) => {
  return (
    <Link 
      href={item.href} 
      onClick={onClick} 
      className={`flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 ${isActive ? 'bg-blue-50/80 shadow-sm border border-blue-100' : 'bg-gray-50 hover:shadow-lg'}`}
    >
      <div className="relative w-12 h-12 shrink-0">
        <ImageWithSkeleton
          src={item.icon}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>
      <span className={`font-medium ${isActive ? 'text-blue-600' : 'text-black hover:text-blue-600'}`}>{item.title}</span>
    </Link>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const { openContactModal } = useModal();

  const serviceItems = [
    { title: "Artificial Intelligence Development", href: "/services/ai-development", icon: "/Icon - 01.webp" },
    { title: "Blockchain Development", href: "/services/blockchain", icon: "/Icon - 02.webp" },
    { title: "Data Science", href: "/services/data-science", icon: "/Icon - 03.webp" },
    { title: "Custom Software Development", href: "/services/custom-software", icon: "/Icon - 04.webp" },
    { title: "Mobile App Development", href: "/services/mobile-app-development", icon: "/Icon - 05.webp" },
    { title: "Staff Augmentation Services", href: "/services/staff-augmentation", icon: "/Icon - 08.webp" },
  ];

  /* Simulate loading */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll on mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" aria-label="Home">
          <NavLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-black">
          {isLoading ? (
            <>
              <Skeleton width={80} height={20} />
              <Skeleton width={100} height={20} />
              <Skeleton width={90} height={20} />
              <Skeleton width={110} height={20} />
              <Skeleton width={120} height={20} />
              <Skeleton width={110} height={20} />
            </>
          ) : (
            <>
              <div className="group flex items-center">
                <button className={`flex items-center gap-1 py-8 hover:text-blue-600 transition-colors ${pathname.startsWith('/services') ? 'text-blue-600' : ''}`}>
                  Services
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="fixed left-0 top-[90px] w-full bg-white shadow-xl border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100]">
                  <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceItems.map((item, i) => (
                      <ServiceLink key={i} item={item} isActive={pathname === item.href} />
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/Tech-stack" className={`hover:text-blue-600 transition-colors ${pathname === '/Tech-stack' ? 'text-blue-600' : ''}`}>Tech-Stack</Link>
              <Link href="/Industries" className={`hover:text-blue-600 transition-colors ${pathname === '/Industries' ? 'text-blue-600' : ''}`}>Industries</Link>
              <Link href="/solution-hub" className={`hover:text-blue-600 transition-colors ${pathname === '/solution-hub' ? 'text-blue-600' : ''}`}>Solution Hub</Link>
              <Link href="/success-Stories" className={`hover:text-blue-600 transition-colors ${pathname === '/success-Stories' ? 'text-blue-600' : ''}`}>Success Stories</Link>
              <Link href="/About" className={`hover:text-blue-600 transition-colors ${pathname === '/About' ? 'text-blue-600' : ''}`}>About Company</Link>
            </>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          {isLoading ? (
            <Skeleton width={120} height={40} className="rounded-lg" />
          ) : (
            <button
              onClick={openContactModal}
              className="
                px-5 py-2
                rounded-lg
                text-sm
                font-bold
              
                transition-colors
                text-black
                hover:text-blue-600
                
              "
            >
              Get in Touch 
            </button>
          )}
        </div>


        {/* Glass Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
          className="
            lg:hidden
            relative
            p-3
            rounded-xl
            bg-white/30
            backdrop-blur-xl
            border border-white/40
            shadow-md
            z-[70]
            transition
            active:scale-95
          "
        >
          <span className={`block w-6 h-[2px] bg-black transition ${open && "rotate-45 translate-y-2"}`} />
          <span className={`block w-6 h-[2px] bg-black my-1 transition ${open && "opacity-0"}`} />
          <span className={`block w-6 h-[2px] bg-black transition ${open && "-rotate-45 -translate-y-2"}`} />
        </button>
      </div>

      {/* Breadcrumbs for phone view */}
      <div className="bg-transparent lg:hidden">
        <Breadcrumbs />
      </div>

      {/* Glass Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              lg:hidden
              absolute top-full left-0 w-full
              bg-white/30
              backdrop-blur-xl
              border-t border-white/40
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              z-[60]
              h-[calc(100vh-80px)] overflow-y-auto
            "
          >
            <nav className="flex flex-col items-center gap-5 px-6 py-8 font-bold text-black text-center">

              {/* Mobile Services */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center gap-2 transition-colors ${pathname.startsWith('/services') ? 'text-blue-600' : ''}`}
              >
                Services
                <svg className={`w-4 h-4 transition ${mobileServicesOpen && "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white/40 backdrop-blur-lg rounded-xl p-3 w-full max-w-xs"
                  >
                    {serviceItems.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block p-2 text-sm text-center truncate transition-colors ${pathname === item.href ? 'text-blue-600' : ''}`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/Tech-stack" onClick={() => setOpen(false)} className={`text-center hover:text-blue-600 transition-colors ${pathname === '/Tech-stack' ? 'text-blue-600' : ''}`}>Tech-Stack</Link>
              <Link href="/Industries" onClick={() => setOpen(false)} className={`text-center hover:text-blue-600 transition-colors ${pathname === '/Industries' ? 'text-blue-600' : ''}`}>Industries</Link>
              <Link href="/solution-hub" onClick={() => setOpen(false)} className={`text-center hover:text-blue-600 transition-colors ${pathname === '/solution-hub' ? 'text-blue-600' : ''}`}>Solution Hub</Link>
              <Link href="/success-Stories" onClick={() => setOpen(false)} className={`text-center hover:text-blue-600 transition-colors ${pathname === '/success-Stories' ? 'text-blue-600' : ''}`}>Success Stories</Link>
              <Link href="/About" onClick={() => setOpen(false)} className={`text-center hover:text-blue-600 transition-colors ${pathname === '/About' ? 'text-blue-600' : ''}`}>About Company</Link>
              <button onClick={() => { setOpen(false); openContactModal(); }} className="text-center font-bold hover:text-blue-600 transition-colors">Get in Touch</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
