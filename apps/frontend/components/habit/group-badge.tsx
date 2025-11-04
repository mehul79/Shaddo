"use client"

import { BookOpen, Dumbbell, Apple, Music, Code, Palette, Brain, Lightbulb, Zap, Heart } from "lucide-react"

interface GroupBadgeProps {
  name: string
  color: string
  icon: string
}

const iconMap: Record<string, any> = {
  BookOpen,
  Dumbbell,
  Apple,
  Music,
  Code,
  Palette,
  Brain,
  Lightbulb,
  Zap,
  Heart,
}

export function GroupBadge({ name, color, icon }: GroupBadgeProps) {
  const IconComponent = iconMap[icon] || BookOpen

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    rose: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
    indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  }

  const badgeClass = colorClasses[color] || colorClasses.blue

  return (
    <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${badgeClass}`}>
      <IconComponent className="h-3 w-3" />
      <span>{name}</span>
    </div>
  )
}
