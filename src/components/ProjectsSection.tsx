"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ExternalLink, Trophy, Linkedin } from "lucide-react";

const projects = [
  {
    title: "Space Guardians",
    subtitle: "1st Place | AxeHacks 2024",
    description: "A multiplayer space racing and battle game with real-time physics simulation and sprite-based animations using object-oriented architecture.",
    tech: ["OOP", "Game Dev", "Sprite Animation", "Physics Engine"],
    color: "#FFDDB7",
    image: "/photos/spaceGuardians.jpg",
    linkType: "linkedin",
    linkUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7175965897679876097/", 
  },
  {
    title: "Pixel Pets",
    subtitle: "Winner | CLT Hack 2024",
    description: "Gamified productivity platform matching students with virtual pets. Features task management, Pomodoro sessions, and custom pixel art.",
    tech: ["React.js", "State Management", "Pixel Art", "Animations"],
    color: "#FFB7C5",
    image: "/photos/pixelPets.jpg",
    linkType: "linkedin",
    linkUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7226700056463089664/", 
  },
  {
    title: "FLUNC",
    subtitle: "UNC Track Winner | HackNC 2024",
    description: "A financial literacy platform for 30,000+ students featuring an AI advisor and amortization calculators. Saves users an average of $200/month.",
    tech: ["Flask", "OpenAI", "Web Scraping", "JavaScript"],
    color: "#B1C5FF",
    image: "/photos/flunc.png", 
    linkType: "demo",
    linkUrl: "https://devpost.com/software/flunc-financial-literacy-at-unc", 
  },
  {
    title: "Space Economy Hunger Games",
    subtitle: "Business Track Winner | CDC 2025",
    description: "Interactive RShiny analytics platform processing multi-dimensional economic datasets to forecast employment and GDP across space sectors.",
    tech: ["RShiny", "Python ETL", "Data Viz", "Forecasting"],
    color: "#4FABFF",
    image: "/photos/cdc.png",
    linkType: "demo",
    linkUrl: "https://aksharak.shinyapps.io/The_Space_Economy_Arena/",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 bg-black min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-5xl lg:text-7xl font-regular text-white text-center">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-stretch">
          {projects.map((project, index) => (
            <CardContainer 
              key={index} 
              className="inter-var w-full h-full" 
              containerClassName="py-0" 
            >
              <CardBody className="bg-zinc-950/80 relative group/card border-white/10 w-full md:max-w-[42rem] h-full flex flex-col rounded-3xl p-8 border transition-all duration-300 hover:border-white/20">
                
                <CardItem translateZ="120" className="w-full mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    className="h-64 md:h-80 w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    alt={project.title}
                  />
                </CardItem>

                <div className="flex-1 flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="flex items-center gap-2 font-medium text-sm mb-3"
                    style={{ color: project.color }}
                  >
                    <Trophy size={16} />
                    {project.subtitle}
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    {project.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8"
                  >
                    {project.description}
                  </CardItem>

                  <CardItem translateZ="30" className="flex flex-wrap gap-2 mb-10 mt-auto">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="px-4 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </CardItem>
                </div>

                <div className="flex justify-end items-center mt-auto">
                  {project.linkType === "linkedin" ? (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.linkUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2] text-white text-sm font-bold hover:bg-[#084d91] transition-colors"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </CardItem>
                  ) : (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.linkUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </CardItem>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}