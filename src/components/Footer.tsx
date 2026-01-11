export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 border-t border-[var(--border-color)]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <a href="#home" className="text-lg font-bold gradient-text">
                    Ammar
                </a>

                {/* Copyright */}
                <p className="text-sm text-[var(--text-muted)]">
                    © {currentYear} Ammar. Built with Next.js & 💜
                </p>

                {/* Quick Links */}
                <div className="flex items-center gap-6 text-sm">
                    <a href="#about" className="nav-link">
                        About
                    </a>
                    <a href="#projects" className="nav-link">
                        Projects
                    </a>
                    <a href="#contact" className="nav-link">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
