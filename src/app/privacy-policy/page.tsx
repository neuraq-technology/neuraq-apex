import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                        <h1 className="text-4xl font-bold mb-4 text-[#30D411]">Privacy Policy</h1>
                        <p className="text-zinc-400">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="prose prose-invert max-w-none text-zinc-300">
                        <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg space-y-6">
                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
                                <p>
                                    Neuraq Apex collects various types of information, including personal information (e.g., name, email address) and data about your use of our services (e.g., browsing history).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Information</h2>
                                <p>
                                    We use the information we collect to provide and improve our services, communicate with you, and personalize your experience. We may also use your information for marketing purposes, subject to your consent.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">3. Sharing Information</h2>
                                <p>
                                    We may share your information with third-party service providers who assist us in operating our business. We will not sell or rent your personal information to third parties without your consent.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">4. Security</h2>
                                <p>
                                    We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">5. Changes to Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold text-white mb-3">6. Contact Us</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at privacy@neuraq.com.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
