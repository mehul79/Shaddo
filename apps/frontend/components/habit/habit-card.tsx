"use client"

import { useState } from "react"
import { Check, X, Flame, Edit2 } from "lucide-react"
import { CongratulationsModal } from "@/components/habit/congratulations-modal"
import { GroupBadge } from "@/components/habit/group-badge"

interface HabitCardProps {
  id: string
  title: string
  description?: string
  reminderTimes?: string[]
  streak: number
  completed?: boolean
  group?: {
    name: string
    color: string
    icon: string
  }
  onMarkComplete: (habitId: string) => void
  onMarkIncomplete: (habitId: string) => void
  onUpdateHabit?: (habitId: string, updates: any) => void
}

export function HabitCard({
  id,
  title,
  description,
  reminderTimes,
  streak,
  completed = false,
  group,
  onMarkComplete,
  onMarkIncomplete,
  onUpdateHabit,
}: HabitCardProps) {
  const [showCongrats, setShowCongrats] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const getTitleSizeClass = (len: number) => {
    if (len > 36) return "text-base"
    if (len > 26) return "text-lg"
    return "text-xl"
  }

  const handleToggle = () => {
    if (!completed) {
      onMarkComplete(id)
      setShowCongrats(true)
    } else {
      onMarkIncomplete(id)
    }
  }

  const handleSaveEdit = (updates: any) => {
    if (onUpdateHabit) {
      onUpdateHabit(id, updates)
    }
    setShowEditModal(false)
  }

  const streakMaintained = streak >= 7
  const streakColor = streakMaintained ? "text-green-600" : "text-red-500"
  const streakBgColor = streakMaintained ? "bg-green-500/10" : "bg-red-500/10"


  return (
    <>
      <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-card to-card/95 text-card-foreground shadow-xl border border-border/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-border/60">
        {/* Card Header - Habit title and streak */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {group && <GroupBadge {...group} />}
            </div>
            <h3
              className={`${getTitleSizeClass(title.length)} font-bold text-card-foreground`}
              title={title}
            >
              {title}
            </h3>
          </div>

          <div className="ml-4 text-right">
            <div className={`flex items-center justify-end gap-1 mb-1 ${streakBgColor} px-2 py-1 rounded-lg`}>
              <Flame className={`h-4 w-4 ${streakColor}`} />
              <p className={`text-2xl font-bold ${streakColor}`}>{streak}</p>
            </div>
            {/* <p className="text-xs font-medium text-muted-foreground uppercase tracking-tight">days</p> */}
          </div>
        </div>

        {/* Card Divider */}
        <div className="px-6 h-px bg-gradient-to-r from-border/20 via-border/40 to-border/20"></div>

        {/* Card Body - Description and reminders */}
        {/* <div className="px-6 py-5 space-y-4">
          {description && (
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          )} */}

          {/* {reminderTimes && reminderTimes.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground opacity-60 mb-2">
                Reminders
              </p>
              <div className="flex flex-wrap gap-2">
                {reminderTimes.map((time, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-xs px-3 py-1.5 rounded-md bg-muted/60 text-muted-foreground font-mono font-medium border border-border/30 transition-colors hover:bg-muted/80"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          )} */}
        {/* </div> */}

        {/* Card Divider */}
        <div className="px-6 h-px bg-gradient-to-r from-border/20 via-border/40 to-border/20"></div>

        {/* Card Footer - Toggle switch and edit button */}
        <div className="px-6 py-5 flex items-center justify-between bg-card/40">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground opacity-60">Status</p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowEditModal(true)}
              className="p-2 rounded-full transition-all hover:bg-muted text-muted-foreground hover:text-foreground"
              aria-label="Edit habit"
              title="Edit habit"
            >
              <Edit2 className="h-4 w-4" />
            </button>

            <button
              onClick={handleToggle}
              className={`relative inline-flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
                completed
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/40"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
              title={completed ? "Mark as incomplete" : "Mark as complete"}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <X
                  className={`absolute h-5 w-5 transition-all duration-300 ${
                    completed ? "opacity-0 scale-75 rotate-180" : "opacity-100 scale-100 rotate-0"
                  }`}
                />
                <Check
                  className={`absolute h-5 w-5 transition-all duration-300 ${
                    completed ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <CongratulationsModal
        isOpen={showCongrats}
        habitTitle={title}
        streak={streak}
        onClose={() => setShowCongrats(false)}
      />

      {/* <EditHabitModal
        isOpen={showEditModal}
        habitTitle={title}
        habitDescription={description}
        reminderTimes={reminderTimes}
        group={group}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveEdit}
      /> */}
    </>
  )
}
