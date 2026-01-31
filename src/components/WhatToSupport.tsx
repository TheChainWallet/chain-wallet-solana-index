const features = [
    {
        title: "Transaction Limits",
        description: "Set maximum amounts per transaction to prevent large unauthorized transfers",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Balance Risk Control",
        description: "Monitor and control wallet balance thresholds to maintain optimal security",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
    {
        title: "Address Whitelisting",
        description: "Restrict transactions to pre-approved addresses for enhanced security",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Smart Contract Control",
        description: "Define which contracts can be called and customize parameter limitations",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        highlights: [
            "Support calling only selected contracts",
            "Contract parameter limitations"
        ]
    },
];

export default function WhatToSupport() {
    return (
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#09DFF8] opacity-5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#033FFF] opacity-5 blur-[150px] rounded-full" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-glass text-sm text-[hsl(var(--primary))] font-medium mb-4">
                        Features
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        What We Support
                    </h2>
                    <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
                        Comprehensive risk control measures to protect your digital assets
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-glass rounded-2xl p-8 hover:bg-glass-strong transition-all group"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] shrink-0 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                                        {feature.description}
                                    </p>
                                    {feature.highlights && (
                                        <ul className="space-y-2">
                                            {feature.highlights.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/features"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--muted))] text-white font-medium rounded-xl transition-all"
                    >
                        Explore All Features
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
