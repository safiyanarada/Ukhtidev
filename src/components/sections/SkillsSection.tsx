import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Brain, Code, Database, Globe, Layers, Palette, Settings, Zap } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const SkillsSection = () => {
  const skills = [
    {
      category: "Développement Web et IA",
      items: [
        { name: "HTML/CSS/JS", icon: <Code className="w-5 h-5" />, level: 95 },
        { name: "React", icon: <Code className="w-5 h-5" />, level: 90 },
        { name: "Node.js", icon: <Server className="w-5 h-5" />, level: 85 },
        { name: "UX/UI Design", icon: <Palette className="w-5 h-5" />, level: 80 },
        { name: "NLP & Chatbots", icon: <Brain className="w-5 h-5" />, level: 90 },
      ]
    }
  ];

  const techSkills = [
    { icon: <Code className="w-6 h-6" />, name: "JavaScript" },
    { icon: <Settings className="w-6 h-6" />, name: "Node.js" },
    { icon: <Code className="w-6 h-6" />, name: "TypeScript" },
    { icon: <Layers className="w-6 h-6" />, name: "React" },
    { icon: <Zap className="w-6 h-6" />, name: "Next.js" },
    { icon: <Code className="w-6 h-6" />, name: "HTML/CSS" },
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
  
  // Configuration du carousel
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: false,
      align: "start",
      slidesToScroll: 1
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section className="py-24 relative" id="skills">
      <div className="absolute inset-0 bg-black/50 md:bg-transparent z-0"></div>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/10 rounded-full filter blur-[80px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-white drop-shadow-[0_0_8px_rgba(249,168,212,0.5)] text-3xl md:text-4xl font-orbitron font-medium mb-4 uppercase">
              Mes compétences
            </h2>
            <p className="mt-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Une combinaison unique de compétences techniques et créatives pour développer 
              des solutions <span className="text-white font-bold">innovantes</span> et <span className="text-white font-bold">performantes</span>.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
              className="glass rounded-xl p-8 w-full max-w-4xl hover:shadow-md hover:shadow-accent/10 transition-all duration-300"
            >
              <h3 className="text-xl font-medium mb-8 text-white text-center">{skillGroup.category}</h3>
              <div className="space-y-8">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div key={idx} variants={item}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-white">
                          {skill.icon}
                        </div>
                        <span className="text-white font-bold">{skill.name}</span>
                      </div>
                      <span className="text-white font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-pink-300 relative"
                      >
                        <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-pink-300 shadow-md"></div>
                      </motion.div>
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
          <h3 className="text-xl font-medium mb-8 text-center text-white font-orbitron uppercase">Technologies maîtrisées</h3>
          
          <div className="w-full max-w-4xl mx-auto overflow-hidden px-0 py-8">
            <div className="embla w-full" ref={emblaRef}>
              <div className="embla__container flex">
                {techSkills.map((tech, idx) => (
                  <div key={idx} className="embla__slide flex-[0_0_25%] min-w-0 pl-4">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="glass glass-hover rounded-lg p-4 text-center h-full transition-all duration-300 border-2 border-pink-300 drop-shadow-[0_0_12px_#f9a8d4]"
                    >
                      <div className="text-white mb-2 flex justify-center">
                        {tech.icon}
                      </div>
                      <div className="text-sm text-white font-bold animated-underline inline-block">{tech.name}</div>
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
