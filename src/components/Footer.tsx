
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-playfair text-gradient text-lg">Sophie</h3>
              <p className="text-sm text-muted-foreground">
                Développeuse web & IA créant des expériences numériques innovantes et élégantes.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="Twitter"
                >
                  <Button variant="ghost" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="Instagram"
                >
                  <Button variant="ghost" size="icon">
                    <Instagram className="w-4 h-4" />
                  </Button>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="LinkedIn"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  aria-label="GitHub"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                </motion.a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Compétences
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Développement Web
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Intelligence Artificielle
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    UX/UI Design
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    contact@sophiedurant.com
                  </a>
                </li>
                <li>
                  <p className="text-sm text-muted-foreground">
                    Paris, France
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Sophie Durant. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
