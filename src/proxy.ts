import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/lib/auth";

export async function proxy(request: NextRequest) {
    const session = request.cookies.get("session")?.value;

    // Protect dashboard routes
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (!session) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }

        const payload = await decrypt(session);
        if (!payload) {
            // Invalid session
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }
    }

    if (request.nextUrl.pathname === "/admin/login") {
        if (session) {
            const payload = await decrypt(session);
            if (payload) {
                return NextResponse.redirect(new URL("/dashboard", request.url));
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/login"],
};
