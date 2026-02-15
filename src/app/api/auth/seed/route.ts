import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() {
    try {
        await dbConnect();

        const email = "admin@gmail.com";
        const password = "admin123";
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if admin exists
        const existingAdmin = await User.findOne({ email });

        if (existingAdmin) {
            existingAdmin.password = hashedPassword;
            await existingAdmin.save();
            return NextResponse.json(
                { success: true, message: "Admin password reset to 'admin123'" },
                { status: 200 }
            );
        }

        // Create admin user
        await User.create({
            email,
            password: hashedPassword,
            role: "admin",
        });

        return NextResponse.json(
            { success: true, message: "Admin user created successfully" },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Seeding error:", error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
