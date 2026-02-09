'use client';

import { useState, useEffect, useCallback } from 'react';
import { Product, getProducts } from '@/lib/api';

interface UseProductsReturn {
    data: Product[] | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}

/**
 * Custom hook to fetch all products from the API
 * Returns { data, loading, error, refetch }
 */
export function useProducts(): UseProductsReturn {
    const [data, setData] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const products = await getProducts();
            setData(products);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to fetch products'));
            setData(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return {
        data,
        loading,
        error,
        refetch: fetchProducts,
    };
}
