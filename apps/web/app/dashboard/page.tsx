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
            className="text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-serif)]"
          >
            Command Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-1 font-mono text-sm uppercase tracking-wider"
          >
            System Status: Nominal • Autonomous Mode Armed
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/10 transition-colors"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <span className="text-sm font-semibold text-white">Agent Online</span>
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
            className="bg-[#050505] border border-white/10 p-5 rounded-2xl relative overflow-hidden group hover:border-white/30 hover:bg-[#0a0a0a] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-white/5"
          >
            <div
              className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl ${stat.bg} opacity-20 group-hover:opacity-80 transition-opacity duration-500`}
            />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div
                className={`p-2.5 rounded-xl bg-white/5 border border-white/5 text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
            <div className="space-y-1 relative z-10">
              <h3 className="text-3xl font-bold font-mono tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
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
          className="lg:col-span-2 bg-[#050505] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-lg shadow-white/5 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

          <div className="border-b border-white/10 p-4 bg-black/40 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
              <span className="text-sm font-semibold font-mono text-white/90 uppercase tracking-widest">
                Live Execution Log
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
            </div>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base text-green-400/90 flex-1 space-y-3 h-72 sm:h-80 overflow-y-auto relative z-10 custom-scrollbar leading-relaxed">
            <p className="opacity-50"># system initialising...</p>
            <p>
              ❯ Loading memory weights...{" "}
              <span className="text-white">[OK]</span>
            </p>
            <p>
              ❯ Connecting to Telegram webhook...{" "}
              <span className="text-white">[OK]</span>
            </p>
            <p className="text-blue-400">
              ❯ Discovered 12 new listings matching profile.
            </p>
            <p>❯ Analyzing JD: "Senior React Developer at Vercel"</p>
            <p>
              ❯ Extracting required skills:{" "}
              <span className="text-white">
                [Next.js, TypeScript, React Server Components]
              </span>
            </p>
            <p className="text-yellow-400">❯ Tailoring resume template v3...</p>
            <p>❯ Generating personalized cover letter...</p>
            <p className="flex items-center gap-2 mt-6 animate-pulse text-white">
              <span className="w-2 h-4 bg-white inline-block"></span>
              Waiting for next event...
            </p>
          </div>
        </motion.div>

        {/* Action Queue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#050505] border border-white/10 rounded-2xl p-6 shadow-lg shadow-white/5 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none rounded-2xl" />

          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="font-bold text-lg flex items-center gap-2 text-white">
              <Activity className="w-5 h-5 text-white" />
              Action Queue
            </h3>
            <span className="text-xs font-mono bg-white/10 text-gray-300 px-2.5 py-1 rounded-md border border-white/5">
              Real-time
            </span>
          </div>

          <div className="space-y-4 relative z-10">
            {recentTasks.map((task, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 cursor-pointer group/task"
              >
                <div className="mt-0.5">
                  {task.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 shadow-sm" />
                  ) : (
                    <Clock className="w-5 h-5 text-blue-500 animate-[spin_3s_linear_infinite]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate group-hover/task:text-white transition-colors">
                    {task.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex justify-between">
                    <span className="uppercase tracking-wider font-mono">
                      {task.type}
                    </span>
                    <span className="text-gray-500">{task.time}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="relative z-10 w-full mt-6 py-3 rounded-xl border border-white/10 text-gray-300 bg-white/5 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all font-medium text-sm shadow-sm active:scale-[0.98]">
            View All Activity
          </button>
        </motion.div>
      </div>
    </div>
  );
}
