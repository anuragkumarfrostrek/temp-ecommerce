'use client';

import { useCart } from '@/context/CartContext';

export function CartButton() {
    const { toggleCart, count } = useCart();

    return (
        <button
            onClick={toggleCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition-all hover:border-emerald-300 hover:text-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:text-emerald-400"
        >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>

            {/* Badge */}
            {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white shadow-lg shadow-emerald-500/50">
                    {count > 99 ? '99+' : count}
                </span>
            )}
        </button>
    );
}
