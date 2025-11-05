"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X, Flame, Edit2 } from "lucide-react"
import { SparkleParticles } from '@/src/components/lightswind/sparkle-particles';
import InteractiveGridBackground from "./interactive-grid-background";


interface VerificationCardProps {
  title?: string;
  name?: string;
  validThru?: string;
  label?: string;
  streakCount?: number 
}

export function VerificationCard({
  title,
  name,
  label,
  streakCount
}: VerificationCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const innerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2))
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2))
        cardRef.current.style.setProperty('--y', y.toFixed(2))
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2))
      }
    }
    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
      );
      filter: brightness(2);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
      );
    }
    
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `

  const glowVars: React.CSSProperties & Record<string, string> = {
    // Glow configuration
    ['--base']: 220 as unknown as string,
    ['--spread']: 200 as unknown as string,
    ['--radius']: '14',
    ['--border']: '3',
    ['--backdrop']: 'hsl(0 0% 60% / 0.12)',
    ['--backup-border']: 'var(--backdrop)',
    ['--size']: '200',
    ['--outer']: '1',
    ['--border-size']: 'calc(var(--border, 2) * 1px)',
    ['--spotlight-size']: 'calc(var(--size, 150) * 1px)',
    ['--hue']: 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
  }

    const streakMaintained = typeof streakCount === "number" && streakCount >= 7
    const streakColor = streakMaintained ? "text-green-600" : "text-red-500"
    const streakBgColor = streakMaintained ? "bg-green-500/10" : "bg-red-500/10"

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <motion.div
        ref={cardRef}
        data-glow
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "relative h-52 w-80 rounded-2xl p-6 shadow-3xl text-white flex flex-col justify-between bg-cover bg-center"
        )}
        style={{ ...glowVars }}
      >
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
          <InteractiveGridBackground
            width={320}
            height={208}
            gridSize={30}
            trailLength={2}
            idleSpeed={0.15}
            idleRandomCount={1}
            fadeIntensity={40}
            showFade={true}
            className="w-full h-full" />
          </div>

        <div ref={innerRef} data-glow></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl" />

        {/* Card Content */}
        <div className="relative z-10 flex justify-between items-start text-xs tracking-wide rounded-3xl">
          <div className="ml-4 text-right rounded-3xl">
            <div className={`flex items-center justify-end gap-1 mb-1 ${streakBgColor} px-2 py-1 rounded-lg`}>
              <Flame className={`h-4 w-4 ${streakColor}`} />
              <p className={`text-2xl font-bold ${streakColor}`}>{streakCount}</p>
            </div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-tight">days</p>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-lg tracking-widest font-semibold">{title}</p>
          <div className="flex justify-between text-sm mt-2">
            <span>Status</span>
            {/* <span>{validThru}</span> */}
          </div>
        </div>
      </motion.div>
    </>
  );
}
