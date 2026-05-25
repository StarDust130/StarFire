"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Send,
  Bot,
  User,
  Sparkles,
  BrainCircuit,
  Command,
} from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hello. I am StarFire. What career objective are we executing today?",
      time: "10:00 AM",
    },
  ]);
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");

    // Simulate thinking
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "Analyzing your request based on current memory context and market conditions...",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1000);
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-[calc(100vh-5rem)] flex gap-6">
      {/* Sidebar / Threads */}
      <div className="w-72 hidden lg:flex flex-col bg-[var(--color-bg)]/40 backdrop-blur-md border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border)]">
          <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-[var(--color-primary-contrast)] rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.3)]">
            <Sparkles className="w-4 h-4" /> New Session
          </button>
        </div>

        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)]" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-white/5 border border-[var(--color-border)] rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)]/50 transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
          <div className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wider mb-2 pl-2 shadow-sm">
            Today
          </div>
          {[
            { title: "Reviewing Stripe JD", active: true },
            { title: "Optimize Resume Summary", active: false },
          ].map((thread, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl cursor-pointer transition-colors ${thread.active ? "bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30" : "hover:bg-white/5 border border-transparent"}`}
            >
              <h4
                className={`text-sm font-medium ${thread.active ? "text-[var(--color-primary)]" : "text-[var(--color-foreground)]"} truncate`}
              >
                {thread.title}
              </h4>
              <p className="text-xs text-[var(--color-muted)] mt-1 truncate">
                Based on your recent memories...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[var(--color-bg)]/60 backdrop-blur-xl border border-[var(--color-border)] rounded-2xl overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Chat Header */}
        <div className="h-16 border-b border-[var(--color-border)] flex items-center justify-between px-6 bg-white/5 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center border border-[var(--color-primary)]/30">
              <Bot className="w-4 h-4 text-[var(--color-primary)]" />
            </div>
            <div>
              <h2 className="font-semibold text-[var(--color-foreground)]">
                StarFire Intelligence
              </h2>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                <span className="text-xs text-[var(--color-muted)] font-mono">
                  Model: GPT-4o-tuned
                </span>
              </div>
            </div>
          </div>

          <button className="p-2 hover:bg-white/10 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors">
            <BrainCircuit className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 z-10 custom-scrollbar">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 max-w-3xl ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center border ${
                    msg.role === "assistant"
                      ? "bg-black/40 border-[var(--color-primary)]/30 text-[var(--color-primary)]"
                      : "bg-[var(--color-border)] border-[var(--color-border)] text-white"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>

                <div
                  className={`flex flex-col gap-1 min-w-[120px] ${msg.role === "user" ? "items-end" : ""}`}
                >
                  <div
                    className={`p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-[var(--color-foreground)] text-[var(--color-bg)] rounded-tr-sm"
                        : "bg-black/40 backdrop-blur-sm border border-[var(--color-border)] text-[var(--color-foreground)] rounded-tl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-[var(--color-muted)] font-mono px-1 select-none">
                    {msg.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={endOfMessagesRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-[var(--color-border)] bg-black/20 backdrop-blur-xl z-10">
          <form
            onSubmit={handleSend}
            className="max-w-4xl mx-auto relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-purple-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl overflow-hidden focus-within:border-[var(--color-primary)]/50 focus-within:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.15)] transition-all">
              <button
                type="button"
                className="pl-4 pr-2 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                <Command className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask StarFire to find jobs, optimize resume, or query memory..."
                className="flex-1 bg-transparent py-4 px-2 outline-none text-[15px] text-[var(--color-foreground)] placeholder-[var(--color-muted)]"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className={`p-4 transition-colors ${input.trim() ? "text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10" : "text-[var(--color-muted)] cursor-not-allowed"}`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <p className="text-[11px] text-[var(--color-muted)] font-mono">
              Press Enter to send. Shift + Enter for new line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
