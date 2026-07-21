"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface ProgressiveBlurProps {
    className?: string;
    height?: string;
    position?: "top" | "bottom" | "both";
    blurLevels?: number[];
}

export function ProgressiveBlur({
    className,
    height = "30%",
    position = "bottom",
    blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
}: ProgressiveBlurProps) {
    return (
        <div
            className={twMerge(
                "pointer-events-none absolute inset-x-0 z-10",
                position === "top"
                    ? "top-0"
                    : position === "bottom"
                    ? "bottom-0"
                    : "inset-y-0",
                className
            )}
            style={{
                height: position === "both" ? "100%" : height,
            }}>
            {blurLevels.map((blur, index) => {
                // Calculate the start and end of the mask gradient for each layer
                // so they overlap and create a smooth progression of blur
                const stop1 = (index / blurLevels.length) * 100;
                const stop2 = ((index + 1) / blurLevels.length) * 100;
                
                const maskImage = position === "bottom"
                    ? `linear-gradient(to bottom, rgba(0,0,0,0) ${stop1}%, rgba(0,0,0,1) ${stop2}%)`
                    : position === "top"
                    ? `linear-gradient(to top, rgba(0,0,0,0) ${stop1}%, rgba(0,0,0,1) ${stop2}%)`
                    : `linear-gradient(to bottom, rgba(0,0,0,0) ${stop1}%, rgba(0,0,0,1) ${stop2}%)`; // simplified for both

                return (
                    <div
                        key={index}
                        className="absolute inset-0"
                        style={{
                            backdropFilter: `blur(${blur}px)`,
                            WebkitBackdropFilter: `blur(${blur}px)`,
                            maskImage,
                            WebkitMaskImage: maskImage,
                            zIndex: index, // Ensure correct stacking
                        }}
                    />
                );
            })}
        </div>
    );
}
