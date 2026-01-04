"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GraduationCap, Code2, Database, Share2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-start justify-center px-6 md:pl-20 md:pr-12 pt-10 pb-16 md:py-20 bg-black overflow-x-hidden"
    >
      <div className="max-w-[1440px] w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-0">
          
          {/* Left side - Header & Sparkles */}
          <div className="relative w-full lg:w-[350px] flex flex-col items-center lg:items-start justify-center lg:sticky lg:top-[35%] h-fit mb-6 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start w-full relative">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-regular text-center lg:text-left text-white relative z-20 whitespace-nowrap">
                About Me
              </h1>

              {/* EFFECT CONTAINER: Hidden on mobile (hidden), shown on desktop (md:block) */}
              <div className="hidden md:block w-full lg:w-[150%] h-40 relative mt-10 lg:-ml-20 overflow-visible">
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[#076EFF] to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[#076EFF] to-transparent h-px w-full" />
                
                <div className="absolute inset-x-1/3 top-0 bg-gradient-to-r from-transparent via-[#4FABFF] to-transparent h-[5px] w-1/3 blur-sm" />
                <div className="absolute inset-x-1/3 top-0 bg-gradient-to-r from-transparent via-[#4FABFF] to-transparent h-px w-1/3" />

                <SparklesCore
                  id="aboutSparkles"
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(400px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
          </div>

          {/* Right side - Card Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 lg:ml-auto">
            <AboutCard
              className="md:col-span-2"
              icon={<GraduationCap className="h-5 w-5 text-[#B1C5FF]" />}
              color="#B1C5FF"
              title="Academic Foundation"
              description={
                <>
                  Pursuing a double major in <b className="text-[#B1C5FF]">Computer Science and Statistics</b> at UNC Chapel Hill. My studies focus on the intersection of algorithmic efficiency and data-driven decision making, allowing me to build tools that are as smart as they are fast.
                </>
              }
            />
            <AboutCard
              icon={<Code2 className="h-5 w-5 text-[#FFB7C5]" />}
              color="#FFB7C5"
              title="Full-Stack Craft"
              description="I specialize in modern frameworks like React and Next.js, ensuring that high-performance backends are always paired with pixel-perfect, accessible user interfaces."
            />
            <AboutCard
              icon={<Database className="h-5 w-5 text-[#FFDDB7]" />}
              color="#FFDDB7"
              title="Data Synthesis"
              description="With a background in Statistics, I turn raw, multi-dimensional datasets into interactive visualizations that tell a story and drive meaningful action."
            />
            <AboutCard
              className="md:col-span-2"
              icon={<Share2 className="h-5 w-5 text-[#4FABFF]" />}
              color="#4FABFF"
              title="Social Responsibility"
              description="I am deeply committed to building ethical technology. My goal is to develop scalable software that addresses community needs and champions digital equity for all users."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const AboutCard = ({ title, description, icon, className, color }: {
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
    className?: string;
    color: string;
}) => {
  return (
    <div className={`relative h-full list-none ${className}`}>
      <div className="relative h-full rounded-3xl border border-neutral-800 p-px overflow-visible">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 rounded-[calc(1.5rem-1px)] p-6 bg-zinc-950/80 backdrop-blur-md border border-white/5 overflow-hidden">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div 
              className="w-fit rounded-lg border p-2 bg-neutral-900/50"
              style={{ borderColor: `${color}44` }} 
            >
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-xl font-semibold text-white tracking-tight">
                {title}
              </h3>
              <div className="font-sans text-sm md:text-base text-neutral-400 leading-relaxed">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};