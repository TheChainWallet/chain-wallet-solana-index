import Header from "./Header.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import SecurityPolicy from "./components/SecurityPolicy.tsx";
import WhatToSupport from "./components/WhatToSupport.tsx";
import WhyChooseUs from "./components/WhyChooseUs.tsx";
import WhyWeExist from "./components/WhyWeExist.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <div className="min-h-screen bg-[hsl(var(--background))]">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(9, 223, 248, 0.04) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(9, 223, 248, 0.04) 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px'
                        }}
                    />
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#09DFF8] opacity-10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#033FFF] opacity-10 blur-[150px] rounded-full" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass mb-8">
                        <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
                        <span className="text-sm text-[hsl(var(--muted-foreground))]">
                            Secured by Solana Blockchain
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Never Let Your Project
                        <br />
                        <span className="text-gradient">Use Private Keys</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-10">
                        Execute safely with one-chain wallets and risk control.
                        Protect your digital assets with enterprise-grade security.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            className="px-8 py-4 bg-gradient-brand hover:opacity-90 text-[hsl(var(--background))] text-base font-semibold rounded-xl transition-all glow-primary-strong"
                            href="https://dash.chainwallet.me"
                        >
                            Launch App
                        </a>
                        <a
                            className="px-8 py-4 bg-glass-strong hover:bg-[hsl(var(--secondary))] text-white text-base font-semibold rounded-xl transition-all border border-[rgba(9,223,248,0.2)]"
                            href="https://docs.chainwallet.me"
                        >
                            Read Docs
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { value: "$50M+", label: "Assets Protected" },
                            { value: "10K+", label: "Transactions" },
                            { value: "99.9%", label: "Uptime" },
                            { value: "24/7", label: "Monitoring" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[hsl(var(--muted-foreground))]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-xs text-[hsl(var(--muted-foreground))]">Scroll</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[hsl(var(--muted-foreground))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            <WhyWeExist />
            <HowItWorks />
            <WhatToSupport />
            <SecurityPolicy />
            <WhyChooseUs />
            <Footer />
        </div>
    );
}

export default App;
