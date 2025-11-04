"use client"
import React from "react"
import { SparkleParticles } from '@/src/components/lightswind/sparkle-particles';

export default function Todopage(){
    return(
        <div className="max-h-screen overflow-hidden">
            <SparkleParticles />
        </div>
    )
}

function temp(){
    return(
        <div>
                  <div className="bg-red-500 h-[200px] w-[200px]"
                style={{
                    clipPath: "path('M 10,40 L 70,40 A 10,10,0,0,0 80,30 L 80,10 A 10,10,0,0,1 90,0 L 140,0 A 10,10,0,0,1 150,10 L 150,190 A 10,10,0,0,1 140,200 L 10,200 A 10,10,0,0,1 0,190 L 0,50 A 10,10,0,0,1 10,40 Z')",
                }}
            >
            </div>
        </div>
    )
}