"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";

export default function ContactPage() {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:aksharakolipaka1@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/AksharaKolipaka",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aksharakolipaka/",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Resume",
      href: "/AksharaKolipakaResume.pdf", 
    },
  ];

  return (
    <section id="contact" className="relative bg-black text-white overflow-hidden py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl font-regular text-white"
            >
              Let's Connect
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>
          </div>

          {/* Contact Links */}
          <motion.div
            className="flex items-center justify-center gap-6 md:gap-10 flex-wrap"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex flex-col items-center gap-2 group"
              >
                <LiquidGlassCard 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                  draggable={false}
                  blurIntensity="xl"
                  shadowIntensity="lg"
                  glowIntensity="md"
                >
                  <div className="relative z-30 flex items-center justify-center text-white w-full h-full group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </LiquidGlassCard>
                <span className="text-[10px] md:text-sm text-gray-500 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
}