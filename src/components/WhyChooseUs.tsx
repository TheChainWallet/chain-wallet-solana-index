import frame from "../assets/whychooseus/框.png";
import illustration from "../assets/whychooseus/插画配图.png";
import icon1 from "../assets/whychooseus/1.png";
import icon2 from "../assets/whychooseus/2.png";

const features = [
    {
        icon: icon1,
        title: "Completely open source code",
    },
    {
        icon: icon2,
        title: "Very Cheap Transaction Fees",
    },
] as const;

export default function WhyChooseUs() {
    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-12 font-['Onest']">
                    Why Choose Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left: 2 feature cards */}
                    <div className="flex flex-col gap-4">
                        {features.map(({ icon, title }) => (
                            <div
                                key={title}
                                className="flex items-center gap-4 p-6 rounded-2xl bg-white border-2 border-blue-100 shadow-sm bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${frame})` }}
                            >
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                    <img
                                        src={icon}
                                        alt=""
                                        className="w-7 h-7 md:w-8 md:h-8 object-contain"
                                    />
                                </div>
                                <p className="text-slate-900 text-base md:text-lg font-semibold font-['Onest']">
                                    {title}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right: isometric illustration */}
                    <div className="flex justify-center md:justify-end items-center">
                        <img
                            src={illustration}
                            alt="Decentralized network and distributed architecture"
                            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
