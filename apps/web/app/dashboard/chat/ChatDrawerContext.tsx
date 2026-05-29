"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ChatDrawerContextValue = {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
};

const ChatDrawerContext = createContext<ChatDrawerContextValue | null>(null);

export function ChatDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatDrawerContext.Provider
      value={{
        isOpen,
        openChat: () => setIsOpen(true),
        closeChat: () => setIsOpen(false),
      }}
    >
      {children}
    </ChatDrawerContext.Provider>
  );
}

export function useChatDrawer() {
  const context = useContext(ChatDrawerContext);

  if (!context) {
    throw new Error("useChatDrawer must be used within a ChatDrawerProvider");
  }

  return context;
}
