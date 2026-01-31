import Header from "./Header.tsx";
import upBackground from "./assets/hero/hero-background.png";
import HowItWorks from "./components/HowItWorks.tsx";
import SecurityPolicy from "./components/SecurityPolicy.tsx";
import WhatToSupport from "./components/WhatToSupport.tsx";
import WhyChooseUs from "./components/WhyChooseUs.tsx";
import WhyWeExist from "./components/WhyWeExist.tsx";

function App() {

    return (
        <>
            <Header />
            <section>
                <div
                    className="w-full h-screen bg-contain bg-top bg-no-repeat flex flex-col items-center justify-center pb-48 px-4"
                    style={{ backgroundImage: `url(${upBackground})` }}
                >
                    <h2 className="w-full max-w-5xl text-center text-slate-900 text-7xl font-semibold font-['Onest'] leading-[75px] mb-6">Never Let Your Project Use Private Keys</h2>
                    <p className="max-w-2xl text-center text-slate-900 text-lg font-bold font-['Onest'] leading-6 mb-8">Execute safely with one-chain wallets and risk control</p>
                    <div className="flex gap-4 max-w-2xl w-full justify-center">
                        <a className="w-44 h-12 bg-blue-700 rounded-xl inline-flex justify-center items-center text-white text-base font-medium font-['Onest']">
                            Launch App
                        </a>
                        <a className="w-44 h-12 bg-white rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-blue-700/40 inline-flex justify-center items-center text-blue-700 text-base font-medium font-['Onest']">
                            Read Docs
                        </a>
                    </div>
                </div>
            </section>
            <WhyWeExist/>
            <HowItWorks/>
            <WhatToSupport/>
            <SecurityPolicy/>
            <WhyChooseUs/>
        </>
    )
}

export default App
