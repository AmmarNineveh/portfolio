import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-[#E5E5E0]">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-3">
                    <Image
                        src="/logo-light.png"
                        alt="Nineveh AI"
                        width={24}
                        height={24}
                        className="rounded-sm opacity-70"
                    />
                    <span className="text-sm font-semibold text-[#4A5561]">Nineveh AI</span>
                </div>

                <p className="text-xs text-[#6B7280] tracking-wide">
                    © {new Date().getFullYear()} Nineveh AI. All rights reserved.
                </p>

                <div className="flex gap-6 text-xs text-[#6B7280] tracking-wide">
                    <a href="https://github.com/AmmarNineveh" target="_blank" rel="noopener noreferrer" className="hover:text-[#4A5561] transition-colors">GITHUB</a>
                    <a href="mailto:contact@nineveh.ai" className="hover:text-[#4A5561] transition-colors">EMAIL</a>
                </div>

            </div>
        </footer>
    );
}
