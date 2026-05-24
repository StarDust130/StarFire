"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
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
        
      }}
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
    />
  );
}
