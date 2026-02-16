import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function PUT(req: Request) {
    try {
        const { default: dbConnect } = await import("@/lib/db");
        await dbConnect();

        const { default: bcrypt } = await import("bcryptjs");
        const User = (await import("@/models/User")).default;

        // precise session verification
        const session: any = await getSession();
        console.log("Session User:", session?.user);

        if (!session || !session.user || session.user.role !== "admin") {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();
        const { currentPassword, newEmail, newPassword } = body;

        if (!currentPassword) {
            return NextResponse.json(
                { success: false, message: "Current password is required" },
                { status: 400 }
            );
        }

        // Find user by email from session (more reliable than ID if serialization varies)
        const user = await User.findOne({ email: session.user.email });

        if (!user) {
            console.error("User not found for email:", session.user.email);
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        // Verify current password
        const isMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { success: false, message: "Incorrect current password" },
                { status: 400 }
            );
        }

        // Update fields if provided
        if (newEmail) {
            // Check if email already exists
            if (newEmail !== user.email) {
                const existingUser = await User.findOne({ email: newEmail });
                if (existingUser) {
                    return NextResponse.json(
                        { success: false, message: "Email already in use" },
                        { status: 400 }
                    );
                }
                user.email = newEmail;
            }
        }

        if (newPassword) {
            if (newPassword.length < 6) {
                return NextResponse.json(
                    { success: false, message: "New password must be at least 6 characters" },
                    { status: 400 }
                );
            }
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(newPassword, salt);
        }

        await user.save();

        return NextResponse.json(
            { success: true, message: "Profile updated successfully" },
            { status: 200 }
        );

    } catch (error: any) {
        console.error("Profile update error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
