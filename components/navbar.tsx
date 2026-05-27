"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout-components";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    // Close mobile menu when resizing to desktop
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-black bg-white/90 backdrop-blur-md">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-sans text-xl font-extrabold tracking-tight text-black uppercase">
                        Kalpana <span className="font-serif italic font-normal lowercase tracking-normal">media</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-wider text-neutral-600 transition-colors hover:text-black"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild variant="default" size="sm" className="bg-black hover:bg-neutral-800 text-white transition-all duration-300 hover:scale-105 rounded-lg px-6 font-bold uppercase tracking-wider text-[11px] h-9">
                        <Link href="#contact">Contact Us</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        className="p-2 text-neutral-600 hover:text-black"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute top-16 right-4 w-48 p-4 bg-white border border-black rounded-xl shadow-2xl flex flex-col gap-4 z-50"
                            >
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm font-bold uppercase tracking-wider text-neutral-600 transition-colors hover:text-black"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button asChild variant="default" className="w-full text-center bg-black hover:bg-neutral-800 text-white transition-all duration-300 hover:scale-105 rounded-lg font-bold uppercase tracking-wider text-xs">
                                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                                        Contact Us
                                    </Link>
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </header>
    );
}
