import { Briefcase, Zap, Globe, Cpu, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Features() {
  return (
    <div
      id="features"
      className="w-full bg-transparent py-10 sm:py-20 px-4 sm:px-8 relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24 px-4 flex flex-col items-center">
          <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-foreground)] font-[family-name:var(--font-serif)] tracking-tight mb-6 text-balance">
            Delegate everything to Bhishma.
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-medium text-balance">
            Connect your workflows, clarify your intent, and let Bhishma execute flawlessly on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="card group relative overflow-hidden bg-white hover:bg-[var(--color-panel)] border border-[var(--color-border)] p-8 sm:p-10 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#f2a60c]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-7 h-7 text-[#c58a15]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4 font-[family-name:var(--font-serif)]">
              Job Hunting, Automated
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-base sm:text-lg mb-8">
              Tell Bhishma your ideal role. It will continuously scour job
              boards, match descriptions to your resume, and autonomously apply
              on your behalf.
            </p>
            <Button href="/dashboard" variant="ghost" className="px-0 hover:bg-transparent hover:text-[var(--color-accent)] !justify-start">
              Start applying <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="card group relative overflow-hidden bg-white hover:bg-[var(--color-panel)] border border-[var(--color-border)] p-8 sm:p-10 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#3e6d4c]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-[#3e6d4c]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-4 font-[family-name:var(--font-serif)]">
              Tireless Repetition
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-base sm:text-lg mb-8">
              Data entry, form filling, scraping, or web driving. Define the
              sequence once, and Bhishma executes it flawlessly millions of
              times without fatigue.
            </p>
            <Button href="/dashboard" variant="ghost" className="px-0 hover:bg-transparent hover:text-[#3e6d4c] !justify-start">
              Automate tasks <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="card group relative overflow-hidden bg-[var(--color-primary)] p-8 sm:p-10 transition-all duration-300 md:col-span-2 flex flex-col md:flex-row items-center md:items-start gap-8 justify-between">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-serif)]">
                Autonomous Execution Engine
              </h3>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg mb-8 max-w-2xl">
                Not just a chatbot. Bhishma spins up headless browsers,
                authenticates, and navigates complex UI interfaces to get actual
                work done for you across the entire web.
              </p>
              <Button href="/dashboard" variant="white">
                Launch an agent
              </Button>
            </div>
            
            {/* Visual decoration for the large card */}
            <div className="hidden md:flex w-64 h-64 relative border border-white/10 rounded-full items-center justify-center">
              <div className="w-48 h-48 border border-white/20 rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
              <div className="w-32 h-32 bg-white/5 rounded-full backdrop-blur-3xl flex items-center justify-center absolute z-10">
                <Globe className="w-10 h-10 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
