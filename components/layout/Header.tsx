'use client';

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCartUI } from "@/features/cart/CartProvider";

export default function Header() {
  const { cart, openCart } = useCartUI();

  return (
    <header className="bg-[#FFF6E5] border-b border-black/5">
      <div className="mx-auto max-w-7xl h-16 flex items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Bakreme Bakes"
            height={100}
            width={100}
            className="h-24 w-24"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-sm font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Cart */}
        <button
          onClick={openCart}
          className="relative p-2"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} />
          {cart.items.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
              {cart.items.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
