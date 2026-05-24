"use client";
import { motion } from "framer-motion";
import {
  FileText,
  UploadCloud,
  Edit3,
  Eye,
  FileBadge2,
  Calendar,
} from "lucide-react";

export default function ResumePage() {
  const resumes = [
    {
      title: "Frontend_Heavy_v3.pdf",
      date: "May 20, 2026",
      score: 92,
      target: "Frontend Roles",
    },
    {
      title: "FullStack_General_v1.pdf",
      date: "May 15, 2026",
      score: 85,
      target: "General SWE",
    },
    {
      title: "Original_Resume.pdf",
      date: "May 1, 2026",
      score: 68,
      target: "Base",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] flex items-center gap-3">
          <FileText className="w-8 h-8 text-[var(--color-primary)] opacity-80" />
          Resume Ops
        </h1>
        <p className="text-[var(--color-muted)] mt-2">
          Manage base resumes and let AI generate tailored versions for
          applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-1 bg-[var(--color-primary)]/5 border-2 border-dashed border-[var(--color-primary)]/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[var(--color-primary)]/10 transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/20 flex flex-col items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)]">
            <UploadCloud className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <h3 className="text-lg font-bold mb-2">Upload Base Resume</h3>
          <p className="text-sm text-[var(--color-muted)] mb-6">
            Drop your PDF here or click to browse. Startfire will extract your
            history to Memory.
          </p>
          <button className="bg-[var(--color-primary)] text-[var(--color-primary-contrast)] px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md">
            Select File
          </button>
        </motion.div>

        {/* Existing Resumes */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-4"
        >
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <FileBadge2 className="w-5 h-5" /> Generated & Base Resumes
          </h3>

          <div className="space-y-3">
            {resumes.map((resume, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-[var(--color-bg)]/60 backdrop-blur-md border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)]/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center shadow-sm">
                    <FileText className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[var(--color-foreground)]">
                      {resume.title}
                    </h4>
                    <span className="text-xs text-[var(--color-muted)] flex items-center gap-1 font-mono mt-1">
                      <Calendar className="w-3 h-3" /> {resume.date} •{" "}
                      {resume.target}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <div className="text-sm font-bold text-green-400">
                      {resume.score}/100
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-muted)]">
                      ATS Score
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 rounded-lg border border-[var(--color-border)] hover:bg-white/10 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                      title="View PDF"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 rounded-lg border border-[var(--color-border)] hover:bg-white/10 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                      title="Edit in Studio"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
