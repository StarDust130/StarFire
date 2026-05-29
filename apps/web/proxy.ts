import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. Add your API route to the public route matcher
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/terms",
  "/privacy",
  "/api/v1/chat(.*)", // Allows Clerk to let requests pass through to your API folder
]);

export default clerkMiddleware(async (auth, req) => {
  // 2. If the user is trying to access ANY route that isn't public, force them to log in
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|ogg)).*)",
    "/(api|trpc)(.*)",
  ],
};
