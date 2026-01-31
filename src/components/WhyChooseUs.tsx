const benefits = [
    {
        title: "Open Source",
        description: "Fully transparent codebase that anyone can audit and verify for security",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
    {
        title: "Low Transaction Fees",
        description: "Minimal fees powered by Solana's efficient blockchain infrastructure",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        title: "Enterprise Ready",
        description: "Built for teams and organizations with advanced permission management",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock technical support and comprehensive documentation",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-[#09DFF8] to-[#033FFF] opacity-5 blur-[180px] rounded-full" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-glass text-sm text-[hsl(var(--primary))] font-medium mb-4">
                        Benefits
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
                        Industry-leading security combined with developer-friendly tools
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="bg-glass rounded-2xl p-8 hover:bg-glass-strong transition-all group"
                        >
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] shrink-0 group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-glass-strong rounded-2xl p-8 md:p-12 text-center glow-primary">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to secure your assets?
                    </h3>
                    <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-xl mx-auto">
                        Join thousands of projects protecting their digital assets with Chain Wallet
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://dash.chainwallet.me"
                            className="px-8 py-4 bg-gradient-brand hover:opacity-90 text-[hsl(var(--background))] font-semibold rounded-xl transition-all"
                        >
                            Get Started Free
                        </a>
                        <a
                            href="https://docs.chainwallet.me"
                            className="px-8 py-4 bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--muted))] text-white font-semibold rounded-xl transition-all"
                        >
                            View Documentation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
