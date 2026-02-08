import Image from "next/image";
import { Product } from "../../features/products/product.data";

export default function ProductCard({ product }: { product: Product }) {
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
                <p className="mt-3 font-medium text-amber-900">
                    AED {product.price}
                </p>
            </div>
        </div>
    );
}
