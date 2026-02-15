"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { technicalSchema } from "@/lib/validations/application";
import { useApplicationStore } from "@/lib/store/application-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { z } from "zod";

type FormData = z.infer<typeof technicalSchema>;

const REQUIREMENT_OPTIONS = [
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Cloud Infrastructure",
    "AI Integration",
    "Payment Integration",
    "Security Audit",
];

export default function Step4Technical() {
    const { data, updateData, setStep } = useApplicationStore();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(technicalSchema),
        defaultValues: {
            productType: (data.technical?.productType as any) ?? "",
            existingPrototype: data.technical?.existingPrototype ?? "",
            technicalCoFounder: (data.technical?.technicalCoFounder as any) ?? "",
            developmentStatus: (data.technical?.developmentStatus as any) ?? "",
            coreFeatures: data.technical?.coreFeatures ?? "",
            requirements: data.technical?.requirements ?? [],
        },
    });

    const onSubmit = (formData: FormData) => {
        updateData({ technical: formData });
        setStep(5);
    };

    const handleRequirementChange = (checked: boolean, value: string) => {
        const current = watch("requirements") || [];
        if (checked) {
            setValue("requirements", [...current, value]);
        } else {
            setValue(
                "requirements",
                current.filter((item) => item !== value)
            );
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 text-white">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-[#30D411]">Technical Validation</h2>
                <p className="text-gray-400">This is where Apex becomes different.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Section 1: Product Type */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white border-b border-zinc-800 pb-2">Section 1: Product Type</h3>

                    <div className="space-y-2">
                        <Label htmlFor="productType">What type of product are you building?</Label>
                        <Select onValueChange={(val) => setValue("productType", val as any)} defaultValue={watch("productType")}>
                            <SelectTrigger className="bg-zinc-900 border-zinc-800">
                                <SelectValue placeholder="Select product type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Web App">Web App</SelectItem>
                                <SelectItem value="Mobile App">Mobile App</SelectItem>
                                <SelectItem value="SaaS Platform">SaaS Platform</SelectItem>
                                <SelectItem value="AI Product">AI Product</SelectItem>
                                <SelectItem value="Marketplace">Marketplace</SelectItem>
                                <SelectItem value="Hardware + Software">Hardware + Software</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.productType && (
                            <p className="text-red-500 text-sm">{String(errors.productType.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="existingPrototype">Is there an existing prototype? (Upload link or type "No")</Label>
                        <Input
                            id="existingPrototype"
                            placeholder="https://..."
                            {...register("existingPrototype")}
                            className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411]"
                        />
                        {errors.existingPrototype && (
                            <p className="text-red-500 text-sm">{errors.existingPrototype.message}</p>
                        )}
                    </div>
                </div>

                {/* Section 2: Technical Readiness */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white border-b border-zinc-800 pb-2">Section 2: Technical Readiness</h3>

                    <div className="space-y-2">
                        <Label htmlFor="technicalCoFounder">Do you have a technical co-founder?</Label>
                        <Select onValueChange={(val) => setValue("technicalCoFounder", val as any)} defaultValue={watch("technicalCoFounder")}>
                            <SelectTrigger className="bg-zinc-900 border-zinc-800">
                                <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Yes">Yes</SelectItem>
                                <SelectItem value="No">No</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.technicalCoFounder && (
                            <p className="text-red-500 text-sm">{String(errors.technicalCoFounder.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="developmentStatus">Current development status</Label>
                        <Select onValueChange={(val) => setValue("developmentStatus", val as any)} defaultValue={watch("developmentStatus")}>
                            <SelectTrigger className="bg-zinc-900 border-zinc-800">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Not started">Not started</SelectItem>
                                <SelectItem value="Wireframes">Wireframes</SelectItem>
                                <SelectItem value="In Development">In Development</SelectItem>
                                <SelectItem value="Beta Launched">Beta Launched</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.developmentStatus && (
                            <p className="text-red-500 text-sm">{String(errors.developmentStatus.message)}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="coreFeatures">Expected Core Features (Bullet list)</Label>
                        <Textarea
                            id="coreFeatures"
                            placeholder="- Feature 1&#10;- Feature 2&#10;- Feature 3"
                            {...register("coreFeatures")}
                            className="bg-zinc-900 border-zinc-800 focus:ring-[#30D411] min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-3">
                        <Label>Do you require:</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {REQUIREMENT_OPTIONS.map((item) => (
                                <div key={item} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={item}
                                        checked={watch("requirements")?.includes(item)}
                                        onCheckedChange={(checked) => handleRequirementChange(checked as boolean, item)}
                                        className="border-zinc-700 data-[state=checked]:bg-[#30D411] data-[state=checked]:text-black"
                                    />
                                    <Label htmlFor={item} className="font-normal cursor-pointer">{item}</Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between pt-6">
                    <Button type="button" variant="outline" onClick={() => setStep(3)} className="border-zinc-800 hover:bg-zinc-900 text-white">
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
