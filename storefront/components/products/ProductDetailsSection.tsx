import { Product } from '@/types/product';

interface ProductDetailsSectionProps {
    product: Product;
}

export function ProductDetailsSection({ product }: ProductDetailsSectionProps) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                {/* Brand */}
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                    {product.brand}
                </p>

                {/* Name */}
                <h1 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                    {product.name}
                </h1>

                {/* Category Breadcrumb */}
                <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="rounded bg-zinc-100 px-2 py-0.5 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {product.category}
                    </span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="rounded bg-zinc-100 px-2 py-0.5 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {product.subCategory}
                    </span>
                </div>
            </div>

            {/* Core Identity Fields */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    Product Identity
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Product ID */}
                    <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Product ID</p>
                        <p className="mt-1 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">{product.productId}</p>
                    </div>

                    {/* SKU */}
                    <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">SKU</p>
                        <p className="mt-1 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">{product.sku}</p>
                    </div>

                    {/* Unit of Measure */}
                    <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Unit of Measure</p>
                        <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{product.unitOfMeasure}</p>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <h4 className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Description</h4>
                    <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{product.description}</p>
                </div>

                {/* Intended Use */}
                <div className="mt-6">
                    <h4 className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Intended Use</h4>
                    <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950/30">
                        <p className="text-sm text-indigo-800 dark:text-indigo-200">{product.intendedUse}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
