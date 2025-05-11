
import { Github, Instagram, Linkedin, Twitter, Heart, Star, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-[80px]" />
      </div>
      
      {/* Neon lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
      
      <div className="container px-4 relative z-10">
        {/* Main content */}
        <div className="glass glass-hover rounded-2xl p-8 border border-white/20 shadow-lg relative overflow-hidden">
          {/* Light reflections */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-[40px]"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full filter blur-[40px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="space-y-4">
              <h3 className="font-orbitron text-gradient text-xl animate-neon-pulse">Sophie</h3>
              <p className="text-sm text-muted-foreground">
                Développeuse web & IA créant des expériences numériques innovantes et élégantes.
              </p>
              <div className="flex space-x-3">
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center group"
                >
                  <Twitter className="w-4 h-4 text-white/70 group-hover:text-secondary transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center group"
                >
                  <Instagram className="w-4 h-4 text-white/70 group-hover:text-secondary transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center group"
                >
                  <Linkedin className="w-4 h-4 text-white/70 group-hover:text-secondary transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center group"
                >
                  <Github className="w-4 h-4 text-white/70 group-hover:text-secondary transition-colors" />
                </motion.a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-white/90 font-orbitron">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Accueil</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>À propos</span>
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Compétences</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-white/90 font-orbitron">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Développement Web</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Intelligence Artificielle</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>UX/UI Design</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-white/90 font-orbitron">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contact@sophiedurant.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <MessageSquare className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span>contact@sophiedurant.com</span>
                  </a>
                </li>
                <li>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Star className="w-3 h-3 opacity-70" />
                    <span>Paris, France</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0 flex items-center">
              © {currentYear} Sophie Durant. Tous droits réservés.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="flex items-center">
                Conçu avec <Heart className="mx-1 w-3 h-3 text-secondary animate-pulse" /> et technologie moderne
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
