import { Component as Background } from "@/components/ui/background-components";

export default function ApplyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen font-sans antialiased bg-black">
            <Background>
                <main className="container mx-auto px-4 py-8 relative z-0">
                    {children}
                </main>
            </Background>
        </div>
    );
}
