"use client";

import { ScrollAnimationWrapper } from "@/components/ui/scroll-animation-wrapper";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { ArrowRight } from "lucide-react";

interface ServiceHeaderProps {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
}

export function ServiceHeader({ title, subtitle, description, badge }: ServiceHeaderProps) {
    return (
        <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <ScrollAnimationWrapper className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-[#30D411] mb-6 font-mono">
                    {badge}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                    {title} <br />
                    <span className="text-[#30D411]">{subtitle}</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {description}
                </p>
                <div className="flex justify-center gap-4">
                    <NavbarButton href="/apply" variant="primary">
                        Start Application <ArrowRight className="ml-2 h-4 w-4 inline" />
                    </NavbarButton>
                </div>
            </ScrollAnimationWrapper>
        </div>
    );
}
