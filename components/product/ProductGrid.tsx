import ProductCard from "./ProductCard";
import { products } from "../../features/products/product.data";
import { Product } from "../../features/products/product.data";
import { useCartUI } from "@/features/cart/CartProvider";

export default function ProductGrid() {
    const { cart, openCart } = useCartUI();

    const handleAddToCart = (product: Product) => {
        cart.addItem(product);
        openCart();
    };

    return (
        <section className="bg-amber-50/50 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-amber-900">
                    Our Menu
                </h2>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAdd={handleAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}