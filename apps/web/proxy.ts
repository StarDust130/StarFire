import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. Define the pages that MUST be public so users can actually log in
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)" , "/" , "/terms", "/privacy"]);

export default clerkMiddleware(async (auth, req) => {
  // 2. If the user is trying to access ANY route that isn't public, force them to log in
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for Clerk's auto-proxy path
    "/__clerk/(.*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
