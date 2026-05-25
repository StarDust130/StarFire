"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Search,
  Database,
  Fingerprint,
  Shield,
  Zap,
  SlidersHorizontal,
} from "lucide-react";

export default function MemoryPage() {
  const [search, setSearch] = useState("");

  const memories = [
    {
      id: "mem-091a",
      title: "Technical Skills",
      type: "Core",
      score: 9.8,
      content:
        "Expert in React, Next.js, TypeScript. Strong architectural background.",
      date: "2 days ago",
    },
    {
      id: "mem-092b",
      title: "Target Roles",
      type: "Preference",
      score: 8.5,
      content:
        "Looking for Senior Frontend or Fullstack roles. Salary target $160k+.",
      date: "1 week ago",
    },
    {
      id: "mem-093c",
      title: "Past Experience",
      type: "Fact",
      score: 9.2,
      content:
        "Led migration from monolith to microservices at generic-tech-corp.",
      date: "2 weeks ago",
    },
    {
      id: "mem-094d",
      title: "Work Style",
      type: "Trait",
      score: 7.4,
      content: "Prefers asynchronous communication and document-heavy culture.",
      date: "3 weeks ago",
    },
    {
      id: "mem-095e",
      title: "Project: Project X",
      type: "Fact",
      score: 8.9,
      content: "Built a real-time collaborative editor using Yjs and WebRTC.",
      date: "1 month ago",
    },
    {
      id: "mem-096f",
      title: "Interview Feedback",
      type: "Insight",
      score: 9.5,
      content: "Struggles with dynamic programming under pressure. Needs prep.",
      date: "1 month ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Panel */}
      <div className="bg-[var(--color-bg)]/40 backdrop-blur-xl border border-[var(--color-border)] p-6 md:p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <Brain className="w-7 h-7 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                Memory Core
              </h1>
              <p className="text-sm text-[var(--color-muted)] font-mono mt-1">
                Semantic Vector Database •{" "}
                <span className="text-purple-400">1,248 Nodes Active</span>
              </p>
            </div>
          </div>

          <div className="flex bg-black/40 border border-[var(--color-border)] rounded-lg p-1 font-mono text-xs">
            <div className="px-3 py-1.5 bg-white/10 text-white rounded shadow-sm">
              Card View
            </div>
            <div className="px-3 py-1.5 text-[var(--color-muted)] hover:text-white cursor-pointer transition-colors">
              Graph View
            </div>
            <div className="px-3 py-1.5 text-[var(--color-muted)] hover:text-white cursor-pointer transition-colors">
              Raw JSON
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)] group-focus-within:text-purple-400 transition-colors" />
            <input
              type="text"
              placeholder="Search semantic memories (e.g. 'Frontend skills')..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-[var(--color-border)] rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-mono shadow-inner"
            />
          </div>
          <button className="px-4 py-3 bg-white/5 border border-[var(--color-border)] hover:bg-white/10 transition-colors rounded-xl flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Tokens", val: "2.4M", icon: Database },
          { label: "Security Level", val: "E2E Encrypted", icon: Shield },
          { label: "Vector Dimension", val: "1536", icon: Fingerprint },
          { label: "Sync Speed", val: "42ms", icon: Zap },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-black/20 border border-[var(--color-border)] rounded-xl p-4 flex items-center gap-3"
          >
            <div className="p-2 rounded-lg bg-white/5 text-[var(--color-muted)]">
              <s.icon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-[var(--color-muted)] uppercase tracking-wider font-mono">
                {s.label}
              </div>
              <div className="text-sm font-bold font-mono">{s.val}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Memory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {memories.map((mem, i) => (
          <motion.div
            key={mem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group block h-full bg-[var(--color-bg)]/50 backdrop-blur-sm border border-[var(--color-border)] hover:border-purple-500/50 rounded-xl p-5 relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(168,85,247,0.1)] hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 p-4">
              <span
                className={`px-2 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                  mem.score > 9
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : mem.score > 8
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-white/10 text-white/70 border border-white/20"
                }`}
              >
                {mem.score.toFixed(1)} IMP
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono text-[var(--color-muted)] bg-black/40 px-2 py-0.5 rounded border border-[var(--color-border)]">
                {mem.id}
              </span>
              <span className="text-[10px] font-mono text-[var(--color-muted)] uppercase tracking-wider">
                {mem.type}
              </span>
            </div>

            <h3 className="font-bold text-[15px] text-[var(--color-foreground)] mb-2 group-hover:text-purple-400 transition-colors">
              {mem.title}
            </h3>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
              {'"'}
              {mem.content}
              {'"'}
            </p>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-[var(--color-muted)] font-mono">
                {mem.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
