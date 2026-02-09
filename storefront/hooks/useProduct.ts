'use client';

import { useState, useEffect, useCallback } from 'react';
import { Product, UseProductReturn } from '@/types/product';
import { getProductById, delay } from '@/data/mockProducts';

// Simulated API delay in milliseconds
const API_DELAY = 600;

/**
 * Custom hook to fetch a single product by ID
 * Returns { data, loading, error, refetch }
 * 
 * Usage:
 * const { data, loading, error, refetch } = useProduct('PROD-001');
 * 
 * To replace with real API later, simply change the fetchProduct function
 * to call your actual API endpoint.
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

            // Simulate API call with delay
            await delay(API_DELAY);

            // TODO: Replace with actual API call
            // const response = await fetch(`/api/products/${productId}`);
            // const result = await response.json();
            // setData(result.data);

            // Using mock data for now
            const product = getProductById(productId);

            if (!product) {
                throw new Error(`Product with ID "${productId}" not found`);
            }

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
