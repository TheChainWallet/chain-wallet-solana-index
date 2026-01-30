import logoIcon from "../assets/logo.svg";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logoIcon} alt="Chain Wallet" className="w-8 h-8" />
                            <span className="text-xl font-bold font-['Onest']">Chain Wallet</span>
                        </div>
                        <p className="text-slate-400 font-['Onest']">
                            Secure multi-chain wallet for the decentralized future.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-['Onest']">Product</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-white font-['Onest']">Features</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white font-['Onest']">Security</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white font-['Onest']">Pricing</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-['Onest']">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="https://docs.chainwallet.me" className="text-slate-400 hover:text-white font-['Onest']">Docs</a></li>
                            <li><a href="/about" className="text-slate-400 hover:text-white font-['Onest']">About</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white font-['Onest']">Blog</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-['Onest']">Community</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-white font-['Onest']">Twitter</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white font-['Onest']">Discord</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white font-['Onest']">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 font-['Onest']">
                        © 2026 Chain Wallet. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-slate-400 hover:text-white font-['Onest']">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-white font-['Onest']">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
