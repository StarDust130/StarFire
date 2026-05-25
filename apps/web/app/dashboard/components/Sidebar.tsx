"use client";

import Link from "next/link";
import Logo from "../../components/Logo";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  MessageSquare,
  Brain,
  BriefcaseIcon,
  Activity,
  FileText,
  Settings,
  Menu,
  X,
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

export function Sidebar({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();

  const SidebarContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 shrink-0">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 group"
          onClick={() => setMobileOpen(false)}
        >
          <div>
            <Logo  className="!gap-2" />
          </div>
         
        </Link>
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4 px-2 select-none">
          System Modules
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 group overflow-hidden ${
                isActive
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 border border-white/20 rounded-lg bg-white/5"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon
                className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isActive ? "text-white scale-110" : "group-hover:text-white group-hover:scale-110"}`}
              />
              <span className="font-medium text-sm relative z-10">
                {item.name}
              </span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] relative z-10" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 flex items-center gap-3 bg-black/40 shrink-0">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-9 h-9 border border-white/20 shadow-sm",
            },
          }}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white truncate w-32">
            {isLoaded && user ? user.fullName || user.username : "Operator"}
          </span>
          <span className="text-[11px] text-gray-400 flex items-center gap-1.5 font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_5px_#22c55e]"></span>
            System Online
          </span>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-white/10 bg-[#050505] flex-col z-20 relative shrink-0">
        {SidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-72 bg-[#050505] border-r border-white/10 flex flex-col z-50 md:hidden shadow-2xl"
          >
            {SidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export function MobileHeader({
  setMobileOpen,
}: {
  setMobileOpen: (open: boolean) => void;
}) {
  return (
    <header className="md:hidden h-16 flex items-center justify-between px-4 border-b border-white/10 bg-[#050505] shrink-0 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/dashboard" className="flex items-center gap-3">
          <Logo size={28} className="!gap-2" />
          <span className="font-bold tracking-tight text-white">
            Startfire OS
          </span>
        </Link>
      </div>
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: "w-8 h-8 border border-white/20 shadow-sm",
          },
        }}
      />
    </header>
  );
}
