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
                    <a href="https://github.com/AmmarNineveh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
                    <a href="mailto:contact@ammar.dev" className="hover:text-white transition-colors">EMAIL</a>
                    <span className="cursor-not-allowed opacity-50">TWITTER</span>
                </div>

            </div>
        </footer>
    );
}
