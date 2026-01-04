

"use client";
import React from "react";
import { motion } from "motion/react";

export const SectionDivider = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-8 sm:hidden">
      {/* The Glow Line */}
      <motion.div 
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "60%", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-[#076EFF] to-transparent relative"
      >
        {/* Central Pulse Dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#4FABFF] rounded-full shadow-[0_0_8px_#4FABFF]" />
      </motion.div>
      
      {/* Optional: Subtle Scroll Hint */}
      <motion.span 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-[8px] uppercase tracking-[0.4em] text-neutral-600 mt-4"
      >
        Scroll to Explore
      </motion.span>
    </div>
  );
};