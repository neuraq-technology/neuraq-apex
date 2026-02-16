"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export function AppNavbar() {
    const navItems = [
        {
            name: "Apex Launch",
            link: "/home/apex-launch",
        },
        {
            name: "Apex Flex",
            link: "/home/apex-flex",
        },
        {
            name: "Apex Partner",
            link: "/home/apex-partner",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full relative z-50">
            <Navbar className="py-2 px-5">
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton href="/apply" variant="primary">Apply Now</NavbarButton>
                    </div>
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-zinc-400 hover:text-[#30D411] transition-all duration-200 w-full text-center py-3 text-lg font-medium active:scale-95 transform border border-transparent hover:border-[#30D411]/50 hover:bg-[#30D411]/10 rounded-md">
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                        <div className="flex w-full flex-col gap-4 mt-4">
                            <NavbarButton
                                href="/apply"
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full">
                                Apply Now
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
