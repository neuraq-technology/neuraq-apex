import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#30D411] selection:text-black">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="mb-8">
                    <Link href="/apply">
                        <Button variant="ghost" className="text-zinc-400 hover:text-white pl-0 hover:bg-transparent">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Application
                        </Button>
                    </Link>
                </div>

                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-[#30D411]">Terms and Conditions</h1>
                        <p className="text-zinc-400">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="prose prose-invert max-w-none text-zinc-300">
                        <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg space-y-6">
                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
                                <p>
                                    Welcome to Neuraq Apex. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">2. Application Process</h2>
                                <p>
                                    By submitting an application to Neuraq Apex, you represent and warrant that all information provided is accurate, complete, and current. We reserve the right to reject any application at our sole discretion.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">3. Intellectual Property</h2>
                                <p>
                                    You retain all intellectual property rights to your startup and ideas. However, by submitting an application, you grant Neuraq Apex a limited license to review and evaluate your materials for the purpose of the program.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">4. Disclaimer</h2>
                                <p>
                                    Neuraq Apex provides its services on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the success of any startup or the outcome of participation in our program.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">5. Changes to Terms</h2>
                                <p>
                                    We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">6. Contact Us</h2>
                                <p>
                                    If you have any questions about these Terms, please contact us at support@neuraq.com.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
