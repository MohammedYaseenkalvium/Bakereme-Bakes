'use client'

import { useState } from 'react';
import Hero from '@/components/hero/Hero';
import ProductGrid from '@/components/product/ProductGrid';
import CartPanel from '@/components/cart/CartPanel';
import { useCart } from '../features/cart/useCart';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useCart();

  return (
    <main>
      <Hero />

      <ProductGrid />

      {/* Temporary cart button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 rounded-full bg-amber-800 px-6 py-3 text-white shadow-lg"
      >
        Cart ({cart.items.length})
      </button>

      <CartPanel
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart.items}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
      />
    </main>
  );
}