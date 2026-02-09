'use client';

import { useState, useEffect, useCallback } from 'react';
import { Product, UseProductsReturn } from '@/types/product';
import { mockProducts, delay } from '@/data/mockProducts';

// Simulated API delay in milliseconds
const API_DELAY = 800;

/**
 * Custom hook to fetch all products
 * Returns { data, loading, error, refetch }
 * 
 * Usage:
 * const { data, loading, error, refetch } = useProducts();
 * 
 * To replace with real API later, simply change the fetchProducts function
 * to call your actual API endpoint.
 */
export function useProducts(): UseProductsReturn {
    const [data, setData] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            // Simulate API call with delay
            await delay(API_DELAY);

            // TODO: Replace with actual API call
            // const response = await fetch('/api/products');
            // const result = await response.json();
            // setData(result.data);

            // Using mock data for now
            setData(mockProducts);
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
