import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-brown-500 bg-white/70 backdrop-blur">
            <div className="mx-auto flex h-16 items-center justify-between px-4">
                <div>
                    {/* {logo} */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Bakreme Bakes"
                            className="h-8 w-8"
                        />
                        <span className="text-lg font-semibold text-amber-800">Bakreme Bakes</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-amber-800">
                    {/* {nav links} */}
                    <Link href="/">Home</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                
            </div>
        </header>
    );
}