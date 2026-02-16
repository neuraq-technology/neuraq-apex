import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
    try {
        const { default: dbConnect } = await import("@/lib/db");
        await dbConnect();

        const { default: bcrypt } = await import("bcryptjs");
        const { login } = await import("@/lib/auth");
        const User = (await import("@/models/User")).default;

        const { email, password } = await request.json();

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: "Please provide email and password" },
                { status: 400 }
            );
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { success: false, message: "Invalid credentials" },
                { status: 401 }
            );
        }

        // Create session
        await login({ id: user._id, email: user.email, role: user.role });

        return NextResponse.json(
            { success: true, message: "Logged in successfully" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Login error:", error);
        return NextResponse.json(
            { success: false, message: "An error occurred during login" },
            { status: 500 }
        );
    }
}
