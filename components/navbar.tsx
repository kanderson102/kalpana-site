"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout-components";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "The Library", href: "/library" },
    { name: "Collaborations", href: "/collaborations" },
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
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    {/* Logo Placeholder */}
                    <span className="font-serif text-xl font-bold tracking-tight text-steel-blue">
                        Kalpana Media
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium transition-colors hover:text-candy-pink"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild variant="default" size="sm" className="bg-candy-pink hover:bg-candy-pink/90 text-white transition-all duration-300 hover:scale-105">
                        <Link href="/#contact">Work with us</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        className="p-2 text-foreground"
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
                                className="absolute top-16 right-4 w-48 p-4 bg-background border rounded-lg shadow-lg flex flex-col gap-4 z-50"
                            >
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm font-medium transition-colors hover:text-candy-pink"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button asChild variant="default" className="w-full text-center bg-candy-pink hover:bg-candy-pink/90 text-white transition-all duration-300 hover:scale-105">
                                    <Link href="/#contact" onClick={() => setIsOpen(false)}>
                                        Work with us
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
