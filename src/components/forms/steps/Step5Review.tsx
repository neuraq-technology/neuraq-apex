"use client";

import { useApplicationStore } from "@/lib/store/application-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema } from "@/lib/validations/application";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type FormData = z.infer<typeof reviewSchema>;

export default function Step5Review() {
    const { data, reset, setStep } = useApplicationStore();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            confirmation: false,
        },
    });

    const onSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        console.log("Submitting application data:", { ...data, review: formData });
        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    review: formData,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Submission failed:", errorData);
                toast.error(`Submission failed: ${errorData.message || "Please check your inputs."}`);
                // If there are validation errors, show them
                if (errorData.errors) {
                    const errorMessages = Object.entries(errorData.errors.fieldErrors || {})
                        .map(([field, msgs]) => `${field}: ${(msgs as string[]).join(", ")}`)
                        .join("\n");
                    if (errorMessages) {
                        toast.error(errorMessages);
                        console.error("Validation errors:", errorData.errors);
                    }
                }
                throw new Error(errorData.message || "Failed to submit application");
            }

            toast.success("Application submitted successfully!");
            reset();
            router.push("/apply/success");
        } catch (error) {
            console.error(error);
            // toast.error("Something went wrong. Please try again."); // Handled above for API errors
        } finally {
            setIsSubmitting(false);
        }
    };

    const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
        <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[#30D411] border-b border-zinc-800 pb-1">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">{children}</div>
        </div>
    );

    const Field = ({ label, value }: { label: string; value: any }) => (
        <div>
            <span className="text-zinc-500 block">{label}</span>
            <span className="text-zinc-200">{value || "N/A"}</span>
        </div>
    );

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 text-white">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-[#30D411]">Review & Submit</h2>
                <p className="text-gray-400">Please review your information before submitting.</p>
            </div>

            <div className="space-y-8 bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <Section title="Founder Validation">
                    <Field label="Full Name" value={data.founder?.fullName} />
                    <Field label="Email" value={data.founder?.email} />
                    <Field label="Phone" value={data.founder?.phone} />
                    <Field label="LinkedIn / Portfolio" value={data.founder?.linkedinUrl} />
                    <Field label="Education" value={data.founder?.education} />
                    <Field label="Startup Experience" value={data.founder?.previousStartupExp} />
                    <Field label="Technical Background" value={data.founder?.technicalBackground} />
                    <Field label="Commitment" value={data.founder?.currentCommitment} />
                </Section>

                <Section title="Startup Validation">
                    <Field label="Startup Name" value={data.startup?.startupName} />
                    <Field label="One-line Pitch" value={data.startup?.oneLinePitch} />
                    <Field label="Industry" value={data.startup?.industry} />
                    <Field label="Stage" value={data.startup?.stage} />
                    <Field label="Problem" value={data.startup?.problemStatement} />
                    <Field label="Target Audience" value={data.startup?.targetAudience} />
                    <Field label="UVP" value={data.startup?.uniqueValueProposition} />
                    <Field label="Competitors" value={data.startup?.competitors} />
                    <Field label="Traction" value={data.startup?.traction} />
                </Section>

                <Section title="Business Validation">
                    <Field label="Business Model" value={data.business?.businessModel} />
                    <Field label="Rev Model Expl." value={data.business?.revenueModelExplanation} />
                    <Field label="Market Size" value={data.business?.marketSize} />
                    <Field label="GTM Strategy" value={data.business?.goToMarketStrategy} />
                    <Field label="Funding Status" value={data.business?.fundingStatus} />
                </Section>

                <Section title="Technical Validation">
                    <Field label="Product Type" value={data.technical?.productType} />
                    <Field label="Prototype" value={data.technical?.existingPrototype} />
                    <Field label="Tech Co-Founder" value={data.technical?.technicalCoFounder} />
                    <Field label="Dev Status" value={data.technical?.developmentStatus} />
                    <div className="col-span-2">
                        <span className="text-zinc-500 block">Core Features</span>
                        <pre className="text-zinc-200 whitespace-pre-wrap font-sans">{data.technical?.coreFeatures || "N/A"}</pre>
                    </div>
                    <div className="col-span-2">
                        <span className="text-zinc-500 block">Requirements</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {data.technical?.requirements?.map((req) => (
                                <span key={req} className="bg-zinc-800 text-xs px-2 py-1 rounded-full text-zinc-300">
                                    {req}
                                </span>
                            )) || "N/A"}
                        </div>
                    </div>
                </Section>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex items-start space-x-3 p-4 border border-zinc-800 rounded-lg bg-zinc-900/30">
                    <Checkbox
                        id="confirmation"
                        checked={watch("confirmation")}
                        onCheckedChange={(checked) => setValue("confirmation", checked as boolean)}
                        className="data-[state=checked]:bg-[#30D411] data-[state=checked]:text-black border-zinc-700 mt-1"
                    />
                    <div className="space-y-1 leading-none">
                        <Label
                            htmlFor="confirmation"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                            I confirm that the information provided is accurate and complete.
                        </Label>
                        <p className="text-xs text-zinc-500">
                            By submitting this application, you agree to our terms and conditions.
                        </p>
                    </div>
                </div>
                {errors.confirmation && (
                    <p className="text-red-500 text-sm">{errors.confirmation.message}</p>
                )}

                <div className="flex justify-between pt-4">
                    <Button type="button" variant="outline" onClick={() => setStep(4)} className="border-zinc-800 hover:bg-zinc-900 text-white">
                        Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting} className="bg-[#30D411] text-black hover:bg-[#28b00e] min-w-[150px]">
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Submit Application"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
