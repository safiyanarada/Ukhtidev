
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px]" />
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-20"
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
              className="inline-block px-4 py-2 rounded-full glass mb-6"
            >
              <span className="text-sm font-medium">Développeuse Web & IA</span>
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl font-medium leading-tight mb-6">
              <div className="text-white mb-2">
                <TextGenerateEffect words="Je code le futur" />
              </div>
              <div className="text-gradient">
                <TextGenerateEffect words="avec style." />
              </div>
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              Spécialiste en développement web et intelligence artificielle, 
              je crée des expériences numériques innovantes et élégantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
              <Button size="lg" className="button-gradient">
                Voir mes projets
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border border-white/20">
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
              <div className="absolute inset-0 animate-glow rounded-full opacity-60"></div>
              <div className="glass rounded-full overflow-hidden p-1 relative z-10">
                <div className="aspect-square rounded-full overflow-hidden border border-white/20">
                  <img 
                    src="/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png" 
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
