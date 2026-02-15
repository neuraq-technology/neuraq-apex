"use client";

import { ServiceHeader } from "@/components/ui/service-header";
import { ScrollAnimationWrapper } from "@/components/ui/scroll-animation-wrapper";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { Code, Gem, HeartHandshake, Users } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function ApexPartnerPage() {
    return (
        <div className="pb-20">
            <ServiceHeader
                badge="For Visionaries"
                title="Apex"
                subtitle="Partner"
                description="We invest our technology in your vision. A true co-founder relationship where we build your product in exchange for equity."
            />

            <div className="container mx-auto px-4 max-w-6xl space-y-32">
                {/* Value Prop */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollAnimationWrapper variant="slideRight">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Technical <span className="text-[#30D411]">Co-Founder</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            Finding a technical co-founder is one of the hardest parts of starting a company. You need someone who is not just a coder, but a product strategist, a team leader, and a long-term partner.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            <strong>Apex Partner</strong> fills this role. We don't just build your app; we become your technology arm. We sit on your board, help with fundraising, and scale the technology as the company grows.
                        </p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper variant="slideLeft" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <Users className="w-10 h-10 text-[#30D411] mb-4" />
                            <h3 className="text-white font-bold mb-2">Board Seat</h3>
                            <p className="text-zinc-400 text-sm">We are fully committed to your long-term success.</p>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <Code className="w-10 h-10 text-[#30D411] mb-4" />
                            <h3 className="text-white font-bold mb-2">CTO & Team</h3>
                            <p className="text-zinc-400 text-sm">Instant access to a CTO and a full dev team.</p>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <HeartHandshake className="w-10 h-10 text-[#30D411] mb-4" />
                            <h3 className="text-white font-bold mb-2">Equity Model</h3>
                            <p className="text-zinc-400 text-sm">Low or no upfront cost, exchanged for equity.</p>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                            <Gem className="w-10 h-10 text-[#30D411] mb-4" />
                            <h3 className="text-white font-bold mb-2">Investor Network</h3>
                            <p className="text-zinc-400 text-sm">Access to our network of VCs and angels.</p>
                        </div>
                    </ScrollAnimationWrapper>
                </div>

                {/* Selection Process */}
                <ScrollAnimationWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Selective Process</h2>
                        <p className="text-zinc-400">We only partner with 2-3 startups per year per cohort.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <WobbleCard containerClassName="bg-zinc-900/30 border-zinc-800 min-h-[250px]">
                            <div className="p-8 h-full flex flex-col items-center text-center justify-center">
                                <span className="text-6xl font-bold text-[#30D411]/20 mb-4">01</span>
                                <h3 className="text-xl font-bold text-white mb-2">Vetting</h3>
                                <p className="text-zinc-400 text-sm">Rigorous analysis of market size, founder fit, and product vision.</p>
                            </div>
                        </WobbleCard>
                        <WobbleCard containerClassName="bg-zinc-900/30 border-zinc-800 min-h-[250px]">
                            <div className="p-8 h-full flex flex-col items-center text-center justify-center">
                                <span className="text-6xl font-bold text-[#30D411]/20 mb-4">02</span>
                                <h3 className="text-xl font-bold text-white mb-2">Investment</h3>
                                <p className="text-zinc-400 text-sm">We invest our resources (development, design, strategy) as sweat equity.</p>
                            </div>
                        </WobbleCard>
                        <WobbleCard containerClassName="bg-zinc-900/30 border-zinc-800 min-h-[250px]">
                            <div className="p-8 h-full flex flex-col items-center text-center justify-center">
                                <span className="text-6xl font-bold text-[#30D411]/20 mb-4">03</span>
                                <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
                                <p className="text-zinc-400 text-sm">We stick with you through Series A and beyond.</p>
                            </div>
                        </WobbleCard>
                    </div>
                </ScrollAnimationWrapper>

                {/* CTA */}
                <ScrollAnimationWrapper variant="scale" className="text-center bg-zinc-900/30 border border-zinc-800 p-12 rounded-3xl relative overflow-hidden">
                    <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Pitch Us Your Vision</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-8 relative z-10">
                        Think you have the next unicorn? We want to hear about it.
                    </p>
                    <div className="relative z-10">
                        <NavbarButton href="/apply" variant="primary">
                            Apply for Apex Partner
                        </NavbarButton>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
}
