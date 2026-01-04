"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, User, FolderGit2, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <FolderGit2 className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Mail className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}