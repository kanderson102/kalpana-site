import Link from "next/link";
import { Container } from "@/components/ui/layout-components";

export function Footer() {
    return (
        <footer className="border-t border-black bg-white text-black py-12">
            <Container>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <Link href="/" className="font-sans text-xl font-extrabold tracking-tight text-black uppercase hover:opacity-80 transition-opacity">
                            Kalpana <span className="font-serif italic font-normal lowercase tracking-normal">media</span>
                        </Link>
                        <p className="text-xs text-neutral-500 mt-2 font-medium">
                            Independent creators. Honest work. Durable results.
                        </p>
                    </div>

                    <nav className="flex items-center gap-8">
                        <Link href="#services" className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors">
                            Services
                        </Link>
                        <Link href="#projects" className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors">
                            Work
                        </Link>
                        <Link href="#about" className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors">
                            About
                        </Link>
                        <Link href="#contact" className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black transition-colors">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center gap-5 text-neutral-500">
                        <a href="https://www.linkedin.com/company/kalpana-media/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-xs font-bold uppercase tracking-wider">
                            LinkedIn
                        </a>
                        <a href="https://github.com/kanderson102/kalpana-site" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-xs font-bold uppercase tracking-wider">
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} Kalpana Media. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-black transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-black transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
