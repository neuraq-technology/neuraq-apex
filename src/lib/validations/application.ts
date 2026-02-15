import { z } from "zod";

// Founder Validation
export const founderSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    linkedinUrl: z.string().url("Invalid LinkedIn URL"),
    education: z.string().optional(),
    previousStartupExp: z.string().min(2, "Please provide details about your startup experience or type 'No'"), // "Yes - Details" or "No"
    technicalBackground: z.enum(["Non-Tech", "Basic", "Advanced"] as any),
    currentCommitment: z.enum(["Full-Time", "Part-Time"] as any),
});

// Startup Validation
export const startupSchema = z.object({
    startupName: z.string().min(2, "Startup name is required"),
    oneLinePitch: z
        .string()
        .min(10, "Pitch is too short")
        .max(150, "Pitch must be 150 characters or less"),
    industry: z.string().min(2, "Industry is required"),
    stage: z.enum(["Idea", "Prototype", "MVP", "Revenue"] as any),
    problemStatement: z.string().min(20, "Please describe the problem statement"),
    targetAudience: z.string().min(10, "Please describe your target audience"),
    uniqueValueProposition: z.string().min(20, "Please describe your unique value proposition"),
    competitors: z.string().optional(),
    traction: z.enum(["Users", "Revenue", "Pilots", "None"] as any),
});

// Business Validation
export const businessSchema = z.object({
    businessModel: z.enum(["Subscription", "Commission", "SaaS", "Marketplace", "Other"] as any),
    revenueModelExplanation: z.string().optional(),
    marketSize: z.string().optional(),
    goToMarketStrategy: z.string().optional(),
    fundingStatus: z.enum(["Bootstrapped", "Raising", "Funded"] as any),
});

// Technical Validation
export const technicalSchema = z.object({
    productType: z.enum(
        [
            "Web App",
            "Mobile App",
            "SaaS Platform",
            "AI Product",
            "Marketplace",
            "Hardware + Software",
            "Other",
        ] as any
    ),
    existingPrototype: z.string().optional(), // Link or "No"
    technicalCoFounder: z.enum(["Yes", "No"] as any),
    developmentStatus: z.enum(["Not started", "Wireframes", "In Development", "Beta Launched"] as any),
    coreFeatures: z.string().optional(), // Bullet list
    requirements: z.array(z.string()).optional(),
});

export const reviewSchema = z.object({
    confirmation: z.boolean().refine((val) => val === true, "You must confirm the information is accurate"),
});

// Combined schema for type inference
export const applicationSchema = z.object({
    founder: founderSchema,
    startup: startupSchema,
    business: businessSchema,
    technical: technicalSchema,
    review: reviewSchema,
});

export type ApplicationData = z.infer<typeof applicationSchema>;
