import { useRef } from "react";
import textBox from "../assets/whyweexist/文字框.png";
import animatedGif from "../assets/whyweexist/动态.gif";
import leftSvg from "../assets/whyweexist/left.svg";
import rightSvg from "../assets/whyweexist/right.svg";

export default function WhyWeExist() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-12 font-['Onest']">
                    Why We Exist
                </h2>

                <div
                    ref={containerRef}
                    className="relative w-full min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
                    style={{ backgroundImage: `url(${animatedGif})` }}
                >
                    <div
                        className="absolute w-[810px] h-72 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-8 -rotate-3 mt-58 gap-2 z-10"
                        style={{ backgroundImage: `url(${textBox})` }}
                    >
                        <div className="rotate-3 text-center text-slate-900 text-lg md:text-xl font-['Onest'] flex items-start justify-center">
                            <img src={leftSvg} alt="left" className="w-8 h-8 mt-2 -mr-2" />
                            <h3 className="max-w-2xl text-center justify-center m-0"><span className="text-slate-900 text-3xl font-semibold font-['Onest'] leading-10">USD </span><span className="text-blue-700 text-3xl font-semibold font-['Onest'] leading-10">2.2 billion</span><span className="text-slate-900 text-3xl font-semibold font-['Onest'] leading-10"> was stolen in crypto-related hacks </span></h3>
                            <img src={rightSvg} alt="right" className="w-8 h-8 mt-2 -ml-2" />
                        </div>
                        <p className="rotate-3 text-center text-slate-900/60 text-base font-semibold font-['Onest'] leading-6 m-0">In 2024, USD 2.2 billion was stolen in hacks and exploits</p>
                        <p className="rotate-3 text-center text-slate-900/60 text-base font-semibold font-['Onest'] leading-6 m-0">Source: Chainalysis 2025 Crypto Crime Report</p>
                    </div>
                    <div
                        className="absolute w-[810px] h-72 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-8 rotate-1 mt-58 gap-2 z-20"
                        style={{ backgroundImage: `url(${textBox})` }}
                    >
                        <div className="text-center text-slate-900 text-lg md:text-xl font-['Onest'] flex items-start justify-center">
                            <img src={leftSvg} alt="left" className="w-8 h-8 mt-2 -mr-2" />
                            <h3 className="max-w-2xl text-center justify-center m-0"><span className="text-slate-900 text-3xl font-semibold font-['Onest'] leading-10">USD </span><span className="text-blue-700 text-3xl font-semibold font-['Onest'] leading-10">2.2 billion</span><span className="text-slate-900 text-3xl font-semibold font-['Onest'] leading-10"> was stolen in crypto-related hacks </span></h3>
                            <img src={rightSvg} alt="right" className="w-8 h-8 mt-2 -ml-2" />
                        </div>
                        <p className="text-center text-slate-900/60 text-base font-semibold font-['Onest'] leading-6 m-0">In 2024, USD 2.2 billion was stolen in hacks and exploits</p>
                        <p className="text-center text-slate-900/60 text-base font-semibold font-['Onest'] leading-6 m-0">Source: Chainalysis 2025 Crypto Crime Report</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
