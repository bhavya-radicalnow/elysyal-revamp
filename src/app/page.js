import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"
import Hero from "@/components/section/Hero";
import Features from "@/components/section/Features";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features/>
      <main>
        <h1>Hello</h1>
      </main>
      <Footer />
    </>
  );
}
