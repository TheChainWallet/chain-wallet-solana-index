import heroBg from "../assets/hero/头部背景.png";

export default function Hero() {
    return (
        <section 
            className="relative w-full min-h-[600px] md:min-h-[700px] bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="max-w-6xl mx-auto text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-['Onest']">
                    Secure Multi-Chain Wallet
                </h1>
                <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto font-['Onest']">
                    Manage your digital assets across multiple blockchains with enterprise-grade security
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a 
                        href="https://dash.chainwallet.me" 
                        className="px-8 py-4 bg-blue-700 text-white rounded-xl font-medium font-['Onest'] hover:bg-blue-800 transition-colors"
                    >
                        Get Started
                    </a>
                    <a 
                        href="https://docs.chainwallet.me" 
                        className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium font-['Onest'] border-2 border-slate-900/20 hover:border-slate-900/40 transition-colors"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
