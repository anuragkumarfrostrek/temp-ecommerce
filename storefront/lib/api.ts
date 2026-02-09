// API Base URL - Update this to match your backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Types for API responses
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    count?: number;
    message?: string;
    error?: string;
}

// Product type matching backend + full schema for future expansion
export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    createdAt?: string;
    updatedAt?: string;

    // Extended fields (for full schema support)
    productId?: string;
    sku?: string;
    brand?: string;
    subCategory?: string;
    unitOfMeasure?: string;
    intendedUse?: string;

    specifications?: {
        material?: string;
        dimensions?: string;
        weight?: string;
        color?: string;
        capacity?: string;
        grade?: string;
        shelfLife?: string;
        countryOfOrigin?: string;
    };

    packaging?: {
        packagingType?: string;
        packSize?: string;
        netQuantity?: string;
        grossWeight?: string;
        packagingMaterial?: string;
        cartonSize?: string;
        unitsPerCarton?: number;
        barcode?: string;
    };

    variants?: Array<{
        variantId: string;
        variantName: string;
        variantType: string;
        variantValue: string;
        variantSKU: string;
        variantStatus: 'active' | 'inactive' | 'discontinued';
    }>;

    additionalInfo?: {
        manufacturerName?: string;
        manufacturerAddress?: string;
        regulatoryDetails?: string;
        storageInstructions?: string;
        handlingInstructions?: string;
        warranty?: string;
        safetyWarnings?: string;
        notes?: string;
    };

    digitalAssets?: {
        primaryImage?: string;
        secondaryImages?: string[];
        packagingImage?: string;
        labelImage?: string;
        datasheet?: string;
        certificates?: string[];
        videoUrl?: string;
    };
}

// Cart types
export interface CartItem {
    product: Product;
    quantity: number;
    selectedVariant?: string;
}

// Fetch wrapper with error handling
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }

        return data;
    } catch (error) {
        throw error instanceof Error ? error : new Error('Unknown error occurred');
    }
}

// Product API functions
export async function getProducts(): Promise<Product[]> {
    const response = await fetchApi<Product[]>('/products');
    return response.data;
}

export async function getProductById(id: string): Promise<Product> {
    const response = await fetchApi<Product>(`/products/${id}`);
    return response.data;
}

export async function createProduct(product: Partial<Product>): Promise<Product> {
    const response = await fetchApi<Product>('/products', {
        method: 'POST',
        body: JSON.stringify(product),
    });
    return response.data;
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<Product> {
    const response = await fetchApi<Product>(`/products/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(product),
    });
    return response.data;
}

export async function deleteProduct(id: string): Promise<void> {
    await fetchApi(`/products/${id}`, {
        method: 'DELETE',
    });
}

// Cart functions (localStorage-based for now)
const CART_KEY = 'wine-store-cart';

export function getCart(): CartItem[] {
    if (typeof window === 'undefined') return [];
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

export function addToCart(product: Product, quantity: number = 1, selectedVariant?: string): CartItem[] {
    const cart = getCart();
    const existingIndex = cart.findIndex(
        (item) => item.product._id === product._id && item.selectedVariant === selectedVariant
    );

    if (existingIndex >= 0) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ product, quantity, selectedVariant });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    return cart;
}

export function updateCartQuantity(productId: string, quantity: number, selectedVariant?: string): CartItem[] {
    const cart = getCart();
    const index = cart.findIndex(
        (item) => item.product._id === productId && item.selectedVariant === selectedVariant
    );

    if (index >= 0) {
        if (quantity <= 0) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = quantity;
        }
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    return cart;
}

export function removeFromCart(productId: string, selectedVariant?: string): CartItem[] {
    const cart = getCart();
    const filteredCart = cart.filter(
        (item) => !(item.product._id === productId && item.selectedVariant === selectedVariant)
    );
    localStorage.setItem(CART_KEY, JSON.stringify(filteredCart));
    return filteredCart;
}

export function clearCart(): void {
    localStorage.removeItem(CART_KEY);
}

export function getCartTotal(cart: CartItem[]): number {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export function getCartCount(cart: CartItem[]): number {
    return cart.reduce((count, item) => count + item.quantity, 0);
}
