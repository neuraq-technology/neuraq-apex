"use client";

import { ServiceHeader } from "@/components/ui/service-header";
import { ScrollAnimationWrapper } from "@/components/ui/scroll-animation-wrapper";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { Banknote, CalendarClock, Handshake, TrendingUp } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function ApexFlexPage() {
    return (
        <div className="pb-20">
            <ServiceHeader
                badge="For Bootstrapped Startups"
                title="Apex"
                subtitle="Flex"
                description="Build now, pay later. A flexible partnership model designed to help you conserve cash flow while building a premium product."
            />

            <div className="container mx-auto px-4 max-w-6xl space-y-32">
                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollAnimationWrapper variant="slideLeft" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <WobbleCard containerClassName="col-span-1 min-h-[200px] bg-zinc-900/50 border-zinc-800">
                            <div className="p-6">
                                <Banknote className="w-10 h-10 text-[#30D411] mb-4" />
                                <h3 className="text-white font-bold mb-2">Minimal Upfront</h3>
                                <p className="text-zinc-400 text-sm">Start with a small deposit to cover initial costs.</p>
                            </div>
                        </WobbleCard>
                        <WobbleCard containerClassName="col-span-1 min-h-[200px] bg-zinc-900/50 border-zinc-800">
                            <div className="p-6">
                                <CalendarClock className="w-10 h-10 text-[#30D411] mb-4" />
                                <h3 className="text-white font-bold mb-2">Deferred Payments</h3>
                                <p className="text-zinc-400 text-sm">Pay the rest over 6-12 months as you generate revenue.</p>
                            </div>
                        </WobbleCard>
                        <WobbleCard containerClassName="col-span-1 min-h-[200px] bg-zinc-900/50 border-zinc-800">
                            <div className="p-6">
                                <Handshake className="w-10 h-10 text-[#30D411] mb-4" />
                                <h3 className="text-white font-bold mb-2">Shared Success</h3>
                                <p className="text-zinc-400 text-sm">We are invested in your growth and sustainability.</p>
                            </div>
                        </WobbleCard>
                        <WobbleCard containerClassName="col-span-1 min-h-[200px] bg-zinc-900/50 border-zinc-800">
                            <div className="p-6">
                                <TrendingUp className="w-10 h-10 text-[#30D411] mb-4" />
                                <h3 className="text-white font-bold mb-2">Growth Focus</h3>
                                <p className="text-zinc-400 text-sm">Use your cash for marketing and sales instead of dev.</p>
                            </div>
                        </WobbleCard>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper variant="slideRight">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Conserve Your <span className="text-[#30D411]">Cash Flow</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            Bootstrapping is hard. You need a top-tier product to sell, but top-tier development is expensive. It's a classic chicken-and-egg problem.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            <strong>Apex Flex</strong> solves this. We build your product with the same quality as our Launch partners, but structure the payment terms to align with your growth trajectory.
                        </p>
                        <div className="mt-8">
                            <ul className="space-y-3">
                                {["No equity gave up", "Milestone-based delivery", "Full IP ownership upon completion"].map((item, i) => (
                                    <li key={i} className="flex items-center text-zinc-300">
                                        <span className="w-2 h-2 bg-[#30D411] rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollAnimationWrapper>
                </div>

                {/* CTA */}
                <ScrollAnimationWrapper variant="scale" className="text-center bg-zinc-900/30 border border-zinc-800 p-12 rounded-3xl relative overflow-hidden">
                    <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Start with Flexibility</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-8 relative z-10">
                        Get the tech you need without breaking the bank today.
                    </p>
                    <div className="relative z-10">
                        <NavbarButton href="/apply" variant="primary">
                            Apply for Apex Flex
                        </NavbarButton>
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
}
