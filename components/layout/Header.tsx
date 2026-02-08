'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-amber-200/30 bg-white/70 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Bakreme Bakes"
                            width={32}
                            height={32}
                            className="h-10 w-10"
                        />
                        <span className="text-xl font-semibold tracking-tight text-amber-800">Bakreme Bakes</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-900">
                    <Link href="/" className="transition-colors hover:text-orange-600">Home</Link>
                    <Link href="/menu" className="transition-colors hover:text-orange-600">Menu</Link>
                    <Link href="/about" className="transition-colors hover:text-orange-600">About</Link>
                    <Link href="/contact" className="transition-colors hover:text-orange-600">Contact</Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-amber-900"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-amber-200 bg-white/70 backdrop-blur">
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