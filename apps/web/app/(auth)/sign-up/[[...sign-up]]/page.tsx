"use client";

import { ClerkLoaded, ClerkLoading, ClerkDegraded, ClerkFailed, SignUp } from "@clerk/nextjs";
import AuthSkeleton from "../../AuthSkeleton";

export default function SignUpPage() {
  return (
    <div className="w-full">
      <ClerkLoading>
        <AuthSkeleton />
      </ClerkLoading>
      <ClerkLoaded>
        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
        />
        <ClerkDegraded>
          <div className="mt-4 p-4 bg-orange-50 border border-orange-200 text-orange-800 rounded-xl text-center text-sm font-medium">
            We are experiencing slow authentication systems. Please wait or try again later.
          </div>
        </ClerkDegraded>
      </ClerkLoaded>
      <ClerkFailed>
        <div className="p-8 bg-white border border-[var(--color-border)] rounded-3xl text-center shadow-sm w-full">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">Registration Unavailable</h3>
          <p className="text-[var(--color-muted)] text-sm">Something went wrong with our secure sign-in provider. Please contact support if this persists.</p>
        </div>
      </ClerkFailed>
    </div>
  );
}