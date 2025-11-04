"use client"

import { useState, useEffect } from "react"
import { Check, X } from "lucide-react"

interface CongratulationsModalProps {
  isOpen: boolean
  habitTitle: string
  streak: number
  onClose: () => void
}

export function CongratulationsModal({ isOpen, habitTitle, streak, onClose }: CongratulationsModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      // Auto-close after 3 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setMounted(false)
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 pointer-events-none ${
          isOpen ? "pointer-events-auto" : ""
        }`}
      >
        <div
          className={`relative bg-card rounded-2xl shadow-2xl border border-border/40 p-8 max-w-sm w-full transform transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Content */}
          <div className="text-center space-y-4">
            {/* Check icon with animation */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Check className="h-8 w-8 text-primary-foreground" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Congratulations message */}
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-card-foreground">Congratulations!</h2>
              <p className="text-sm text-muted-foreground">
                You completed <span className="font-semibold text-card-foreground">"{habitTitle}"</span> today.
              </p>
            </div>

            {/* Streak info */}
            <div className="bg-muted/40 rounded-lg py-3 px-4 border border-border/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground opacity-70 mb-1">
                Current Streak
              </p>
              <p className="text-2xl font-bold text-primary">{streak} days</p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-full mt-6 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:bg-primary/90 active:scale-95"
            >
              Keep it up!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
