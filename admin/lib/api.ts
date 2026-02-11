/**
 * Admin API Client
 * Backend: http://localhost:5000
 * Response format: { success: boolean, message: string, data: T }
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface ApiResponse<T = unknown> {
    success: boolean;
    message?: string;
    data?: T;
}

export interface Product {
    product_id: string;
    sku: string;
    product_name: string;
    brand?: string;
    category?: string;
    sub_category?: string;
    description?: string;
    unit_of_measure?: string;
    intended_use?: string;
    price?: number;
    quantity?: number;
    images?: string[];
    created_at?: string;
    updated_at?: string;
}

/* ─── Products ─── */

export async function getProducts(): Promise<Product[]> {
    try {
        const res = await fetch(`${API_URL}/api/products`);
        const json: ApiResponse<Product[]> = await res.json();
        return json.success && json.data ? json.data : [];
    } catch (error) {
        console.error('[Admin API] Failed to fetch products:', error);
        return [];
    }
}

export async function getProduct(id: string): Promise<Product | null> {
    try {
        const res = await fetch(`${API_URL}/api/products/${id}`);
        const json: ApiResponse<Product> = await res.json();
        return json.success && json.data ? json.data : null;
    } catch (error) {
        console.error('[Admin API] Failed to fetch product:', error);
        return null;
    }
}

export async function createProduct(product: Partial<Product>): Promise<{ success: boolean; product?: Product; error?: string }> {
    try {
        const res = await fetch(`${API_URL}/api/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
        const json: ApiResponse<Product> = await res.json();
        if (json.success && json.data) {
            return { success: true, product: json.data };
        }
        return { success: false, error: json.message || 'Failed to create product' };
    } catch (error) {
        console.error('[Admin API] Failed to create product:', error);
        return { success: false, error: 'Network error - is backend running?' };
    }
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<{ success: boolean; error?: string }> {
    try {
        const res = await fetch(`${API_URL}/api/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
        const json: ApiResponse = await res.json();
        return { success: json.success, error: json.message };
    } catch (error) {
        console.error('[Admin API] Failed to update product:', error);
        return { success: false, error: 'Network error' };
    }
}

export async function deleteProduct(id: string): Promise<boolean> {
    try {
        const res = await fetch(`${API_URL}/api/products/${id}`, { method: 'DELETE' });
        const json: ApiResponse = await res.json();
        return json.success;
    } catch (error) {
        console.error('[Admin API] Failed to delete product:', error);
        return false;
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

/* ─── Mock Orders (since backend has no orders API) ─── */

export interface Order {
    id: string;
    customer_name: string;
    customer_email: string;
    items: { product_name: string; quantity: number; price: number }[];
    total: number;
    status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
    created_at: string;
}

export function getMockOrders(): Order[] {
    return [
        {
            id: 'ORD-001',
            customer_name: 'Nguyễn Minh Anh',
            customer_email: 'minhanh@email.com',
            items: [{ product_name: 'VinoViet Classic Red', quantity: 2, price: 450000 }],
            total: 900000,
            status: 'confirmed',
            created_at: '2026-02-10T10:30:00Z',
        },
        {
            id: 'ORD-002',
            customer_name: 'Trần Văn Hùng',
            customer_email: 'vanhung@email.com',
            items: [
                { product_name: 'Highland White', quantity: 1, price: 380000 },
                { product_name: 'Sparkling Rosé', quantity: 3, price: 520000 },
            ],
            total: 1940000,
            status: 'shipped',
            created_at: '2026-02-09T14:15:00Z',
        },
        {
            id: 'ORD-003',
            customer_name: 'Phạm Thị Lan',
            customer_email: 'thilan@email.com',
            items: [{ product_name: 'Reserve Cabernet', quantity: 6, price: 750000 }],
            total: 4500000,
            status: 'pending',
            created_at: '2026-02-11T08:00:00Z',
        },
        {
            id: 'ORD-004',
            customer_name: 'Lê Hoàng Nam',
            customer_email: 'hoangnam@email.com',
            items: [{ product_name: 'Dalat Merlot', quantity: 1, price: 650000 }],
            total: 650000,
            status: 'delivered',
            created_at: '2026-02-07T11:45:00Z',
        },
    ];
}

/* ─── Mock Categories ─── */

export interface Category {
    id: string;
    name: string;
    description: string;
    product_count: number;
}

export function getMockCategories(): Category[] {
    return [
        { id: 'cat-1', name: 'Red Wine', description: 'Full-bodied red wines', product_count: 12 },
        { id: 'cat-2', name: 'White Wine', description: 'Crisp and refreshing whites', product_count: 8 },
        { id: 'cat-3', name: 'Rosé', description: 'Elegant rosé selections', product_count: 5 },
        { id: 'cat-4', name: 'Sparkling', description: 'Celebratory bubbles', product_count: 4 },
        { id: 'cat-5', name: 'Dessert Wine', description: 'Sweet and complex', product_count: 3 },
        { id: 'cat-6', name: 'Fortified', description: 'Port and sherry styles', product_count: 2 },
    ];
}
