"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ApplicationSuccessPage() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full text-center space-y-8"
            >
                <div className="flex justify-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2,
                        }}
                        className="w-24 h-24 bg-[#30D411]/10 rounded-full flex items-center justify-center border border-[#30D411]/20"
                    >
                        <CheckCircle2 className="w-12 h-12 text-[#30D411]" />
                    </motion.div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Application Received
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Thank you for submitting your application to Neuraq Apex. Our team will review your details and get back to you shortly regarding the next steps.
                    </p>
                </div>

                <div className="pt-4">
                    <Link href="/">
                        <Button className="bg-white text-black hover:bg-zinc-200 font-medium px-8 py-6 text-lg rounded-full transition-all hover:scale-105">
                            Return to Home <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
