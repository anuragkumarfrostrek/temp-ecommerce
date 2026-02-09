'use client';

import { useState, useEffect, useCallback } from 'react';
import { Product, getProductById } from '@/lib/api';

interface UseProductReturn {
    data: Product | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}

/**
 * Custom hook to fetch a single product by ID from the API
 * Returns { data, loading, error, refetch }
 */
export function useProduct(productId: string): UseProductReturn {
    const [data, setData] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchProduct = useCallback(async () => {
        if (!productId) {
            setError(new Error('Product ID is required'));
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const product = await getProductById(productId);
            setData(product);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to fetch product'));
            setData(null);
        } finally {
            setLoading(false);
        }
    }, [productId]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    return {
        data,
        loading,
        error,
        refetch: fetchProduct,
    };
}
