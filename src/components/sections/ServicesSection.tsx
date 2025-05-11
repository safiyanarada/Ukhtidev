import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Layers, Palette, Wand } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Développement Web",
      description: "Création de sites web et applications web modernes, réactifs et performants."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Intelligence Artificielle",
      description: "Développement de solutions IA sur mesure : chatbots, systèmes de recommandation, analyse prédictive."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design UX/UI",
      description: "Conception d'interfaces utilisateur intuitives et esthétiques pour une expérience optimale."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles natives et hybrides pour iOS et Android."
    },
    {
      icon: <Wand className="h-8 w-8" />,
      title: "Automatisation",
      description: "Automatisation de processus métier et intégration de systèmes pour gagner en efficacité."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Conseil Tech",
      description: "Conseil et accompagnement dans votre stratégie technologique et transformation digitale."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-24 relative bg-white/10" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-accent/10 rounded-full filter blur-[80px]" />
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
            <h2 className="text-white text-3xl md:text-4xl font-orbitron font-medium mb-4 uppercase drop-shadow-[0_0_8px_rgba(249,168,212,0.5)]">
              Mes services
            </h2>
            <p className="mt-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Des prestations sur mesure pour répondre à vos besoins en développement, intelligence artificielle et design.
          </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass glass-hover border-white/10 h-full">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 mb-4 text-pink-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/90 font-rajdhani leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
