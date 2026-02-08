'use client';

import { useState } from 'react';
import Hero from '@/components/hero/Hero';
import ProductGrid from '@/components/product/ProductGrid';
import CartPanel from '@/components/cart/CartPanel';
import { useCart } from '@/features/cart/useCart';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useCart();

  const handleAddToCart = (product: any) => {
    cart.addItem(product);
    setCartOpen(true);
  };

  return (
    <main>
      <Hero />

      <ProductGrid onAddToCart={handleAddToCart} />

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
