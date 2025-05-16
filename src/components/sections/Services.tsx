import { motion } from "framer-motion";
import { Code, Check, Brain, Palette } from "lucide-react";

  <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory flex-nowrap relative z-10">
    {/* Carte 1 */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg relative overflow-hidden group flex-shrink-0 w-full md:w-auto snap-center"
    >
      {/* Light reflection */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-[40px] group-hover:bg-primary/10 transition-colors duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <Code className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-orbitron text-white mb-4">Développement Web</h3>
        <p className="text-muted-foreground mb-6">
          Création de sites web et applications modernes, performants et responsives.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary" />
            <span>Sites vitrines et e-commerce</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary" />
            <span>Applications web progressives</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary" />
            <span>Optimisation des performances</span>
          </li>
        </ul>
      </div>
    </motion.div>

    {/* Carte 2 */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg relative overflow-hidden group flex-shrink-0 w-full md:w-auto snap-center"
    >
      {/* Light reflection */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full filter blur-[40px] group-hover:bg-secondary/10 transition-colors duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
          <Brain className="w-6 h-6 text-secondary" />
        </div>
        <h3 className="text-xl font-orbitron text-white mb-4">Intelligence Artificielle</h3>
        <p className="text-muted-foreground mb-6">
          Intégration de solutions IA pour automatiser et optimiser vos processus.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-secondary" />
            <span>Chatbots et assistants virtuels</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-secondary" />
            <span>Analyse prédictive</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-secondary" />
            <span>Reconnaissance d'images</span>
          </li>
        </ul>
      </div>
    </motion.div>

    {/* Carte 3 */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg relative overflow-hidden group flex-shrink-0 w-full md:w-auto snap-center"
    >
      {/* Light reflection */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full filter blur-[40px] group-hover:bg-accent/10 transition-colors duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
          <Palette className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-orbitron text-white mb-4">UX/UI Design</h3>
        <p className="text-muted-foreground mb-6">
          Design d'interfaces modernes et intuitives pour une expérience utilisateur optimale.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>Design responsive</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>Prototypage interactif</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            <span>Tests utilisateurs</span>
          </li>
        </ul>
      </div>
    </motion.div>
  </div> 