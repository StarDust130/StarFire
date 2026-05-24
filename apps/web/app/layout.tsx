import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter", // Keep variable name to avoid refactoring CSS
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Startfire",
  description:
    "AI-powered automation that learns your workflow. Make smarter decisions faster with real-time intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-white bg-black ">
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
