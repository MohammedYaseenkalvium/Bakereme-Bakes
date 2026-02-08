'use client';

import CartPanel from './CartPanel';
import { useCartUI } from '@/features/cart/CartProvider';

export default function GlobalCart() {
    const { cart, open, closeCart } = useCartUI();

    return (
        <CartPanel
            open={open}
            onClose={closeCart}
            items={cart.items}
            onUpdateQuantity={cart.updateQuantity}
            onRemove={cart.removeItem}
            onClearCart={cart.clearCart}
        />
    );
}
