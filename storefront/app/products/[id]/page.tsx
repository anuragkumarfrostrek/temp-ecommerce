'use client';

import { use } from 'react';
import Link from 'next/link';
import { useProduct } from '@/hooks/useProduct';
import { LoadingState } from '@/components/ui/LoadingState';
import { ErrorState } from '@/components/ui/ErrorState';
import { ImageGallery } from '@/components/products/ImageGallery';
import { ProductDetailsSection } from '@/components/products/ProductDetailsSection';
import { VariantSelector } from '@/components/products/VariantSelector';
import { SpecificationTable } from '@/components/products/SpecificationTable';
import { PackagingInfo } from '@/components/products/PackagingInfo';
import { AdditionalInfo } from '@/components/products/AdditionalInfo';

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const resolvedParams = use(params);
    const { data: product, loading, error, refetch } = useProduct(resolvedParams.id);

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
                            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Products
                        </Link>
                    </div>
                    <ErrorState
                        title="Product not found"
                        message={error.message}
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
                        <Link
                            href="/"
                            className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                        >
                            Home
                        </Link>
                        <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <Link
                            href="/products"
                            className="text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                        >
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
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Top Section: Image Gallery + Product Details */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Image Gallery */}
                    <div>
                        <ImageGallery assets={product.digitalAssets} productName={product.name} />
                    </div>

                    {/* Product Details Section */}
                    <div>
                        <ProductDetailsSection product={product} />
                    </div>
                </div>

                {/* Variants Section */}
                {product.variants.length > 0 && (
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
                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                            Technical Specifications
                        </h2>
                        <SpecificationTable specifications={product.specifications} />
                    </div>

                    {/* Packaging */}
                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                            Packaging Details
                        </h2>
                        <PackagingInfo packaging={product.packaging} />
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-12">
                    <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        Additional Information
                    </h2>
                    <AdditionalInfo additionalInfo={product.additionalInfo} />
                </div>
            </div>

            {/* API Status Footer */}
            <div className="mt-12 border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-400" />
                            <span>Product loaded from mock API</span>
                        </div>
                        <div className="font-mono">
                            Hook: useProduct(&quot;{resolvedParams.id}&quot;)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
