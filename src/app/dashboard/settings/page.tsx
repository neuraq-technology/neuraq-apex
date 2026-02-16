"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        currentPassword: "",
        newEmail: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
            toast.error("New passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/admin/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newEmail: formData.newEmail || undefined,
                    newPassword: formData.newPassword || undefined,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            toast.success("Profile updated successfully");
            setFormData({
                currentPassword: "",
                newEmail: "",
                newPassword: "",
                confirmPassword: "",
            });
            router.refresh();
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
                <p className="text-zinc-400 text-base">Manage your admin account and security preferences.</p>
            </div>

            <Card className="bg-zinc-900/40 border-zinc-800 text-white backdrop-blur-sm shadow-xl">
                <CardHeader className="border-b border-zinc-800/50 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#30D411]/10 flex items-center justify-center border border-[#30D411]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#30D411" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                        </div>
                        <div>
                            <CardTitle className="text-lg">Security & Login</CardTitle>
                            <CardDescription className="text-zinc-400 text-sm mt-0.5">
                                Update your sign-in method and recovery options.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-5">
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword" className="text-zinc-300 font-medium text-sm">Current Password <span className="text-red-500">*</span></Label>
                                <Input
                                    id="currentPassword"
                                    name="currentPassword"
                                    type="password"
                                    value={formData.currentPassword}
                                    onChange={handleChange}
                                    required
                                    className="bg-zinc-950/50 border-zinc-800 focus:border-[#30D411] focus:ring-1 focus:ring-[#30D411]/20 text-white h-10 text-sm transition-all"
                                    placeholder="Enter your current password to authorize changes"
                                />
                            </div>

                            <div className="border-t border-zinc-800/50 my-1"></div>

                            <div className="space-y-2">
                                <Label htmlFor="newEmail" className="text-zinc-300 font-medium text-sm">New Email Address</Label>
                                <Input
                                    id="newEmail"
                                    name="newEmail"
                                    type="email"
                                    value={formData.newEmail}
                                    onChange={handleChange}
                                    className="bg-zinc-950/50 border-zinc-800 focus:border-[#30D411] focus:ring-1 focus:ring-[#30D411]/20 text-white h-10 text-sm transition-all"
                                    placeholder="your-email@example.com"
                                />
                                <p className="text-[12px] text-zinc-500">Leave blank if you don't want to change your email.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <Label htmlFor="newPassword" className="text-zinc-300 font-medium text-sm">New Password</Label>
                                    <Input
                                        id="newPassword"
                                        name="newPassword"
                                        type="password"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        className="bg-zinc-950/50 border-zinc-800 focus:border-[#30D411] focus:ring-1 focus:ring-[#30D411]/20 text-white h-10 text-sm transition-all"
                                        placeholder="Min. 6 characters"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword" className="text-zinc-300 font-medium text-sm">Confirm New Password</Label>
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="bg-zinc-950/50 border-zinc-800 focus:border-[#30D411] focus:ring-1 focus:ring-[#30D411]/20 text-white h-10 text-sm transition-all"
                                        placeholder="Re-enter new password"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4 border-t border-zinc-800/50">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="bg-[#30D411] hover:bg-[#28b00e] text-black font-semibold h-10 px-6 min-w-[120px] text-sm transition-all shadow-lg hover:shadow-[#30D411]/20"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    "Save Changes"
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
