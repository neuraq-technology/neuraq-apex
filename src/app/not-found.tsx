import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white px-4 text-center">
            <div className="space-y-6">
                <h1 className="text-9xl font-bold tracking-tighter text-[#30D411]">404</h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight">Page not found</h2>
                    <p className="text-zinc-400 max-w-[500px]">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                </div>
                <div className="pt-4">
                    <Link href="/">
                        <Button
                            className="bg-[#30D411] hover:bg-[#28b00e] text-black font-semibold h-10 px-8 rounded-full transition-all shadow-lg hover:shadow-[#30D411]/20 hover:-translate-y-0.5"
                        >
                            Go Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
