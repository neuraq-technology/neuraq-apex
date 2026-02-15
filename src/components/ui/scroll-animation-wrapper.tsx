"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
    children: React.ReactNode;
    className?: string;
    variant?: "fade" | "slideUp" | "slideRight" | "slideLeft" | "scale";
    delay?: number;
    duration?: number;
    id?: string;
}

export function ScrollAnimationWrapper({
    children,
    className,
    variant = "slideUp",
    delay = 0.1,
    duration = 0.8,
    id,
}: ScrollAnimationWrapperProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Trigger when 10% is visible
                rootMargin: "-20px 0px", // Slight offset to prevent edge flickering
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Base transition styles
    const baseStyles = "transition-all ease-out transform";

    // Dynamic duration style
    const durationStyle = { transitionDuration: `${duration}s`, transitionDelay: `${delay}s` };

    // Variant styles
    const getVariantStyles = () => {
        if (isVisible) {
            return "opacity-100 translate-y-0 translate-x-0 scale-100";
        }

        switch (variant) {
            case "fade":
                return "opacity-0";
            case "slideUp":
                return "opacity-0 translate-y-10";
            case "slideRight":
                return "opacity-0 -translate-x-10";
            case "slideLeft":
                return "opacity-0 translate-x-10";
            case "scale":
                return "opacity-0 scale-95";
            default:
                return "opacity-0 translate-y-10";
        }
    };

    return (
        <div
            ref={ref}
            id={id}
            style={durationStyle}
            className={cn(baseStyles, getVariantStyles(), className)}
        >
            {children}
        </div>
    );
}
