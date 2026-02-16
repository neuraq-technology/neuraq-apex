"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ApplicationsPage() {
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const res = await fetch('/api/applications');
                const data = await res.json();
                if (data.success) {
                    setApplications(data.data || []);
                }
            } catch (error) {
                console.error('Failed to fetch applications', error);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#30D411] selection:text-black">
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Applications</h1>
                        <p className="text-zinc-400">Manage all startup applications</p>
                    </div>
                </div>

                <div className="grid gap-6">
                    <Card className="bg-zinc-900/50 border-zinc-800 text-white">
                        <CardHeader>
                            <CardTitle>All Applications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-xl border border-zinc-800 overflow-hidden bg-black/40">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-zinc-900/80 text-zinc-400 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4 font-medium">Startup</th>
                                            <th className="px-6 py-4 font-medium">Founder</th>
                                            <th className="px-6 py-4 font-medium">Submitted</th>
                                            <th className="px-6 py-4 font-medium">Status</th>
                                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800/50">
                                        {loading ? (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <div className="animate-spin h-4 w-4 border-2 border-zinc-500 border-t-[#30D411] rounded-full"></div>
                                                        Loading applications...
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : applications.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-16 text-center text-zinc-500">
                                                    <div className="flex flex-col items-center justify-center">
                                                        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                                        </div>
                                                        <h3 className="text-lg font-medium text-white mb-1">No applications yet</h3>
                                                        <p className="text-zinc-500 text-sm max-w-sm">
                                                            New applications will appear here once founders start submitting.
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            applications.map((app) => (
                                                <tr key={app._id} className="hover:bg-zinc-900/40 transition-colors group">
                                                    <td className="px-6 py-4 font-medium text-white group-hover:text-[#30D411] transition-colors">{app.startup?.startupName || 'N/A'}</td>
                                                    <td className="px-6 py-4 text-zinc-400">{app.founder?.fullName || 'N/A'}</td>
                                                    <td className="px-6 py-4 text-zinc-400">
                                                        {new Date(app.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${app.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                                            app.status === 'Reviewing' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                                                app.status === 'Rejected' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                                                    'bg-green-500/10 text-green-500 border-green-500/20'
                                                            }`}>
                                                            {app.status || 'Pending'}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <a
                                                            href={`/dashboard/application/${app._id}`}
                                                            className="text-sm font-medium text-zinc-400 hover:text-[#30D411] transition-colors"
                                                        >
                                                            View Details
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
