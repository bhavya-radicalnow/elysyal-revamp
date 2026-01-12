"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/section/Services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </>
  );
}
