export default function Footer() {
    return (
        <footer className="py-12 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2">
                    <span className="text-white font-bold">Ammar</span>
                    <span className="text-indigo-500 font-bold">.</span>
                </div>

                <p className="text-xs text-zinc-600 tracking-wide">
                    DESIGNED & ENGINEERED BY AMMAR © {new Date().getFullYear()}
                </p>

                <div className="flex gap-6 text-xs text-zinc-600 tracking-wide">
                    <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                    <a href="#" className="hover:text-white transition-colors">GITHUB</a>
                    <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                </div>

            </div>
        </footer>
    );
}
