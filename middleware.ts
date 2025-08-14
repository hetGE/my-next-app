import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware runs before a request is completed
 * Use for authentication, redirects, headers, etc.
 */
export function middleware(request: NextRequest) {
    // Example 1: Add security headers
    const response = NextResponse.next();
    
    // Security headers
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    
    // Example 2: Maintenance mode
    const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
    if (isMaintenanceMode && !request.nextUrl.pathname.startsWith("/maintenance")) {
        return NextResponse.redirect(new URL("/maintenance", request.url));
    }
    
    // Example 3: Authentication check (uncomment to use)
    // const token = request.cookies.get("auth-token");
    // const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
    // const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");
    // 
    // if (isProtectedRoute && !token) {
    //     // Redirect to login if accessing protected route without auth
    //     const loginUrl = new URL("/auth/login", request.url);
    //     loginUrl.searchParams.set("from", request.nextUrl.pathname);
    //     return NextResponse.redirect(loginUrl);
    // }
    // 
    // if (isAuthPage && token) {
    //     // Redirect to dashboard if accessing auth pages while logged in
    //     return NextResponse.redirect(new URL("/dashboard", request.url));
    // }
    
    // Example 4: Geolocation-based routing (uncomment to use)
    // const country = request.geo?.country || "US";
    // if (country === "DE" && !request.nextUrl.pathname.startsWith("/de")) {
    //     return NextResponse.redirect(new URL(`/de${request.nextUrl.pathname}`, request.url));
    // }
    
    // Example 5: A/B testing (uncomment to use)
    // const bucket = request.cookies.get("ab-test-bucket");
    // if (!bucket) {
    //     const newBucket = Math.random() < 0.5 ? "a" : "b";
    //     response.cookies.set("ab-test-bucket", newBucket, { maxAge: 60 * 60 * 24 * 30 });
    //     response.headers.set("x-ab-test-bucket", newBucket);
    // }
    
    // Example 6: Rate limiting by IP (basic example)
    // You'd typically use a proper rate limiting service or Redis
    // const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";
    // console.log(`Request from IP: ${ip} to ${request.nextUrl.pathname}`);
    
    return response;
}

/**
 * Configure which routes the middleware runs on
 * See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 */
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).)",
    ],
};