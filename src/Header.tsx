import logoIcon from "./assets/logo.svg";
import languageIcon from "./assets/language.svg";
import logoMobileIcon from "./assets/logo-mobile.svg"
import menuIcon from "./assets/menu.svg";
import {useState} from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const menuItems = [
        {url:"/",description:"Docs"},
        {url:"/about",description:"About"},
    ];
    return <>
        <div className="hidden px-8 md:flex items-center justify-between py-4 w-full md:h">
            <div className={"flex"}>
                <a className={"flex items-center gap-1"} href={"/"}>
                    <img src={logoIcon} alt={"chain wallet logo"}/>
                    <div className="justify-start text-slate-900 text-xl font-medium font-['Onest']">
                        Chain Wallet
                    </div>
                </a>
            </div>
            <div className="inline-flex justify-start items-center gap-14">
                <a
                    className="text-center justify-center text-slate-900 text-base font-normal font-['Onest'] leading-6"
                    href={"https://docs.chainwallet.me"}>
                    Docs
                </a>
                <a
                    className="text-center justify-center text-slate-900 text-base font-normal font-['Onest'] leading-6"
                    href={"about"}>
                    About
                </a>
            </div>
            <div className="flex items-center justify-center gap-4">
                <div
                    className="w-24 h-12 bg-white rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-900/20 inline-flex justify-center items-center gap-2">
                    <div className="flex justify-start items-center gap-2">
                        <img src={languageIcon} alt={"language icon"}/>
                        <div className="justify-start text-slate-900 text-sm font-medium font-['Onest']">EN</div>
                    </div>
                    <div className="w-0 h-3.5 origin-top-left -rotate-90 bg-slate-900/60"/>
                </div>
                <a className="w-44 h-12 bg-blue-700 rounded-xl inline-flex justify-center items-center gap-2" href={"https://dash.chainwallet.me"}>
                    <div className="flex justify-start items-center gap-2">
                        <div className="justify-start text-white text-base font-medium font-['Onest']">Launch App
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="md:hidden flex items-center justify-between ju pt-8 px-4">
            <div className={"flex"}>
                <a className={"flex items-center gap-1"} href={"/"}>
                    <img src={logoMobileIcon} alt={"chain wallet logo"}/>
                </a>
            </div>
            <button onClick={()=>setOpen(prevState => !prevState)}>
                <img src={menuIcon} alt={"menu icon"}/>
            </button>
        </div>

        {open && (
            <div
                className="md:hidden fixed inset-0 bg-black/20 z-10"
                onClick={() => setOpen(false)}
            />
        )}

        <div
            className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-20 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
        >
            <button
                className="p-4 text-xl"
                onClick={() => setOpen(false)}
            >
                ✕
            </button>

            <nav className="flex flex-col gap-8 p-8">
                {menuItems.map((item) => (
                    <a key={item.description} href={item.url} className="hover:text-blue-500">
                        {item.description}
                    </a>
                ))}
                <div className="flex justify-start items-center gap-2">
                    <img src={languageIcon} alt={"language icon"}/>
                    <div className="justify-start text-slate-900 text-sm font-medium font-['Onest']">EN</div>
                </div>
                <a className="w-44 h-12 bg-blue-700 rounded-xl inline-flex justify-center items-center gap-2"
                   href={"https://dash.chainwallet.me"}>
                    <div className="flex justify-start items-center gap-2">
                        <div className="justify-start text-white text-base font-medium font-['Onest']">Launch App
                        </div>
                    </div>
                </a>
            </nav>
        </div>
    </>
}