/**
 * Storefront API Client
 * Consumes existing backend at localhost:5000
 * Backend response format: { success: boolean, message: string, data: T }
 */

import { Product, ProductWithDetails, ApiResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

/* ─── Products ─── */

export async function getProducts(params?: {
    limit?: number;
    offset?: number;
    category?: string;
}): Promise<Product[]> {
    try {
        const searchParams = new URLSearchParams();
        if (params?.limit) searchParams.set('limit', String(params.limit));
        if (params?.offset) searchParams.set('offset', String(params.offset));
        if (params?.category) searchParams.set('category', params.category);

        const url = `${API_URL}/api/products${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
        const res = await fetch(url);
        const json: ApiResponse<Product[]> = await res.json();
        return json.success && json.data ? json.data : [];
    } catch (error) {
        console.error('[API] Failed to fetch products:', error);
        return [];
    }
}

export async function getProduct(id: string): Promise<Product | null> {
    try {
        const res = await fetch(`${API_URL}/api/products/${id}`);
        const json: ApiResponse<Product> = await res.json();
        return json.success && json.data ? json.data : null;
    } catch (error) {
        console.error('[API] Failed to fetch product:', error);
        return null;
    }
}

export async function getProductDetails(id: string): Promise<ProductWithDetails | null> {
    try {
        const res = await fetch(`${API_URL}/api/products/${id}/details`);
        const json: ApiResponse<ProductWithDetails> = await res.json();
        return json.success && json.data ? json.data : null;
    } catch (error) {
        console.error('[API] Failed to fetch product details:', error);
        return null;
    }
}

export async function searchProducts(query: string): Promise<Product[]> {
    try {
        const res = await fetch(`${API_URL}/api/products/search?q=${encodeURIComponent(query)}`);
        const json: ApiResponse<Product[]> = await res.json();
        return json.success && json.data ? json.data : [];
    } catch (error) {
        console.error('[API] Failed to search products:', error);
        return [];
    }
}

export async function checkApiHealth(): Promise<boolean> {
    try {
        const res = await fetch(`${API_URL}/api/products?limit=1`);
        return res.ok;
    } catch {
        return false;
    }
}
