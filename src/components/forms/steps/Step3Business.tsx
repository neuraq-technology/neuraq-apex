"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { businessSchema } from "@/lib/validations/application";
import { useApplicationStore } from "@/lib/store/application-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { z } from "zod";

type FormData = z.infer<typeof businessSchema>;

export default function Step3Business() {
    const { data, updateData, setStep } = useApplicationStore();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(businessSchema),
        defaultValues: {
            businessModel: (data.business?.businessModel as any) ?? "",
            revenueModelExplanation: data.business?.revenueModelExplanation ?? "",
            marketSize: data.business?.marketSize ?? "",
            goToMarketStrategy: data.business?.goToMarketStrategy ?? "",
            fundingStatus: (data.business?.fundingStatus as any) ?? "",
        },
    });

    const onSubmit = (formData: FormData) => {
        updateData({ business: formData });
        setStep(4);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 text-white">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-[#30D411]">Business Validation</h2>
                <p className="text-gray-400">Check business viability.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="businessModel">Business Model</Label>
                    <Select onValueChange={(val) => setValue("businessModel", val as any)} defaultValue={watch("businessModel")}>
                        <SelectTrigger className="bg-zinc-900 border-zinc-800">
                            <SelectValue placeholder="Select business model" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Subscription">Subscription</SelectItem>
                            <SelectItem value="Commission">Commission</SelectItem>
                            <SelectItem value="SaaS">SaaS</SelectItem>
                            <SelectItem value="Marketplace">Marketplace</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.businessModel && (
                        <p className="text-red-500 text-sm">{String(errors.businessModel.message)}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="revenueModelExplanation">Revenue Model Explanation (Optional)</Label>
                    <Textarea
                        id="revenueModelExplanation"
                        placeholder="How do you make money?"
                        {...register("revenueModelExplanation")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.revenueModelExplanation && (
                        <p className="text-red-500 text-sm">{errors.revenueModelExplanation.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="marketSize">Market Size Estimate (Optional)</Label>
                    <Input
                        id="marketSize"
                        placeholder="e.g. $10B TAM"
                        {...register("marketSize")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.marketSize && (
                        <p className="text-red-500 text-sm">{errors.marketSize.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="goToMarketStrategy">Go-to-Market Strategy (Optional)</Label>
                    <Textarea
                        id="goToMarketStrategy"
                        placeholder="How will you acquire customers?"
                        {...register("goToMarketStrategy")}
                        className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                    />
                    {errors.goToMarketStrategy && (
                        <p className="text-red-500 text-sm">{errors.goToMarketStrategy.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fundingStatus">Funding Status</Label>
                    <Select onValueChange={(val) => setValue("fundingStatus", val as any)} defaultValue={watch("fundingStatus")}>
                        <SelectTrigger className="bg-zinc-900 border-zinc-800">
                            <SelectValue placeholder="Select funding status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Bootstrapped">Bootstrapped</SelectItem>
                            <SelectItem value="Raising">Raising</SelectItem>
                            <SelectItem value="Funded">Funded</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.fundingStatus && (
                        <p className="text-red-500 text-sm">{String(errors.fundingStatus.message)}</p>
                    )}
                </div>

                <div className="flex justify-between pt-6">
                    <Button type="button" variant="outline" onClick={() => setStep(2)} className="border-zinc-800 hover:bg-zinc-900 text-white">
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
