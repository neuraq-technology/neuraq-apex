import { Component as Background } from "@/components/ui/background-components";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, CheckCircle, Lightbulb, Rocket, Settings, TrendingUp, Users, Zap } from "lucide-react";
import { AppNavbar } from "@/components/AppNavbar";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { ScrollAnimationWrapper } from "@/components/ui/scroll-animation-wrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#30D411] selection:text-black">
      <AppNavbar />
      <Background>
        <div className="container mx-auto px-4 py-16 relative z-10 space-y-32">
          {/* Hero Section */}
          <ScrollAnimationWrapper className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto pt-16" delay={0.2}>
            <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-[#30D411] mb-4 font-mono">
              Announcing Neuraq Apex
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 pb-2">
              Build Your Startup <br />
              <span className="text-[#30D411]">Without Limitations</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We solve the biggest problem for startups: building software.
              Whether you have funding, need flexible terms, or want a technical partner, we have a model for you.
            </p>
            <div className="flex gap-4 pt-4">
              <NavbarButton href="/apply" variant="primary">
                Apply Now <ArrowRight className="ml-2 h-4 w-4 inline" />
              </NavbarButton>
            </div>
          </ScrollAnimationWrapper>

          {/* Why Choose Neuraq Apex */}
          <div id="why-us" className="max-w-6xl mx-auto scroll-mt-32">
            <ScrollAnimationWrapper className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Neuraq Apex</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">We're more than just a development shop</p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <ScrollAnimationWrapper delay={0.1}>
                <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-black/80 border border-zinc-800 hover:border-[#30D411] transition-colors group">
                  <div className="flex flex-col items-center text-center h-full justify-center p-6">
                    <div className="shrink-0 mb-4">
                      <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
                        <Lightbulb className="w-6 h-6 text-[#30D411]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#30D411] transition-colors">Startup-First Mindset</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        We understand the unique challenges of building startups. Every decision prioritizes speed to market and product-market fit.
                      </p>
                    </div>
                  </div>
                </WobbleCard>
              </ScrollAnimationWrapper>

              {/* Feature 2 */}
              <ScrollAnimationWrapper delay={0.2}>
                <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-black/80 border border-zinc-800 hover:border-[#30D411] transition-colors group">
                  <div className="flex flex-col items-center text-center h-full justify-center p-6">
                    <div className="shrink-0 mb-4">
                      <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
                        <Settings className="w-6 h-6 text-[#30D411]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#30D411] transition-colors">Flexible Terms</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        Three distinct partnership models mean you can choose what works best for your current stage and funding situation.
                      </p>
                    </div>
                  </div>
                </WobbleCard>
              </ScrollAnimationWrapper>

              {/* Feature 3 */}
              <ScrollAnimationWrapper delay={0.3}>
                <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-black/80 border border-zinc-800 hover:border-[#30D411] transition-colors group">
                  <div className="flex flex-col items-center text-center h-full justify-center p-6">
                    <div className="shrink-0 mb-4">
                      <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
                        <Zap className="w-6 h-6 text-[#30D411]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#30D411] transition-colors">Rapid Development</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        Our experienced team moves fast without sacrificing quality. Get to market in weeks, not months.
                      </p>
                    </div>
                  </div>
                </WobbleCard>
              </ScrollAnimationWrapper>

              {/* Feature 4 */}
              <ScrollAnimationWrapper delay={0.4}>
                <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-black/80 border border-zinc-800 hover:border-[#30D411] transition-colors group">
                  <div className="flex flex-col items-center text-center h-full justify-center p-6">
                    <div className="shrink-0 mb-4">
                      <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
                        <Users className="w-6 h-6 text-[#30D411]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#30D411] transition-colors">Expert Team</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        Senior engineers, designers, and product strategists who have built successful products at scale.
                      </p>
                    </div>
                  </div>
                </WobbleCard>
              </ScrollAnimationWrapper>
            </div>
          </div>

          {/* How It Works - 3 Categories */}
          <div id="models" className="max-w-6xl mx-auto scroll-mt-32">
            <ScrollAnimationWrapper className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Choose Your Partnership Model</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Flexible options designed to support startups at every stage.</p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
              {/* Card 1: Apex Launch */}
              <ScrollAnimationWrapper delay={0.1} className="h-full">
                <WobbleCard
                  containerClassName="col-span-1 h-full bg-black/80 min-h-[300px] border border-zinc-800 hover:border-[#30D411] transition-colors scroll-mt-32 group"
                  className=""
                >
                  <div className="max-w-xs mx-auto text-center">
                    <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Rocket className="h-7 w-7 text-[#30D411]" />
                    </div>
                    <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white group-hover:text-[#30D411] transition-colors">
                      Apex Launch
                    </h2>
                    <p className="mt-4 text-base/6 text-neutral-200">
                      Perfect for funded startups ready to build. Full development execution with IP ownership immediately upon completion.
                    </p>
                  </div>
                </WobbleCard>
              </ScrollAnimationWrapper>

              {/* Card 2: Apex Flex */}
              <ScrollAnimationWrapper delay={0.2} className="h-full" id="apex-flex">
                <WobbleCard
                  containerClassName="col-span-1 min-h-[300px] bg-black/80 border border-zinc-800 hover:border-[#30D411] transition-colors scroll-mt-32 group"
                  className=""
                >
                  <div className="absolute top-0 right-0 bg-[#30D411] text-black text-xs font-bold px-3 py-1 rounded-bl-lg z-10">POPULAR</div>
                  <div className="max-w-xs mx-auto text-center">
                    <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="h-7 w-7 text-[#30D411]" />
                    </div>
                    <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white group-hover:text-[#30D411] transition-colors">
                      Apex Flex
                    </h2>
                    <p className="mt-4 text-base/6 text-neutral-200">
                      Deferred payment model. Start building immediately with minimal initial cost and flexible terms.
                    </p>
                  </div>
                </WobbleCard>
              </ScrollAnimationWrapper>

              {/* Card 3: Apex Partner */}
              <ScrollAnimationWrapper delay={0.3} className="h-full" id="apex-partner">
                <WobbleCard
                  containerClassName="col-span-1 min-h-[300px] bg-black/80 border border-zinc-800 hover:border-[#30D411] transition-colors scroll-mt-32 group"
                  className=""
                >
                  <div className="max-w-sm mx-auto text-center">
                    <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Users className="h-7 w-7 text-[#30D411]" />
                    </div>
                    <h2 className="text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white group-hover:text-[#30D411] transition-colors">
                      Apex Partner
                    </h2>
                    <p className="mt-4 text-base/6 text-neutral-200">
                      We become your technical co-founder. $0 initial payment, long-term support, and equity exchange model.
                    </p>
                  </div>
                </WobbleCard>
              </ScrollAnimationWrapper>
            </div>
          </div>

          {/* Process Steps Section */}
          <div id="how-it-works" className="max-w-6xl mx-auto text-center scroll-mt-32">
            <ScrollAnimationWrapper className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">A simple process from application to launch</p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  id: 1,
                  title: "Apply",
                  description: "Submit your startup details and product vision through our streamlined application",
                  color: "bg-[#D6F8D0]",
                  shadow: "shadow-[0_0_15px_rgba(214,248,208,0.2)]"
                },
                {
                  id: 2,
                  title: "Review",
                  description: "Our team evaluates your application and schedules a discovery call",
                  color: "bg-[#9FED94]",
                  shadow: "shadow-[0_0_15px_rgba(159,237,148,0.2)]"
                },
                {
                  id: 3,
                  title: "Plan",
                  description: "We scope your project, define milestones, and finalize partnership terms",
                  color: "bg-[#61E353]",
                  shadow: "shadow-[0_0_15px_rgba(97,227,83,0.2)]"
                },
                {
                  id: 4,
                  title: "Build",
                  description: "Development begins with regular check-ins and iterative delivery",
                  color: "bg-[#30D411]",
                  shadow: "shadow-[0_0_15px_rgba(48,212,17,0.4)]"
                }
              ].map((step, index) => (
                <div key={step.id} className="relative group">
                  <ScrollAnimationWrapper delay={index * 0.1} className="h-full">
                    <div className="flex flex-col items-center p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl hover:bg-zinc-900/60 hover:border-[#30D411]/30 transition-all duration-300 h-full relative z-10">
                      <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 ${step.shadow} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl font-bold text-black">{step.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#30D411] transition-colors">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px] mb-4">
                        {step.description}
                      </p>
                      <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-y-0 translate-y-2 duration-300">
                        <ArrowRight className="w-5 h-5 text-[#30D411]" />
                      </div>
                    </div>
                  </ScrollAnimationWrapper>

                  {/* Connecting Arrow (Desktop Only) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-0 text-zinc-800">
                      <ArrowRight className="w-8 h-8 opacity-20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Simple Application Process */}
          <div id="process" className="max-w-4xl mx-auto scroll-mt-32">
            <ScrollAnimationWrapper className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Simple Application Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Get started in minutes with our streamlined 7-step application</p>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "Founder Information",
                  description: "Tell us about your team and background",
                },
                {
                  id: 2,
                  title: "Startup Overview",
                  description: "Share your vision and current stage",
                },
                {
                  id: 3,
                  title: "Problem & Solution",
                  description: "Explain the problem you're solving and your unique solution",
                },
                {
                  id: 4,
                  title: "Market & Competition",
                  description: "Define your target audience and competitive landscape",
                },
                {
                  id: 5,
                  title: "Traction & Execution",
                  description: "Show us your progress and business model",
                },
                {
                  id: 6,
                  title: "Uploads",
                  description: "Attach your pitch deck and founder video",
                },
                {
                  id: 7,
                  title: "Review & Submit",
                  description: "Verify your details and send your application",
                },
              ].map((step, index) => (
                <ScrollAnimationWrapper
                  key={step.id}
                  delay={index * 0.1}
                  variant="scale"
                  className={index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
                >
                  <div className="h-full p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl hover:border-[#30D411]/50 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="text-6xl font-bold text-[#30D411]">{step.id}</span>
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center font-bold text-white mb-6 group-hover:bg-[#30D411] group-hover:text-black transition-colors duration-300 shadow-lg shadow-black/50">
                        {step.id}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#30D411] transition-colors">{step.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <ScrollAnimationWrapper className="max-w-6xl mx-auto" variant="scale">
            <div className="relative rounded-3xl overflow-hidden border border-[#30D411]/30">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
              <div className="relative p-12 md:p-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Ready to Build?</h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto font-medium text-zinc-400">
                  Join the next generation of startups built with Neuraq Apex. Your journey starts here.
                </p>
                <NavbarButton href="/apply" variant="primary">
                  Start Your Application
                </NavbarButton>
              </div>
            </div>

            <footer className="mt-24 text-center text-zinc-600 text-sm">
              <p>&copy; {new Date().getFullYear()} Neuraq Technologies. All rights reserved.</p>
            </footer>
          </ScrollAnimationWrapper>
        </div>
      </Background >
    </div >
  );
}
