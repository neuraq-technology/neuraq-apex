"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full relative bg-black text-white">
            {/* Soft Green Glow */}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
