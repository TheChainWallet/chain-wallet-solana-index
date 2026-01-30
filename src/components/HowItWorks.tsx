import processImage from "../assets/howitworks/process.png";
import processMobile from "../assets/howitworks/process_mobile.png";

export default function HowItWorks() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-12 font-['Onest']">
                    How It Works
                </h2>
            </div>

            <div className="w-full">
                <img
                    src={processImage}
                    alt="How Chain Wallet Works: Complete step-by-step process flow showing wallet creation, risk assessment, smart approval verification, and secure transaction execution across multiple blockchain networks"
                    className="hidden md:block w-full"
                />
                <img
                    src={processMobile}
                    alt="How Chain Wallet Works: Complete step-by-step process flow showing wallet creation, risk assessment, smart approval verification, and secure transaction execution across multiple blockchain networks"
                    className="block md:hidden w-full"
                />
            </div>
        </section>
    );
}
