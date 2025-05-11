
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.05 * i,
        duration: 0.7
      }
    })
  };

  const highlights = [
    "6+ ans d'expérience en développement web",
    "Spécialiste en intelligence artificielle",
    "Passionnée par l'UI/UX design",
    "Formation continue en nouvelles technologies"
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient inline-block text-3xl md:text-4xl font-playfair font-medium mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
            }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0">
              <div className="neon-border rounded-2xl p-3 glass">
                <img 
                  src="/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png" 
                  alt="Portrait professionnelle" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
          >
            <h3 className="text-2xl font-medium mb-6">
              <span className="text-white">Sophie Durant,</span>{" "}
              <span className="text-gradient">Développeuse IA & Web</span>
            </h3>

            <div className="space-y-4 text-white/80 mb-8">
              <p>
                Passionnée par la technologie depuis mon plus jeune âge, j'ai développé une expertise à l'intersection du développement web et de l'intelligence artificielle. Mon approche combine la créativité et la rigueur technique pour construire des solutions innovantes.
              </p>
              <p>
                Mon parcours m'a amenée à travailler sur des projets variés, des applications web complexes aux systèmes d'IA conversationnelle, en passant par des interfaces utilisateur avant-gardistes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
