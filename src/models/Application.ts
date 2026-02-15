import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IApplication extends Document {
    status: string;
    founder: {
        fullName: string;
        email: string;
        phone: string;
        linkedinUrl: string;
        education?: string;
        previousStartupExp: string; // "Yes - Details" or "No"
        technicalBackground: string; // "Non-Tech", "Basic", "Advanced"
        currentCommitment: string; // "Full-Time", "Part-Time"
    };
    startup: {
        startupName: string;
        oneLinePitch: string;
        industry: string;
        stage: string; // "Idea", "Prototype", "MVP", "Revenue"
        problemStatement: string;
        targetAudience: string;
        uniqueValueProposition: string;
        competitors?: string;
        traction: string; // "Users", "Revenue", "Pilots", "None"
    };
    business: {
        businessModel: string; // "Subscription", "Commission", "SaaS", "Marketplace", "Other"
        revenueModelExplanation?: string;
        marketSize?: string;
        goToMarketStrategy?: string;
        fundingStatus: string; // "Bootstrapped", "Raising", "Funded"
    };
    technical: {
        productType: string; // "Web App", "Mobile App", "SaaS Platform", "AI Product", "Marketplace", "Hardware + Software", "Other"
        existingPrototype?: string; // Link or "No"
        technicalCoFounder: string; // "Yes", "No"
        developmentStatus: string; // "Not started", "Wireframes", "In Development", "Beta Launched"
        coreFeatures?: string; // Bullet list
        requirements: string[]; // ["UI/UX Design", "Frontend Development", "Backend Development", "Cloud Infrastructure", "AI Integration", "Payment Integration", "Security Audit"]
    };
    review: {
        confirmation: boolean;
    };
    createdAt: Date;
    updatedAt: Date;
}

const ApplicationSchema: Schema = new Schema(
    {
        status: { type: String, default: 'submitted' },
        founder: {
            fullName: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            linkedinUrl: { type: String, required: true },
            education: { type: String },
            previousStartupExp: { type: String, required: true },
            technicalBackground: { type: String, required: true, enum: ['Non-Tech', 'Basic', 'Advanced'] },
            currentCommitment: { type: String, required: true, enum: ['Full-Time', 'Part-Time'] },
        },
        startup: {
            startupName: { type: String, required: true },
            oneLinePitch: { type: String, required: true, maxLength: 150 },
            industry: { type: String, required: true },
            stage: { type: String, required: true, enum: ['Idea', 'Prototype', 'MVP', 'Revenue'] },
            problemStatement: { type: String, required: true },
            targetAudience: { type: String, required: true },
            uniqueValueProposition: { type: String, required: true },
            competitors: { type: String },
            traction: { type: String, required: true, enum: ['Users', 'Revenue', 'Pilots', 'None'] },
        },
        business: {
            businessModel: { type: String, required: true, enum: ['Subscription', 'Commission', 'SaaS', 'Marketplace', 'Other'] },
            revenueModelExplanation: { type: String },
            marketSize: { type: String },
            goToMarketStrategy: { type: String },
            fundingStatus: { type: String, required: true, enum: ['Bootstrapped', 'Raising', 'Funded'] },
        },
        technical: {
            productType: { type: String, required: true, enum: ['Web App', 'Mobile App', 'SaaS Platform', 'AI Product', 'Marketplace', 'Hardware + Software', 'Other'] },
            existingPrototype: { type: String },
            technicalCoFounder: { type: String, required: true, enum: ['Yes', 'No'] },
            developmentStatus: { type: String, required: true, enum: ['Not started', 'Wireframes', 'In Development', 'Beta Launched'] },
            coreFeatures: { type: String },
            requirements: [{ type: String }],
        },
        review: {
            confirmation: { type: Boolean, required: true },
        },
    },
    { timestamps: true }
);

// Prevent overwrite of the model if it's already compiled
const Application: Model<IApplication> =
    mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);

export default Application;
