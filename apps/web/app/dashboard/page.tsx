"use client";
import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Briefcase,
  Zap,
  Radar,
  ShieldCheck,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function DashboardHome() {
  const stats = [
    {
      label: "Active Memory Nodes",
      value: "1,248",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      label: "Jobs Scanned (24h)",
      value: "8,401",
      icon: Radar,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Auto-Applies Sent",
      value: "34",
      icon: Mail,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      label: "Resumes Tailored",
      value: "42",
      icon: Briefcase,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  const recentTasks = [
    {
      title: "Parsed Netflix SWE JD",
      time: "2m ago",
      status: "completed",
      type: "job",
    },
    {
      title: "Generated Cover Letter for Google",
      time: "15m ago",
      status: "completed",
      type: "resume",
    },
    {
      title: "Scanning YC Startups Feed",
      time: "Active",
      status: "running",
      type: "radar",
    },
    {
      title: "Memory Sync: Personal Bio",
      time: "1h ago",
      status: "completed",
      type: "memory",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold tracking-tight text-[var(--color-foreground)]"
          >
            Command Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-muted)] mt-1 font-mono text-sm uppercase tracking-wider"
          >
            System Status: Nominal • Autonomous Mode Armed
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 px-4 py-2 rounded-lg backdrop-blur-md"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
          </div>
          <span className="text-sm font-semibold text-[var(--color-primary)]">
            Agent Online
          </span>
        </motion.div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="bg-[var(--color-bg)]/60 backdrop-blur-md border border-[var(--color-border)] p-5 rounded-2xl relative overflow-hidden group hover:border-[var(--color-primary)]/50 transition-colors"
          >
            <div
              className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl ${stat.bg} opacity-50 group-hover:opacity-100 transition-opacity`}
            />
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} border border-white/5`}
              >
                <stat.icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold font-mono tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm text-[var(--color-muted)] font-medium">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main AI Status Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-black/40 backdrop-blur-xl border border-[var(--color-border)] rounded-2xl overflow-hidden flex flex-col"
        >
          <div className="border-b border-white/10 p-4 bg-black/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold font-mono text-white/90 uppercase tracking-widest">
                Live Execution Log
              </span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm text-green-400/80 flex-1 space-y-3 h-64 overflow-y-auto">
            <p className="opacity-50"># system initialising...</p>
            <p>❯ Loading memory weights... [OK]</p>
            <p>❯ Connecting to Telegram webhook... [OK]</p>
            <p className="text-blue-400">
              ❯ Discovered 12 new listings matching profile.
            </p>
            <p>❯ Analyzing JD: "Senior React Developer at Vercel"</p>
            <p>
              ❯ Extracting required skills: [Next.js, TypeScript, React Server
              Components]
            </p>
            <p className="text-yellow-400">❯ Tailoring resume template v3...</p>
            <p>❯ Generating personalized cover letter...</p>
            <p className="flex items-center gap-2 mt-4 animate-pulse">
              <span className="w-1.5 h-3 bg-green-400 inline-block"></span>
              Waiting for next event...
            </p>
          </div>
        </motion.div>

        {/* Action Queue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[var(--color-bg)]/60 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-[var(--color-primary)]" />
              Action Queue
            </h3>
            <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">
              Real-time
            </span>
          </div>

          <div className="space-y-4">
            {recentTasks.map((task, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
              >
                <div className="mt-0.5">
                  {task.status === "completed" ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-blue-500 animate-spin-slow" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[var(--color-foreground)]">
                    {task.title}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-1 flex justify-between">
                    <span className="uppercase tracking-wider font-mono">
                      {task.type}
                    </span>
                    <span>{task.time}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-2.5 rounded-lg border border-dashed border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-primary)]/50 transition-all font-medium text-sm">
            View All Activity
          </button>
        </motion.div>
      </div>
    </div>
  );
}
