"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold tracking-wider text-primary">SHADDO</span>
          <LayoutTextFlip
            text="Welcome to "
            words={["the future", "innovation", "creativity", "excellence"]}
          />
        </div>
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p>
    </div>
  );
}