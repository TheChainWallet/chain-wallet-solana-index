export default function WhyWeExist() {
    return (
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(var(--primary))] opacity-5 blur-[150px] rounded-full" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-glass text-sm text-[hsl(var(--primary))] font-medium mb-4">
                        The Problem
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Why We Exist
                    </h2>
                    <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
                        The crypto industry faces a critical security challenge
                    </p>
                </div>

                <div className="relative">
                    {/* Main Card */}
                    <div className="bg-glass-strong rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto glow-primary">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            <span className="text-white">USD </span>
                            <span className="text-gradient">2.2 billion</span>
                            <span className="text-white"> was stolen</span>
                        </h3>
                        <p className="text-lg text-white/80 mb-6">
                            in crypto-related hacks and exploits in 2024
                        </p>

                        <div className="flex items-center justify-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Source: Chainalysis 2025 Crypto Crime Report
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[hsl(var(--border))] opacity-50" />
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-[hsl(var(--border))] opacity-30" />
                </div>

                {/* Problem Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    {[
                        {
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                            ),
                            title: "Private Key Exposure",
                            description: "Centralized storage of private keys creates single points of failure"
                        },
                        {
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            ),
                            title: "Unauthorized Access",
                            description: "Lack of proper access controls leads to unauthorized transactions"
                        },
                        {
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            ),
                            title: "No Risk Controls",
                            description: "Missing safeguards allow malicious transactions to execute"
                        }
                    ].map((item) => (
                        <div key={item.title} className="bg-glass rounded-xl p-6 hover:bg-glass-strong transition-all group">
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-[hsl(var(--muted-foreground))] text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
