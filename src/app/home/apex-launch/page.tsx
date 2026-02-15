"use client";

import { ServiceHeader } from "@/components/ui/service-header";
import { ScrollAnimationWrapper } from "@/components/ui/scroll-animation-wrapper";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { CheckCircle, Rocket, ShieldCheck, Zap } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function ApexLaunchPage() {
    return (
        <div className="pb-20">
            <ServiceHeader
                badge="For Funded Startups"
                title="Apex"
                subtitle="Launch"
                description="The fastest way to turn your funding into a market-ready product. We handle the entire engineering lifecycle so you can focus on growth."
            />

            <div className="container mx-auto px-4 max-w-6xl space-y-32">
                {/* Problem / Solution */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollAnimationWrapper variant="slideRight">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Speed is <span className="text-[#30D411]">Everything</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            You have the funding and the vision, but building an in-house engineering team takes months. Hiring, onboarding, and managing developers distracts you from your core mission.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            <strong className="text-white">Apex Launch</strong> bridges the gap. We deploy a senior engineering team immediately to build your MVP or v1.0, ensuring you hit your milestones and satisfy your investors.
                        </p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper variant="slideLeft" className="grid grid-cols-1 gap-4">
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4 items-start">
                            <div className="bg-[#30D411]/10 p-3 rounded-lg text-[#30D411]">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">Rapid Deployment</h3>
                                <p className="text-zinc-400 text-sm">Start building within days, not months.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4 items-start">
                            <div className="bg-[#30D411]/10 p-3 rounded-lg text-[#30D411]">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">100% IP Ownership</h3>
                                <p className="text-zinc-400 text-sm">You own every line of code from day one.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4 items-start">
                            <div className="bg-[#30D411]/10 p-3 rounded-lg text-[#30D411]">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">Scalable Architecture</h3>
                                <p className="text-zinc-400 text-sm">Built to handle millions of users from the start.</p>
                            </div>
                        </div>
                    </ScrollAnimationWrapper>
                </div>

                {/* What's Included */}
                <ScrollAnimationWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
                        <p className="text-zinc-400">A complete technical partnership</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Dedicated Project Manager",
                            "Senior Full-Stack Developers",
                            "UI/UX Design Systems",
                            "Cloud Infrastructure Setup",
                            "QA & Automated Testing",
                            "Post-Launch Support",
                        ].map((item, i) => (
                            <WobbleCard key={i} containerClassName="bg-zinc-900/30 border-zinc-800 min-h-[150px]">
                                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                                    <CheckCircle className="text-[#30D411] w-8 h-8 mb-4" />
                                    <span className="text-white font-medium">{item}</span>
                                </div>
                            </WobbleCard>
                        ))}
                    </div>
                </ScrollAnimationWrapper>

                {/* CTA */}
                <ScrollAnimationWrapper variant="scale" className="text-center bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#30D411]/10 blur-[100px] rounded-full pointer-events-none" />
                    <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Ready to Launch?</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-8 relative z-10">
                        Stop waiting for the perfect hire. Start building your product today.
                    </p>
                    <div className="relative z-10">
                        <NavbarButton href="/apply" variant="primary">
                            Apply for Apex Launch
                        </NavbarButton>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
}
