"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Settings, LogOut, Home } from "lucide-react";

const sidebarItems = [
    {
        name: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Applications",
        href: "/dashboard/applications",
        icon: Users,
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full w-64 bg-zinc-900 border-r border-zinc-800 text-white">
            <div className="p-6 border-b border-zinc-800">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-wider text-white">NEURAQ APEX</span>
                </Link>
                <p className="text-xs text-zinc-500 mt-1">Admin Portal</p>
            </div>

            <div className="flex-1 py-6 px-3 space-y-1">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-[#30D411]/10 text-[#30D411]"
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-zinc-800 space-y-2">
                <button
                    onClick={async () => {
                        await fetch("/api/auth/logout", { method: "POST" });
                        window.location.href = "/admin/login";
                    }}
                    className="flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-zinc-400 hover:text-red-500 hover:bg-zinc-800 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
}
