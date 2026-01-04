"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { NoiseBackground } from "@/components/ui/noise-background";

export const FloatingNav = ({ navItems, className }: any) => {
  return (
    <div className={cn("fixed top-6 md:top-8 inset-x-0 mx-auto z-[5000] flex justify-center w-[95%] max-w-7xl", className)}>
      <NoiseBackground
        containerClassName="rounded-full bg-black/80 border border-white/[0.1] shadow-2xl flex items-center justify-center p-[1px] backdrop-blur-sm"
        gradientColors={[
            "rgba(255, 100, 150, 0.3)", 
            "rgba(100, 150, 255, 0.3)", 
            "rgba(255, 200, 100, 0.3)"
        ]}
        noiseIntensity={0.1}
      >
        <div className="flex items-center justify-center gap-x-8 md:gap-x-16 px-8 py-2 md:px-20 md:py-3 w-full">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={idx}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-2 text-neutral-50 hover:text-white transition-all duration-200 group"
              )}
            >
              {/* Icon for mobile */}
              <span className="block md:hidden scale-110">{navItem.icon}</span>
              
              <span className="hidden md:block text-sm font-bold tracking-[0.15em] uppercase">
                {navItem.name}
              </span>
              
              
            </a>
          ))}
        </div>
      </NoiseBackground>
    </div>
  );
};