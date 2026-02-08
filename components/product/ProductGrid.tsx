import ProductCard from "./ProductCard";
import { products } from "../../features/products/product.data";

export default function ProductGrid() {
    return (
        <section className="bg-amber-50/50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-8">Our Delicious Treats</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }

                </div>
            </div>
        </section>
    );
}