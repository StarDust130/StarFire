"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        variables: {
          colorPrimary: "#0d0c0a", // var(--color-primary)
          colorText: "#0d0c0a", // var(--color-foreground)
          colorTextSecondary: "#5e5a52", // var(--color-muted)
          colorBackground: "#ffffff", // var(--color-card)
          colorInputBackground: "#f8f7f5", // var(--color-panel)
          colorInputText: "#0d0c0a",
          fontFamily: "var(--font-inter), sans-serif",
          borderRadius: "0.75rem", // 12px
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
          identityPreviewText: "text-[var(--color-foreground)] font-semibold",
          identityPreviewEditButtonIcon:
            "text-[var(--color-muted)] hover:text-[var(--color-primary)]",
        },
      }}
      routing="path"
      path="/sign-in"
      signUpUrl="/sign-up"
    />
  );
}
