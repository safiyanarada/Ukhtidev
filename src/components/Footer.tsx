import { Github, Instagram, Linkedin, Twitter, Heart, Star, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 relative overflow-hidden">
      {/* Overlay noir semi-transparent */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-[80px]" />
      </div>
      
      {/* Neon lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
      
      <div className="container px-4 relative z-10">
        {/* Main content */}
        <div className="glass rounded-2xl p-8 border border-white/20 shadow-lg relative overflow-hidden">
          {/* Light reflections */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-[40px]"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full filter blur-[40px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="space-y-4">
              <h3 className="font-orbitron text-white text-xl">Ukhtidev</h3>
              <p className="text-sm text-white/90 font-rajdhani leading-relaxed">
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
                  <Twitter className="w-4 h-4 text-white/70 group-hover:text-accent transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center group"
                >
                  <Instagram className="w-4 h-4 text-white/70 group-hover:text-accent transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center group"
                >
                  <Linkedin className="w-4 h-4 text-white/70 group-hover:text-accent transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center group"
                >
                  <Github className="w-4 h-4 text-white/70 group-hover:text-accent transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center group"
                >
                  <svg viewBox="0 0 256 256" className="w-5 h-5 text-white/70 group-hover:text-accent transition-colors" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M168.5 32c0 30.9 25.1 56 56 56v32c-18.2 0-35.1-5.9-48.7-15.8v60.8c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72h8v32h-8c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40V32h24.7z" fill="currentColor"/>
                      <path d="M168.5 32c0 30.9 25.1 56 56 56v32c-18.2 0-35.1-5.9-48.7-15.8v60.8c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72h8v32h-8c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40V32h24.7z" fill="currentColor" fillOpacity=".2"/>
                    </g>
                  </svg>
                </motion.a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-white/90 font-orbitron">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Accueil</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>À propos</span>
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
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
                  <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Développement Web</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                    <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Intelligence Artificielle</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
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
                  <a href="mailto:contact.ukhtidev@gmail.com" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group">
                    <MessageSquare className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span>contact.ukhtidev@gmail.com</span>
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
              © {currentYear} Ukhtidev. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
