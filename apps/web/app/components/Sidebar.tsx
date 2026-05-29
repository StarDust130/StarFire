"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Brain,
  BriefcaseIcon,
  Activity,
  FileText,
  Settings,
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { dark } from "@clerk/ui/themes";
import { useChatDrawer } from "../dashboard/chat/ChatDrawerContext";

const navItems = [
  { name: "Command Center", href: "/dashboard", icon: LayoutDashboard },
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
  const { closeChat } = useChatDrawer();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarClick = () => {
    closeChat();

    if (isCollapsed) {
      setIsCollapsed(false);
    }
  };

  const renderSidebarContent = (collapsed: boolean, isMobile: boolean) => (
    <div className="flex flex-col h-full w-full">
      {/* Header Area */}
      {/* Added 'group' to orchestrate hover states for children */}
      <div className="relative h-16 flex items-center justify-center border-b border-[var(--color-border)] shrink-0 overflow-hidden group">
        <Link
          href="/dashboard"
          className={`absolute flex items-center gap-3 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            collapsed
              ? "left-1/2 -translate-x-1/2 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none"
              : "left-5 opacity-100 scale-100 pointer-events-auto"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            closeChat();
            if (isMobile) setMobileOpen(false);
          }}
        >
          {/* Dynamically hide text when collapsed */}
          <Logo className="!gap-2" showText={!collapsed} />
        </Link>

        {/* Desktop Toggle */}
        {!isMobile && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsCollapsed(!isCollapsed);
            }}
            className={`absolute flex items-center justify-center rounded-xl text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-card)] border border-transparent hover:border-[var(--color-border)] transition-all duration-300 outline-none cursor-pointer z-10 ${
              collapsed
                ? "left-1/2 -translate-x-1/2 w-11 h-11 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                : "right-4 w-9 h-9 opacity-100 scale-100 pointer-events-auto"
            }`}
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? (
              <PanelLeftOpen className="w-[18px] h-[18px]" />
            ) : (
              <PanelLeftClose className="w-[18px] h-[18px]" />
            )}
          </button>
        )}

        {/* Mobile Close */}
        {isMobile && (
          <button
            className="absolute right-4 flex items-center justify-center w-9 h-9 rounded-xl text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-card)] transition-colors outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen(false);
            }}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 overflow-y-auto py-5 px-3 space-y-1.5 custom-scrollbar"
        onClick={handleSidebarClick}
      >
        <div
          className={`text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-widest px-2 select-none overflow-hidden transition-all duration-300 ${
            collapsed ? "h-0 opacity-0 mb-0" : "h-4 opacity-100 mb-3"
          }`}
        >
          <span className="whitespace-nowrap">System Modules</span>
        </div>

        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.name : undefined}
              onClick={(e) => {
                e.stopPropagation();
                closeChat();
                if (isMobile) setMobileOpen(false);
              }}
              className={`relative flex items-center transition-all duration-300 group overflow-hidden ${
                collapsed
                  ? "w-11 h-11 justify-center mx-auto rounded-xl"
                  : "w-full px-3 py-2.5 gap-3 rounded-lg"
              } ${
                isActive
                  ? "bg-[var(--color-primary)] text-[var(--color-primary-contrast)] shadow-[0_4px_14px_rgba(37,99,235,0.2)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-card)] hover:text-[var(--color-foreground)] border border-transparent hover:border-[var(--color-border)]"
              }`}
            >
              <item.icon
                className={`w-[18px] h-[18px] shrink-0 transition-colors duration-300 ${
                  isActive
                    ? "text-[var(--color-primary-contrast)]"
                    : "text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]"
                }`}
              />

              <div
                className={`font-medium text-[13px] whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  collapsed ? "w-0 opacity-0" : "w-[200px] opacity-100"
                }`}
              >
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div
        className={`relative h-18 flex items-center border-t border-border bg-(--color-bg) shrink-0 transition-all duration-300 cursor-pointer hover:bg-[var(--color-card)] ${
          collapsed ? "justify-center" : "px-4 gap-3"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          closeChat();
        }}
      >
        <div className="shrink-0 flex items-center justify-center">
          <UserButton
            appearance={{
              theme: dark,
            }}
          />
        </div>

        <div
          className={`flex flex-col whitespace-nowrap overflow-hidden transition-all duration-300 ${
            collapsed ? "w-0 opacity-0" : "w-37.5 opacity-100"
          }`}
        >
          <span className="text-[13px] font-medium text-foreground truncate">
            {isLoaded && user ? user.fullName || user.username : "Operator"}
          </span>
          <span className="text-[10px] text-primary font-mono mt-0.5 uppercase tracking-wide">
            System Active
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        onClick={handleSidebarClick}
        className={`hidden md:flex border-r border-[var(--color-border)] bg-[var(--color-bg)] flex-col z-20 md:z-0 relative shrink-0 transition-[width] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-[width] ${
          isCollapsed
            ? "w-[72px] cursor-pointer hover:bg-[var(--color-panel)]"
            : "w-[260px] cursor-default"
        }`}
        title={isCollapsed ? "Click to expand" : undefined}
      >
        {renderSidebarContent(isCollapsed, false)}
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="fixed inset-y-0 left-0 w-[260px] bg-[var(--color-bg)] border-r border-[var(--color-border)] flex flex-col z-50 md:hidden shadow-2xl"
            onClick={handleSidebarClick}
          >
            {renderSidebarContent(false, true)}
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
            transition={{ duration: 0.2 }}
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
    <header className="md:hidden h-16 flex items-center justify-between px-4 border-b border-[var(--color-border)] bg-[var(--color-bg)] shrink-0 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 -ml-2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors focus:outline-none rounded-md hover:bg-[var(--color-card)] border border-transparent hover:border-[var(--color-border)]"
        >
          <Menu className="w-5 h-5" />
        </button>
        <Link href="/dashboard" className="flex items-center gap-2">
          {/* Mobile header always open, so we don't pass collapsed here */}
          <Logo size={24} className="!gap-1.5" />
        </Link>
      </div>
      <UserButton
        appearance={{
          theme: dark,
        }}
      />
    </header>
  );
}
