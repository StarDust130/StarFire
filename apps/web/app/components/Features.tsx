import { Briefcase, Zap, Bot } from "lucide-react";

// Features grid — small, reusable section
export default function Features() {
  return (
    <div
      id="features"
      className="w-full bg-[var(--color-panel)] py-20 sm:py-32 px-4 sm:px-8 border-t border-[var(--color-border)] relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[var(--color-foreground)] font-[family-name:var(--font-playfair)] tracking-tight mb-4">
            What can Bhishma do?
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg max-w-2xl mx-auto font-medium">
            Delegate your digital chores. Bhishma connects to your workflows,
            understands your intent, and executes flawlessly on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)/20] flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-[#c58a15]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">
              Job Hunting, Automated
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm md:text-base">
              Tell Bhishma your ideal role. It will continuously scour job
              boards, match descriptions to your resume, and autonomously apply
              on your behalf.
            </p>
          </div>

          <div className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#4a7c59]/20 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#3c6648]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">
              Tireless Repetition
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm md:text-base">
              Data entry, form filling, scraping, or web driving. Define the
              sequence once, and Bhishma executes it flawlessly millions of
              times without fatigue.
            </p>
          </div>

          <div className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#4a6fa5]/20 flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-[#3a5884]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">
              Autonomous Execution
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm md:text-base">
              Not just a chatbot. Bhishma spins up headless browsers,
              authenticates, and navigates complex UI interfaces to get actual
              work done for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
