"use client";
import { motion } from "framer-motion";
import {
  KeyRound,
  Smartphone,
  Cpu,
  Save,
  Settings as SettingsIcon,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-[var(--color-primary)] opacity-80" />
          System Configuration
        </h1>
        <p className="text-[var(--color-muted)] mt-2">
          Adjust agent behavior, models, and external integrations.
        </p>
      </div>

      <div className="space-y-6">
        {/* Model Selection */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--color-bg)]/40 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6"
        >
          <div className="flex flex-col gap-1 mb-6 border-b border-[var(--color-border)] pb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-[var(--color-foreground)]">
              <Cpu className="w-5 h-5 text-[var(--color-primary)]" /> Engine
              Settings
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              Select the LLM driving the core autonomous logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-xl p-4 cursor-pointer relative">
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]" />
              <h3 className="font-bold">GPT-4o (Default)</h3>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Best balance of reasoning and speed. Optimized for parsing &
                drafting.
              </p>
            </div>
            <div className="border border-[var(--color-border)] hover:border-white/20 bg-black/20 rounded-xl p-4 cursor-pointer transition-colors">
              <h3 className="font-bold text-white/80">Claude 3.5 Sonnet</h3>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Excellent for nuanced formatting and natural language tasks.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Telegram Integration */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--color-bg)]/40 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6"
        >
          <div className="flex flex-col gap-1 mb-6 border-b border-[var(--color-border)] pb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-[var(--color-foreground)]">
              <Smartphone className="w-5 h-5 text-blue-400" /> Telegram
              Integration
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              Connect Startfire to your Telegram for on-the-go commands and
              alerts.
            </p>
          </div>

          <div className="flex items-center justify-between p-4 bg-black/30 border border-white/5 rounded-xl">
            <div>
              <p className="font-medium">
                Status: <span className="text-green-400">Connected</span>
              </p>
              <p className="text-xs text-[var(--color-muted)] font-mono mt-1">
                ID: @username123 • Active since 2 days ago
              </p>
            </div>
            <button className="px-4 py-2 bg-white/5 border border-[var(--color-border)] rounded-lg text-sm hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 transition-all font-medium">
              Disconnect
            </button>
          </div>
        </motion.section>

        {/* API Keys */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--color-bg)]/40 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6"
        >
          <div className="flex flex-col gap-1 mb-6 border-b border-[var(--color-border)] pb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-[var(--color-foreground)]">
              <KeyRound className="w-5 h-5 text-yellow-500" /> API Keys &
              Secrets
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              Securely manage keys used for external platform integrations.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1.5">
                OpenAI API Key (Bring Your Own Key)
              </label>
              <input
                type="password"
                value="sk-proj-***********************************"
                readOnly
                className="w-full bg-black/40 border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm font-mono text-[var(--color-muted)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1.5">
                LinkedIn Session Cookie (For auto-apply)
              </label>
              <input
                type="password"
                placeholder="Enter li_at cookie value"
                className="w-full bg-transparent border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm font-mono focus:border-[var(--color-primary)]/50 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </motion.section>

        {/* Save Bar */}
        <div className="flex justify-end pt-4">
          <button className="flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-primary-contrast)] px-6 py-2.5 rounded-lg font-medium shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.3)] hover:opacity-90 transition-opacity button-glow">
            <Save className="w-4 h-4" /> Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
