"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconShare
  
} from "@tabler/icons-react";

export function NavBar() {

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full scale-120" />
      ),
      href: "/",
    },

    {
      title: "Tasks",
      icon: (
        <img src="pencil.svg" alt="Pencil Icon" className="scale-120 h-full w-full" />
      ),
      href: "/todo",
    },
    {
      title: "Calendar",
      icon: (
        <img src="calendar.svg" alt="Calendar Icon" className="scale-120 h-full w-full" />
      ),
      href: "/calendar",
    },
    {
      title: "Habit",
      icon: (
        <img src="flame.svg" alt="Flame Icon" className="scale-120 h-full w-full" />
      ),
      href: "/habit",
    },
    {
      title: "Pomodoro",
      icon: (
        <img src="timer.svg" alt="Timer Icon" className="scale-120 h-full w-full" />
      ),
      href: "/pomodoro",
    },
    {
      title: "Profile",
      icon: (
        <img src="user.svg" alt="User Icon" className="scale-120 h-full w-full" />
      ),
      href: "/profile",
    },
    {
      title: "Share",
      icon: (
        <IconShare className="h-full w-full scale-120" />
      ),
      href: "/profile",
    },
  ];
  return (
    <div className="fixed bottom-3 flex justify-center w-full scale-80">
        <FloatingDock
          items={links}
          desktopClassName=""
        />
    </div>
  );
}
