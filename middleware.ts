import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the protected routes
const isProtectedRoute = createRouteMatcher(['/settings(.*)', '/chat(.*)']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
    if (isProtectedRoute(req)) {
        // Protect the route
        await auth.protect();
    }
    // Allow public access to other routes
    return NextResponse.next();
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        "/",
        "/(api|trpc)(.*)"
    ],
};