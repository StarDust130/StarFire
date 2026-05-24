"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  MessageSquare,
  Brain,
  BriefcaseIcon,
  Activity,
  FileText,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Command Center", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Chat", href: "/dashboard/chat", icon: MessageSquare },
  { name: "Memory Core", href: "/dashboard/memory", icon: Brain },
  { name: "Market Intel", href: "/dashboard/jobs", icon: BriefcaseIcon },
  { name: "Activity Logs", href: "/dashboard/activity", icon: Activity },
  { name: "Resume Ops", href: "/dashboard/resume", icon: FileText },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  return (
    <div className="flex h-screen bg-[var(--color-bg)] text-[var(--color-foreground)] overflow-hidden font-sans selection:bg-[var(--color-primary)]/30">
      {/* Sidebar - Neumorphic / Glassmorphic touch */}
      <aside className="w-64 border-r border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-2xl flex flex-col z-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

        <div className="h-16 flex items-center px-6 border-b border-[var(--color-border)]">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary-contrast)] font-bold font-[family-name:var(--font-serif)] shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)]">
              B
            </div>
            <span className="font-bold tracking-tight text-lg group-hover:text-[var(--color-primary)] transition-colors">
              Bhishma OS
            </span>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
          <div className="text-[11px] font-bold text-[var(--color-muted)] uppercase tracking-widest mb-4 px-2 select-none">
            System Modules
          </div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-border)]/50 hover:text-[var(--color-foreground)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 border border-[var(--color-primary)]/20 rounded-lg bg-[var(--color-primary)]/5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon
                  className={`w-5 h-5 relative z-10 transition-colors ${isActive ? "text-[var(--color-primary)]" : "group-hover:text-[var(--color-foreground)]"}`}
                />
                <span className="font-medium text-sm relative z-10">
                  {item.name}
                </span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)] relative z-10" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[var(--color-border)] flex items-center gap-3 bg-black/10">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "w-9 h-9 border border-[var(--color-border)] shadow-sm",
              },
            }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium truncate w-32">
              {isLoaded && user ? user.fullName || user.username : "Operator"}
            </span>
            <span className="text-[11px] text-[var(--color-muted)] flex items-center gap-1.5 font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_5px_#22c55e]"></span>
              System Online
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden bg-[var(--color-bg)] flex flex-col">
        {/* Ambient Tech Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar">
          <div className="p-6 md:p-10 w-full max-w-7xl mx-auto min-h-max">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
