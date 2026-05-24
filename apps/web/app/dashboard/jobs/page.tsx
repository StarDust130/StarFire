"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  Building2,
  MapPin,
  DollarSign,
  Target,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Filter,
} from "lucide-react";

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState("recommended");

  const jobs = [
    {
      id: 1,
      company: "Vercel",
      role: "Senior Frontend Engineer",
      location: "Remote",
      salary: "$160k - $210k",
      match: 98,
      status: "new",
    },
    {
      id: 2,
      company: "Stripe",
      role: "Fullstack Developer",
      location: "New York / Remote",
      salary: "$180k - $240k",
      match: 94,
      status: "applied",
    },
    {
      id: 3,
      company: "Linear",
      role: "Product Engineer",
      location: "Remote",
      salary: "$150k - $200k",
      match: 89,
      status: "saved",
    },
    {
      id: 4,
      company: "OpenAI",
      role: "Software Engineer, Web",
      location: "San Francisco",
      salary: "$200k - $300k",
      match: 85,
      status: "new",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] flex items-center gap-3">
            <BriefcaseIcon className="w-8 h-8 text-[var(--color-primary)] opacity-80" />
            Market Intel
          </h1>
          <p className="text-[var(--color-muted)] mt-2">
            AI-driven job discovery based on your memory core.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2 shadow-sm">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-primary-contrast)] rounded-lg text-sm font-medium shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.3)] hover:opacity-90 transition-opacity">
            Scan Radar Now
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[var(--color-border)] overflow-x-auto custom-scrollbar">
        {["Recommended", "Saved", "Processing", "Applied"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
              activeTab === tab.toLowerCase()
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            }`}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <motion.div
                layoutId="job-tab"
                className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[var(--color-primary)] shadow-[0_-2px_8px_var(--color-primary)]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[var(--color-bg)]/40 backdrop-blur-md border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 p-5 rounded-2xl group transition-all hover:bg-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shadow-inner">
                    <Building2 className="w-6 h-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                      {job.role}
                    </h3>
                    <div className="text-sm text-[var(--color-muted)] font-medium">
                      {job.company}
                    </div>
                  </div>
                </div>

                {/* Match Score */}
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 shadow-sm">
                  <div className="text-sm font-bold text-[var(--color-primary)] flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" />
                    {job.match}%
                  </div>
                  <div className="text-[9px] font-mono uppercase text-[var(--color-primary)]/70 tracking-widest mt-0.5">
                    Match
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-[var(--color-muted)]">
                  <MapPin className="w-3.5 h-3.5" /> {job.location}
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-green-400">
                  <DollarSign className="w-3.5 h-3.5" /> {job.salary}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
              {job.status === "applied" ? (
                <div className="flex items-center gap-2 text-sm text-green-500 font-medium font-mono">
                  <CheckCircle2 className="w-4 h-4" /> Auto-Applied
                </div>
              ) : job.status === "saved" ? (
                <span className="text-sm font-medium font-mono text-[var(--color-muted)]">
                  Saved to backlog
                </span>
              ) : (
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[var(--color-primary)] text-[var(--color-primary-contrast)] rounded-lg hover:opacity-90 transition-opacity button-glow shadow-md">
                  <Sparkles className="w-4 h-4" /> AI Auto-Apply
                </button>
              )}

              <button className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-white/10 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
