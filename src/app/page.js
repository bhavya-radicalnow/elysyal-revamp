import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"
import Hero from "@/components/section/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <main>
        <h1>Hello</h1>
      </main>
      <Footer />
    </>
  );
}
