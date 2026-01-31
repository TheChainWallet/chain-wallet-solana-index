const policies = [
    {
        num: "01",
        title: "Transaction Approval",
        description: "Require manual approval for all outgoing transactions to prevent unauthorized transfers",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Time Delay",
        description: "Implement configurable delays before transaction execution for enhanced security review",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Transaction Rejection",
        description: "Automatically refuse suspicious transactions based on predefined security rules",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Wallet Lock",
        description: "Instantly freeze wallet access when potential security threats are detected",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
];

export default function SecurityPolicy() {
    return (
        <section className="py-24 md:py-32 px-6 bg-[hsl(var(--card))]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-glass text-sm text-[hsl(var(--primary))] font-medium mb-4">
                        Security
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Security Policy Framework
                    </h2>
                    <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
                        Choose the risk control strategy that best protects your digital assets
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {policies.map((policy) => (
                        <div
                            key={policy.num}
                            className="bg-glass rounded-2xl p-6 md:p-8 hover:bg-glass-strong transition-all group"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex flex-col items-center gap-3">
                                    <span className="text-5xl font-bold text-[hsl(var(--primary))]/20 group-hover:text-[hsl(var(--primary))]/40 transition-colors">
                                        {policy.num}
                                    </span>
                                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))]">
                                        {policy.icon}
                                    </div>
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {policy.title}
                                    </h3>
                                    <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                                        {policy.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Security Shield Visual */}
                <div className="mt-16 flex justify-center">
                    <div className="relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center glow-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-20 md:h-20 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
