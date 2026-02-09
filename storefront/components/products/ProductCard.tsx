import Link from 'next/link';
import { Product } from '@/lib/api';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    // Generate a wine-colored placeholder image based on product name
    const placeholderGradient = `bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30`;

    return (
        <Link
            href={`/products/${product._id}`}
            className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700 dark:hover:shadow-emerald-950/30"
        >
            {/* Product Image */}
            <div className={`relative aspect-[4/5] overflow-hidden ${placeholderGradient}`}>
                {product.digitalAssets?.primaryImage ? (
                    <img
                        src={product.digitalAssets.primaryImage}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-6">
                        <svg className="h-16 w-16 text-emerald-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="mt-4 text-center text-sm font-medium text-emerald-600/80 dark:text-emerald-400/80">
                            {product.name}
                        </span>
                    </div>
                )}

                {/* Category Badge */}
                {product.category && (
                    <div className="absolute left-3 top-3">
                        <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur-sm dark:bg-zinc-900/90 dark:text-emerald-400">
                            {product.category}
                        </span>
                    </div>
                )}

                {/* Stock Badge */}
                {product.quantity !== undefined && (
                    <div className="absolute right-3 top-3">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${product.quantity > 0
                                ? 'bg-emerald-500/90 text-white'
                                : 'bg-red-500/90 text-white'
                            }`}>
                            {product.quantity > 0 ? `${product.quantity} in stock` : 'Out of stock'}
                        </span>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-5">
                {/* Brand/SubCategory */}
                {(product.brand || product.subCategory) && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {product.brand || product.subCategory}
                    </p>
                )}

                {/* Name */}
                <h3 className="mt-1 line-clamp-2 text-lg font-semibold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                    {product.name}
                </h3>

                {/* Description */}
                {product.description && (
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
                        {product.description}
                    </p>
                )}

                {/* Price & SKU */}
                <div className="mt-4 flex items-end justify-between">
                    <div>
                        <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                            ${product.price?.toFixed(2) || '0.00'}
                        </p>
                        {product.sku && (
                            <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                                SKU: {product.sku}
                            </p>
                        )}
                    </div>

                    {/* View Button */}
                    <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/30 dark:text-emerald-400 dark:group-hover:bg-emerald-600">
                        View
                        <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
