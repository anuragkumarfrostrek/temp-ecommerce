import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            href={`/products/${product.productId}`}
            className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-700 dark:hover:shadow-indigo-950/30"
        >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                    src={product.digitalAssets.primaryImage}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Category Badge */}
                <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/70 dark:text-indigo-300">
                        {product.category}
                    </span>
                </div>
                {/* Variant Count Badge */}
                {product.variants.length > 0 && (
                    <div className="absolute right-3 top-3">
                        <span className="inline-flex items-center rounded-full bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            {product.variants.length} variant{product.variants.length > 1 ? 's' : ''}
                        </span>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Brand */}
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                    {product.brand}
                </p>

                {/* Name */}
                <h3 className="mt-1 line-clamp-2 text-base font-semibold text-zinc-900 transition-colors group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                    {product.name}
                </h3>

                {/* SKU */}
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    SKU: {product.sku}
                </p>

                {/* SubCategory */}
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {product.subCategory}
                </p>

                {/* Meta Info */}
                <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        {product.unitOfMeasure}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {product.specifications.countryOfOrigin}
                    </span>
                </div>
            </div>
        </Link>
    );
}
