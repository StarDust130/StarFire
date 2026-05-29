"use client";

import { Send, StopCircle } from "lucide-react";

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e?: React.FormEvent | React.KeyboardEvent) => void;
  onStop: () => void;
}

export function ChatInput({
  input,
  isLoading,
  textareaRef,
  onChange,
  onSubmit,
  onStop,
}: ChatInputProps) {
  return (
    <div className="shrink-0 px-4 pt-2 pb-6 relative z-20 bg-[var(--color-bg)]">
      <form onSubmit={onSubmit} className="max-w-none mx-auto relative">
        <div className="relative flex items-center rounded-2xl border bg-[var(--color-card)] border-[var(--color-border)] focus-within:border-[var(--color-primary)] transition-colors duration-300 shadow-sm">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit(e);
              }
            }}
            placeholder="Message StarFire..."
            rows={1}
            className="flex-1 bg-transparent py-4 pl-5 pr-14 outline-none text-[15px] text-[var(--color-foreground)] placeholder-[var(--color-muted)] resize-none max-h-[180px] overflow-y-auto custom-scrollbar"
            style={{ minHeight: "56px" }}
          />

          <div className="absolute right-2 bottom-2 top-2 flex items-center justify-center aspect-square">
            {isLoading ? (
              <button
                type="button"
                onClick={onStop}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--color-muted)] hover:text-red-400 hover:bg-red-500/10 transition-colors"
                title="Halt Generation"
              >
                <StopCircle className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed bg-[var(--color-foreground)] text-[var(--color-bg)] hover:scale-105 active:scale-95 shadow-sm"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
