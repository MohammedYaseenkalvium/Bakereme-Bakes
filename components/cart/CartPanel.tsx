'use client';
import { CartItem } from "../../features/cart/cart.types";
interface CartPanelProps {
    open: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
    onClearCart: () => void;
}

export default function CartPanel({ open, onClose, items, onUpdateQuantity, onRemove, onClearCart }: CartPanelProps) {
    if (!open) return null;
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handlePlaceOrder = () => {
    const message = items
        .map(
            item =>
                `${item.name} x ${item.quantity} = AED ${item.price * item.quantity}`
        )
        .join('%0A');

    const totalLine = `%0A%0ATotal: AED ${total}`;
    const whatsappMessage =
        `Hello! I would like to place an order:%0A%0A${message}${totalLine}`;

    const phoneNumber = '+917736762310'; // replace with real number

    window.open(
        `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
        '_blank'
    );

    onClearCart();   // clear cart
    onClose();   // close panel
};

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* bottom sheet */}
            <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl bg-white p-4 shadow-lg">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-amber-900">
                            Your Order
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-sm text-amber-700"
                        >
                            Close
                        </button>
                    </div>

                    {items.length === 0 ? (
                        <p className="mt-6 text-amber-700">
                            Your cart is empty.
                        </p>
                    ) : (
                        <>
                            <ul className="mt-4 space-y-4">
                                {items.map(item => (
                                    <li
                                        key={item.id}
                                        className="flex items-center justify-between"
                                    >
                                        <div>
                                            <p className="font-medium text-amber-900">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-amber-700">
                                                AED{item.price} × {item.quantity}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 rounded-lg bg-amber-50 px-2 py-1">
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 rounded-md hover:bg-amber-100 text-amber-900 transition flex items-center justify-center font-bold"
                                                >
                                                    -
                                                </button>
                                                <span className="w-4 text-center text-amber-900 font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 rounded-md hover:bg-amber-100 text-amber-900 transition flex items-center justify-center font-bold"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => onRemove(item.id)}
                                                className="text-sm text-red-600 hover:text-red-700 font-medium"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 border-t pt-4">
                                <div className="flex items-center justify-between font-medium text-amber-900">
                                    <span>Total</span>
                                    <span>₹{total}</span>
                                </div>

                                <button
    onClick={handlePlaceOrder}
    className="mt-4 w-full rounded-xl bg-amber-800 py-3 text-white hover:bg-amber-900 transition-colors"
>
    Place Order (WhatsApp)
</button>
                            </div>
                        </>
                    )}
                </div>
            </div>


        </>
    );
}