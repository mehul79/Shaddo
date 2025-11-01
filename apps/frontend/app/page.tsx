"use client"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";

export default function Home() {
    return (
        <div className="relative flex flex-col w-full h-screen text-foreground overflow-hidden">
            <DottedGlowBackground
                className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100 z-[-1]"
                opacity={0.9}
                gap={10}
                radius={1.6}
                colorLightVar="--color-neutral-500"
                glowColorLightVar="--color-neutral-600"
                colorDarkVar="--color-neutral-500"
                glowColorDarkVar="--color-sky-800"
                backgroundOpacity={0.05}
                speedMin={0.3}
                speedMax={1.6}
                speedScale={1}
            />
            <div className="block">
                <Hero />
            </div>
        </div>
    );
}


