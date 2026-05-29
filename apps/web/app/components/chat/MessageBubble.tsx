"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy, AlertCircle, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  if (msg.isError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
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

  // Pre-process content to fix common AI Markdown spacing errors
  // This removes spaces right after opening bold tags: "** Hello" -> "**Hello"
  const sanitizedContent = msg.content
    .replace(/\*\* \s*/g, "**")
    .replace(/\s* \*\*/g, "**");

  return (
    <motion.div
      initial={msg.animate ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }} // <-- Re-added exit animation
      transition={{ duration: 0.2 }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`group relative max-w-[85%] flex flex-col ${isUser ? "items-end" : "items-start"}`}
      >
        <div
          className={`text-[15px] ${
            isUser
              ? "px-5 py-3.5 bg-[var(--color-primary)] text-[var(--color-primary-contrast)] rounded-[20px] rounded-br-[4px] shadow-sm font-medium"
              : "py-1 text-[var(--color-foreground)] bg-transparent rounded-none w-full"
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap leading-[1.6]">
              {sanitizedContent}
            </p>
          ) : (
            // Aggressively customized prose for chat UI
            <div
              className="prose prose-invert max-w-none 
              prose-p:leading-[1.65] prose-p:mb-3 last:prose-p:mb-0
              prose-headings:text-zinc-50 prose-headings:font-semibold prose-headings:tracking-tight
              prose-h1:text-xl prose-h1:mt-5 prose-h1:mb-3
              prose-h2:text-lg prose-h2:mt-4 prose-h2:mb-2.5
              prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
              prose-strong:text-zinc-50 prose-strong:font-semibold
              prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-4 prose-ul:space-y-1.5
              prose-ol:list-decimal prose-ol:pl-5 prose-ol:mb-4 prose-ol:space-y-1.5
              prose-li:my-0 prose-li:leading-[1.65]
              prose-li:marker:text-zinc-500
              prose-code:text-amber-300 prose-code:bg-zinc-800/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[13px] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#1A1A1A] prose-pre:border prose-pre:border-zinc-800 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-4 prose-pre:shadow-sm"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {sanitizedContent}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Action Row for AI */}
        {!isUser && (
          <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
            <button
              onClick={() => onCopy(msg.content, msg.id)}
              className="flex items-center justify-center p-1.5 rounded-md text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-card)] transition-colors"
              title="Copy response"
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
