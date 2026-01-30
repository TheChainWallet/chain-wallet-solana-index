import chainBg from "../assets/security/chain-background.png";
import centerIllustration from "../assets/security/center-illustration.png";
import iconApproval from "../assets/security/icon-approval.png";
import iconDelay from "../assets/security/icon-delay.png";
import iconRefuse from "../assets/security/icon-refuse.png";
import iconLock from "../assets/security/icon-lock.png";

const SECURITY_POLICY_DESCRIPTION =
    "Advanced security measures protect your digital assets from unauthorized access and potential threats. Our multi-layered approach ensures maximum protection for your cryptocurrency transactions and wallet operations.";

const securityPolicies = [
    {
        num: "01",
        name: "Transaction Approval",
        description: "Require manual approval for all outgoing transactions to prevent unauthorized transfers",
        icon: iconApproval,
        textLeft: true,
    },
    {
        num: "02",
        name: "Time Delay",
        description: "Implement configurable delays before transaction execution for enhanced security review",
        icon: iconDelay,
        textLeft: false,
    },
    {
        num: "03",
        name: "Transaction Rejection",
        description: "Automatically refuse suspicious transactions based on predefined security rules",
        icon: iconRefuse,
        textLeft: true,
    },
    {
        num: "04",
        name: "Wallet Lock",
        description: "Instantly freeze wallet access when potential security threats are detected",
        icon: iconLock,
        textLeft: false,
    },
] as const;

function PolicyBlock({
    num,
    name,
    description,
    icon,
    textLeft,
}: {
    num: string;
    name: string;
    description: string;
    icon: string;
    textLeft: boolean;
}) {
    const meta = (
        <div
            className={`flex items-center gap-2 md:gap-4 shrink-0 ${
                textLeft ? "flex-row" : "flex-row-reverse"
            }`}
        >
            <span
                className="text-blue-200/90 text-5xl md:text-6xl lg:text-7xl font-semibold font-['Inter'] tabular-nums select-none"
                aria-hidden
            >
                {num}
            </span>
            <div
                className={`flex items-center gap-2 md:gap-3 ${
                    textLeft ? "flex-row" : "flex-row-reverse"
                }`}
            >
                <h3 className="text-slate-900 text-base md:text-lg font-semibold font-['Inter']">
                    {name}
                </h3>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <img src={icon} alt={`${name} security policy icon`} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>
            </div>
        </div>
    );
    return (
        <div
            className={`flex flex-col md:flex-row items-stretch gap-4 md:gap-6 ${
                textLeft ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            <p className="flex-1 min-w-0 text-slate-900/75 text-sm md:text-base font-normal font-['Onest'] leading-relaxed order-2 md:order-1">
                {description}
            </p>
            <div className="order-1 md:order-2">{meta}</div>
        </div>
    );
}

export default function SecurityPolicy() {
    return (
        <section className="py-16 md:py-24 relative bg-white overflow-hidden" aria-labelledby="security-policy-heading">
            {/* Faint chain links background */}
            <div
                className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: `url(${chainBg})` }}
                aria-hidden="true"
                role="presentation"
            />

            <header className="relative z-10 max-w-6xl mx-auto px-4 mb-12">
                <h2 id="security-policy-heading" className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-4 font-['Onest']">
                    Security Policy Framework
                </h2>
                <p className="text-center text-slate-900/80 text-lg font-semibold font-['Onest'] leading-6">
                    Choose the risk control strategy that best protects your digital assets
                </p>
            </header>

            <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">

                {/* Security policies grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-6" role="list" aria-label="Security policies">
                    <article role="listitem"><PolicyBlock {...securityPolicies[0]} /></article>
                    <article role="listitem"><PolicyBlock {...securityPolicies[1]} /></article>
                </div>

                {/* Security framework illustration */}
                <figure className="flex justify-center my-6 md:my-8">
                    <img
                        src={centerIllustration}
                        alt="Security policy framework illustration showing interconnected protection layers"
                        className="w-full max-w-[280px] md:max-w-[360px] lg:max-w-[420px] h-auto object-contain"
                    />
                </figure>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-8 md:mt-6" role="list" aria-label="Additional security policies">
                    <article role="listitem"><PolicyBlock {...securityPolicies[2]} /></article>
                    <article role="listitem"><PolicyBlock {...securityPolicies[3]} /></article>
                </div>
            </div>
        </section>
    );
}
