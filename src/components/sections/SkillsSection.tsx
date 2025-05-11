
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Brain, Code, Database, Globe, Layers, Palette, Settings, Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const SkillsSection = () => {
  const skills = [
    {
      category: "Intelligence Artificielle",
      items: [
        { name: "Machine Learning", icon: <Brain className="w-5 h-5" />, level: 85 },
        { name: "NLP & Chatbots", icon: <Brain className="w-5 h-5" />, level: 90 },
        { name: "Computer Vision", icon: <Brain className="w-5 h-5" />, level: 75 },
        { name: "Data Science", icon: <Database className="w-5 h-5" />, level: 80 },
      ]
    },
    {
      category: "Développement Web",
      items: [
        { name: "HTML/CSS/JS", icon: <Code className="w-5 h-5" />, level: 95 },
        { name: "React", icon: <Code className="w-5 h-5" />, level: 90 },
        { name: "Node.js", icon: <Server className="w-5 h-5" />, level: 85 },
        { name: "UX/UI Design", icon: <Palette className="w-5 h-5" />, level: 80 },
      ]
    }
  ];

  const techSkills = [
    { icon: <Code className="w-6 h-6" />, name: "JavaScript" },
    { icon: <Layers className="w-6 h-6" />, name: "React" },
    { icon: <Globe className="w-6 h-6" />, name: "TensorFlow" },
    { icon: <Database className="w-6 h-6" />, name: "PyTorch" },
    { icon: <Settings className="w-6 h-6" />, name: "Node.js" },
    { icon: <Zap className="w-6 h-6" />, name: "Next.js" },
    { icon: <Brain className="w-6 h-6" />, name: "OpenAI" },
    { icon: <Code className="w-6 h-6" />, name: "TypeScript" },
    { icon: <Database className="w-6 h-6" />, name: "MongoDB" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  // Setup autoplay carousel with custom options
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "start"
    }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-24 relative bg-muted" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient inline-block text-3xl md:text-4xl font-orbitron font-medium mb-4 animate-neon-pulse">Mes compétences</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Une combinaison unique de compétences techniques et créatives pour développer 
            des solutions innovantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
              className="glass rounded-xl p-8"
            >
              <h3 className="text-xl font-medium mb-8 text-gradient">{skillGroup.category}</h3>
              <div className="space-y-8">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div key={idx} variants={item}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-medium mb-8 text-center text-gradient font-orbitron">Technologies maîtrisées</h3>
          
          <div className="w-full overflow-hidden px-4 py-8">
            <div className="w-full max-w-5xl mx-auto" ref={emblaRef}>
              <div className="flex">
                {techSkills.map((tech, idx) => (
                  <div key={idx} className="flex-shrink-0 w-1/4 pl-4">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="glass glass-hover rounded-lg p-4 text-center h-full"
                    >
                      <div className="text-gradient mb-2 flex justify-center">
                        {tech.icon}
                      </div>
                      <div className="text-sm">{tech.name}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Server = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6" y1="6" y2="6" />
    <line x1="6" x2="6" y1="18" y2="18" />
  </svg>
);
