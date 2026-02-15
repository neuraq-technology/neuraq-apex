"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { startupSchema } from "@/lib/validations/application";
import { useApplicationStore } from "@/lib/store/application-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Need to create this
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { z } from "zod";

type FormData = z.infer<typeof startupSchema>;

export default function Step2Startup() {
    const { data, updateData, setStep } = useApplicationStore();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(startupSchema),
        defaultValues: {
            startupName: data.startup?.startupName ?? "",
            oneLinePitch: data.startup?.oneLinePitch ?? "",
            industry: data.startup?.industry ?? "",
            stage: (data.startup?.stage as any) ?? "",
            problemStatement: data.startup?.problemStatement ?? "",
            targetAudience: data.startup?.targetAudience ?? "",
            uniqueValueProposition: data.startup?.uniqueValueProposition ?? "",
            competitors: data.startup?.competitors ?? "",
            traction: (data.startup?.traction as any) ?? "",
        },
    });

    const onSubmit = (formData: FormData) => {
        updateData({ startup: formData });
        setStep(3);
    };

    const onBack = () => {
        setStep(1);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 text-white">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-[#30D411]">Startup Validation</h2>
                <p className="text-gray-400">Check idea clarity & seriousness.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="startupName">Startup Name</Label>
                    <Input
                        id="startupName"
                        placeholder="My Awesome Startup"
                        {...register("startupName")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.startupName && (
                        <p className="text-red-500 text-sm">{errors.startupName.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="oneLinePitch">One-line Pitch (Max 150 chars)</Label>
                    <Input
                        id="oneLinePitch"
                        placeholder="Uber for X..."
                        {...register("oneLinePitch")}
                        maxLength={150}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.oneLinePitch && (
                        <p className="text-red-500 text-sm">{errors.oneLinePitch.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Input
                            id="industry"
                            placeholder="Fintech, Healthtech..."
                            {...register("industry")}
                            className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                        />
                        {errors.industry && (
                            <p className="text-red-500 text-sm">{errors.industry.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="stage">Current Stage</Label>
                        <Select onValueChange={(val) => setValue("stage", val as any)} defaultValue={watch("stage")}>
                            <SelectTrigger className="bg-zinc-900 border-zinc-800">
                                <SelectValue placeholder="Select stage" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Idea">Idea</SelectItem>
                                <SelectItem value="Prototype">Prototype</SelectItem>
                                <SelectItem value="MVP">MVP</SelectItem>
                                <SelectItem value="Revenue">Revenue</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.stage && (
                            <p className="text-red-500 text-sm">{String(errors.stage.message)}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="problemStatement">Problem Statement</Label>
                    <Textarea
                        id="problemStatement"
                        placeholder="What problem are you solving?"
                        {...register("problemStatement")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.problemStatement && (
                        <p className="text-red-500 text-sm">{errors.problemStatement.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="targetAudience">Target Audience</Label>
                    <Input
                        id="targetAudience"
                        placeholder="Who is this for?"
                        {...register("targetAudience")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.targetAudience && (
                        <p className="text-red-500 text-sm">{errors.targetAudience.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="uniqueValueProposition">Unique Value Proposition</Label>
                    <Textarea
                        id="uniqueValueProposition"
                        placeholder="Why is your solution better?"
                        {...register("uniqueValueProposition")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.uniqueValueProposition && (
                        <p className="text-red-500 text-sm">{errors.uniqueValueProposition.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="competitors">Competitors (Optional)</Label>
                    <Input
                        id="competitors"
                        placeholder="Competitor A, Competitor B..."
                        {...register("competitors")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.competitors && (
                        <p className="text-red-500 text-sm">{errors.competitors.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="traction">Current Traction</Label>
                    <Select onValueChange={(val) => setValue("traction", val as any)} defaultValue={watch("traction")}>
                        <SelectTrigger className="bg-zinc-900 border-zinc-800">
                            <SelectValue placeholder="Select traction" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Users">Users</SelectItem>
                            <SelectItem value="Revenue">Revenue</SelectItem>
                            <SelectItem value="Pilots">Pilots</SelectItem>
                            <SelectItem value="None">None</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.traction && (
                        <p className="text-red-500 text-sm">{String(errors.traction.message)}</p>
                    )}
                </div>

                <div className="flex justify-between pt-6">
                    <Button type="button" variant="outline" onClick={() => setStep(1)} className="border-zinc-800 hover:bg-zinc-900 text-white">
                        Back
                    </Button>
                    <Button type="submit" className="bg-[#30D411] text-black hover:bg-[#28b00e]">
                        Next Step
                    </Button>
                </div>
            </form>
        </div>
    );
}
