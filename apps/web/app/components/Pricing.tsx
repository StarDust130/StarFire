import { CheckCircle2 } from "lucide-react";
import Button from "./ui/Button";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-16 sm:py-24 px-4 sm:px-8 relative z-10"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
          Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-[family-name:var(--font-serif)] tracking-tight mb-6 text-balance">
          Unrestricted access. Zero cost.
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-12 text-balance">
          Starfire is currently in early access. For a limited time, get full
          access to all premium workflows, integrations, and autonomous agents
          entirely for free.
        </p>

        {/* The Single Massive Premium Card */}
        <div className="relative p-8 sm:p-12 md:p-16 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl overflow-hidden shadow-2xl text-left max-w-4xl mx-auto">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-yellow-500/10 blur-[100px] pointer-events-none" />

          <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10">
            {/* Left Side: Pricing & Pitch */}
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                Early Access Pass
              </h3>
              <div className="flex items-baseline gap-2 mb-4 mt-6">
                <span className="text-5xl sm:text-6xl font-black text-white">
                  $0
                </span>
                <span className="text-white/50 font-medium text-lg">
                  /forever
                </span>
              </div>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
                We are waiving all subscription fees while we scale our systems.
                Secure your lifetime free account before we introduce paid
                tiers.
              </p>

              {/* Desktop CTA */}
              <div className="hidden md:block">
                <Button
                  href="/sign-up"
                  variant="primary"
                  className="w-full sm:w-auto px-8 py-4 text-black bg-yellow-500 hover:bg-yellow-400 font-bold rounded-full transition-colors text-base shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                >
                  Claim Free Access Now
                </Button>
              </div>
            </div>

            {/* Right Side: Features */}
            <div className="flex-1 w-full flex flex-col justify-center gap-4 bg-black/20 p-6 sm:p-8 rounded-3xl border border-white/5">
              <h4 className="text-white font-semibold mb-2">
                Everything included:
              </h4>
              {[
                "Unlimited agent workflows",
                "Access to all neural models",
                "Priority processing queue",
                "Advanced data scraping",
                "API access & webhooks",
                "24/7 dedicated support",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-white/80 text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Mobile CTA (Shows at bottom on small screens) */}
            <div className="md:hidden mt-4">
              <Button
                href="/sign-up"
                variant="primary"
                className="w-full px-8 py-4 text-black bg-yellow-500 hover:bg-yellow-400 font-bold rounded-full transition-colors text-base shadow-[0_0_30px_rgba(234,179,8,0.3)] flex justify-center"
              >
                Claim Free Access Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
