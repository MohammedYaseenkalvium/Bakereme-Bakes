'use client';

import { createContext, useContext, useState } from 'react';
import { useCart } from '@/features/cart/useCart';

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cart = useCart();
  const [open, setOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        open,
        openCart: () => setOpen(true),
        closeCart: () => setOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartUI() {
  return useContext(CartContext);
}
