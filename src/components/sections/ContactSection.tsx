import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="absolute inset-0 bg-black/50 md:bg-transparent z-0"></div>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]" />
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
            <h2 className="text-white text-3xl md:text-4xl font-orbitron font-medium mb-4 uppercase neon-wave">
              {"Me contacter".split("").map((l, i) => (
                <span key={i} style={{
                  display: 'inline-block',
                  filter: 'drop-shadow(0 0 8px #f9a8d4)',
                  animation: `wave 2.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.08}s`,
                  whiteSpace: l === ' ' ? 'pre' : undefined
                }}>{l}</span>
              ))}
            </h2>
            <p className="mt-6 text-white max-w-2xl mx-auto leading-relaxed">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter.
          </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-medium mb-6">Discutons de votre projet</h3>
            <p className="text-white mb-8 font-rajdhani leading-relaxed">
              Que vous ayez besoin d'un site web, d'une solution d'IA ou simplement d'un conseil,
              je suis là pour vous aider à concrétiser votre vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center mr-4 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Email</h4>
                  <p className="font-rajdhani">contact.ukhtidev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center mr-4 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Adresse</h4>
                  <p className="font-rajdhani">Paris, France</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4 text-white">Suivez-moi</h4>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 glow-hover"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-accent" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 glow-hover"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-accent" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#" 
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 glow-hover"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-accent" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nom</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    className="bg-white/5 border-white/10 focus:border-accent"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-white/5 border-white/10 focus:border-accent"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Sujet de votre message"
                  className="bg-white/5 border-white/10 focus:border-accent"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Votre message..."
                  className="bg-white/5 border-white/10 focus:border-accent min-h-[150px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="button-gradient w-full">
                Envoyer le message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
