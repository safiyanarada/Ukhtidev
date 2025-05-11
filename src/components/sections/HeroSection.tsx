import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center relative pt-16 pb-20 overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-black/50 md:bg-transparent z-0"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Blobs fusionnés et centrés sur mobile */}
        {/* Haut */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-72 h-72 md:top-20 md:left-0 md:translate-x-0 md:w-96 md:h-96 bg-primary/50 rounded-full filter blur-[70px] md:blur-[100px] z-0" />
        {/* Bas */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 md:bottom-20 md:right-0 md:left-auto md:translate-x-0 md:w-96 md:h-96 bg-secondary/40 rounded-full filter blur-[70px] md:blur-[100px] z-0" />
        {/* Centre */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 md:top-1/4 md:right-1/4 md:left-auto md:translate-x-0 md:w-64 md:h-64 bg-accent/40 rounded-full filter blur-[60px] md:blur-[80px] z-0" />
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] mt-8 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center mt-10 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="mb-10">
              <motion.h1 
                initial={{ opacity: 0.7, y: 20 }}
                animate={{ opacity: 0.92, y: [0, -12, 0] }}
                transition={{ delay: 0.8, duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="text-3xl md:text-6xl font-orbitron font-medium leading-tight mb-2 text-white drop-shadow-[0_0_18px_#fff]"
                style={{ borderBottom: 'none' }}
              >
                <div>
                  <TextGenerateEffect words="Développeuse spécialisée en web et IA" />
                </div>
              </motion.h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto lg:mx-0 font-rajdhani leading-relaxed">
              Spécialiste en développement web et intelligence artificielle, 
              je crée des expériences numériques <span className="text-white font-medium">innovantes</span> et <span className="text-white font-medium">élégantes</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start justify-center lg:justify-start text-lg md:text-xl">
              <Button
                size="lg"
                className="button-gradient group font-bold px-8 py-4 text-lg md:text-xl"
                onClick={() => {
                  const section = document.getElementById('projects');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Voir mes projets
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-accent/30 hover:border-accent/70 transition-colors glow-hover rounded-full font-bold px-8 py-4 text-lg md:text-xl"
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Me contacter
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="w-full lg:w-1/2 mt-12 lg:mt-0 relative"
          >
            <div className="relative h-56 w-full max-w-sm md:h-[400px] md:w-[400px] md:max-w-none mx-auto">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(182, 139, 245, 0.5), 0 0 30px 10px rgba(255, 110, 199, 0.3), 0 0 40px 15px rgba(102, 252, 241, 0.2)",
                    "0 0 30px 10px rgba(182, 139, 245, 0.7), 0 0 40px 15px rgba(255, 110, 199, 0.5), 0 0 50px 20px rgba(102, 252, 241, 0.3)",
                    "0 0 20px 5px rgba(182, 139, 245, 0.5), 0 0 30px 10px rgba(255, 110, 199, 0.3), 0 0 40px 15px rgba(102, 252, 241, 0.2)"
                  ],
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
                className="absolute inset-0 rounded-full opacity-80"
              ></motion.div>
              <div className="glass rounded-xl md:rounded-full overflow-hidden p-1 relative z-10 neon-border h-full w-full">
                <div className="h-full w-full overflow-hidden border border-white/30 rounded-xl md:rounded-full">
                  <motion.img 
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 8,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    src="/assets/portfolio_hero.png" 
                    alt="Portrait stylisé" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
