import Image from "next/image";
import { Product } from "../../features/products/product.data";

interface ProductCardProps {
    product: Product;
    onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
    return (
        <div className="rounded-2xl bg-white shadow-sm hover:shadow-md transition">
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-amber-900">
                    {product.name}
                </h3>
                <p className="mt-1 text-sm text-amber-700">
                    {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium text-amber-900">
                        ₹{product.price}
                    </span>
                    <button
                        onClick={() => onAdd(product)}
                        className="rounded-lg bg-amber-800 px-4 py-2 text-sm text-white hover:bg-amber-900 transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
