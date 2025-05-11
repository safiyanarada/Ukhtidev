
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
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/25 rounded-full filter blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full filter blur-[80px]" />
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium">Développeuse Web & IA</span>
            </motion.p>
            
            <div className="mb-6">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8 }}
                className="text-5xl md:text-7xl font-medium leading-tight mb-2 font-orbitron"
              >
                <div className="text-white">
                  <TextGenerateEffect words="Je code le futur" />
                </div>
                <motion.div 
                  className="text-gradient inline-block relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut"  
                  }}
                >
                  <TextGenerateEffect words="avec style." />
                  <motion.div 
                    className="absolute -bottom-1 left-0 w-full h-px"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                      scaleX: [0, 1, 1, 0], 
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut", 
                      repeat: Infinity,
                      repeatDelay: 1,
                      times: [0, 0.4, 0.6, 1]
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-primary to-secondary"></div>
                  </motion.div>
                </motion.div>
              </motion.h1>
            </div>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 font-rajdhani">
              Spécialiste en développement web et intelligence artificielle, 
              je crée des expériences numériques innovantes et élégantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
              <Button size="lg" className="button-gradient group">
                Voir mes projets
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border border-white/20 hover:border-white/40 transition-colors">
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
            <div className="relative h-[400px] w-[400px] mx-auto">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(155, 135, 245, 0.5), 0 0 30px 10px rgba(217, 70, 239, 0.3)",
                    "0 0 30px 10px rgba(155, 135, 245, 0.7), 0 0 40px 15px rgba(217, 70, 239, 0.5)",
                    "0 0 20px 5px rgba(155, 135, 245, 0.5), 0 0 30px 10px rgba(217, 70, 239, 0.3)"
                  ],
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
                className="absolute inset-0 rounded-full opacity-70"
              ></motion.div>
              <div className="glass rounded-full overflow-hidden p-1 relative z-10">
                <div className="aspect-square rounded-full overflow-hidden border border-white/30">
                  <motion.img 
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 8,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    src="/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png" 
                    alt="Portrait stylisé" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Orbiting Element */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 15, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <motion.div 
                  className="absolute p-2 rounded-full glass"
                  style={{ top: "10%", left: "85%"}}
                >
                  <Rocket className="w-5 h-5 text-accent" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
