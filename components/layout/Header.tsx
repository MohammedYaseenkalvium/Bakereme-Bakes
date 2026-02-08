'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-brown-500 bg-white/70 backdrop-blur">
            <div className="mx-auto flex h-16 items-center justify-between px-4">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Bakreme Bakes"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="text-lg font-semibold text-amber-800">Bakreme Bakes</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-800">
                    <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
                    <Link href="/menu" className="hover:text-amber-600 transition-colors">Menu</Link>
                    <Link href="/about" className="hover:text-amber-600 transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-amber-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-brown-500 bg-white/70 backdrop-blur">
                    <div className="flex flex-col gap-4 p-4">
                        <Link
                            href="/"
                            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/menu"
                            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Menu
                        </Link>
                        <Link
                            href="/about"
                            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}