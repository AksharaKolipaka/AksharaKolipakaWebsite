"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { WavyBackground } from "@/components/ui/wavy-background"; // Import your new component
import { HeroText } from "./ui/hero-text";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1.2]),
  ];

  return (
    <section ref={ref} className="relative bg-black overflow-x-clip">
      
      {/* 1. DESKTOP & IPAD VERSION (Visible >= 640px) */}
      <div className="hidden sm:block">
        <GoogleGeminiEffect 
          pathLengths={pathLengths} 
          className="sm:-mt-20 md:-mt-64 lg:-mt-80" 
        >
          <HeroText title="Akshara Kolipaka" />
        </GoogleGeminiEffect>
      </div>

      {/* 2. MOBILE VERSION (Visible < 640px) */}
      <div className="block sm:hidden relative pt-10">
        <HeroText title="Akshara Kolipaka" />

        <div className="-mt-12 -mb-12"> 
          <WavyBackground 
            containerClassName="h-[160px]" 
            colors={["#076EFF", "#4FABFF", "#B1C5FF"]}
            waveOpacity={0.5}
            blur={15}
            speed="fast"
          />
        </div>
      </div>
    </section>
  );
}