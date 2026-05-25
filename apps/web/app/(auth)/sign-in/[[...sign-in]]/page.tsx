"use client";

import { ClerkLoaded, ClerkLoading, ClerkDegraded, ClerkFailed, SignIn } from "@clerk/nextjs";
import AuthSkeleton from "../../AuthSkeleton";

export default function SignInPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ClerkLoading>
        <AuthSkeleton />
      </ClerkLoading>
      <ClerkLoaded>
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "#0d0c0a",
              colorText: "#0d0c0a",
              colorTextSecondary: "#5e5a52",
              colorBackground: "#ffffff",
              colorInputBackground: "#f8f7f5",
              colorInputText: "#0d0c0a",
              fontFamily: "var(--font-inter), sans-serif",
              borderRadius: "0.75rem",
            },
            elements: {
              card: "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[var(--color-border)] rounded-3xl p-8 max-w-none w-full",
              headerTitle:
                "font-[family-name:var(--font-serif)] text-3xl font-bold text-[var(--color-foreground)] tracking-tight",
              headerSubtitle: "text-[var(--color-muted)] text-base font-medium",
              socialButtonsBlockButton:
                "bg-white border border-[var(--color-border)] rounded-xl py-3 hover:bg-[var(--color-bg)] transition-colors shadow-sm text-base font-semibold text-[var(--color-foreground)]",
              socialButtonsBlockButtonText: "font-semibold text-base",
              dividerLine: "bg-[var(--color-border)]",
              dividerText: "text-[var(--color-muted)] bg-transparent",
              formFieldLabel:
                "text-sm font-semibold text-[var(--color-foreground)] mb-1.5",
              formFieldInput:
                "bg-[var(--color-panel)] border-[var(--color-border)] rounded-xl py-2.5 px-4 text-base focus:ring-2 focus:ring-[var(--color-primary)] font-medium text-[var(--color-foreground)] transition-shadow",
              formButtonPrimary:
                "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 hover:shadow-md transition-all shadow-sm rounded-xl py-3 text-base font-semibold",
              footerActionText: "text-[var(--color-muted)] font-medium text-sm",
              footerActionLink:
                "text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)] transition-colors",
              identityPreviewText:
                "text-[var(--color-foreground)] font-semibold",
              identityPreviewEditButtonIcon:
                "text-[var(--color-muted)] hover:text-[var(--color-primary)]",
            },
          }}
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
        />
        <ClerkDegraded>
          <div className="mt-4 p-4 bg-orange-50 border border-orange-200 text-orange-800 rounded-xl text-center text-sm font-medium">
            We are experiencing slow authentication systems. Please wait or try
            again later.
          </div>
        </ClerkDegraded>
      </ClerkLoaded>
      <ClerkFailed>
        <div className="p-8 bg-white border border-[var(--color-border)] rounded-3xl text-center shadow-sm w-full">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
            Authentication Unavailable
          </h3>
          <p className="text-[var(--color-muted)] text-sm">
            Something went wrong with our secure sign-in provider. Please
            contact support if this persists.
          </p>
        </div>
      </ClerkFailed>
    </div>
  );
}