'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CartItem, Product, getCart, addToCart as addToCartApi, removeFromCart as removeFromCartApi, updateCartQuantity as updateCartQuantityApi, clearCart as clearCartApi, getCartTotal, getCartCount } from '@/lib/api';

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    addItem: (product: Product, quantity?: number, selectedVariant?: string) => void;
    removeItem: (productId: string, selectedVariant?: string) => void;
    updateQuantity: (productId: string, quantity: number, selectedVariant?: string) => void;
    clearAll: () => void;
    total: number;
    count: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        setItems(getCart());
    }, []);

    const openCart = useCallback(() => setIsOpen(true), []);
    const closeCart = useCallback(() => setIsOpen(false), []);
    const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

    const addItem = useCallback((product: Product, quantity = 1, selectedVariant?: string) => {
        const newItems = addToCartApi(product, quantity, selectedVariant);
        setItems(newItems);
        setIsOpen(true); // Open cart when adding item
    }, []);

    const removeItem = useCallback((productId: string, selectedVariant?: string) => {
        const newItems = removeFromCartApi(productId, selectedVariant);
        setItems(newItems);
    }, []);

    const updateQuantity = useCallback((productId: string, quantity: number, selectedVariant?: string) => {
        const newItems = updateCartQuantityApi(productId, quantity, selectedVariant);
        setItems(newItems);
    }, []);

    const clearAll = useCallback(() => {
        clearCartApi();
        setItems([]);
    }, []);

    const total = getCartTotal(items);
    const count = getCartCount(items);

    return (
        <CartContext.Provider
            value={{
                items,
                isOpen,
                openCart,
                closeCart,
                toggleCart,
                addItem,
                removeItem,
                updateQuantity,
                clearAll,
                total,
                count,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
