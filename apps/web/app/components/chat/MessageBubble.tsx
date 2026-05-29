"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Check, Copy, AlertCircle, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
  animate?: boolean;
}

interface MessageBubbleProps {
  msg: Message;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
  onRetry: () => void;
}

export function MessageBubble({
  msg,
  copiedId,
  onCopy,
  onRetry,
}: MessageBubbleProps) {
  const isUser = msg.role === "user";
  const [displayedContent, setDisplayedContent] = useState(
    msg.animate ? "" : msg.content,
  );

  // Single-fire typewriter effect
  useEffect(() => {
    if (!msg.animate || isUser) {
      setDisplayedContent(msg.content);
      return;
    }

    let i = 0;
    const speed = Math.max(5, 20 - Math.floor(msg.content.length / 50)); // Dynamic speed based on length

    const interval = setInterval(() => {
      setDisplayedContent(msg.content.slice(0, i));
      i += 3;
      if (i > msg.content.length) {
        setDisplayedContent(msg.content);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [msg.content, msg.animate, isUser]);

  if (msg.isError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full justify-start"
      >
        <div className="flex flex-col items-start gap-2 max-w-[85%]">
          <div className="px-5 py-4 text-[14px] leading-relaxed rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4" />
              <span className="font-semibold text-sm">Execution Fault</span>
            </div>
            <p>{msg.content}</p>
          </div>
          <button
            onClick={onRetry}
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors ml-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Retry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={msg.animate ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`group relative max-w-[85%] flex flex-col ${isUser ? "items-end" : "items-start"}`}
      >
        <div
          className={`text-[15px] leading-[1.6] ${
            isUser
              ? "px-5 py-3.5 bg-[var(--color-primary)] text-[var(--color-primary-contrast)] rounded-[20px] rounded-br-[4px] shadow-sm font-medium"
              : "py-1 text-[var(--color-foreground)] bg-transparent rounded-none"
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap">{displayedContent}</p>
          ) : (
            <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-[var(--color-card)] prose-pre:border prose-pre:border-[var(--color-border)] max-w-none">
              <ReactMarkdown>{displayedContent}</ReactMarkdown>
            </div>
          )}
        </div>

        {/* Action Row for AI */}
        {!isUser && !msg.animate && (
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
            <button
              onClick={() => onCopy(msg.content, msg.id)}
              className="flex items-center justify-center p-1.5 rounded-md text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-card)] transition-colors"
              title="Copy"
            >
              {copiedId === msg.id ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
