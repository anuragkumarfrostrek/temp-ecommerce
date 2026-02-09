'use client';

import { useState } from 'react';
import { ProductVariant } from '@/types/product';

interface VariantSelectorProps {
    variants: ProductVariant[];
    onVariantSelect?: (variant: ProductVariant) => void;
}

export function VariantSelector({ variants, onVariantSelect }: VariantSelectorProps) {
    const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
        variants.find((v) => v.variantStatus === 'active')?.variantId || null
    );

    const handleSelect = (variant: ProductVariant) => {
        if (variant.variantStatus === 'discontinued') return;
        setSelectedVariantId(variant.variantId);
        onVariantSelect?.(variant);
    };

    // Group variants by type
    const variantsByType = variants.reduce((acc, variant) => {
        const type = variant.variantType;
        if (!acc[type]) acc[type] = [];
        acc[type].push(variant);
        return acc;
    }, {} as Record<string, ProductVariant[]>);

    const getStatusColor = (status: ProductVariant['variantStatus']) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'inactive':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'discontinued':
                return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
            default:
                return 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400';
        }
    };

    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Variants ({variants.length})
            </h3>

            {Object.entries(variantsByType).map(([type, typeVariants]) => (
                <div key={type} className="mb-6 last:mb-0">
                    <h4 className="mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">{type}</h4>
                    <div className="space-y-2">
                        {typeVariants.map((variant) => (
                            <button
                                key={variant.variantId}
                                onClick={() => handleSelect(variant)}
                                disabled={variant.variantStatus === 'discontinued'}
                                className={`w-full rounded-lg border p-4 text-left transition-all ${selectedVariantId === variant.variantId
                                        ? 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200 dark:border-indigo-600 dark:bg-indigo-950/30 dark:ring-indigo-800'
                                        : variant.variantStatus === 'discontinued'
                                            ? 'cursor-not-allowed border-zinc-200 bg-zinc-50 opacity-60 dark:border-zinc-800 dark:bg-zinc-900'
                                            : 'border-zinc-200 bg-white hover:border-indigo-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-indigo-700 dark:hover:bg-zinc-700'
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="font-medium text-zinc-900 dark:text-zinc-100">{variant.variantName}</p>
                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                            Value: <span className="font-medium">{variant.variantValue}</span>
                                        </p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-500">
                                            SKU: {variant.variantSKU}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(variant.variantStatus)}`}>
                                            {variant.variantStatus}
                                        </span>
                                        <span className="text-xs text-zinc-400 dark:text-zinc-500">
                                            ID: {variant.variantId}
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            {/* Selected Variant Summary */}
            {selectedVariantId && (
                <div className="mt-4 rounded-lg bg-indigo-50 p-3 dark:bg-indigo-950/30">
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">
                        <span className="font-medium">Selected:</span>{' '}
                        {variants.find((v) => v.variantId === selectedVariantId)?.variantName}
                    </p>
                </div>
            )}
        </div>
    );
}
