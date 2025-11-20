"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";

interface HandWrittenHighlightProps {
    children?: React.ReactNode;
    className?: string;
    pathColor?: string;
    delay?: number;
}

export function HandWrittenHighlight({
    children,
    className,
    pathColor = "text-emerald-500",
    delay = 0.5
}: HandWrittenHighlightProps) {
    const controls = useAnimation();

    useEffect(() => {
        let isMounted = true;

        const animateLoop = async () => {
            if (!isMounted) return;
            
            // Initial delay
            await new Promise(resolve => setTimeout(resolve, delay * 1000));

            while (isMounted) {
                // 1. Reset invisible
                controls.set({ pathLength: 0, opacity: 0 });
                
                // 2. Start Drawing (2.5s)
                await controls.start({
                    pathLength: 1,
                    opacity: 1,
                    transition: { 
                        pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
                        opacity: { duration: 0.1 }
                    }
                });

                // 3. Wait (Total cycle time target ~5s visible)
                await new Promise(resolve => setTimeout(resolve, 5000));

                // 4. Fade out
                await controls.start({
                    opacity: 0,
                    transition: { duration: 0.5 }
                });
                
                // Small pause before restart
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        };

        animateLoop();

        return () => {
            isMounted = false;
        };
    }, [controls, delay]);

    return (
        <div className={cn("relative inline-block", className)}>
            {/* 
                Z-Index adjustment: 
                Texte en z-10
                SVG en z-20 pour passer "au-dessus" comme un vrai marqueur
            */}
            <div className="relative z-10">
                {children}
            </div>

            <div className="absolute -inset-x-6 -inset-y-3 md:-inset-x-10 md:-inset-y-6 lg:-inset-x-14 lg:-inset-y-8 z-20 pointer-events-none flex items-center justify-center">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 600"
                    preserveAspectRatio="none"
                    className={cn("w-full h-full opacity-80 dark:opacity-90 mix-blend-multiply dark:mix-blend-normal", pathColor)}
                    style={{ overflow: 'visible' }} 
                >
                    <motion.path
                        d="M 950 90 
                           C 1250 300, 1050 480, 600 520
                           C 250 520, 150 480, 150 300
                           C 150 120, 350 80, 600 80
                           C 850 80, 950 180, 950 180"
                        fill="none"
                        strokeWidth="18" 
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={controls}
                    />
                </motion.svg>
            </div>
        </div>
    );
}