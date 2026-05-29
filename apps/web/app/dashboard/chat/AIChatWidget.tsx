"use client";

import { motion, AnimatePresence } from "framer-motion";
import { History, MessageSquare, X } from "lucide-react";
import { ChatWindow } from "@/app/components/chat/ChatWindow";
import Logo from "@/app/components/Logo";
import Link from "next/link";
import { useChatDrawer } from "./ChatDrawerContext";
import Image from "next/image";
import { Tooltip } from "@/app/components/ui/Tooltip";

export default function AIChatWidget() {
  const { isOpen, openChat, closeChat } = useChatDrawer();

  return (
    <>
      {/* Backdrop: Clicking this triggers closeChat. 
        Because it sits behind the drawer (z-[90]), 
        any click outside the drawer hits this.
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeChat}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[100] flex flex-col w-full sm:w-[480px] md:w-[560px] max-w-[100dvw] h-[100dvh] bg-[var(--color-bg)] border-l border-[var(--color-border)] shadow-2xl overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="shrink-0 flex items-center justify-between px-4 h-14 border-b border-[var(--color-border)] bg-[var(--color-panel)]">
              <div className="flex items-center gap-2">
                <Logo extraText="Agent" />
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={closeChat}
                  className="p-2 text-[var(--color-muted)] hover:text-white transition-colors hover:bg-[var(--color-card)] rounded-lg"
                  title="History"
                >
                  <Link href="/dashboard/memory">
                    <History className="w-4 h-4" />
                  </Link>
                </button>
                <button
                  onClick={closeChat}
                  className="p-2 text-[var(--color-muted)] hover:text-white transition-colors hover:bg-[var(--color-card)] rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Content Body */}
            <div className="flex-1 overflow-hidden relative">
              <ChatWindow />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Assistant */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.22 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={openChat}
            className="fixed bottom-3 right-3 md:bottom-5 md:right-5 z-[80] cursor-pointer outline-none"
          >
            {/* Reusable Tooltip Wrapper applied here */}
            <Tooltip
              content="Talk to StarFire ✨"
              position="left"
              className="hidden md:block"
            >
              <div className="relative flex items-center justify-center">
                {/* Soft shadow/depth */}
                <div className="absolute inset-0 rounded-full bg-black/40 blur-2xl scale-90" />

                {/* Character */}
                <Image
                  src="/starfire-3.png"
                  alt="StarFire"
                  width={128}
                  height={128}
                  priority
                  draggable={false}
                  className="
                    object-contain
                    select-none
                    pointer-events-none
                    drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]
                  "
                />
              </div>
            </Tooltip>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
