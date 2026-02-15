"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { founderSchema } from "@/lib/validations/application";
import { useApplicationStore } from "@/lib/store/application-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { z } from "zod";

type FormData = z.infer<typeof founderSchema>;

export default function Step1Founder() {
    const { data, updateData, setStep } = useApplicationStore();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(founderSchema),
        defaultValues: {
            fullName: data.founder?.fullName ?? "",
            email: data.founder?.email ?? "",
            phone: data.founder?.phone ?? "",
            linkedinUrl: data.founder?.linkedinUrl ?? "",
            education: data.founder?.education ?? "",
            previousStartupExp: data.founder?.previousStartupExp ?? "",
            technicalBackground: (data.founder?.technicalBackground as any) ?? "",
            currentCommitment: (data.founder?.currentCommitment as any) ?? "",
        },
    });

    const onSubmit = (formData: FormData) => {
        updateData({ founder: formData });
        setStep(2);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 text-white">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-[#30D411]">Founder Validation</h2>
                <p className="text-gray-400">Check execution capability.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            id="fullName"
                            placeholder="John Doe"
                            {...register("fullName")}
                            className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">{String(errors.fullName.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email")}
                            className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{String(errors.email.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            placeholder="+1 234 567 8900"
                            {...register("phone")}
                            className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm">{String(errors.phone.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="linkedinUrl">LinkedIn / Portfolio</Label>
                        <Input
                            id="linkedinUrl"
                            placeholder="https://linkedin.com/in/johndoe"
                            {...register("linkedinUrl")}
                            className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                        />
                        {errors.linkedinUrl && (
                            <p className="text-red-500 text-sm">{String(errors.linkedinUrl.message)}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="education">Educational Background</Label>
                    <Input
                        id="education"
                        placeholder="University / Degree"
                        {...register("education")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.education && (
                        <p className="text-red-500 text-sm">{String(errors.education.message)}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="previousStartupExp">Previous Startup Experience (Yes/No + Details)</Label>
                    <Input
                        id="previousStartupExp"
                        placeholder="Yes, built X..."
                        {...register("previousStartupExp")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.previousStartupExp && (
                        <p className="text-red-500 text-sm">{String(errors.previousStartupExp.message)}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="technicalBackground">Technical Background</Label>
                        <Select onValueChange={(val) => setValue("technicalBackground", val)} defaultValue={watch("technicalBackground")}>
                            <SelectTrigger className="bg-zinc-900 border-zinc-800">
                                <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Non-Tech">Non-Tech</SelectItem>
                                <SelectItem value="Basic">Basic</SelectItem>
                                <SelectItem value="Advanced">Advanced</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.technicalBackground && (
                            <p className="text-red-500 text-sm">{String(errors.technicalBackground.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="currentCommitment">Current Commitment</Label>
                        <Select onValueChange={(val) => setValue("currentCommitment", val)} defaultValue={watch("currentCommitment")}>
                            <SelectTrigger className="bg-zinc-900 border-zinc-800">
                                <SelectValue placeholder="Select commitment" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Full-Time">Full-Time</SelectItem>
                                <SelectItem value="Part-Time">Part-Time</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.currentCommitment && (
                            <p className="text-red-500 text-sm">{String(errors.currentCommitment.message)}</p>
                        )}
                    </div>
                </div>

                <div className="flex justify-end pt-6">
                    <Button type="submit" className="bg-[#30D411] text-black hover:bg-[#28b00e]">
                        Next Step
                    </Button>
                </div>
            </form>
        </div>
    );
}
