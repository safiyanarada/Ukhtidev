import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Force la couleur blanche en inline sur tous les éléments textuels
    const forceWhite = () => {
      const elements = document.querySelectorAll(
        'body, h1, h2, h3, h4, h5, h6, p, span, a, button, label, strong, em, b, i'
      );
      elements.forEach(el => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.color = '#fff';
        htmlEl.style.textShadow = 'none';
        htmlEl.style.opacity = '1';
        htmlEl.style.webkitTextFillColor = '#fff';
      });
    };
    forceWhite();
    // Observe les mutations du DOM pour réappliquer le style
    const observer = new MutationObserver(forceWhite);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* L'arrière-plan animé doit être placé avant le conteneur principal */}
      <AnimatedBackground />
      
      <div className="relative min-h-screen bg-transparent text-foreground z-0 force-white-text">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black shadow-lg text-white hover:scale-110 transition-all duration-300"
          aria-label="Remonter en haut"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
    </>
  );
};

export default Index;
