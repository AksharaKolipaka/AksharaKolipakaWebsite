"use client";

import React from "react";

const EncryptedText = ({ text, revealedClassName, encryptedClassName }: any) => (
  <span className={revealedClassName}>{text}</span>
);

export const HeroText = ({ title }: { title?: string }) => {
  return (
    <div className="relative z-10 pt-10 pb-4 md:pt-40 lg:pt-60 md:pb-0 flex flex-col items-center gap-4 transition-all bg-transparent">
      
      {/* Name Title */}
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-regular pb-2 text-center">
        <EncryptedText
          text={title || "Akshara Kolipaka"}
          revealedClassName="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
          encryptedClassName="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
          flipDelayMs={30}
        />
      </div>

      {/* Sub-header with Blue Glow */}
      <span 
        className="uppercase tracking-[0.2em] text-[10px] md:text-base font-bold text-center px-4"
        style={{ 
          color: "#3b82f6", 
          textShadow: "0 0 8px rgba(59, 130, 246, 0.8), 0 0 16px rgba(59, 130, 246, 0.4)" 
        }}
      >
        Full-Stack Developer — UI/UX Designer
      </span>

      {/* Description Text */}
      <div className="text-xs md:text-xl font-medium text-center text-neutral-400 max-w-lg mx-auto leading-relaxed px-6">
        Architecting <span className="text-white italic">immersive</span> interfaces and 
        seamless <span className="text-white">full-stack systems</span> that turn 
        complex ideas into digital reality.
      </div>

    </div>
  );
};