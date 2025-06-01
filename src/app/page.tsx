"use client";
import Header from "@/components/Header";
import "./index.css";
import { useEffect, useState } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import TestimonialsSlider from "@/components/TestMonial";
import Footer from "@/components/Footer";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 1000,
      once: false,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!isClient) return null;
  return (
    <main className="p-4" id="app">
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experiences />
      <TestimonialsSlider />
      <Footer />
    </main>
  );
}
