import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Application from "@/models/Application";
import { applicationSchema } from "@/lib/validations/application";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
    try {
        await dbConnect();

        const applications = await Application.find({})
            .sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            data: applications,
        });
    } catch (error) {
        console.error("Error fetching applications:", error);

        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();

        const body = await req.json();

        const validationResult =
            applicationSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    errors:
                        validationResult.error.flatten(),
                },
                { status: 400 }
            );
        }

        const application =
            await Application.create(body);

        return NextResponse.json(
            {
                success: true,
                applicationId: application._id,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Submission error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            { status: 500 }
        );
    }
}
