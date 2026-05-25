import Button from "./Button";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-16 sm:py-24 px-4 sm:px-8 relative z-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-4 block">
          Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[var(--color-foreground)] font-[family-name:var(--font-serif)] tracking-tight mb-6">
          Simple pricing that scales with you
        </h2>
        <p className="text-[var(--color-muted)] max-w-3xl mx-auto mb-10">
          Start for free and upgrade when you&apos;re ready — predictable
          pricing for teams and power users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-[var(--color-muted)] text-sm mb-4">
              Free for personal use
            </p>
            <div className="text-2xl font-bold mb-4">$0</div>
            <Button href="/sign-up" variant="ghost">
              Get started
            </Button>
          </div>

          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-[var(--color-muted)] text-sm mb-4">
              For power users
            </p>
            <div className="text-2xl font-bold mb-4">$19/mo</div>
            <Button href="/sign-up" variant="primary">
              Upgrade
            </Button>
          </div>

          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-2">Team</h3>
            <p className="text-[var(--color-muted)] text-sm mb-4">
              Collaboration at scale
            </p>
            <div className="text-2xl font-bold mb-4">Contact us</div>
            <Button href="/contact" variant="white" className="text-black">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
