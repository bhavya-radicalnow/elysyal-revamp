import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"
import Hero from "@/components/section/Hero";
import Services from "@/components/section/Services";
import Industries from "@/components/section/Industries";
import WhyChoose from "@/components/section/WhyChoose";

import CallToAction from "@/components/section/CallToAction";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Services/>
      <Industries/>
      <WhyChoose/>
      <CallToAction/>
      <Footer />
    </>
  );
}
