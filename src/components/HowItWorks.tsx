const steps = [
    {
        num: "01",
        title: "Create Wallet",
        description: "Generate a secure one-chain wallet with built-in risk controls and multi-sig support",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Set Policies",
        description: "Configure transaction limits, whitelist addresses, and approval workflows",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Execute Safely",
        description: "Transactions are verified against your security rules before execution",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Monitor & Audit",
        description: "Real-time monitoring with comprehensive audit trails for all activities",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 md:py-32 px-6 bg-[hsl(var(--card))]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-glass text-sm text-[hsl(var(--primary))] font-medium mb-4">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
                        Get started in minutes with our streamlined setup process
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={step.num}
                            className="relative bg-glass rounded-2xl p-6 hover:bg-glass-strong transition-all group"
                        >
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[hsl(var(--border))]" />
                            )}

                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <span className="text-4xl font-bold text-[hsl(var(--border))] group-hover:text-[hsl(var(--primary))]/30 transition-colors">
                                    {step.num}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://docs.chainwallet.me"
                        className="inline-flex items-center gap-2 text-[#09DFF8] hover:text-white font-medium transition-colors"
                    >
                        Learn more in our documentation
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
