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
      title: "Spécial Thaï",
      category: "ai",
      image: "/assets/projet1.png",
      description: "Site vitrine pour un restaurant thaïlandais halal situé dans les Yvelines. Menu, réservation et ambiance authentique au rendez-vous.",
      technologies: ["React", "Node.js", "TailwindCSS"],
      link: "https://www.special-thai.fr/",
      github: "#"
    },
    {
      id: 2,
      title: "Teranga Consult",
      category: "ai",
      image: "/assets/projet2.png",
      description: "Plateforme de consulting digital : services, prise de rendez-vous et accompagnement à la transformation numérique.",
      technologies: ["Next.js", "TypeScript", "MongoDB"],
      link: "https://terangaconsult.netlify.app/",
      github: "#"
    },
    {
      id: 3,
      title: "Hôtel Le Clos Des Papillons",
      category: "ai",
      image: "/assets/projet3.png",
      description: "Landing page élégante pour un hôtel de charme au Sénégal, avec présentation, galerie et formulaire de contact.",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      link: "https://leclosdespapillons.netlify.app/",
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]" />
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
            <h2 className="text-white text-3xl md:text-4xl font-orbitron font-medium mb-4 uppercase">
              Mes projets
            </h2>
            <p className="mt-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Découvrez une sélection de mes dernières réalisations dans le domaine du web et de l'intelligence artificielle.
          </p>
          </div>
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
                aria-label={filter === "all" ? "Filtrer tous les projets" : filter === "ai" ? "Filtrer les projets IA" : "Filtrer les projets Web"}
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
                      <p className="text-sm text-white/90">{project.description}</p>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" className="flex items-center gap-2 border-white/10 glow-hover">
                          <Github className="w-4 h-4" />
                          <span>Repo</span>
                        </Button>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-gradient flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
