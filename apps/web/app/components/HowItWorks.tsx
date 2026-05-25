import { Zap, Settings, Repeat } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-16 sm:py-24 px-4 sm:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-4 block">
          How it works
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[var(--color-foreground)] font-[family-name:var(--font-serif)] tracking-tight mb-6">
          Tell StarFire once — it keeps working
        </h2>
        <p className="text-[var(--color-muted)] max-w-3xl mx-auto mb-10">
          Define a task, connect the accounts, and StarFire autonomously
          executes it on your behalf — continuously and reliably.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#f2a60c]/10 flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-6 h-6 text-[#c58a15]" />
            </div>
            <h3 className="font-semibold mb-2">Specify Intent</h3>
            <p className="text-[var(--color-muted)] text-sm">
              Describe the outcome you want — no technical setup required.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#3e6d4c]/10 flex items-center justify-center mb-4 mx-auto">
              <Settings className="w-6 h-6 text-[#3e6d4c]" />
            </div>
            <h3 className="font-semibold mb-2">Connect & Configure</h3>
            <p className="text-[var(--color-muted)] text-sm">
              Grant access to the tools StarFire needs and tweak behavior to
              taste.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#3d6091]/10 flex items-center justify-center mb-4 mx-auto">
              <Repeat className="w-6 h-6 text-[#3d6091]" />
            </div>
            <h3 className="font-semibold mb-2">Autonomous Execution</h3>
            <p className="text-[var(--color-muted)] text-sm">
              StarFire runs, monitors, and retries until the job completes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
