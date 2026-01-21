import Link from "next/link";
import { Container } from "@/components/ui/layout-components";

export function Footer() {
    return (
        <footer className="border-t bg-purple-navy text-white">
            <Container className="py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <span className="font-serif text-lg font-bold text-white">
                            Kalpana Media
                        </span>
                        <p className="text-sm text-sea-foam-green/80 max-w-xs">
                            Digital marketing and website support for conscious small businesses.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-sea-foam-green">
                            Menu
                        </h4>
                        <nav className="flex flex-col space-y-2 text-sm text-white/80">
                            <Link href="/about" className="hover:text-candy-pink transition-colors">
                                About
                            </Link>
                            <Link href="/library" className="hover:text-candy-pink transition-colors">
                                The Library
                            </Link>
                            <Link href="/collaborations" className="hover:text-candy-pink transition-colors">
                                Collaborations
                            </Link>
                        </nav>
                    </div>

                    {/* Socials / Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-sea-foam-green">
                            Connect
                        </h4>
                        <p className="text-sm text-white/80">
                            Based in the Cloud.<br />
                            Serving Earth.
                        </p>
                        {/* Social icons placeholder */}
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/60">
                    &copy; {new Date().getFullYear()} Kalpana Media. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
