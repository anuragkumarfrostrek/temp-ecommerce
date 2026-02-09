'use client';

import { useState } from 'react';

interface Variant {
    variantId: string;
    variantName: string;
    variantType: string;
    variantValue: string;
    variantSKU: string;
    variantStatus: 'active' | 'inactive' | 'discontinued' | string;
}

interface VariantSelectorProps {
    variants: Variant[];
    onSelect?: (variant: Variant) => void;
}

export function VariantSelector({ variants, onSelect }: VariantSelectorProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Group variants by type
    const groupedVariants = variants.reduce((acc, variant) => {
        const type = variant.variantType || 'Other';
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(variant);
        return acc;
    }, {} as Record<string, Variant[]>);

    const handleSelect = (variant: Variant) => {
        setSelectedId(variant.variantId);
        onSelect?.(variant);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400';
            case 'inactive':
                return 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400';
            case 'discontinued':
                return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400';
            default:
                return 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400';
        }
    };

    return (
        <div className="space-y-6">
            {Object.entries(groupedVariants).map(([type, typeVariants]) => (
                <div key={type}>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {type}
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {typeVariants.map((variant) => (
                            <button
                                key={variant.variantId}
                                onClick={() => handleSelect(variant)}
                                disabled={variant.variantStatus === 'discontinued'}
                                className={`relative rounded-xl border p-4 text-left transition-all ${selectedId === variant.variantId
                                        ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/30 dark:border-emerald-500 dark:bg-emerald-950/30'
                                        : variant.variantStatus === 'discontinued'
                                            ? 'cursor-not-allowed border-zinc-200 bg-zinc-50 opacity-50 dark:border-zinc-800 dark:bg-zinc-900'
                                            : 'border-zinc-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-700'
                                    }`}
                            >
                                {/* Status Badge */}
                                <span className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-xs font-medium ${getStatusColor(variant.variantStatus)}`}>
                                    {variant.variantStatus}
                                </span>

                                {/* Variant Info */}
                                <h5 className="pr-16 font-semibold text-zinc-900 dark:text-zinc-100">
                                    {variant.variantName}
                                </h5>
                                <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                                    {variant.variantValue}
                                </p>
                                <p className="mt-2 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                                    SKU: {variant.variantSKU}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            {variants.length === 0 && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400">No variants available</p>
            )}
        </div>
    );
}
