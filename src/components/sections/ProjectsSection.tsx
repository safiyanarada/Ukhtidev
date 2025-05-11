
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Image Generator",
      category: "ai",
      image: "/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png",
      description: "Générateur d'images basé sur l'IA utilisant GAN pour créer des œuvres d'art uniques.",
      technologies: ["React", "TensorFlow.js", "WebGL"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
      description: "Plateforme e-commerce complète avec paiement en ligne et gestion des stocks.",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Chatbot Assistant",
      category: "ai",
      image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
      description: "Assistant virtuel intelligent capable de comprendre le langage naturel.",
      technologies: ["Python", "NLP", "React"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      category: "web",
      image: "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e851fd8d7d.png",
      description: "Tableau de bord analytique pour suivre les performances d'un portefeuille d'investissement.",
      technologies: ["React", "D3.js", "Node.js"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Face Recognition App",
      category: "ai",
      image: "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png",
      description: "Application mobile de reconnaissance faciale pour l'authentification sécurisée.",
      technologies: ["TensorFlow", "React Native", "OpenCV"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Digital Art Gallery",
      category: "web",
      image: "/lovable-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png",
      description: "Galerie d'art numérique interactive avec fonctionnalités sociales.",
      technologies: ["Three.js", "WebGL", "Firebase"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = selectedFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-24 relative" id="projects">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient inline-block text-3xl md:text-4xl font-playfair font-medium mb-4">Mes projets</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Découvrez une sélection de mes dernières réalisations dans le domaine du web et de l'intelligence artificielle.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md glass p-1">
            {["all", "ai", "web"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {filter === "all" ? "Tous" : filter === "ai" ? "IA" : "Web"}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={childVariants}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative group"
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="glass rounded-xl overflow-hidden"
                    >
                      <div className="relative aspect-video">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                          <div>
                            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                            <div className="flex gap-2 flex-wrap">
                              {project.technologies.map((tech, idx) => (
                                <span 
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="glass border-white/10 w-80">
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium">{project.title}</h4>
                      <p className="text-sm text-white/70">{project.description}</p>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-white/10">
                          <Github className="w-4 h-4" />
                          <span>Repo</span>
                        </Button>
                        <Button className="button-gradient flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </Button>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-white/10">
            Voir tous les projets
          </Button>
        </div>
      </div>
    </section>
  );
};
