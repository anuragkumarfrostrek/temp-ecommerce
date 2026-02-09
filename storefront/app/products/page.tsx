'use client';

import { useProducts } from '@/hooks/useProducts';
import { ProductGrid } from '@/components/products/ProductGrid';

export default function ProductsPage() {
    const { data, loading, error, refetch } = useProducts();

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            {/* Page Header */}
            <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                                Wine Collection
                            </h1>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                Explore our premium selection • Data loaded from live API
                            </p>
                        </div>
                        <div className="mt-4 flex gap-3 md:mt-0">
                            {/* Refresh Button */}
                            <button
                                onClick={refetch}
                                disabled={loading}
                                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30"
                            >
                                <svg
                                    className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                                Refresh
                            </button>

                            {/* Stats Badge */}
                            {data && (
                                <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-100 px-4 py-2.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {data.length} Products Found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <ProductGrid
                    products={data}
                    loading={loading}
                    error={error}
                    onRetry={refetch}
                />
            </div>

            {/* API Status Footer */}
            <div className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${loading ? 'animate-pulse bg-yellow-400' : error ? 'bg-red-400' : 'bg-emerald-400'}`} />
                            <span>
                                {loading ? 'Fetching from API...' : error ? 'API Error - Check if backend is running' : 'Connected to localhost:5000/api/products'}
                            </span>
                        </div>
                        <div className="font-mono text-emerald-600 dark:text-emerald-400">
                            GET /api/products
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
