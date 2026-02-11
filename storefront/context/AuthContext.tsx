'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Order, ShippingAddress } from '@/types';

interface AuthContextType {
    user: UserInfo | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    orders: Order[];
    addOrder: (order: Order) => void;
    addresses: ShippingAddress[];
    addAddress: (address: ShippingAddress) => void;
}

interface UserInfo {
    id: string;
    name: string;
    email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const USER_KEY = 'ksp_wines_user';
const ORDERS_KEY = 'ksp_wines_orders';
const ADDRESSES_KEY = 'ksp_wines_addresses';

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState<Order[]>([]);
    const [addresses, setAddresses] = useState<ShippingAddress[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(USER_KEY);
            if (stored) setUser(JSON.parse(stored));
            const storedOrders = localStorage.getItem(ORDERS_KEY);
            if (storedOrders) setOrders(JSON.parse(storedOrders));
            const storedAddresses = localStorage.getItem(ADDRESSES_KEY);
            if (storedAddresses) setAddresses(JSON.parse(storedAddresses));
        }
        setIsLoading(false);
    }, []);

    /* Since backend has no auth endpoints, simulate login/register locally */
    const login = useCallback(async (email: string, password: string) => {
        /* Attempt real API first, fallback to mock */
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (res.ok) {
                const json = await res.json();
                if (json.data?.user) {
                    setUser(json.data.user);
                    localStorage.setItem(USER_KEY, JSON.stringify(json.data.user));
                    return { success: true };
                }
            }
        } catch {
            /* Backend auth not available, use mock */
        }

        // Mock login
        if (password.length >= 3) {
            const mockUser: UserInfo = {
                id: `user-${Date.now()}`,
                name: email.split('@')[0],
                email,
            };
            setUser(mockUser);
            localStorage.setItem(USER_KEY, JSON.stringify(mockUser));
            return { success: true };
        }
        return { success: false, error: 'Invalid credentials' };
    }, []);

    const register = useCallback(async (name: string, email: string, password: string) => {
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
            const res = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            if (res.ok) {
                const json = await res.json();
                if (json.data?.user) {
                    setUser(json.data.user);
                    localStorage.setItem(USER_KEY, JSON.stringify(json.data.user));
                    return { success: true };
                }
            }
        } catch { /* fallback to mock */ }

        if (name && email && password.length >= 3) {
            const mockUser: UserInfo = { id: `user-${Date.now()}`, name, email };
            setUser(mockUser);
            localStorage.setItem(USER_KEY, JSON.stringify(mockUser));
            return { success: true };
        }
        return { success: false, error: 'Please fill all fields correctly' };
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem(USER_KEY);
    }, []);

    const addOrder = useCallback((order: Order) => {
        setOrders(prev => {
            const updated = [order, ...prev];
            localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);

    const addAddress = useCallback((address: ShippingAddress) => {
        setAddresses(prev => {
            const updated = [...prev, address];
            localStorage.setItem(ADDRESSES_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);

    return (
        <AuthContext.Provider value={{
            user, isAuthenticated: !!user, isLoading, login, register, logout,
            orders, addOrder, addresses, addAddress,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}
