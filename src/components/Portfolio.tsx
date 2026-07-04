import { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import useScrollReveal from "../hooks/useScrollReveal";
import Preloader from "./Preloader";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  useScrollReveal();

  useEffect(() => {
    let scroll: any;
    
    if (!isLoading) {
      setTimeout(() => {
        const container = document.querySelector("[data-scroll-container]") as HTMLElement;
        if (container) {
          scroll = new LocomotiveScroll({
            el: container,
            smooth: true,
            multiplier: 1,
            lerp: 0.05,
          });
        }
      }, 100);
    }

    document.documentElement.style.scrollBehavior = "smooth";

    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      if (scroll) scroll.destroy();
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative bg-background text-foreground min-h-screen">
      
      {/* PRELOADER */}
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}

      {/* MAIN CONTENT */}
      <div
        data-scroll-container
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navigation />

        <main className="pt-20">
          <Hero />
          <Experience />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default Portfolio;