"use client";

import React from "react";
import TiltedCard from "@/components/TiltedCard";

type CardProps = {
  imageSrc: string;
  altText?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
};

export default function Card({
  imageSrc,
  altText = "",
  width = "300px",
  height = "300px",
  children,
}: CardProps) {
  return (
    <TiltedCard
      imageSrc={imageSrc}
      altText={altText}
      containerWidth={width}
      containerHeight={height}
      imageWidth={width}
      imageHeight={height}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={!!children}
    >
      {children}
    </TiltedCard>
  );
}


