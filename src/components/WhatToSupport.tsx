import bgFrame from "../assets/whattosupport/背景框.png";
import limitPerTx from "../assets/whattosupport/Frame 1000005987.png";
import riskControlBalance from "../assets/whattosupport/Frame 1000005991.png";
import walletAndAddress from "../assets/whattosupport/Frame 1000005992.png";
import callContract from "../assets/whattosupport/Frame 1000005993.png";

const panels = [
    {
        img: limitPerTx,
        title: "Support limit per transaction",
    },
    {
        img: riskControlBalance,
        title: "Support risk control balance",
    },
    {
        img: walletAndAddress,
        title: "Covering this wallet and any external address",
    },
    {
        img: callContract,
        title: "Call the contract in your own way",
        bullets: [
            "Support calling only selected contract parties",
            "Support contract parameter limitation",
        ],
    },
] as const;

export default function WhatToSupport() {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-4 font-['Onest']">
                    What We Support
                </h2>
                <p className="text-center text-slate-900/80 text-lg font-semibold font-['Onest'] leading-6">
                    Support various risk control measures for wallets
                </p>
            </div>

            <div
                className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-8 md:py-12 px-4 md:px-8"
                style={{ backgroundImage: `url(${bgFrame})` }}
            >
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {panels.map((panel) => {
                        const { img, title } = panel;
                        const bullets = "bullets" in panel ? panel.bullets : undefined;
                        return (
                            <div
                                key={title}
                                className="flex flex-col items-center md:items-stretch rounded-2xl p-6 md:p-8 bg-white/80 md:bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-full flex justify-center mb-4">
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full max-w-[340px] md:max-w-[400px] h-auto object-contain"
                                    />
                                </div>
                                <div className="w-full text-center md:text-left">
                                    <div className="text-slate-900 text-xl font-semibold font-['Inter'] mb-2">
                                        {title}
                                    </div>
                                    {bullets && (
                                        <ul className="space-y-1.5 list-none pl-0 mt-1">
                                            {bullets.map((b: string) => (
                                                <li key={b}>
                                                    <div className="text-slate-900/60 text-sm font-normal font-['Onest']">
                                                        {b}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center mt-16">
                    <a
                        href="/features"
                        className="w-44 h-12 bg-slate-900 rounded-xl inline-flex justify-center items-center gap-2 hover:bg-slate-800 transition-colors"
                    >
                        <span className="text-white text-base font-medium font-['Onest']">Read More</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
