"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, User, Target, TrendingUp, CheckCircle, FileText } from "lucide-react";

export default function ApplicationDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [application, setApplication] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("startup");

    useEffect(() => {
        const fetchApplication = async () => {
            try {
                const res = await fetch(`/api/applications/${params.id}`);
                const data = await res.json();
                if (data.success) {
                    setApplication(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch application', error);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchApplication();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Loading application details...</p>
            </div>
        );
    }

    if (!application) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
                <p>Application not found.</p>
                <Button onClick={() => router.push('/dashboard')} variant="outline" className="border-zinc-800 text-white hover:bg-zinc-900">
                    Back to Dashboard
                </Button>
            </div>
        );
    }

    const tabs = [
        { id: "startup", label: "Startup Info", icon: Building2 },
        { id: "business", label: "Business Model", icon: TrendingUp },
        { id: "technical", label: "Technical", icon: FileText },
        { id: "founder", label: "Founder", icon: User },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#30D411] selection:text-black">
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => router.push('/dashboard')}
                            variant="ghost"
                            className="bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-white"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-1">{application.startup?.startupName}</h1>
                            <p className="text-zinc-400 text-sm">Submitted on {new Date(application.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${application.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                            application.status === 'Reviewing' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                application.status === 'Rejected' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                    'bg-green-500/10 text-green-500 border-green-500/20'
                            }`}>
                            {application.status || 'Pending'}
                        </span>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-800 pb-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all duration-200 text-sm font-medium border-b-2 ${isActive
                                    ? "border-[#30D411] text-[#30D411] bg-zinc-900/30"
                                    : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                    {activeTab === "startup" && (
                        <Card className="bg-zinc-900/50 border-zinc-800 text-white animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <CardHeader className="flex flex-row items-center gap-3 pb-2 border-b border-zinc-800/50">
                                <Building2 className="w-5 h-5 text-[#30D411]" />
                                <CardTitle className="text-lg">Startup Validation</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6 pt-6">
                                <div>
                                    <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">One-Line Pitch</h4>
                                    <p className="text-xl font-medium text-white">{application.startup?.oneLinePitch}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Industry</h4>
                                        <p className="text-zinc-200">{application.startup?.industry}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Stage</h4>
                                        <p className="text-zinc-200">{application.startup?.stage}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Traction</h4>
                                        <p className="text-zinc-200">{application.startup?.traction}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Problem Statement</h4>
                                        <p className="text-zinc-300 leading-relaxed bg-black/20 p-4 rounded-lg border border-zinc-800/50">{application.startup?.problemStatement}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Target Audience</h4>
                                        <p className="text-zinc-300 leading-relaxed bg-black/20 p-4 rounded-lg border border-zinc-800/50">{application.startup?.targetAudience}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Unique Value Proposition</h4>
                                        <p className="text-zinc-300 leading-relaxed bg-black/20 p-4 rounded-lg border border-zinc-800/50">{application.startup?.uniqueValueProposition}</p>
                                    </div>
                                    {application.startup?.competitors && (
                                        <div>
                                            <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Competitors</h4>
                                            <p className="text-zinc-300 leading-relaxed bg-black/20 p-4 rounded-lg border border-zinc-800/50">{application.startup?.competitors}</p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === "business" && (
                        <Card className="bg-zinc-900/50 border-zinc-800 text-white animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <CardHeader className="flex flex-row items-center gap-3 pb-2 border-b border-zinc-800/50">
                                <TrendingUp className="w-5 h-5 text-[#30D411]" />
                                <CardTitle className="text-lg">Business Validation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Business Model</h4>
                                        <p className="text-zinc-200">{application.business?.businessModel}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Funding Status</h4>
                                        <p className="text-zinc-200">{application.business?.fundingStatus}</p>
                                    </div>
                                    {application.business?.marketSize && (
                                        <div>
                                            <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Market Size</h4>
                                            <p className="text-zinc-200">{application.business?.marketSize}</p>
                                        </div>
                                    )}
                                </div>
                                {application.business?.revenueModelExplanation && (
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Revenue Model Explanation</h4>
                                        <p className="text-zinc-300 leading-relaxed bg-black/20 p-4 rounded-lg border border-zinc-800/50">{application.business?.revenueModelExplanation}</p>
                                    </div>
                                )}
                                {application.business?.goToMarketStrategy && (
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Go-to-Market Strategy</h4>
                                        <p className="text-zinc-300 leading-relaxed bg-black/20 p-4 rounded-lg border border-zinc-800/50">{application.business?.goToMarketStrategy}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === "technical" && (
                        <Card className="bg-zinc-900/50 border-zinc-800 text-white animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <CardHeader className="flex flex-row items-center gap-3 pb-2 border-b border-zinc-800/50">
                                <FileText className="w-5 h-5 text-[#30D411]" />
                                <CardTitle className="text-lg">Technical Validation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Product Type</h4>
                                        <p className="text-zinc-200">{application.technical?.productType}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Development Status</h4>
                                        <p className="text-zinc-200">{application.technical?.developmentStatus}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Tech Co-Founder</h4>
                                        <p className="text-zinc-200">{application.technical?.technicalCoFounder}</p>
                                    </div>
                                </div>
                                {application.technical?.existingPrototype && (
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Prototype</h4>
                                        <a href={application.technical.existingPrototype} target="_blank" rel="noopener noreferrer" className="text-[#30D411] hover:underline break-all bg-black/20 p-3 rounded-lg border border-zinc-800/50 block">
                                            {application.technical.existingPrototype}
                                        </a>
                                    </div>
                                )}
                                {application.technical?.coreFeatures && (
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Core Features</h4>
                                        <pre className="text-zinc-300 leading-relaxed whitespace-pre-wrap font-sans bg-black/20 p-4 rounded-lg border border-zinc-800/50">{application.technical?.coreFeatures}</pre>
                                    </div>
                                )}
                                {application.technical?.requirements && application.technical.requirements.length > 0 && (
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">Requirements</h4>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {application.technical.requirements.map((req: string) => (
                                                <span key={req} className="bg-zinc-800 text-xs px-3 py-1.5 rounded-full text-zinc-300 border border-zinc-700">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === "founder" && (
                        <Card className="bg-zinc-900/50 border-zinc-800 text-white animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <CardHeader className="flex flex-row items-center gap-3 pb-2 border-b border-zinc-800/50">
                                <User className="w-5 h-5 text-[#30D411]" />
                                <CardTitle className="text-lg">Founder Validation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Full Name</h4>
                                        <p className="text-xl font-medium text-white">{application.founder?.fullName}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Contact</h4>
                                        <p className="text-zinc-200">{application.founder?.email}</p>
                                        <p className="text-zinc-400 text-sm">{application.founder?.phone}</p>
                                    </div>
                                </div>
                                {(application.founder?.linkedinUrl) && (
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-2 uppercase tracking-wider">LinkedIn / Portfolio</h4>
                                        <a href={application.founder.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#30D411] hover:underline break-all block">
                                            {application.founder.linkedinUrl}
                                        </a>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {application.founder?.education && (
                                        <div>
                                            <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Education</h4>
                                            <p className="text-zinc-200">{application.founder?.education}</p>
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Startup Experience</h4>
                                        <p className="text-zinc-200">{application.founder?.previousStartupExp}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Tech Background</h4>
                                        <p className="text-zinc-200">{application.founder?.technicalBackground}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 text-sm mb-1 uppercase tracking-wider">Commitment</h4>
                                        <p className="text-zinc-200">{application.founder?.currentCommitment}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
