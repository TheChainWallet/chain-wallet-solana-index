import logoIcon from "./assets/logo.svg";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const menuItems = [
        { url: "https://docs.chainwallet.me", description: "Docs" },
        { url: "/about", description: "About" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-glass">
            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
                <a className="flex items-center gap-3" href="/">
                    <img src={logoIcon} alt="Chain Wallet logo" className="w-8 h-8" />
                    <span className="text-xl font-semibold text-white">
                        Chain Wallet
                    </span>
                </a>

                <nav className="flex items-center gap-10">
                    {menuItems.map((item) => (
                        <a
                            key={item.description}
                            className="text-[hsl(var(--muted-foreground))] hover:text-white text-sm font-medium transition-colors"
                            href={item.url}
                        >
                            {item.description}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-white text-sm font-medium transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        EN
                    </button>
                    <a
                        className="px-6 py-2.5 bg-[hsl(var(--primary))] hover:bg-[hsl(168_84%_35%)] text-white text-sm font-medium rounded-lg transition-all glow-primary"
                        href="https://dash.chainwallet.me"
                    >
                        Launch App
                    </a>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-4 py-4">
                <a className="flex items-center gap-2" href="/">
                    <img src={logoIcon} alt="Chain Wallet logo" className="w-7 h-7" />
                    <span className="text-lg font-semibold text-white">Chain Wallet</span>
                </a>
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="p-2 text-white"
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {open && (
                <div
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-72 bg-[hsl(var(--card))] shadow-2xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-[hsl(var(--border))]">
                    <span className="text-lg font-semibold text-white">Menu</span>
                    <button
                        className="p-2 text-[hsl(var(--muted-foreground))] hover:text-white"
                        onClick={() => setOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col p-6 gap-6">
                    {menuItems.map((item) => (
                        <a
                            key={item.description}
                            href={item.url}
                            className="text-[hsl(var(--muted-foreground))] hover:text-white text-base font-medium transition-colors"
                        >
                            {item.description}
                        </a>
                    ))}
                    <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        EN
                    </div>
                    <a
                        className="mt-4 w-full py-3 bg-[hsl(var(--primary))] hover:bg-[hsl(168_84%_35%)] text-white text-sm font-medium rounded-lg text-center transition-all"
                        href="https://dash.chainwallet.me"
                    >
                        Launch App
                    </a>
                </nav>
            </div>
        </header>
    );
}
