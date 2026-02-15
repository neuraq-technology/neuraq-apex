"use client";

import { AppNavbar } from "@/components/AppNavbar";
import { Component as Background } from "@/components/ui/background-components";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#30D411] selection:text-black">
            <AppNavbar />
            <Background>
                <div className="relative z-10">
                    {children}
                </div>
                <footer className="py-12 text-center text-zinc-600 text-sm relative z-10 border-t border-zinc-900 mt-20">
                    <p>&copy; {new Date().getFullYear()} Neuraq Technologies. All rights reserved.</p>
                </footer>
            </Background>
        </div>
    );
}
