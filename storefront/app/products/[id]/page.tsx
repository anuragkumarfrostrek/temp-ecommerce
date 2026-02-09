'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { useProduct } from '@/hooks/useProduct';
import { useCart } from '@/context/CartContext';
import { LoadingState } from '@/components/ui/LoadingState';
import { ErrorState } from '@/components/ui/ErrorState';
import { ImageGallery } from '@/components/products/ImageGallery';
import { SpecificationTable } from '@/components/products/SpecificationTable';
import { PackagingInfo } from '@/components/products/PackagingInfo';
import { AdditionalInfo } from '@/components/products/AdditionalInfo';
import { VariantSelector } from '@/components/products/VariantSelector';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const resolvedParams = use(params);
    const { data: product, loading, error, refetch } = useProduct(resolvedParams.id);
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (product) {
            addItem(product, quantity);
        }
    };

    // Loading State
    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <LoadingState type="detail" />
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Products
                        </Link>
                    </div>
                    <ErrorState
                        title="Product not found"
                        message={error.message || 'Could not load product. Make sure the backend is running.'}
                        onRetry={refetch}
                    />
                </div>
            </div>
        );
    }

    // No Product
    if (!product) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <ErrorState
                        title="Product not available"
                        message="The requested product could not be loaded."
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            {/* Breadcrumb */}
            <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400">
                            Home
                        </Link>
                        <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <Link href="/products" className="text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400">
                            Products
                        </Link>
                        <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Top Section: Image + Product Info */}
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Image Gallery */}
                    <div>
                        {product.digitalAssets ? (
                            <ImageGallery assets={product.digitalAssets} productName={product.name} />
                        ) : (
                            <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30">
                                <div className="text-center">
                                    <svg className="mx-auto h-24 w-24 text-emerald-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="mt-4 text-lg font-medium text-emerald-600/80 dark:text-emerald-400/80">
                                        No images available
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        {/* Category & Brand */}
                        <div className="flex flex-wrap gap-2">
                            {product.category && (
                                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                                    {product.category}
                                </span>
                            )}
                            {product.brand && (
                                <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                                    {product.brand}
                                </span>
                            )}
                        </div>

                        {/* Name */}
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 lg:text-4xl">
                            {product.name}
                        </h1>

                        {/* Description */}
                        {product.description && (
                            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {product.description}
                            </p>
                        )}

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                                ${product.price?.toFixed(2) || '0.00'}
                            </span>
                            {product.quantity !== undefined && (
                                <span className={`text-sm font-medium ${product.quantity > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                                    {product.quantity > 0 ? `${product.quantity} in stock` : 'Out of stock'}
                                </span>
                            )}
                        </div>

                        {/* Product Identity Info */}
                        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                </svg>
                                Product Identity
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                                    <p className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">Product ID</p>
                                    <p className="mt-1 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">{product._id}</p>
                                </div>
                                {product.sku && (
                                    <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                                        <p className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">SKU</p>
                                        <p className="mt-1 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">{product.sku}</p>
                                    </div>
                                )}
                                {product.unitOfMeasure && (
                                    <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                                        <p className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">Unit</p>
                                        <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{product.unitOfMeasure}</p>
                                    </div>
                                )}
                                {product.intendedUse && (
                                    <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                                        <p className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">Intended Use</p>
                                        <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{product.intendedUse}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="flex items-center gap-4">
                            {/* Quantity */}
                            <div className="flex items-center rounded-xl border border-zinc-200 dark:border-zinc-700">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="flex h-12 w-12 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                    </svg>
                                </button>
                                <span className="w-12 text-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="flex h-12 w-12 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={handleAddToCart}
                                disabled={product.quantity === 0}
                                className="flex-1 rounded-xl bg-emerald-600 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:shadow-none dark:disabled:bg-zinc-700"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Variants Section */}
                {product.variants && product.variants.length > 0 && (
                    <div className="mt-12">
                        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                            Available Variants
                        </h2>
                        <VariantSelector variants={product.variants} />
                    </div>
                )}

                {/* Specifications & Packaging Grid */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {/* Specifications */}
                    {product.specifications && (
                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                Technical Specifications
                            </h2>
                            <SpecificationTable specifications={product.specifications} />
                        </div>
                    )}

                    {/* Packaging */}
                    {product.packaging && (
                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                Packaging Details
                            </h2>
                            <PackagingInfo packaging={product.packaging} />
                        </div>
                    )}
                </div>

                {/* Additional Info Section */}
                {product.additionalInfo && (
                    <div className="mt-12">
                        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                            Additional Information
                        </h2>
                        <AdditionalInfo additionalInfo={product.additionalInfo} />
                    </div>
                )}
            </div>

            {/* API Status Footer */}
            <div className="mt-12 border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span>Product loaded from API</span>
                        </div>
                        <div className="font-mono text-emerald-600 dark:text-emerald-400">
                            GET /api/products/{resolvedParams.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
