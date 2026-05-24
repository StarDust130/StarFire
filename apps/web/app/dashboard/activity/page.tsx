"use client";
import { motion } from "framer-motion";
import {
  Activity,
  Mail,
  FileText,
  Briefcase,
  Brain,
  GitMerge,
} from "lucide-react";

export default function ActivityPage() {
  const activities = [
    {
      id: 1,
      type: "mail",
      icon: Mail,
      title: "Sent optimized application to Vercel",
      desc: "Crafted tailored cover letter and sent via automated pipeline.",
      time: "10 mins ago",
      status: "success",
      color: "text-blue-500",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      id: 2,
      type: "resume",
      icon: FileText,
      title: "Generated targeted Resume (Next.js Focus)",
      desc: "Analyzed 12 JDs and updated skills priority.",
      time: "45 mins ago",
      status: "success",
      color: "text-green-500",
      bg: "bg-green-500/10 border-green-500/20",
    },
    {
      id: 3,
      type: "job",
      icon: Briefcase,
      title: "Found 15 high-match remote roles",
      desc: "Batch radar scan completed. Average match score: 87%.",
      time: "2 hours ago",
      status: "success",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10 border-yellow-500/20",
    },
    {
      id: 4,
      type: "memory",
      icon: Brain,
      title: "Memory Core Indexed",
      desc: "Stored new preferences from Telegram chat conversation.",
      time: "5 hours ago",
      status: "success",
      color: "text-purple-500",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      id: 5,
      type: "system",
      icon: GitMerge,
      title: "Agent Logic Updated",
      desc: "New LLM workflow activated for faster scraping.",
      time: "Yesterday",
      status: "info",
      color: "text-[var(--color-primary)]",
      bg: "bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] flex items-center gap-3">
          <Activity className="w-8 h-8 text-[var(--color-primary)] opacity-80" />
          Autonomous Logs
        </h1>
        <p className="text-[var(--color-muted)] mt-2">
          Historical timeline of all actions taken by the Startfire agent.
        </p>
      </div>

      <div className="relative border-l border-[var(--color-border)] ml-6 pl-8 space-y-10 py-6">
        {activities.map((act, i) => (
          <motion.div
            key={act.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div
              className={`absolute -left-[53px] top-1 w-10 h-10 rounded-full flex items-center justify-center border bg-[var(--color-bg)] ${act.bg} shadow-sm backdrop-blur-md`}
            >
              <act.icon className={`w-4 h-4 ${act.color}`} />
            </div>

            {/* Bubble */}
            <div className="bg-[var(--color-bg)]/60 backdrop-blur-md border border-[var(--color-border)] p-6 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                  {act.title}
                </h3>
                <span className="text-[11px] font-mono text-[var(--color-muted)] whitespace-nowrap bg-black/30 px-2 py-1 rounded">
                  {act.time}
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {act.desc}
              </p>

              <div className="mt-4 flex gap-2">
                <button className="text-[11px] font-mono text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors border border-[var(--color-border)] px-3 py-1.5 rounded-md hover:bg-white/5">
                  View Trace
                </button>
                {act.type === "resume" && (
                  <button className="text-[11px] font-mono text-[var(--color-primary)] hover:text-white transition-colors border border-[var(--color-primary)]/30 px-3 py-1.5 rounded-md bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20">
                    Download PDF
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
